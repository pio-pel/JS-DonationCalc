import { buttonMenu, groupSelect, getArray, fillChoice, countResult, countTax, setCalendarDefaultDate, tryApiGet, clearResultArea } from "./_app";

const calendar = document.querySelector("#calendarInput");
const countArea = document.querySelector("#countArea");
const currencyChoose = document.querySelector("#currencyChoose")
const currencyChooseMenu = document.querySelector("#currencyChooseMenu");
const currencyValue = document.querySelector("#currencyValue");
const curSum = document.querySelector("#curSum");
const darowizna = document.querySelector("#darowizna");
const kurs = document.querySelector("#kurs");
const memo = {};
const menuOpen = document.querySelector("#burgerButton");
const notowanie = document.querySelector("#notowanie");
const podatek = document.querySelector("#podatek");
const resultHiddenArea = document.querySelector("#resultHiddenArea");
const taxButtons = document.querySelector("#taxGroupButtons");
const trashButtonYes = document.querySelector("#trashButtonYes");
const uwagi = document.querySelector("#uwagi");
const waluta = document.querySelector("#waluta");
let calendarValueError;
let currencyChooseError;
let currencyValueError;
let mainArray;
let req;
let selectedTaxGroup;
let targetID;



// Set today's date as calendar's value & max range
setCalendarDefaultDate(calendar);

// Hamburger menu open-close button
menuOpen.addEventListener("click", e => { buttonMenu() });

// Tax-groups selector
taxButtons.addEventListener("click", e => { 
    selectedTaxGroup = groupSelect(e); 
});

// Currency choose button  
currencyChoose.addEventListener("click", async e => { 

    if (mainArray == null || mainArray == undefined) {
        
        for (let m of Object.keys(memo)) { 
            if (calendar.value === m) {
                mainArray = memo[m];            //if date exist, return data from memo (insted of API)
            }
        }

        if (mainArray == null || mainArray == undefined ) {
            try { 
                req = await tryApiGet(calendar.value);          //get data from API
                if (!req.ok) throw err = req.status;
                mainArray = await getArray( req.json() );
            }
            catch (err) { alert (`Ups... Błąd połączenia z serwerem NBP.\n${err}`) }
        }
            memo[mainArray.effectiveDate] = mainArray;            //put data to memo
            currencyChooseMenu.innerHTML = fillChoice(mainArray.rates);     //menu currency-list filling
    }
}
)

// Datepicker change event
calendar.addEventListener("change", e => { 
    mainArray = null;
    currencyChoose.innerHTML = `<i class="fa-solid fa-coins"></i>`;
    if (calendarValueError != undefined) {
        calendarValueError.remove();
        calendarValueError = undefined;
    };
    
});

// Currency value input event
curSum.addEventListener("input", e => {
    console.log(curSum.value.length);
    if (currencyValueError != undefined) {
        currencyValueError.remove();
        calendarValueError = undefined;
    }
    })


// Menu currency-list event
currencyChooseMenu.addEventListener("click", e => { 
    e.preventDefault();
    currencyChoose.innerText = e.target.id;
    targetID = e.target.id;
    if (currencyChooseError != undefined) {
        currencyChooseError.remove();
        currencyChooseError = undefined;
    }
}
);

// "Oblicz" button. Return result data or throw errors.
countArea.addEventListener("click", e => { 

    if (calendarValueError != undefined) {calendarValueError.remove()}
    if (currencyValueError != undefined) {currencyValueError.remove()}
    if (currencyChooseError!= undefined) {currencyChooseError.remove()}

    try {
        const {cur, res, mid} = countResult(mainArray.rates, targetID); // return currency name, result & mid rate
        waluta.innerHTML = `${ cur }`;
        notowanie.innerHTML = `<p>Notowanie:&nbsp; </p> <p> ${ mainArray.effectiveDate }</p>`;
        kurs.innerHTML = `<p>Kurs:&nbsp; </p> <p> ${ mid } PLN</p>`;
        darowizna.innerHTML = `<p>Darowizna:&nbsp; </p> <p style="color: green"> ${ res } PLN</p>`; 
        const {s, c} = countTax( selectedTaxGroup, res );       //return tax-sum & comment
        podatek.innerHTML = `<p>Podatek:&nbsp; </p> <p style="color: red"> ${ s }</p>`;
        uwagi.innerText = `${ c }`;
        }
        catch (e) {
            console.log("Należy uzupełnić pola!", e)}

//Errors messages
try {
if (!calendar.checkValidity()) {throw "WYBIERZ DATĘ"};  
}
catch (err1) {
    clearResultArea (waluta, notowanie, kurs, darowizna, podatek, uwagi);
    calendarValueError = calendarValue.appendChild(document.createElement("div"));
    calendarValueError.classList.add("inputerror");
    calendarValueError.innerText = err1;
}

try {
    if (!curSum.checkValidity()) {throw "WPROWADŹ WARTOŚĆ"}
}
catch (err2) {
    clearResultArea (waluta, notowanie, kurs, darowizna, podatek, uwagi);
    currencyValueError = currencyValue.appendChild(document.createElement("div"));
    currencyValueError.classList.add("inputerror");
    currencyValueError.innerText = err2;
}

try {
    if (mainArray == null) {throw "WYBIERZ WALUTĘ"}
}
catch (err3) {
    clearResultArea (waluta, notowanie, kurs, darowizna, podatek, uwagi);
    currencyChooseError = currencyGroupButtons.appendChild(document.createElement("div"));
    currencyChooseError.classList.add("inputerror");
    currencyChooseError.innerText = err3;
};

// Animation when results appear
resultHiddenArea.classList.remove("hid");      
setTimeout( ()=> {resultHiddenArea.classList.add("hid")}, 50);

uwagi.classList.remove("hid");
setTimeout( ()=> {uwagi.classList.add("hid")}, 300);

window.scrollTo(0, document.body.scrollHeight)
});


// Clear all forms
trashButtonYes.addEventListener("click", e => {
clearResultArea (waluta, notowanie, kurs, darowizna, podatek, uwagi);
calendar.value = null;
currencyChoose.innerHTML = `<i class="fa-solid fa-coins"></i>`;
curSum.value = null;
mainArray = null;

} )





    

