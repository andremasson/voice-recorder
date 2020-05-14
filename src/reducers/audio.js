import {PLAY_AUDIO, STOP_AUDIO} from "../actions/types";

const initialState = {
    isPlaying: false,
    error: {},
    idAudio: "",
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case PLAY_AUDIO:
            return {
                ...state,
                isPlaying: true,
                idAudio: payload,
            };
        case STOP_AUDIO:
            return {
                isPlaying: false,
            };
        default:
            return state;
    }
}
