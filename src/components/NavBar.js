import React from "react";
import {connect} from "react-redux";
import {updateQuery} from "../actions/record";

const NavBar = ({query, updateQuery}) => {
    return (
        <header>
            <div className="title">
                <h3>Gravaudio</h3>{" "}
            </div>{" "}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={query}
                    onChange={(e) => updateQuery(e.target.value)}
                />
            </div>{" "}
            <div className="action-bar">
                <div className="icon-button primary">
                    <i className="material-icons primary"> account_circle </i>{" "}
                </div>{" "}
                <div className="icon-button danger">
                    <i className="material-icons"> settings </i>{" "}
                </div>{" "}
            </div>{" "}
        </header>
    );
};

const mapStateToProps = ({query}) => ({
    query,
});

export default connect(mapStateToProps, {updateQuery})(NavBar);
