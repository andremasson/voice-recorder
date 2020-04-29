import React, { Fragment } from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import RecordsView from "./components/RecordsView";
import { RecordButton } from "./components/RecordButton";

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <RecordsView recordings={[1, 2, 3, 4]}></RecordsView>
      <RecordButton />
    </Fragment>
  );
}

export default App;
