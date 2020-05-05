import React, {Fragment} from "react";
import "./styles/App.scss";
import NavBar from "./components/NavBar";
import RecordsView from "./components/RecordsView";
import {RecordButton} from "./components/RecordButton";

function App() {
    return (
        <Fragment>
            <NavBar />
            <main>
                <RecordsView recordings={[1, 2, 3, 4]} />
            </main>
            <RecordButton />
        </Fragment>
    );
}

export default App;
