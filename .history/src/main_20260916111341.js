const burgerInput = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");

document.addEventListener("click", (e) => {
  const clickedBurger = burgerInput.contains(e.target);
  const clickedMenu = burgerMenu.contains(e.target);

  if (!clickedMenu) {
    burgerInput.checked = false;
  }
});
