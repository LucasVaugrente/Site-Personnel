const menuHamburger = document.querySelector(".menu-burger");
const overlay = document.querySelector(".menu-overlay");
const overlay2 = document.querySelector(".menu-overlay2");
const menuHamburgerClose = document.querySelector(".menu-burger-close");
const navLinks = document.querySelector(".nav-links");

const LinkAcc = document.querySelector(".link-debut");
const LinkMy = document.querySelector(".link-myself");
const LinkPro = document.querySelector(".link-projets");
const LinkSki = document.querySelector(".link-skills");
const LinkExp = document.querySelector(".link-experience");
const LinkCon = document.querySelector(".link-contact");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  overlay.classList.toggle("menu-overlay_display");
});

menuHamburgerClose.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  overlay2.classList.toggle("menu-overlay2_display");
});

LinkAcc.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

LinkMy.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

LinkPro.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

LinkSki.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

LinkExp.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

LinkCon.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
