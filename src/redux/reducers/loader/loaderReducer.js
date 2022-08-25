import { initialState } from '../../initialState';

const loaderReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOADER_DISPLAY_ON':
            return {
                ...state,
                loading: true,
            };
        case 'LOADER_DISPLAY_OFF':
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default loaderReducer;