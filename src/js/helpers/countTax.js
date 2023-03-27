// Return object with tax-sum & comment
export function countTax(selectedTG, res) {
    const sum = Number(res);
    const taxes = {
        s: "",
        c: ""
    };
    const free1 = 10434;
    const free2 = 7878;
    const free3 = 5308;
    const over1 = 11128;
    const over2 = 22256;

    if (selectedTG ==="taxZero") {
        taxes.s = "0.00 PLN";
        if (sum > free1) {
            taxes.c = "Darowizna przekracza 10434zł. Na zgłoszenie darowizny do US masz pół roku od daty jej przyjęcia. Formularz SD-Z2."
        } else {
            taxes.c = "Nie musisz zgłaszać darowizny, jesli suma darowizn od jednego darczyńcy nie przekroczyła 10 434zł w ciągu 5 lat poprzedzających rok, w którym nastąpiła ostatnia darowizna."
        }
    }
    if (selectedTG ==="taxOne") {

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
    if (selectedTG ==="taxTwo") {

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
        if (sum > over2) {
            taxes.s = `${ (0.12*(sum - over2) + 1780.60).toFixed(2)} PLN`
            taxes.c = "Podatek to 1780 zł 60 gr i 12% od nadwyżki ponad 22 256 zł. Na zgłoszenie darowizny do US masz miesiąc od daty jej przyjęcia. Formularz SD-3."
        }
    }
    if (selectedTG ==="taxThree") {

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
    } else if (!selectedTG) {
        taxes.s = "brak danych";
        taxes.c = "Nie wybrano grupy podatkowej.";
    }
    return taxes;
}