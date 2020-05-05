import React, {Fragment, useEffect} from "react";
import "./styles/App.scss";
import NavBar from "./components/NavBar";
import RecordsView from "./components/RecordsView";
import {RecordButton} from "./components/RecordButton";
import {Provider} from "react-redux";
import store from "./store";
import {getRecords} from "./actions/record";

const App = () => {
    useEffect(() => {
        store.dispatch(getRecords());
    }, []);
    return (
        <Provider store={store}>
            <Fragment>
                <NavBar />
                <main>
                    <RecordsView recordings={[]} />
                </main>
                <RecordButton />
            </Fragment>
        </Provider>
    );
};

export default App;
