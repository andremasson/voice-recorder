import React, {useState, Fragment} from "react";
import NewRecording from "./NewRecording";

const RecordButton = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <Fragment>
            {modalOpen ? (
                <NewRecording cancelAction={() => setModalOpen(false)} />
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
