const AudioLib = {
    StartRecording: null,
    StopRecording: null,
    Play: null,
    Stop: null,
    RemoveRecord: null,
};

let mediaRecorder = null;
let audioCtl = null;

AudioLib.StartRecording = (saveId, callBack = null) => {
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
        if (callBack !== null) callBack();
    });
};

AudioLib.StopRecording = () => {
    if (mediaRecorder !== null) mediaRecorder.stop();
};

AudioLib.Play = (name) => {
    const audioURL = localStorage.getItem(name);
    audioCtl = new Audio(audioURL);
    audioCtl.play();
};

AudioLib.Stop = () => {
    if (audioCtl !== null) {
        audioCtl.stop();
    }
};

AudioLib.RemoveRecord = (name) => {
    localStorage.removeItem(name);
};

module.exports = AudioLib;
