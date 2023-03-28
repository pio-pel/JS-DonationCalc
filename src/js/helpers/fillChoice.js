//Menu currency-list filling by data from nbpService (currency code & full name)
function fillChoice(dataAll) {
    let textO = "";
    let textH = "";
    let text = "";
    for (let e of dataAll) {
        if (e.code ==="USD" || e.code ==="EUR") {
            textH += `<a id="${e.code}" class="dropdown-item" href="#"><b>${e.code}</b> [${e.currency}]</a>\n`;
            continue;
        }
        textO += `<a id="${e.code}" class="dropdown-item" href="#"><b>${e.code}</b> [${e.currency}]</a>\n`;
    }
    textH += `<div class="dropdown-divider"></div>\n`;
    text += textH;
    text += textO;
    return text;
}
export default fillChoice;
