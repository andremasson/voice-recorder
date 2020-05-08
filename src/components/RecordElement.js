import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteRecord, saveRecord} from "../actions/record";

const RecordElement = ({record, deleteRecord, saveRecord}) => {
    const [name, setName] = useState(record.name);
    const [editing, setEditing] = useState(false);
    const deleteButton = (id) => {
        deleteRecord(id);
    };
    const startEditing = () => {
        setEditing(true);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
        saveRecord({...record, name});
    };
    return (
        <div className="record-element card">
            <div className="card-head">
                {editing ? (
                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            className="cardEdit"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </form>
                ) : (
                    <div onClick={() => startEditing()}>{record.name}</div>
                )}
            </div>
            <div className="card-datetime">{record.timestamp}</div>
            <div className="card-length">{record.recLength}</div>
            <div className="actions">
                <div className="icon-button">
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
