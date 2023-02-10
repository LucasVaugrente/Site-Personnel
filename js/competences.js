let frontWeb = document.querySelector(".Cat-langages-W");
let softwareDev = document.querySelector(".Cat-langages-D");
let backWeb = document.querySelector(".Cat-langages-B");

let blockFrontWeb = document.querySelector(".front");
let blockSoftwareDev = document.querySelector(".software");
let blockBackWeb = document.querySelector(".back");

let langages = document.getElementsByClassName("zoom");

function getStyle(a, b) {
  return window.getComputedStyle(b, null)[a];
}

frontWeb.addEventListener("click", () => {
  if (getStyle("background-color", frontWeb) == "rgb(23, 17, 54)") {
  } else {
    frontWeb.classList.toggle("type_selectionne");
    softwareDev.classList.remove("type_selectionne");
    softwareDev.style.transition = "all 0.3s ease";
    backWeb.classList.remove("type_selectionne");
    backWeb.style.transition = "all 0.3s ease";

    blockSoftwareDev.style.display = "none";
    blockBackWeb.style.display = "none";
    blockFrontWeb.style.display = "flex";

    for (let index = 0; index < langages.length; index++) {
      langages[index].classList.remove("apparition-visible");
    }

    frontWeb.classList.toggle("transition_langages");
  }
});

softwareDev.addEventListener("click", () => {
  if (getStyle("background-color", softwareDev) == "rgb(23, 17, 54)") {
  } else {
    softwareDev.classList.toggle("type_selectionne");
    frontWeb.classList.remove("type_selectionne");
    backWeb.classList.remove("type_selectionne");

    blockFrontWeb.style.display = "none";
    blockBackWeb.style.display = "none";
    blockSoftwareDev.style.display = "flex";

    for (let index = 0; index < langages.length; index++) {
      langages[index].classList.remove("apparition-visible");
    }
  }
});

backWeb.addEventListener("click", () => {
  if (getStyle("background-color", backWeb) == "rgb(23, 17, 54)") {
  } else {
    backWeb.classList.toggle("type_selectionne");
    softwareDev.classList.remove("type_selectionne");
    frontWeb.classList.remove("type_selectionne");

    blockSoftwareDev.style.display = "none";
    blockFrontWeb.style.display = "none";
    blockBackWeb.style.display = "flex";

    for (let index = 0; index < langages.length; index++) {
      langages[index].classList.remove("apparition-visible");
    }
  }
});
