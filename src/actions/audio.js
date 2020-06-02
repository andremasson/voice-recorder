import {PLAY_AUDIO, STOP_AUDIO} from "./types";

export const playAudio = (idAudio, name) => async (dispatch) => {
    dispatch({
        type: PLAY_AUDIO,
        payload: {idAudio, name},
    });
};

export const stopAudio = () => async (dispatch) => {
    dispatch({type: STOP_AUDIO});
};
