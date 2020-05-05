import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteRecord} from "../actions/record";

const RecordElement = ({record, deleteRecord}) => {
    const deleteButton = (id) => {
        deleteRecord(id);
    };
    return (
        <div className="record-element card">
            <div className="card-head">{record.name}</div>
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
};

export default connect(null, {deleteRecord})(RecordElement);
