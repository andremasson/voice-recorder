import React from "react";
import {connect} from "react-redux";
import {openMenu} from "../actions/config";

const MenuBar = ({menuStatus}) => {
    return (
        <nav>
            <div className={`closeButton icon-button ${menuStatus}`}>
                <i className="material-icons">close</i>
            </div>
        </nav>
    );
};

const mapStateFromProps = ({config}) => ({
    menuStatus: config.menuStatus,
});

export default connect(mapStateFromProps, {openMenu})(MenuBar);
