import {
    GET_RECORDS,
    ADD_RECORD,
    DELETE_RECORD,
    SAVE_RECORD,
    UPDATE_QUERY,
} from "../actions/types";

const initialState = {
    records: [],
    loading: true,
    error: {},
    query: "",
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_RECORDS:
            return {
                ...state,
                loading: false,
            };
        case DELETE_RECORD:
            return {
                ...state,
                records: state.records.filter((rec) => rec.id !== payload),
                loading: false,
            };
        case ADD_RECORD:
            return {
                ...state,
                records: [payload, ...state.records],
                loading: false,
            };
        case SAVE_RECORD:
            return {
                ...state,
                records: state.records.map((rec) =>
                    rec.id === payload.id ? {...rec, name: payload.name} : rec
                ),
            };
        case UPDATE_QUERY:
            return {
                ...state,
                query: payload,
            };
        default:
            return state;
    }
}
