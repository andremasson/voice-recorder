import {combineReducers} from "redux";
import record from "./record";
import audio from "./audio";
import config from "./config";

export default combineReducers({
    record,
    audio,
    config,
});
