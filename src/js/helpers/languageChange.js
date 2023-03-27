import { languagePack } from "../consts/languagePack";

class LanguageChange {
    constructor(language, languageButton) {
        this.language = language;
        this.languageButton = languageButton;
        this.cache = {}
}

        setLanguage() {
            localStorage.clear();
            this.cache = languagePack[this.language];
            localStorage.setItem("language", `${this.language}`);
            // this.buttonLanguageSetAttribute()
            for (let key of Object.keys(this.cache)) {
                localStorage.setItem(`${key}`, `${this.cache[key]}`)
            }
           
        }


}

export default LanguageChange;