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
  // 1. تحديد جميع السكاشن في الصفحة
  const allSections = document.querySelectorAll("section");

  // 2. دالة التحكم عند التقاطع (Intersection Callback)
  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // إضافة كلاس الظهور عند الوصول للسكشن
        entry.target.classList.add("is-visible");

        // إيقاف مراقبة السكشن بعد ظهوره لمرة واحدة (لتحسين الأداء)
        observer.unobserve(entry.target);
      }
    });
  };

  // 3. إعداد الـ Observer
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null, // استخدام الفيو بورت (الشاشة)
    threshold: 0.15, // يتم التفعيل عند ظهور 15% من السكشن
  });

  // 4. إعطاء الحالة المخفية الأولية وبدء مراقبة كل سكشن
  allSections.forEach((section) => {
    section.classList.add("reveal-section");
    sectionObserver.observe(section);
  });
});
