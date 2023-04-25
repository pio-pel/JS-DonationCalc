function animation(element, time) {
  element.classList.remove("hid");
  setTimeout(() => {
    element.classList.add("hid");
  }, time);
}

export default animation;
