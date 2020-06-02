import {OPEN_MENU, CLOSE_MENU} from "../actions/types";

const initialState = {
    menuStatus: "close",
};

export default function (state = initialState, action) {
    const {type} = action;
    switch (type) {
        case OPEN_MENU:
            return {
                ...state,
                menuStatus: "open",
            };
        case CLOSE_MENU:
            return {
                ...state,
                menuStatus: "close",
            };
        default:
            return state;
    }
}
