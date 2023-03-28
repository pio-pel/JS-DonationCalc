import languagePackJSON from "../json/languagePackJSON";

// Get languagePackJSON from .json file & pass it as object to localStorage. Fill all html-text-elements on page using data from localStorage.
class LanguageChange {
    constructor(language, htmlTextElements) {
        this.language = language;
        this.htmlTextElements = htmlTextElements;
        this.cache = {}
}

        setLanguage() {
            localStorage.clear();
            this.cache = languagePackJSON[this.language];
            localStorage.setItem("language", `${this.language}`);
            
            for (let key of Object.keys(this.cache)) {
                localStorage.setItem(`${key}`, `${this.cache[key]}`)
            }
            this.fillText();
        }

        fillText() {
            for (let element of (this.htmlTextElements)) {
                element.innerHTML = localStorage[element.dataset.text]};
            }
}

export default LanguageChange;