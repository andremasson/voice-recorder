import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {stopAudio} from "../actions/audio";
import AudioLib from "../utils/AudioLib";

const AudioPlayer = ({audio, stopAudio}) => {
    const [audioLib] = useState(AudioLib);
    const {isPlaying, idAudio} = audio;
    useEffect(() => {
        const onStop = () => {
            stopAudio();
        };
        if (audio.isPlaying) {
            audioLib.Play(idAudio, () => onStop());
        } else {
            audioLib.Stop();
        }
    }, [audio.isPlaying, idAudio, stopAudio, audioLib]);
    const stopButton = () => {
        stopAudio();
    };
    return (
        <div>
            {isPlaying ? (
                <div>
                    <div>Playing...</div>
                    <div className="icon-button" onClick={() => stopButton()}>
                        <i className="material-icons">stop</i>
                    </div>
                </div>
            ) : (
                <div>Stopped</div>
            )}
        </div>
    );
};

AudioPlayer.propTypes = {
    audio: PropTypes.object.isRequired,
};

const mapStateToProps = ({audio}) => ({
    audio,
});

export default connect(mapStateToProps, {stopAudio})(AudioPlayer);
