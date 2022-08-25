import axios from 'axios';

import {
    UPDATE_SORTING, UPDATE_TRANSFERS, LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF, SHOW_MORE_TICKETS
} from '../constants';

export const updateSorting = (newSorting) => ({ type: UPDATE_SORTING, payload: newSorting });
export const updateTransfers = (newTransfers) => ({ type: UPDATE_TRANSFERS, payload: newTransfers });
export const loaderDisplayOn = () => ({ type: LOADER_DISPLAY_ON });
export const loaderDisplayOff = () => ({ type: LOADER_DISPLAY_OFF });
export const errorDisplayOn = (text) => ({ type: ERROR_DISPLAY_ON, text });
export const errorDisplayOff = () => ({ type: ERROR_DISPLAY_OFF });
export const showMoreTickets = () => ({ type: SHOW_MORE_TICKETS, payload: 5 });

export const searchId = () => {
    return async dispatch => {
        dispatch(loaderDisplayOn());
        try {
            const searchId = await axios('https://aviasales-test-api.kata.academy/search');
            // console.log('searchId = ');
            // console.log(searchId);
            dispatch(getTickets(searchId));
        } catch (err) {
            dispatch(errorDisplayOn('ERROR! Try again'));
        }
        dispatch(loaderDisplayOff());
    };
};

function getTickets(searchId) {
    return async dispatch => {
        dispatch(loaderDisplayOn());
        try {
            const searchTickets = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId.data.searchId}`);
            if (searchTickets.status === 500) {
                dispatch(getTickets(searchId));
            }
            if (searchTickets.data.stop === false) {
                dispatch({
                    type: 'TICKETS_LOAD',
                    tickets: searchTickets.data.tickets.sort(function (a, b) { return a.price - b.price; }),
                });
                dispatch(getTickets(searchId));
            }
            if (searchTickets.data.stop) {
                dispatch(loaderDisplayOff());
            }
        } catch (err) {
            if (err.response && err.response.status === 500) {
                // console.log("Произошла ошибка")
                // console.log(err)
                dispatch(getTickets(searchId));
            }
            if (err.response && err.response.status !== 500) {
                dispatch(errorDisplayOn('ERROR! Try again'));
            }
            dispatch(loaderDisplayOff());
        };
    };
}
