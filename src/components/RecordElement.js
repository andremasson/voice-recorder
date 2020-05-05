import React from "react";
import PropTypes from "prop-types";

const RecordElement = ({record}) => {
    return (
        <div className="record-element card">
            <div className="card-head">{record.name}</div>
            <div className="card-datetime">{record.timestamp}</div>
            <div className="card-length">{record.recLength}</div>
            <div className="actions">
                <div className="icon-button">
                    <i className="material-icons">play_arrow</i>
                </div>
                <div className="icon-button">
                    <i className="material-icons">delete</i>
                </div>
            </div>
        </div>
    );
};

RecordElement.propTypes = {
    record: PropTypes.object.isRequired,
};

export default RecordElement;
