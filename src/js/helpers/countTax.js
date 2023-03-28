// Count tax & return object with tax-sum & comment
function countTax(selectedTaxGroup, res) {
    const sum = Number(res);
    const taxes = {
        s: "",      //tax-sum
        c: ""       //tax-comment
    };
    const free1 = 10434;
    const free2 = 7878;
    const free3 = 5308;
    const over1 = 11128;
    const over2 = 22256;

    if (selectedTaxGroup ==="taxZero") {
        taxes.s = "0.00 PLN";
        if (sum > free1) {
            taxes.c = localStorage.countTaxZero1;
        } else {
            taxes.c = localStorage.countTaxZero2;
        }
    }
    if (selectedTaxGroup ==="taxOne") {

        if (sum <= free1) {
            taxes.s = "0.00 PLN";
            taxes.c = localStorage.countTaxOne1;
        }
        if (sum > free1 && sum <= over1) {
            taxes.s = `${ (0.03*sum).toFixed(2) } PLN`
            taxes.c = localStorage.countTaxOne2;
        }
        if (sum > over1 && sum <= over2) {
            taxes.s = `${ (0.05*(sum - over1) + 333.90).toFixed(2)} PLN`
            taxes.c = localStorage.countTaxOne3;
        }
        if (sum > over2) {
            taxes.s = `${ (0.07*(sum - over2) + 890.30).toFixed(2)} PLN`
            taxes.c = localStorage.countTaxOne4;
        }
    }
    if (selectedTaxGroup ==="taxTwo") {

        if (sum <= free2) {
            taxes.s = "0.00 PLN";
            taxes.c = localStorage.countTaxTwo1;
        }
        if (sum > free2 && sum <= over1) {
            taxes.s = `${ (0.07*sum).toFixed(2) } PLN`
            taxes.c = localStorage.countTaxTwo2;
        }
        if (sum > over1 && sum <= over2) {
            taxes.s = `${ (0.09*(sum - over1) + 779.00).toFixed(2)} PLN`
            taxes.c = localStorage.countTaxTwo3;
        }
        if (sum > over2) {
            taxes.s = `${ (0.12*(sum - over2) + 1780.60).toFixed(2)} PLN`
            taxes.c = localStorage.countTaxTwo4;
        }
    }
    if (selectedTaxGroup ==="taxThree") {

        if (sum <= free3) {
            taxes.s = "0.00 PLN";
            taxes.c = localStorage.countTaxThree1;
        }
        if (sum > free3 && sum <= over1) {
            taxes.s = `${ (0.12*sum).toFixed(2) } PLN`
            taxes.c = localStorage.countTaxThree2;
        }
        if (sum > over1 && sum <= over2) {
            taxes.s = `${ (0.16*(sum - over1) + 1335.40).toFixed(2)} PLN`
            taxes.c = localStorage.countTaxThree3;
        }
        if (sum > over2) {
            taxes.s = `${ (0.20*(sum - over2) + 3115.90).toFixed(2)} PLN`
            taxes.c = localStorage.countTaxThree4;
        }
    } else if (!selectedTaxGroup) {
        taxes.s = localStorage.countTaxInfo1;
        taxes.c = localStorage.countTaxInfo2;
    }
    return taxes;
}
export default countTax;
