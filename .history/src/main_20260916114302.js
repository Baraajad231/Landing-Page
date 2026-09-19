const burgerInput = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");

const isOpen = () => burgerInput.checked;
console.log(isOpen);

isOpen &&
  document.addEventListener("click", (e) => {
    const clickedBurger = burgerInput.contains(e.target);
    const clickedMenu = burgerMenu.contains(e.target);

    console.log(1);

    if  !clickedMenu) {
      burgerInput.checked = false;
      console.log(2);
    }
  });

// const burgerInput = document.querySelector("#burger");
// const burgerMenu = document.querySelector("#burgerMenu");
// burgerInput.addEventListener("blur", (e) => {
//   if (e.currentTarget !== burgerMenu) burgerInput.checked = false;
//   console.log(e.currentTarget);
// });
