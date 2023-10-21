// Menu Show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "2000",
  reset: "true",
});

// Scroll Home
sr.reveal(".home__title", { delay: 100 });
sr.reveal(".home__scroll", { delay: 200 });
sr.reveal(".home__img", { origin: "right", delay: 400 });

// Scroll About
sr.reveal(".about__text", {});

// Scroll Menu Coffee & Dessert Menu
sr.reveal(".box", { delay: 500 });

// Scroll Comment
sr.reveal(".comment__input", {});
sr.reveal(".comment__button", {});
