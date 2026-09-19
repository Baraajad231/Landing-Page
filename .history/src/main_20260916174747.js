const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 50) {
    header.classList.add("hidden");
  } else if (currentScrollY < 60) {
    header.classList.remove("hidden");
  }
});
