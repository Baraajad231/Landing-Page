const burgerInput = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");

document.addEventListener("click", (event) => {
  const clickedBurger = burgerInput.contains(event.target);
  const clickedMenu = burgerMenu.contains(event.target);

  if (!clickedBurger && !clickedMenu) {
    burgerInput.checked = false;
  }
});
