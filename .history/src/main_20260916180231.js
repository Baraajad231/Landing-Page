const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < 120) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
});
