import React, {useEffect, useState} from "react";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import {addRecord} from "../actions/record";
import AudioLib from "../utils/AudioLib";
import {v4 as uuidv4} from "uuid";

const NewRecording = ({addRecord, cancelAction}) => {
    const [uuid, setUuid] = useState(null);
    const [timer, setTimer] = useState(0);
    const [isRecording, setRecording] = useState(false);
    const [splitTimer, setSplitTimer] = useState({
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    });

    const recordBegin = () => {
        setRecording(true);
    };

    useEffect(() => {
        if (uuid === null) {
            const id = uuidv4();
            setUuid(id);
            AudioLib.StartRecording(id, () => recordBegin());
        }
        let intervalHandler = setInterval(() => {
            if (isRecording) {
                setTimer((timer) => timer + 100);
                const currentDate = new Date(timer);
                setSplitTimer({
                    minutes: currentDate.getMinutes(),
                    seconds: currentDate.getSeconds(),
                    milliseconds: currentDate.getMilliseconds(),
                });
            }
        }, 100);
        return () => clearInterval(intervalHandler);
    }, [uuid, timer, isRecording, setUuid]);
    const saveRecording = () => {
        const record = {
            id: uuid,
            name: "Novo rec " + new Date().getSeconds().toString(),
            timestamp: 0,
            recLength: `${splitTimer.minutes}:${splitTimer.seconds}.${
                splitTimer.milliseconds / 100
            }`,
        };
        AudioLib.StopRecording();
        addRecord(record);
    };
    const stop = () => {
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
