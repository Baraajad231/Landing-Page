const burgerBtn = document.querySelector("#burgerBtn");
const burgerMenu = document.querySelector("#burgerMenu");

// دالة التبديل
function toggleMenu(isOpen) {
  const shouldOpen = isOpen ?? burgerMenu.classList.contains("hidden");

  burgerMenu.classList.toggle("hidden", !shouldOpen);
  burgerBtn.setAttribute("aria-expanded", shouldOpen);
}

// 1. فتح/إغلاق عند النقر على الزر
burgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// 2. إغلاق القائمة عند النقر خارجها
document.addEventListener("click", (e) => {
  if (
    !burgerMenu.contains(e.target) &&
    !burgerMenu.classList.contains("hidden")
  ) {
    toggleMenu(false);
  }
});

// 3. إغلاق القائمة عند الضغط على زر Escape (مهم للإتاحة)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !burgerMenu.classList.contains("hidden")) {
    toggleMenu(false);
  }
});

// const burgerInput = document.querySelector("#burger");
// const burgerMenu = document.querySelector("#burgerMenu");
// burgerInput.addEventListener("blur", (e) => {
//   if (e.currentTarget !== burgerMenu) burgerInput.checked = false;
//   console.log(e.currentTarget);
// });
