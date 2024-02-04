let frontWeb = document.querySelector(".Cat-languages-W");
let softwareDev = document.querySelector(".Cat-languages-D");
let backWeb = document.querySelector(".Cat-languages-B");

let blockFrontWeb = document.querySelector(".front");
let blockSoftwareDev = document.querySelector(".software");
let blockBackWeb = document.querySelector(".back");

fetch('../data/skills.json')
    .then(response => response.json())
    .then(data => {
        for (const type in data.skills) {

            for (let index = 0; index < data.skills[type].length; index++) {

                let div = document.createElement('div');
                let div_image = document.createElement('div');
                let link = document.createElement('a');
                let img = document.createElement('img');
                let span = document.createElement('span');

                div.classList.add("zoom");
                div.classList.add("apparition");
                div_image.classList.add("image");

                link.setAttribute("target", "_blank");
                link.setAttribute("href", data.skills[type][index].link);

                img.setAttribute("src", data.skills[type][index].image);
                img.setAttribute("alt", "Logo " + data.skills[type][index].name);
                img.setAttribute("title", data.skills[type][index].name);
                img.setAttribute("width", "75");
                img.setAttribute("height", "75");

                span.innerHTML = data.skills[type][index].name;

                link.appendChild(img);
                div_image.appendChild(link)
                div.appendChild(div_image);
                div.appendChild(span);
                if (type === "software") {
                    blockSoftwareDev.appendChild(div);
                } else if (type === "front") {
                    blockFrontWeb.appendChild(div);
                } else {
                    blockBackWeb.appendChild(div);
                }
            }
        }
    })
    .catch(error => console.error(error));


let languages = document.getElementsByClassName("zoom");

function getStyle(a, b) {
    return window.getComputedStyle(b, null)[a];
}

frontWeb.addEventListener("click", () => {
    if (getStyle("background-color", frontWeb) == "rgb(23, 17, 54)") {
    } else {
        frontWeb.classList.toggle("type_selected");
        softwareDev.classList.remove("type_selected");
        softwareDev.style.transition = "all 0.3s ease";
        backWeb.classList.remove("type_selected");
        backWeb.style.transition = "all 0.3s ease";

        blockSoftwareDev.style.display = "none";
        blockBackWeb.style.display = "none";
        blockFrontWeb.style.display = "flex";

        for (let index = 0; index < languages.length; index++) {
            languages[index].classList.remove("apparition-visible");
        }
    }
});


softwareDev.addEventListener("click", () => {
    if (getStyle("background-color", softwareDev) == "rgb(23, 17, 54)") {
    } else {
        softwareDev.classList.toggle("type_selected");
        frontWeb.classList.remove("type_selected");
        backWeb.classList.remove("type_selected");

        blockFrontWeb.style.display = "none";
        blockBackWeb.style.display = "none";
        blockSoftwareDev.style.display = "flex";

        for (let index = 0; index < languages.length; index++) {
            languages[index].classList.remove("apparition-visible");
        }
    }
});

backWeb.addEventListener("click", () => {
    if (getStyle("background-color", backWeb) == "rgb(23, 17, 54)") {
    } else {
        backWeb.classList.toggle("type_selected");
        softwareDev.classList.remove("type_selected");
        frontWeb.classList.remove("type_selected");

        blockSoftwareDev.style.display = "none";
        blockFrontWeb.style.display = "none";
        blockBackWeb.style.display = "flex";

        for (let index = 0; index < languages.length; index++) {
            languages[index].classList.remove("apparition-visible");
        }
    }
});
