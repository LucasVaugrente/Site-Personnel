const navbar = document.querySelector("nav");

const menuBurger = document.querySelector(".menu-burger");
const menuBurgerClose = document.querySelector(".menu-burger-close");
const navLinks = document.querySelector(".nav-links");

const changeLanguageButton = document.querySelector("#selectLanguage");
const optionsLanguages = document.querySelector(".optionsLanguages");
const languageSelected = document.querySelector(".languageSelected");

const LinkAcc = document.querySelector(".link_welcome");
const LinkMy = document.querySelector(".link-myself");
const LinkPro = document.querySelector(".link-projects");
const LinkSki = document.querySelector(".link-skills");
const LinkExp = document.querySelector(".link-experiences");
const LinkCon = document.querySelector(".link-contact");

changeLanguageButton.addEventListener("click", () => {
  optionsLanguages.classList.toggle("active");
});


menuBurger.addEventListener("click", () => {
  navLinks.classList.toggle("open-menu");
});

menuBurgerClose.addEventListener("click", () => {
  navLinks.classList.toggle("open-menu");
});

LinkAcc.addEventListener("click", () => {
  navLinks.classList.toggle("open-menu");
});

LinkMy.addEventListener("click", () => {
  navLinks.classList.toggle("open-menu");
});

LinkPro.addEventListener("click", () => {
  navLinks.classList.toggle("open-menu");
});

LinkSki.addEventListener("click", () => {
  navLinks.classList.toggle("open-menu");
});

LinkExp.addEventListener("click", () => {
  navLinks.classList.toggle("open-menu");
});

LinkCon.addEventListener("click", () => {
  navLinks.classList.toggle("open-menu");
});


window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    navbar.classList.add("onTop");
    navbar.classList.remove("notOnTop");
  } else if (window.scrollY != 0) {
    navbar.classList.remove("onTop");
    navbar.classList.add("notOnTop");
  }
});
