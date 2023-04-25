// Tax-groups selector
function groupSelect(e) {
  const taxArea = document.querySelector(".tArea");
  const target = e.target;
  const buttons = document.querySelectorAll(".tButtons");

  if (target.classList.contains("buttonClicked")) {
    target.classList.remove("buttonClicked");
    taxArea.innerHTML = localStorage.groupSelect1;
  } else {
    for (let button of buttons) {
      button.classList.remove("buttonClicked");
    }
    if (target.id === "taxZero") {
      taxArea.textContent = localStorage.groupSelect2;
      target.classList.add("buttonClicked");
    }
    if (target.id === "taxOne") {
      taxArea.textContent = localStorage.groupSelect3;
      target.classList.add("buttonClicked");
    }
    if (target.id === "taxTwo") {
      taxArea.textContent = localStorage.groupSelect4;
      target.classList.add("buttonClicked");
    }
    if (target.id === "taxThree") {
      taxArea.textContent = localStorage.groupSelect5;
      target.classList.add("buttonClicked");
    }
    return target.id;
  }
}
export default groupSelect;
