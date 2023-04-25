// Hamburger menu open-close button
function buttonMenu() {
  let status = document.getElementById("offCanvasMenu").style.height;
  if (status === "300px") {
    document.getElementById("offCanvasMenu").style.height = "0px";
    document.getElementById("burgerButton").style.marginTop = "0px";
  } else {
    document.getElementById("offCanvasMenu").style.height = "300px";
    document.getElementById("burgerButton").style.marginTop = "300px";
  }
}

export default buttonMenu;
