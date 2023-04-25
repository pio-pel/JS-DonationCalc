function validationAlert(htmlElement, message) {
  const validAlert = htmlElement.appendChild(document.createElement("div"));
  validAlert.classList.add("inputerror");
  validAlert.innerText = message;

  return validAlert;
}

export default validationAlert;
