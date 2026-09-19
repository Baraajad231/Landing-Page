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

const carts = document.querySelectorAll(".feedback-card");
const bullets = document.querySelectorAll(".feedback-bullet");

const setActiveIndex = (index) => {
  document.querySelector(".activeFeedback")?.classList.remove("activeFeedback");
  document.querySelector(".activeBullet")?.classList.remove("activeBullet");

  carts[index]?.classList.add("activeFeedback");
  bullets[index]?.classList.add("activeBullet");
};
bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e, index) => {
    setActiveIndex(index);
  });
});

carts.forEach((cart) => {
  cart.addEventListener("click", (e, index) => {
    setActiveIndex(index);
  });
});

// const plans = document.querySelectorAll("#plan");
// console.log(plans);

// plans.forEach((plan) => {
//   plan.addEventListener("click", (e) => {
//     const isActive = plan.classList.contains("activePlan");
//     plan.classList.toggle("activePlan", !isActive);
//     console.log(plan);
//   });
// });
