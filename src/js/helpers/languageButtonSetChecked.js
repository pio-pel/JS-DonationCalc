function languageButtonSetChecked(languageButton) {
    if (localStorage.language) {
        languageButton.querySelectorAll('[data-language]').forEach(element => element.removeAttribute("checked"));
        languageButton.querySelector(`[data-language="${localStorage.language}"]`).setAttribute("checked",'');
    }
}

export default languageButtonSetChecked;