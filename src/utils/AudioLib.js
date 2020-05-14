const AudioLib = {
    StartRecording: null,
    StopRecording: null,
    Play: null,
    Stop: null,
    RemoveRecord: null,
};

let mediaRecorder = null;
let audioCtl = null;
let intervalHandler = null;

AudioLib.StartRecording = (saveId, callback = null) => {
    navigator.mediaDevices.getUserMedia({audio: true}).then(function (stream) {
        let chunks = [];
        let blob = null;
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.onstop = (e) => {
            blob = new Blob(chunks, {type: "audio/ogg;codecs=opus"});
            let file = new File([blob], "file", {
                type: "audio/ogg;codecs=opus",
            });
            let fr = new FileReader();
            fr.onload = function () {
                localStorage.setItem(saveId, fr.result);
            };
            fr.readAsDataURL(file);
        };
        mediaRecorder.ondataavailable = function (e) {
            chunks.push(e.data);
        };
        mediaRecorder.start();
        if (callback !== null) callback();
    });
};

AudioLib.StopRecording = () => {
    if (mediaRecorder !== null) mediaRecorder.stop();
};

AudioLib.Play = (saveId, onStop = null) => {
    const audioURL = localStorage.getItem(saveId);
    if (audioCtl !== null) {
        AudioLib.Stop();
    }
    audioCtl = new Audio(audioURL);
    audioCtl.play();
    if (onStop !== null) {
        intervalHandler = setInterval(function () {
            if (audioCtl.ended) onStop();
        }, 100);
    }
};

AudioLib.Stop = () => {
    if (audioCtl !== null) {
        audioCtl.pause();
        audioCtl = null;
    }
    if (intervalHandler !== null) {
        clearInterval(intervalHandler);
    }
};

AudioLib.RemoveRecord = (saveId) => {
    localStorage.removeItem(saveId);
};

module.exports = AudioLib;
