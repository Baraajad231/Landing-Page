const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < 120) {
    header.classList.remove("hidden");
  } else if (currentScrollY >= 60) {
    header.classList.add("hidden");
  }
});
