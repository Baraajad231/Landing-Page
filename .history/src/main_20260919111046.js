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

document.addEventListener("DOMContentLoaded", () => {
  const dropdownButtons = document.querySelectorAll("[data-dropdown-trigger]");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // التفعيل فقط في الشاشات الصغيرة (أقل من 1024px)
      if (window.innerWidth >= 1024) return;

      const targetId = button.getAttribute("data-dropdown-trigger");
      const targetMenu = document.getElementById(targetId);
      const icon = button.querySelector(".chevron-icon");
      const isOpen = button.getAttribute("aria-expanded") === "true";

      // إغلاق باقي القوائم المفتوحة (Optional Accordion effect)
      dropdownButtons.forEach((otherBtn) => {
        if (otherBtn !== button) {
          otherBtn.setAttribute("aria-expanded", "false");
          const otherMenuId = otherBtn.getAttribute("data-dropdown-trigger");
          const otherMenu = document.getElementById(otherMenuId);
          const otherIcon = otherBtn.querySelector(".chevron-icon");

          if (otherMenu) {
            otherMenu.style.maxHeight = "0px";
            otherMenu.style.opacity = "0";
          }
          if (otherIcon) {
            otherIcon.style.transform = "rotate(0deg)";
          }
        }
      });

      // تبديل حالة القائمة الحالية
      if (!isOpen) {
        button.setAttribute("aria-expanded", "true");
        // حساب الارتفاع الحقيقي للمحتوى للانزلاق السلس
        targetMenu.style.maxHeight = targetMenu.scrollHeight + "px";
        targetMenu.style.opacity = "1";
        if (icon) icon.style.transform = "rotate(180deg)";
      } else {
        button.setAttribute("aria-expanded", "false");
        targetMenu.style.maxHeight = "0px";
        targetMenu.style.opacity = "0";
        if (icon) icon.style.transform = "rotate(0deg)";
      }
    });
  });

  // إعادة التعيين عند تكبير الشاشة (حتى لا تظل التنسيقات معلقة)
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      dropdownButtons.forEach((button) => {
        button.setAttribute("aria-expanded", "false");
        const targetId = button.getAttribute("data-dropdown-trigger");
        const targetMenu = document.getElementById(targetId);
        const icon = button.querySelector(".chevron-icon");

        if (targetMenu) {
          targetMenu.style.maxHeight = "";
          targetMenu.style.opacity = "";
        }
        if (icon) {
          icon.style.transform = "";
        }
      });
    }
  });
});
