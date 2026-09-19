const burgerInput = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");

const isOpen = () => burgerInput.checked;
isOpen &&
  document.addEventListener("click", (e) => {
    const clickedBurger = burgerInput.contains(e.target);
    const clickedMenu = burgerMenu.contains(e.target);

    if (!clickedMenu) {
      burgerInput.checked = false;
    }
  });

// const burgerInput = document.querySelector("#burger");
// const burgerMenu = document.querySelector("#burgerMenu");
// burgerInput.addEventListener("blur", (e) => {
//   if (e.currentTarget !== burgerMenu) burgerInput.checked = false;
//   console.log(e.currentTarget);
// });
