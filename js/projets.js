let Section_Projets = document.querySelector(".section-projets");
let Projet_D = document.querySelector(".projet_d");
let Projet_G = document.querySelector(".projet_g");

let xhr = new XMLHttpRequest();

xhr.open('GET', '../data/projets.json', true);

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function() {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);

        // Boucle qui parcourt tous les projets
        for (let index = 0; index < data.projets.length; index++) {
            
            // Projet à gauche
            if(index % 2 === 0) {

                let bloc = document.createElement('div');
                let bloc2 = document.createElement('div');
                bloc.classList.add('p-content-gauche');
                bloc2.classList.add('titre-projet-gauche');

                /* ########################## Date, Type et Titre PROJET ########################## */
                let Text_Date = document.createElement('p');
                let Text_Titre = document.createElement('h1');
                Text_Titre.classList.add('p-titre');

                Text_Date.innerHTML = data.projets[index].date + " - " + data.projets[index].type_projet;
                Text_Titre.innerHTML = data.projets[index].titre;

                bloc2.appendChild(Text_Date);
                bloc2.appendChild(Text_Titre);

                /* ########################## Description PROJET ########################## */
                let Text_Desc = document.createElement('p');
                Text_Desc.classList.add('p-pitch-gauche');
                Text_Desc.innerHTML = data.projets[index].description;

                bloc.appendChild(Text_Desc);

                /* ########################## Langages Programmation PROJET ########################## */
                let bloc4 = document.createElement('div');
                bloc4.classList.add('git-lan');

                
                bloc.appendChild(bloc2);
                Projet_G.appendChild(bloc);
            }
            // Projet à droite
            else {
                console.log("droite");
            }
        }

    } else {
        console.error('Une erreur est survenue');
    }
};


xhr.send();