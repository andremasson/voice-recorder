import React from "react";
import PropTypes from "prop-types";
import RecordElement from "./RecordElement";

const RecordsView = ({recordings}) => {
    return (
        <div className="records-list">
            {" "}
            {recordings.map((it) => (
                <RecordElement
                    key={it}
                    record={{
                        id: it,
                        name: "rec_1",
                        timestamp: "2020-03-20",
                        recLength: "2:30",
                    }}>
                    {" "}
                </RecordElement>
            ))}{" "}
        </div>
    );
};

RecordsView.propTypes = {
    recordings: PropTypes.array.isRequired,
};

export default RecordsView;
