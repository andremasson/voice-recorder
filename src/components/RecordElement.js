import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteRecord, saveRecord} from "../actions/record";
import moment from "moment";
import "moment/locale/pt-br";
import Dialog from "./Dialog";
import AudioLib from "../utils/AudioLib";

const RecordElement = ({record, deleteRecord, saveRecord}) => {
    const [displayDialog, setDisplayDialog] = useState(false);
    const [name, setName] = useState(record.name);
    const [editing, setEditing] = useState(false);

    const deleteButton = () => {
        setDisplayDialog(true);
    };
    const confirmDeletion = (id) => {
        deleteRecord(id);
        AudioLib.RemoveRecord(id);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
        saveRecord({...record, name});
    };
    const onPlayButton = (id) => {
        AudioLib.Play(id);
    };
    return (
        <div className="record-element card">
            {displayDialog ? (
                <Dialog
                    message={`Excluir permanentemente "${record.name.toUpperCase()}"?`}
                    positiveAction={() => confirmDeletion(record.id)}
                    cancelAction={() => setDisplayDialog(false)}
                />
            ) : (
                ""
            )}
            <div className="card-head">
                {editing ? (
                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            autoFocus
                            className="cardEdit"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={(e) => onSubmit(e)}
                            maxLength={20}
                        />
                    </form>
                ) : (
                    <div onClick={() => setEditing(true)}>
                        <span>{record.name}</span>{" "}
                    </div>
                )}
            </div>
            <div className="card-datetime">
                {moment(record.timestamp).format("L - LT")}
            </div>
            <div className="card-length">{record.recLength}</div>
            <div className="actions">
                <div
                    className="icon-button"
                    onClick={() => onPlayButton(record.id)}>
                    <i className="material-icons">play_arrow</i>
                </div>
                <div
                    className="icon-button"
                    onClick={() => deleteButton(record.id)}>
                    <i className="material-icons">delete</i>
                </div>
            </div>
        </div>
    );
};

RecordElement.propTypes = {
    record: PropTypes.object.isRequired,
    deleteRecord: PropTypes.func.isRequired,
    saveRecord: PropTypes.func.isRequired,
};

export default connect(null, {deleteRecord, saveRecord})(RecordElement);
