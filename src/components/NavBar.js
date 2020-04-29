import React from "react";
import { AppBar, Button, IconButton } from "@material-ui/core";
import LoginIcon from "@material-ui/icons/AccountCircle";

const NavBar = (props) => {
  return (
    <AppBar position="static">
      <h3 className="title">Gravador</h3>
      <div className="search-bar">
        <input type="text" />
        <Button>Ok</Button>
      </div>
      <div className="action-bar">
        <IconButton>
          <LoginIcon />
        </IconButton>
      </div>
    </AppBar>
  );
};

export default NavBar;
