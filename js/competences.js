let frontWeb = document.querySelector(".Cat-langages-W");
let softwareDev = document.querySelector(".Cat-langages-D");
let backWeb = document.querySelector(".Cat-langages-B");

let blockFrontWeb = document.querySelector(".front");
let blockSoftwareDev = document.querySelector(".software");
let blockBackWeb = document.querySelector(".back");

fetch('../data/competences.json')
    .then(response => response.json())
    .then(data => {
        for (const type in data.competences) {
            console.log(type);
            console.log(data.competences[type].length);
            for (let index = 0; index < data.competences[type].length; index++) {

                console.log("ok");
    
                let div = document.createElement('div');
                let div_image = document.createElement('div');
                let lien = document.createElement('a');
                let img = document.createElement('img');
                let span = document.createElement('span');
    
                div.classList.add("zoom");
                div.classList.add("apparition");
                div_image.classList.add("image");
    
                lien.setAttribute("target", "_blank");
                lien.setAttribute("href", data.competences[type][index].lien);
    
                img.setAttribute("src", data.competences[type][index].image);
                img.setAttribute("alt", "Logo " + data.competences[type][index].nom);
                img.setAttribute("title", data.competences[type][index].nom);
                img.setAttribute("width", "75");
                img.setAttribute("height", "75");
    
                span.innerHTML = data.competences[type][index].nom;
    
                lien.appendChild(img);
                div_image.appendChild(lien)
                div.appendChild(div_image);
                div.appendChild(span);
                if(type === "software") {
                    blockSoftwareDev.appendChild(div);
                } else if(type === "front") {
                    blockFrontWeb.appendChild(div);
                } else {
                    blockBackWeb.appendChild(div);
                }
            }
        }
    })
    .catch(error => console.error(error));


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
