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
            <div id="audio"></div>
            {records &&
                records.length > 0 &&
                records.map((record) => (
                    <RecordElement
                        key={record.id}
                        record={{
                            name: record.name,
                            timestamp: record.timestamp,
                            recLength: record.recLength,
                            id: record.id,
                        }}></RecordElement>
                ))}
        </div>
    );
};

RecordsView.propTypes = {
    recordings: PropTypes.array.isRequired,
};

const mapStateToProps = ({record}) => ({
    record:
        record.query === undefined || record.query === ""
            ? record
            : {
                  ...record,
                  records: record.records.filter(
                      (rec) =>
                          rec.name
                              .toUpperCase()
                              .indexOf(record.query.toUpperCase()) >= 0
                  ),
              },
});

export default connect(mapStateToProps)(RecordsView);
