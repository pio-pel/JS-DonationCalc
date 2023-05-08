import animation from "./helpers/animation";
import buttonMenu from "./helpers/buttonMenu";
import clearResultArea from "./helpers/clearResultArea";
import countResult from "./helpers/countResult";
import countTax from "./helpers/countTax";
import fillChoice from "./helpers/fillChoice";
import groupSelect from "./helpers/groupSelect";
import inputValidation from "./helpers/inputValidation";
import languageButtonSetChecked from "./helpers/languageButtonSetChecked";
import LanguageChange from "./helpers/languageChange";
import setCalendarDefaultDate from "./helpers/setCalendarDefaultDate";
import validationAlert from "./helpers/validationAlert";

import {
  calendar,
  calendarInputArea,
  countArea,
  currencyChoose,
  currencyChooseMenu,
  currencyInputArea,
  currencySelectArea,
  enteredSum,
  htmlTextElements,
  languageButton,
  menuOpen,
  resultAllElementsToClear,
  resultComments,
  resultCurrency,
  resultDonation,
  resultHiddenArea,
  resultRate,
  resultRecord,
  resultTax,
  service,
  taxButtons,
  trashButtonYes,
} from "./consts/consts";

let calendarSelectError;
let currencyInputError;
let currencySelectError;
let data;
let selectedTaxGroup;
let targetID;

// Check if .language key exist in localStorage & set 'checked' to appropriate button.
// When localStorage is empty, 'checked' is default for 'pl' in HTML
languageButtonSetChecked(languageButton);

// Get languagePackJSON from .json file & pass it as object to localStorage. Fill all html-text-elements on page using data from localStorage.
new LanguageChange(
  languageButton.querySelector("[checked]").dataset.language,
  htmlTextElements
).setLanguage();

// Language select-button event - language change.
languageButton.addEventListener("pointerdown", (e) => {
  new LanguageChange(e.target.dataset.language, htmlTextElements).setLanguage();
  location.reload();
});

// Set today's date as calendar's value & max range
setCalendarDefaultDate(calendar);

// Hamburger menu open-close button
menuOpen.addEventListener("click", () => {
  buttonMenu();
});

// Tax-groups selector
taxButtons.addEventListener("click", (e) => {
  selectedTaxGroup = groupSelect(e);
});

// Currency choose button
currencyChoose.addEventListener("click", async () => {
  data = await service.getCurrencyRates(calendar.value);

  //Menu currency-list filling by data from nbpService (currency code & full name)
  currencyChooseMenu.innerHTML = fillChoice(data.rates);
});

// Datepicker change event
calendar.addEventListener("change", () => {
  data = null;
  targetID = null;
  currencyChoose.innerHTML = `<i class="fa-solid fa-coins"></i>`;

  calendarSelectError && calendarSelectError.remove();
});

// Currency value input event
enteredSum.addEventListener("input", () => {
  inputValidation(enteredSum);
  currencyInputError && currencyInputError.remove();
});

// Menu currency-list event
currencyChooseMenu.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id.length !== 3) {
    return;
  }
  targetID = e.target.id;
  currencyChoose.innerText = targetID;
  currencySelectError && currencySelectError.remove();
});

// "Result" button. Return result data or throw alerts.
countArea.addEventListener("click", () => {
  calendarSelectError && calendarSelectError.remove();
  currencyInputError && currencyInputError.remove();
  currencySelectError && currencySelectError.remove();

  try {
    // Return currency code, record, mid rate, donation amount
    const { code, result, mid } = countResult(
      data.rates,
      targetID,
      enteredSum.value
    );
    // Return tax amount & comments
    const { taxAmount, taxComment } = countTax(selectedTaxGroup, result);

    resultCurrency.innerHTML = `${code}`;
    resultRecord.innerHTML = `<p>${localStorage.resultRecord}:&nbsp; </p> <p> ${data.effectiveDate}</p>`;
    resultRate.innerHTML = `<p>${localStorage.resultRate}:&nbsp; </p> <p> ${mid} PLN</p>`;
    resultDonation.innerHTML = `<p>${localStorage.resultDonation}:&nbsp; </p> <p style="color: green"> ${result} PLN</p>`;
    resultTax.innerHTML = `<p>${localStorage.resultTax}:&nbsp; </p> <p style="color: red"> ${taxAmount} PLN</p>`;
    resultComments.innerText = `${taxComment}`;
  } catch (e) {
    console.log("Fill the inputs according to alerts", e);
  }

  //Errors messages
  try {
    if (!calendar.checkValidity()) {
      throw `${localStorage.appErrorCalendar}`;
    }
  } catch (errCalendar) {
    clearResultArea(resultAllElementsToClear);
    calendarSelectError = validationAlert(calendarInputArea, errCalendar);
  }

  try {
    if (!enteredSum.checkValidity()) {
      throw `${localStorage.appErrorEnteredSum}`;
    }
  } catch (errSum) {
    clearResultArea(resultAllElementsToClear);
    currencyInputError = validationAlert(currencyInputArea, errSum);
  }

  try {
    if (!targetID) {
      throw `${localStorage.appErrorCurrencyMenu}`;
    }
  } catch (errCurrency) {
    clearResultArea(resultAllElementsToClear);
    currencySelectError = validationAlert(currencySelectArea, errCurrency);
  }

  // Animation when results appear
  animation(resultHiddenArea, 10); //element & time
  animation(resultComments, 100);

  window.scrollTo(0, document.body.scrollHeight);
});

// Page clear (reload)
trashButtonYes.addEventListener("click", () => {
  location.reload();
});
