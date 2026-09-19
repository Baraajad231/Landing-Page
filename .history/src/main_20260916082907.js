const burgerInput = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");
burgerInput.addEventListener("blur", (e) => {
  console.log(e.target.checked);
});
