// Return object with currency code, result (value * mid) & mid rate
function countResult(dataRates, targetID, enteredSumValue) {
  const results = {
    code: "",
    result: "",
    mid: "",
  };

  for (let e of dataRates) {
    if (e.code === targetID) {
      results.result = (e.mid * Number(enteredSumValue)).toFixed(2);
      results.mid = e.mid;
      results.code = e.code; // or ((e.currency.charAt(0)).toUpperCase()).concat(e.currency.slice(1, e.currency.length)) to show full currency name
    }
  }
  return results;
}
export default countResult;
