const burgerInput = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");
document.addEventListener("click", (e) => {
  if (e.currentTarget !== burgerMenu) burgerInput.checked = false;
  console.log(e.currentTarget);
});
