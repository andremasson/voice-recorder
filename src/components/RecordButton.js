import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addRecord} from "../actions/record";

const RecordButton = ({addRecord}) => {
    const AddButton = () => {
        const record = {
            id: 0,
            name: "Novo rec " + new Date().getSeconds().toString(),
            timestamp: 0,
            recLength: "1:50",
        };
        addRecord(record);
    };
    return (
        <div className="fab" onClick={() => AddButton()}>
            <div className="icon-button">
                <i className="material-icons"> mic </i>{" "}
            </div>{" "}
        </div>
    );
};

RecordButton.propTypes = {
    addRecord: PropTypes.func.isRequired,
};

export default connect(null, {addRecord})(RecordButton);
