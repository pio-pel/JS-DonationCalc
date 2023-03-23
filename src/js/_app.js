import { apiGet } from "./api";

// Set today's date as calendar's value & max range
export function setCalendarDefaultDate (calendar) {
const date = new Date();
calendar.setAttribute("value", date.toISOString().slice(0, 10));
calendar.setAttribute("max", date.toISOString().slice(0, 10));
}

// Hamburger menu open-close button
export function buttonMenu () {
let status = document.getElementById("mySidenav").style.height;
if (status == "300px") {
    document.getElementById("mySidenav").style.height = "0px";
    document.getElementById("burgerButton").style.marginTop = "0px";
} else {
    document.getElementById("mySidenav").style.height = "300px";
    document.getElementById("burgerButton").style.marginTop= "300px";
}
};

// Tax-groups selector
export function groupSelect (e) {
    const taxArea = document.querySelector(".tArea");
    const target = e.target;
    const buttons = document.querySelectorAll(".tButtons");

if (target.classList.contains("buttonClicked")) {
    target.classList.remove("buttonClicked");
    taxArea.innerHTML = "Kim jesteś dla darczyńcy? Kliknij w przycisk, aby zobaczyć opis i wybrać odpowiednią grupę podatkową.<br>UWAGA! Możesz pominąć ten krok, jeśli nie chcesz liczyć należnego podatku.";
} else {
    for (let button of buttons) {
        button.classList.remove("buttonClicked");
    };
    if (target.id == "taxZero") {
        taxArea.textContent = 'Tzw. "0" grupa podatkowa, czyli najbliższa rodzina: małżonek, wstępni (rodzice, dziadkowie, pradziadkowie), zstępni (dzieci, wnuki, prawnuki), pasierb, ojczym, macocha, rodzeństwo. UWAGA: Jeżeli nie zgłosisz spadku w ciągu 6 miesięcy, wówczas zapłacisz podatek na zasadach określonych dla I grupy podatkowej!';
        target.classList.add("buttonClicked");
    }
    if (target.id == "taxOne") {
        taxArea.textContent = "I grupa podatkowa: małżonek, wstępni (rodzice, dziadkowie, pradziadkowie), zstępni (dzieci, wnuki, prawnuki), pasierb, ojczym, macocha, rodzeństwo, teściowie, zięć, synowa";
        target.classList.add("buttonClicked");
    }
    if (target.id == "taxTwo") {
        taxArea.textContent = "II grupa podatkowa: zstępni rodzeństwa (np. dzieci siostry, wnuki brata), rodzeństwo rodziców (np. ciotki, wujowie), zstępni i małżonkowie pasierbów, małżonkowie rodzeństwa i rodzeństwo małżonków, małżonkowie rodzeństwa małżonków, małżonkowie innych zstępnych (np. mąż wnuczki)";
        target.classList.add("buttonClicked");
    }
    if (target.id == "taxThree") {
        taxArea.textContent = "III grupa podatkowa: pozostali nabywcy.";
        target.classList.add("buttonClicked");
    }
    return target.id;
}
}

// Return data array (currency code, currency name, mid rate)
export async function getArray (req) {

    const arrayMain = await req.then(x => {
    const [ array ] = x;
    return array;
    
 })
    return arrayMain;

}

// Menu currency-list filling
export function fillChoice (mainArray) {
let textO = "";
let textH = "";
let text = "";
for (let e of mainArray) {
    if (e.code == "USD" || e.code == "EUR") {
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

// Return object with currency name, result (value * mid) & mid rate
export function countResult (mainArray, targetID) {
    const results = {cur: "", res: "", mid: ""};

    for (let e of mainArray) {
        if (e.code == targetID) {
            results.res = (e.mid * Number(curSum.value)).toFixed(2);
            results.mid = e.mid;
            results.cur = ((e.currency.charAt(0)).toUpperCase()).concat(e.currency.slice(1, e.currency.length));
        }
    }
    return results;
};

// Return object with tax-sum & comment
export function countTax (selectedTG, res) {
const sum = Number(res);
const taxes = {s: "", c: ""};
const free1 = 10434;
const free2 = 7878;
const free3 = 5308;
const over1 = 11128;
const over2 = 22256;

if (selectedTG == "taxZero") {
taxes.s = "0.00 PLN";
    if (sum > free1) {
        taxes.c = "Darowizna przekracza 10434zł. Na zgłoszenie darowizny do US masz pół roku od daty jej przyjęcia. Formularz SD-Z2."
    } else {
        taxes.c = "Nie musisz zgłaszać darowizny, jesli suma darowizn od jednego darczyńcy nie przekroczyła 10 434zł w ciągu 5 lat poprzedzających rok, w którym nastąpiła ostatnia darowizna."
    }
}
if (selectedTG == "taxOne") {  
   
    if (sum <= free1) {
        taxes.s = "0.00 PLN";
        taxes.c = "Nie musisz zgłaszać darowizny, jesli suma darowizn od jednego darczyńcy nie przekroczyła 10 434 zł w ciągu 5 lat poprzedzających rok, w którym nastąpiła ostatnia darowizna."
    }
    if (sum > free1 && sum <= over1) {
        taxes.s = `${ (0.03*sum).toFixed(2) } PLN`
        taxes.c = "Podatek to 3%. Na zgłoszenie darowizny do US masz miesiąc od daty jej przyjęcia. Formularz SD-3."
    } 
    if (sum > over1 && sum <= over2) {
        taxes.s = `${ (0.05*(sum - over1) + 333.90).toFixed(2)} PLN`
        taxes.c = "Podatek to 333 zł 90 gr i 5% od nadwyżki ponad 11 128 zł. Na zgłoszenie darowizny do US masz miesiąc od daty jej przyjęcia. Formularz SD-3."
    }
    if (sum > over2) {
        taxes.s = `${ (0.07*(sum - over2) + 890.30).toFixed(2)} PLN`
        taxes.c = "Podatek to 890 zł 30 gr i 7% od nadwyżki ponad 22 256 zł. Na zgłoszenie darowizny do US masz miesiąc od daty jej przyjęcia. Formularz SD-3."
    }
    }
if (selectedTG == "taxTwo") {  
   
    if (sum <= free2) {
        taxes.s = "0.00 PLN";
        taxes.c = "Nie musisz zgłaszać darowizny, jesli suma darowizn od jednego darczyńcy nie przekroczyła 7 878 zł w ciągu 5 lat poprzedzających rok, w którym nastąpiła ostatnia darowizna."
    }
    if (sum > free2 && sum <= over1) {
        taxes.s = `${ (0.07*sum).toFixed(2) } PLN`
        taxes.c = "Podatek to 7%. Na zgłoszenie darowizny do US masz miesiąc od daty jej przyjęcia. Formularz SD-3."
    } 
    if (sum > over1 && sum <= over2) {
        taxes.s = `${ (0.09*(sum - over1) + 779.00).toFixed(2)} PLN`
        taxes.c = "Podatek to 779 zł 00 gr i 9% od nadwyżki ponad 11 128 zł. Na zgłoszenie darowizny do US masz miesiąc od daty jej przyjęcia. Formularz SD-3."
    }
    if (sum > over2 ) {
        taxes.s = `${ (0.12*(sum - over2) + 1780.60).toFixed(2)} PLN`
        taxes.c = "Podatek to 1780 zł 60 gr i 12% od nadwyżki ponad 22 256 zł. Na zgłoszenie darowizny do US masz miesiąc od daty jej przyjęcia. Formularz SD-3."
    }
    }
if (selectedTG == "taxThree")  {  
   
    if (sum <= free3) {
        taxes.s = "0.00 PLN";
        taxes.c = "Nie musisz zgłaszać darowizny, jesli suma darowizn od jednego darczyńcy nie przekroczyła 5 308 zł w ciągu 5 lat poprzedzających rok, w którym nastąpiła ostatnia darowizna."
    }
    if (sum > free3 && sum <= over1) {
        taxes.s = `${ (0.12*sum).toFixed(2) } PLN`
        taxes.c = "Podatek to 12%. Na zgłoszenie darowizny do US masz miesiąc od daty jej przyjęcia. Formularz SD-3."
    } 
    if (sum > over1 && sum <= over2) {
        taxes.s = `${ (0.16*(sum - over1) + 1335.40).toFixed(2)} PLN`
        taxes.c = "Podatek to 1335 zł 40 gr i 16% od nadwyżki ponad 11 128 zł. Na zgłoszenie darowizny do US masz miesiąc od daty jej przyjęcia. Formularz SD-3."
    }
    if (sum > over2) {
        taxes.s = `${ (0.20*(sum - over2) + 3115.90).toFixed(2)} PLN`
        taxes.c = "Podatek to 3115 zł 90 gr i 20% od nadwyżki ponad 22 256 zł. Na zgłoszenie darowizny do US masz miesiąc od daty jej przyjęcia. Formularz SD-3."
    }
    } else if (selectedTG == null || selectedTG == undefined) {
        taxes.s = "brak danych";
        taxes.c = "Nie wybrano grupy podatkowej.";
    }
    return taxes;
};

// Return new date (used when there is no data in API for previous date)
function changeDate ( donDate, count ) {

    if (count == "0") return donDate;

    let arrDate = donDate.split('-');
    let [year, month, day] = arrDate;
    let nDonDate ='';

    if (day == "01" ) {
        day = "31";
        if (count >= 1) {
            day-= count;
        }
        
        if (month == "01") {
            month = "12";
            year = (year-1);
        } else {
            month = ((month-1).toString()).padStart(2, "0");
        }
    } else {
        day = ((day-count).toString()).padStart(2, "0");  
    }
    nDonDate = nDonDate.concat(year, '-', month, '-', day);  
return nDonDate;
}

// Try to get data from API with various dates
export async function tryApiGet (calendar) {
    let req;
    
    for (let count = 0; count <= 10; count++) {
        req =  await apiGet( changeDate(calendar, count) );
        if (req.ok) {return req}
    }
    return req;   
}

// Clear result area
export function clearResultArea (...arg) {
    for (let e of [...arg]) {
        e.innerHTML = "";
    }
}