import React from "react";
import PropTypes from "prop-types";
import RecordElement from "./RecordElement";
import {connect} from "react-redux";
import Loading from "./Loading";

const RecordsView = ({record: {records, loading}}) => {
    return loading ? (
        <Loading />
    ) : (
        <div className="records-list">
            {records.map((it) => (
                <RecordElement
                    key={it._id}
                    record={{
                        name: it.name,
                        timestamp: it.timestamp,
                        recLength: it.recLength,
                        id: it._id,
                    }}></RecordElement>
            ))}
        </div>
    );
};

RecordsView.propTypes = {
    recordings: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    record: state.record,
});

export default connect(mapStateToProps)(RecordsView);
