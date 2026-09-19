const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 50) {
    header.classList.add("hidden");
  } else if (currentScrollY < 30) {
    header.classList.remove("hidden");
  }
});
