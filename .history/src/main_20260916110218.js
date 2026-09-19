const burgerInput = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");
burgerInput.addEventListener("blur", (e) => {
  if (e.currentTarget == burgerInput) e.preventDefault();
  console.log(e.currentTarget);
});
