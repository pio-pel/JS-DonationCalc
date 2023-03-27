// Return object with currency name, result (value * mid) & mid rate
export function countResult(mainArray, targetID) {
    const results = {
        cur: "",
        res: "",
        mid: ""
    };

    for (let e of mainArray) {
        if (e.code ===targetID) {
            results.res = (e.mid * Number(curSum.value)).toFixed(2);
            results.mid = e.mid;
            results.cur = ((e.currency.charAt(0)).toUpperCase()).concat(e.currency.slice(1, e.currency.length));
        }
    }
    return results;
};
