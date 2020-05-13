import React, {useState, Fragment} from "react";
import NewRecording from "./NewRecording";

const RecordButton = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const stopRecording = () => {
        setModalOpen(false);
    };
    return (
        <Fragment>
            {modalOpen ? (
                <NewRecording cancelAction={() => stopRecording()} />
            ) : (
                <div className="fab" onClick={() => setModalOpen(true)}>
                    <div className="icon-button">
                        <i className="material-icons"> mic </i>{" "}
                    </div>{" "}
                </div>
            )}
        </Fragment>
    );
};

export default RecordButton;
