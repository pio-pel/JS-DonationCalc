function inputValidation(enteredSum) {
  //input max length 8 digits
  if (enteredSum.value.length > enteredSum.maxLength) {
    enteredSum.value = enteredSum.value.slice(0, enteredSum.maxLength);
  }
  //only digits and just one dot
  if (enteredSum.value.match(/[^.0-9]/) || enteredSum.value.match(/\.\./)) {
    enteredSum.value = enteredSum.value.slice(0, -1);
  }
  //max 2 digits after dot
  if (enteredSum.value.match(/\./)) {
    enteredSum.value = enteredSum.value.slice(
      0,
      enteredSum.value.indexOf(".") + 3
    );
  }
}
export default inputValidation;
