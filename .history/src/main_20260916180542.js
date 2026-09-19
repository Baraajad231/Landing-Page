const header = document.querySelector("#header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // إخفاء الهيدر عند التمرير لأسفل وتجاوز 120px
  if (currentScrollY > 120) {
    header.classList.add("-translate-y-full", "opacity-0");
  } else {
    // إظهاره عند العودة لأعلى الشاشة
    header.classList.remove("-translate-y-full", "opacity-0");
  }

  lastScrollY = currentScrollY;
});
