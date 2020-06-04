// Código de: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

/*
window.indexedDB =
    window.indexedDB ||
    window.webkitIndexedDB ||
    window.mozIndexedDB ||
    window.msIndexedDB;
    */
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
var dbVersion = 1;
var dbName = "audioDB";
var storeName = "audioStore";

if (!window.indexedDB) {
    console.log("Browser does not support IndexedDB");
}
var db;

var request = window.indexedDB.open(dbName, dbVersion);

export const SaveData = (data) => {
    var transaction = db.transaction(storeName, "readwrite");
    transaction.oncomplete = function (event) {
        // Success
    };

    var objectStore = transaction.objectStore(storeName);
    var req = objectStore.add(data);
    req.onsuccess = function (event) {
        // Success
    };
};

export const GetData = (saveId, func) => {
    if (saveId === undefined) return;
    if (db !== undefined) {
        var transaction = db.transaction(storeName);
        var objectStore = transaction.objectStore(storeName);
        var req = objectStore.get(saveId);
        req.onsuccess = function (event) {
            func(req.result);
        };
    }
};

export const DeleteData = (saveId) => {
    db.transaction(storeName, "readwrite")
        .objectStore(storeName)
        .delete(saveId);
};

request.onupgradeneeded = function (event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore(storeName, {keyPath: "audio_id"});
    objectStore.createIndex("audio_id", "audio_id", {unique: true});
};

request.onerror = function (event) {
    console.log("Error creating IndexdDB database");
};

request.onsuccess = function (event) {
    // Success
    db = event.target.result;

    db.onerror = function (event) {
        // Handle error
    };
};
