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

// 1. Define the callback function
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Element is in view:", entry.target);
      // Perform actions (e.g., trigger animations, load data)
    } else {
      console.log("Element left the view:", entry.target);
    }
  });
};

// 2. Configure options
const options = {
  root: null, // Defaults to the browser viewport
  rootMargin: "0px", // Margin around root (similar to CSS margin)
  threshold: 0.5, // Triggers when 50% of the element is visible
};

// 3. Instantiate the observer
const observer = new IntersectionObserver(handleIntersection, options);

// 4. Start observing target element(s)
const target = document.querySelector(".card");
observer.observe(target);
