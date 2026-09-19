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
  bullet.addEventListener("click", () => {
    const index = bullet.getAttribute("data-index");
    setActiveIndex(index);
  });
});

carts.forEach((cart) => {
  cart.addEventListener("click", () => {
    const index = cart.getAttribute("data-index");
    setActiveIndex(index);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // إلغاء المراقبة لتجنب إعادة تحريك العناصر واستجابة أفضل للأداء
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      // يبدأ التفعيل قبل دخول السكشن بـ 80px ليعطي شعوراً بانسيابية التمرير
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.05,
    },
  );

  sections.forEach((section) => {
    section.classList.add("reveal-section");
    sectionObserver.observe(section);
  });
});
