function fillText () {
    for (let element of (document.querySelectorAll("[data-text]"))) {
        element.innerHTML = localStorage[element.dataset.text]};
    }

export default fillText;