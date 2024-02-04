let navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    navbar.classList.remove("notOnTop");
  } else if (window.scrollY != 0) {
    navbar.classList.add("notOnTop");
  }
});
