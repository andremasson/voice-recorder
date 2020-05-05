import { GET_RECORDS, ADD_RECORD, DELETE_RECORD } from "./types";

export const getRecords = () => async(dispatch) => {
    dispatch({
        type: GET_RECORDS,
        payload: { _id: 5, name: "nada" },
    });
};

export const deleteRecord = (id) => async(dispatch) => {
    dispatch({
        type: DELETE_RECORD,
        payload: id,
    });
};