const burgerInput = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");

document.addEventListener("click", (e) => {
  const clickedBurger = burgerInput.contains(e.target);
  const clickedMenu = burgerMenu.contains(e.target);
  const isOpen = burgerInput.checked;

  if (!clickedBurger && !clickedMenu) {
    burgerInput.checked = false;
  }
  if (clickedBurger && isOpen) {
    burgerInput.checked = false;
  }
});

// const burgerInput = document.querySelector("#burger");
// const burgerMenu = document.querySelector("#burgerMenu");
// burgerInput.addEventListener("blur", (e) => {
//   if (e.currentTarget !== burgerMenu) burgerInput.checked = false;
//   console.log(e.currentTarget);
// });
