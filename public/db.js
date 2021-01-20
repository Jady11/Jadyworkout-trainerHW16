let db;
const request = indexedDB.open("workout", 1);

request.onupgradeneeded = function(event) {
    const db = event,target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function(event) {
    db = event.target.result; 
    if (navigator.onLine){
        checkDatabase();
    }
};

request.onerror = function(event) {
    console.log("Nope! " + event.target.errorCode);
};

function saveRecord(record) {
    const workout = db.workout(["pending"], "readWrite");
    const store = workout.objectStore("pending");

    store.add(record);
}

function checkDatabase() {
    const workout = db.workout(["pending"], "readwrite");
    const store = workout.objectStore("pending");
    const getAll = store.getAll();

    getAll.onsuccess = function() {
        if (getAll.result.length > 0) {
            fetch("/api/workout/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, test/plain, */*",
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(() => {
                const workout = db.workout(["pending"], "readwrite");
                const store = workout.objectStore("pending");

                store.clear();
            });
        }
    };
}

window.addEventListener("online", checkDatabase);
