// Menu currency-list filling
export function fillChoice(mainArray) {
    let textO = "";
    let textH = "";
    let text = "";
    for (let e of mainArray) {
        if (e.code ==="USD" || e.code ==="EUR") {
            textH += `<a id="${e.code}" class="dropdown-item" href="#">${e.code}, ${e.currency}</a>\n`;
            continue;
        }
        textO += `<a id="${e.code}" class="dropdown-item" href="#">${e.code}, ${e.currency}</a>\n`;
    }
    textH += `<div class="dropdown-divider"></div>\n`;
    text += textH;
    text += textO;
    return text;
}