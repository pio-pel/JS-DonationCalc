import buttonMenu from "./helpers/buttonMenu";
import LanguageChange from "./helpers/languageChange";
import languageButtonSetChecked from "./helpers/languageButtonSetChecked";
import { languageButton, menuOpen, htmlTextElements } from "./consts/consts";

menuOpen.addEventListener("click", () => {
  buttonMenu();
});

// Check if .language key exist in localStorage & set 'checked' to appropriate button.
// When localStorage is empty, 'checked' is default for 'pl' in HTML
languageButtonSetChecked(languageButton);

// Get languagePackJSON from .json file & pass it as object to localStorage. Fill all html-text-elements on page using data from localStorage
new LanguageChange(
  languageButton.querySelector("[checked]").dataset.language,
  htmlTextElements
).setLanguage();

// Language select-button event - language change.
languageButton.addEventListener("pointerdown", (e) => {
  new LanguageChange(e.target.dataset.language, htmlTextElements).setLanguage();
  location.reload();
});
