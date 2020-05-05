import React from "react";

const NavBar = (props) => {
    return (
        <header>
            <div className="title">
                <h3>Voice Recorder</h3>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Buscar..." />
                <button>Ok</button>
            </div>{" "}
            <div className="action-bar">
                <div className="icon-button">
                    <i className="material-icons">account_circle</i>
                </div>
                <div className="icon-button">
                    <i className="material-icons">settings</i>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
