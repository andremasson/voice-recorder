import {OPEN_MENU, CLOSE_MENU} from "./types";

export const openMenu = () => async (dispatch) => {
    dispatch({
        type: OPEN_MENU,
    });
};

export const closeMenu = () => async (dispatch) => {
    dispatch({
        type: CLOSE_MENU,
    });
};
