const menuHamburger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");

const LinkAcc = document.querySelector(".link-debut");
const LinkMy = document.querySelector(".link-myself");
const LinkPro = document.querySelector(".link-projets");
const LinkSki = document.querySelector(".link-skills");
const LinkCon = document.querySelector(".link-contact");

menuHamburger.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu');
})

LinkAcc.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu');
})

LinkMy.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu');
})

LinkPro.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu');
})

LinkSki.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu');
})

LinkCon.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu');
})