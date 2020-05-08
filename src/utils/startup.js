export const initStorage = () => {
    if (localStorage.getItem("records") === "") {
        console.log("config");
        localStorage.setItem("records", JSON.stringify([]));
    }
};
