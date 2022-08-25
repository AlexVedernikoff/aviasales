import { initialState } from '../../initialState';

const errorReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ERROR_DISPLAY_ON':
            return {
                ...state,
                error: action.text,
            };
        case 'ERROR_DISPLAY_OFF':
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export default errorReducer;