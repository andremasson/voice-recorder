import { GET_RECORDS, ADD_RECORD, DELETE_RECORD } from "../actions/types";

const initialState = {
    records: [
        { _id: 1, name: "rec_1", timestamp: "2020-03-20", recLength: "2:30" },
        { _id: 2, name: "rec_2", timestamp: "2020-03-20", recLength: "1:20" },
        { _id: 3, name: "rec_3", timestamp: "2020-03-20", recLength: "2:11" },
        { _id: 4, name: "rec_4", timestamp: "2020-03-20", recLength: "3:05" },
    ],
    loading: true,
    error: {},
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_RECORDS:
            return {
                ...state,
                records: [...state.records, payload],
                loading: false,
            };
        case DELETE_RECORD:
            return {
                ...state,
                records: state.records.filter((rec) => rec._id !== payload),
                loading: false,
            };
        default:
            return state;
    }
}