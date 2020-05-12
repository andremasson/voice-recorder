import React, {useEffect, useState} from "react";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import {addRecord} from "../actions/record";

const NewRecording = ({addRecord, cancelAction}) => {
    const [timer, setTimer] = useState(0);
    const [splitTimer, setSplitTimer] = useState({
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    });
    const [isRecording, setRecording] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isRecording) {
            interval = setInterval(() => {
                setTimer((timer) => timer + 100);
                const currentDate = new Date(timer);
                setSplitTimer({
                    minutes: currentDate.getMinutes(),
                    seconds: currentDate.getSeconds(),
                    milliseconds: currentDate.getMilliseconds(),
                });
            }, 100);
        } else if (!isRecording && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });
    const saveRecording = () => {
        const record = {
            id: 0,
            name: "Novo rec " + new Date().getSeconds().toString(),
            timestamp: 0,
            recLength: `${splitTimer.minutes}:${splitTimer.seconds}.${
                splitTimer.milliseconds / 100
            }`,
        };
        addRecord(record);
    };
    const stop = () => {
        setRecording(false);
        saveRecording();
        cancelAction();
    };
    return (
        <div className={`overlay-visible`}>
            <div className="card dialog">
                <div className="title">Gravando...</div>
                <div className="message">
                    {splitTimer.minutes}:{splitTimer.seconds}.
                    {splitTimer.milliseconds / 100}
                </div>
                <div className="actions">
                    <div className="icon-button" onClick={() => stop()}>
                        <i className="material-icons">stop</i>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewRecording.prototype = {
    addRecord: PropTypes.func.isRequired,
    cancelAction: PropTypes.func.isRequired,
};

export default connect(null, {addRecord})(NewRecording);
