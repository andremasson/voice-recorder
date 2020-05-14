import {PLAY_AUDIO, STOP_AUDIO} from "./types";

export const playAudio = (idAudio) => async (dispatch) => {
    dispatch({
        type: PLAY_AUDIO,
        payload: idAudio,
    });
};

export const stopAudio = () => async (dispatch) => {
    dispatch({type: STOP_AUDIO});
};
