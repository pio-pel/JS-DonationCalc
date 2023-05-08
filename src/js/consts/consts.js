import NbpService from "../services/nbpService";

export const calendar = document.querySelector("#calendarInput");
export const calendarInputArea = document.querySelector("#calendarInputArea");
export const countArea = document.querySelector("#countArea");
export const currencyChoose = document.querySelector("#currencyChoose");
export const currencyChooseMenu = document.querySelector("#currencyChooseMenu");
export const currencyInputArea = document.querySelector("#currencyInputArea");
export const currencySelectArea = document.querySelector(
  "#currencyGroupButtons"
);
export const enteredSum = document.querySelector("#enteredSum");
export const htmlTextElements = document.querySelectorAll("[data-text]");
export const languageButton = document.querySelector("#languageButton");
export const menuOpen = document.querySelector("#burgerButton");
export const resultComments = document.querySelector("#resultComments");
export const resultCurrency = document.querySelector("#resultCurrency");
export const resultDonation = document.querySelector("#resultDonation");
export const resultHiddenArea = document.querySelector("#resultHiddenArea");
export const resultRate = document.querySelector("#resultRate");
export const resultRecord = document.querySelector("#resultRecord");
export const resultTax = document.querySelector("#resultTax");
export const service = new NbpService(
  "https://api.nbp.pl/api/exchangerates/tables/a/"
);
export const taxButtons = document.querySelector("#taxGroupButtons");
export const trashButtonYes = document.querySelector("#trashButtonYes");
export const resultAllElementsToClear = [
  resultCurrency,
  resultRecord,
  resultRate,
  resultDonation,
  resultTax,
  resultComments,
];
