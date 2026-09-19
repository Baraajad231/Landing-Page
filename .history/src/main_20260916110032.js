const burgerInput = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");
burgerInput.addEventListener("blur", (e) => {
  if (e.currentTarget !== burgerMenu) e.target.checked = false;
  console.log(e.currentTarget);
});
