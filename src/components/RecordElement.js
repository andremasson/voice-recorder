import React from "react";
import PropTypes from "prop-types";

const RecordElement = ({ record }) => {
  return (
    <div className="record-element">
      Elemento {record.id}
      Nome: {record.name}
      Data: {record.timestamp}
    </div>
  );
};

RecordElement.propTypes = {
  record: PropTypes.object.isRequired,
};

export default RecordElement;
