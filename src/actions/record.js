import {
    GET_RECORDS,
    ADD_RECORD,
    DELETE_RECORD,
    SAVE_RECORD,
    UPDATE_QUERY,
} from "./types";
import {v4 as uuidv4} from "uuid";

export const getRecords = () => async (dispatch) => {
    dispatch({
        type: GET_RECORDS,
    });
};

export const deleteRecord = (id) => async (dispatch) => {
    dispatch({
        type: DELETE_RECORD,
        payload: id,
    });
};

export const addRecord = (record) => async (dispatch) => {
    const uuid = uuidv4();
    record["id"] = uuid;
    record["timestamp"] = Date.now();
    dispatch({
        type: ADD_RECORD,
        payload: record,
    });
};

export const saveRecord = (record) => async (dispatch) => {
    dispatch({
        type: SAVE_RECORD,
        payload: record,
    });
};

export const updateQuery = (query) => async (dispatch) => {
    dispatch({
        type: UPDATE_QUERY,
        payload: query,
    });
};
