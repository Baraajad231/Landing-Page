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

const feedbacks = document.querySelectorAll("#feedback");
const bullets = document.querySelectorAll("#feedbackBullet");
bullets.forEach((bullet) => {
  bullet.addEventListener("click", (index, e) => {
    const activeBullet = () => document.querySelector(".activeBullet");

    activeBullet()?.classList?.remove("activeBullet");
    bullet.classList.add("activeBullet");
  });
});

feedbacks.forEach((fb) => {
  fb.addEventListener("click", (index, e) => {
    const activeFeedback = () => document.querySelector(".activeFeedback");
    console.log(activeFeedback());

    activeFeedback()?.classList?.remove("activeFeedback");
    activeFeedback()?.classList?.add("activeBullet");
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
