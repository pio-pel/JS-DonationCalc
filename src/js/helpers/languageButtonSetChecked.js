// Check if .language key exist in localStorage & set 'checked' to appropriate button.
// When localStorage is empty, use default ('checked' is default for 'pl' in HTML)
function languageButtonSetChecked(languageButton) {
  if (localStorage.language) {
    languageButton
      .querySelectorAll("[data-language]")
      .forEach((element) => element.removeAttribute("checked"));
    languageButton
      .querySelector(`[data-language="${localStorage.language}"]`)
      .setAttribute("checked", "");
  }
}

export default languageButtonSetChecked;
