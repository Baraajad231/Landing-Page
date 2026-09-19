const header = document.querySelector("#header");

header.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 50) {
    header.classList.add("hidden");
  }
});
