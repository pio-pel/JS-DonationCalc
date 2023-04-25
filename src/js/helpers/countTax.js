// Count tax & return object with tax-sum & comment
function countTax(selectedTaxGroup, result) {
  const sum = Number(result);
  const taxes = {
    taxAmount: 0.0,
    taxComment: "",
  };
  const taxFreeAllowance1 = 10434;
  const taxFreeAllowance2 = 7878;
  const taxFreeAllowance3 = 5308;
  const taxOver1 = 11128;
  const taxOver2 = 22256;

  if (selectedTaxGroup === "taxZero") {
    taxes.taxAmount = 0.0;
    if (sum > taxFreeAllowance1) {
      taxes.taxComment = localStorage.countTaxZero1;
    } else {
      taxes.taxComment = localStorage.countTaxZero2;
    }
  }
  if (selectedTaxGroup === "taxOne") {
    if (sum <= taxFreeAllowance1) {
      taxes.taxAmount = 0.0;
      taxes.taxComment = localStorage.countTaxOne1;
    }
    if (sum > taxFreeAllowance1 && sum <= taxOver1) {
      taxes.taxAmount = 0.03 * sum;
      taxes.taxComment = localStorage.countTaxOne2;
    }
    if (sum > taxOver1 && sum <= taxOver2) {
      taxes.taxAmount = 0.05 * (sum - taxOver1) + 333.9;
      taxes.taxComment = localStorage.countTaxOne3;
    }
    if (sum > taxOver2) {
      taxes.taxAmount = 0.07 * (sum - taxOver2) + 890.3;
      taxes.taxComment = localStorage.countTaxOne4;
    }
  }
  if (selectedTaxGroup === "taxTwo") {
    if (sum <= taxFreeAllowance2) {
      taxes.taxAmount = 0.0;
      taxes.taxComment = localStorage.countTaxTwo1;
    }
    if (sum > taxFreeAllowance2 && sum <= taxOver1) {
      taxes.taxAmount = 0.07 * sum;
      taxes.taxComment = localStorage.countTaxTwo2;
    }
    if (sum > taxOver1 && sum <= taxOver2) {
      taxes.taxAmount = 0.09 * (sum - taxOver1) + 779;
      taxes.taxComment = localStorage.countTaxTwo3;
    }
    if (sum > taxOver2) {
      taxes.taxAmount = 0.12 * (sum - taxOver2) + 1780;
      taxes.taxComment = localStorage.countTaxTwo4;
    }
  }
  if (selectedTaxGroup === "taxThree") {
    if (sum <= taxFreeAllowance3) {
      taxes.taxAmount = 0.0;
      taxes.taxComment = localStorage.countTaxThree1;
    }
    if (sum > taxFreeAllowance3 && sum <= taxOver1) {
      taxes.taxAmount = 0.12 * sum;
      taxes.taxComment = localStorage.countTaxThree2;
    }
    if (sum > taxOver1 && sum <= taxOver2) {
      taxes.taxAmount = 0.16 * (sum - taxOver1) + 1335.4;
      taxes.taxComment = localStorage.countTaxThree3;
    }
    if (sum > taxOver2) {
      taxes.taxAmount = 0.2 * (sum - taxOver2) + 3115.9;
      taxes.taxComment = localStorage.countTaxThree4;
    }
  } else if (!selectedTaxGroup) {
    taxes.taxAmount = localStorage.countTaxInfo1;
    taxes.taxComment = localStorage.countTaxInfo2;
  }
  taxes.taxAmount =
    typeof taxes.taxAmount === "number"
      ? taxes.taxAmount.toFixed(2)
      : taxes.taxAmount;
  return taxes;
}
export default countTax;
