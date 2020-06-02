import React, {useEffect} from "react";
import "./styles/App.scss";
import NavBar from "./components/NavBar";
import RecordsView from "./components/RecordsView";
import RecordButton from "./components/RecordButton";
import {Provider} from "react-redux";
import store from "./store";
import {getRecords, updateQuery} from "./actions/record";
import {stopAudio} from "./actions/audio";
import {initStorage} from "./utils/startup";
import AudioPlayer from "./components/AudioPlayer";
import MenuBar from "./components/MenuBar";

const App = () => {
    useEffect(() => {
        store.dispatch(stopAudio());
        store.dispatch(getRecords());
        initStorage();
        store.dispatch(updateQuery(""));
    }, []);
    return (
        <Provider store={store}>
            <NavBar />
            <main>
                <RecordsView recordings={[]} />
                <MenuBar />
                <AudioPlayer />
                <RecordButton />
            </main>
        </Provider>
    );
};

export default App;
