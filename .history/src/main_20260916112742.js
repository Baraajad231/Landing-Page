const burgerInput = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");
document.addEventListener("blur", (e) => {
  burgerInput.checked = false;
  console.log(e.currentTarget);
});
