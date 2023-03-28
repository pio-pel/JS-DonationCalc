// Clear result on result-area
function clearResultArea(...arg) {
    for (let e of [...arg]) {
        e.innerHTML = "";
    }
}
export default clearResultArea;
