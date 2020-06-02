import {PLAY_AUDIO, STOP_AUDIO} from "../actions/types";

const initialState = {
    isPlaying: false,
    error: {},
    idAudio: "",
    name: "",
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case PLAY_AUDIO:
            return {
                ...state,
                isPlaying: true,
                idAudio: payload.idAudio,
                name: payload.name,
            };
        case STOP_AUDIO:
            return {
                isPlaying: false,
            };
        default:
            return state;
    }
}
