import {SaveData, GetData, DeleteData} from "./Storage";

const AudioLib = {
    StartRecording: null,
    StopRecording: null,
    Play: null,
    Stop: null,
    RemoveRecord: null,
    Download: null,
};

const mimeType = "audio/ogg;codecs=opus";

let mediaRecorder = null;
let audioCtl = null;
let intervalHandler = null;

AudioLib.StartRecording = (saveId, callback = null) => {
    navigator.mediaDevices.getUserMedia({audio: true}).then(function (stream) {
        let chunks = [];
        let blob = null;
        mediaRecorder = new MediaRecorder(stream, {mimeType});
        mediaRecorder.onstop = async (e) => {
            blob = new Blob(chunks, {type: mimeType});

            // Salvar IndexedDB
            let file = new File([blob], {
                type: mimeType,
            });
            let fileReader = new FileReader();
            fileReader.onload = function (evt) {
                SaveData({audio_id: saveId, audio_file: evt.target.result});
            };
            fileReader.readAsArrayBuffer(file);
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
    if (audioCtl !== null) {
        AudioLib.Stop();
    }
    GetData(saveId, (data) => {
        const file = new File([data.audio_file], {type: mimeType});
        let fileReader = new FileReader();
        fileReader.onload = function (data) {
            audioCtl = new Audio(data.target.result);
            audioCtl.play();
            if (onStop !== null) {
                intervalHandler = setInterval(function () {
                    if (audioCtl.ended) onStop();
                }, 100);
            }
        };
        fileReader.readAsDataURL(file);
    });
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
    DeleteData(saveId);
};

AudioLib.Download = (saveId, name = "audio") => {
    const filename = name;
    const audioContent = localStorage.getItem(saveId);

    if (audioCtl !== null) {
        AudioLib.Stop();
    }
    GetData(saveId, (data) => {
        const blob = new Blob([data.audio_file], {type: mimeType});

        let audioURL = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.style.display = "none";
        a.href = audioURL;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(audioURL);
    });
};

export default AudioLib;
