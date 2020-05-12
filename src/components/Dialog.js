import React, {useState, Fragment} from "react";
import PropTypes from "prop-types";

const Dialog = ({message, positiveAction, cancelAction}) => {
    const [visible, setVisible] = useState("overlay-visible");
    const cancelButton = () => {
        setVisible("overlay-invisible");
        if (cancelAction) cancelAction();
    };
    return (
        <div className={`${visible}`} onClick={() => cancelAction()}>
            <div className="card dialog">
                <div className="message">{message}</div>
                <div className="actions">
                    {positiveAction ? (
                        <Fragment>
                            <button
                                className="danger"
                                onClick={() => positiveAction()}>
                                Sim
                            </button>
                            <button
                                className="secondary"
                                onClick={() => cancelButton()}>
                                Não
                            </button>
                        </Fragment>
                    ) : (
                        <button
                            className="primary"
                            onClick={() => cancelButton()}>
                            Voltar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

Dialog.propTypes = {
    message: PropTypes.string.isRequired,
    positiveAction: PropTypes.func,
    cancelAction: PropTypes.func,
};

export default Dialog;
