import {combineReducers} from "redux";
import record from "./record";
import audio from "./audio";

export default combineReducers({
    record,
    audio,
});
