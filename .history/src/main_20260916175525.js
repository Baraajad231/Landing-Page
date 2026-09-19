const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // إخفاء/إظهار عبر الشفافية أو التحريك المكاني بدلاً من hidden
  if (currentScrollY < 120) {
    header.classList.add(
      "opacity-0",
      "pointer-events-none",
      "-translate-y-full",
    );
    header.classList.remove("opacity-100", "translate-y-0");
  } else {
    header.classList.remove(
      "opacity-0",
      "pointer-events-none",
      "-translate-y-full",
    );
    header.classList.add("opacity-100", "translate-y-0");
  }
});
