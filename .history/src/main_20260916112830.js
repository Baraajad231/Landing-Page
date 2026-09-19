const burgerInput = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");
burgerInput.addEventListener("blur", (e) => {
  burgerInput.checked = false;
  console.log(e.currentTarget);
});
