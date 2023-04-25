//Menu currency-list filling by data from nbpService (currency code & full name)
function fillChoice(dataAll) {
  let textRestCurrencies = "";
  let textUSDEUR = "";
  let textAll = "";
  let currency = "";

  for (let e of dataAll) {
    currency = localStorage[e.code];
    if (e.code === "USD" || e.code === "EUR") {
      textUSDEUR += `<a id="${e.code}" class="dropdown-item" href="#"><b>${e.code}</b> ${currency}</a>\n`;
      continue;
    }
    textRestCurrencies += `<a id="${e.code}" class="dropdown-item" href="#"><b>${e.code}</b> ${currency}</a>\n`;
  }

  textUSDEUR += `<div class="dropdown-divider"></div>\n`;
  textAll += textUSDEUR;
  textAll += textRestCurrencies;
  return textAll;
}
export default fillChoice;
