import { initialState } from '../../initialState';

const ticketsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_SEARCH_ID':
            return {
                ...state,
                searchId: action.payload,
            };
        case 'UPDATE_SORTING':
            return {
                ...state,
                filtersButton: action.payload,
            };
        case 'UPDATE_TRANSFERS':
            return {
                ...state,
                transfersItems: action.payload,
            };
        case 'TICKETS_LOAD':
            return {
                ...state,
                tickets: [...state.tickets, ...action.tickets],
            };
        case 'SHOW_MORE_TICKETS':
            return {
                ...state,
                viewTickets: state.viewTickets + action.payload
            };
        default:
            return state;
    }
};

export default ticketsReducer;