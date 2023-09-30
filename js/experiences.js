let Section_experiences = document.querySelector(".section-experiences");

fetch('../data/experiences.json')
    .then(response => response.json())
    .then(data => {
        for (let index = 0; index < data.experiences.length; index++) {

            let article = document.createElement('article');
            let bloc_content = document.createElement('div');
            let bloc_titre = document.createElement('div');

            // Si l'experience est à gauche
            if (index % 2 === 0) {
                article.classList.add('experience_g');
                bloc_content.classList.add('p-content-gauche');
                bloc_titre.classList.add('titre-experience-gauche');
            } else {
                article.classList.add('experience_d');
                bloc_content.classList.add('p-content-droite');
                bloc_titre.classList.add('titre-experience-droite');
            }

            let p = index + 1;
            article.classList.add('experience_' + p);

            /* ########################## Date, Type et Titre experience ########################## */
            let Text_Date = document.createElement('p');
            let Text_Titre = document.createElement('h1');
            Text_Titre.classList.add('p-titre');

            Text_Date.innerHTML = data.experiences[index].date + " - " + data.experiences[index].type_experience;
            Text_Titre.innerHTML = data.experiences[index].titre;

            bloc_titre.appendChild(Text_Date);
            bloc_titre.appendChild(Text_Titre);

            /* ########################## Description experience ########################## */
            let Text_Desc = document.createElement('p');

            // Si l'experience est à gauche
            if (index % 2 === 0) {
                Text_Desc.classList.add('p-pitch-gauche');
            } else {
                Text_Desc.classList.add('p-pitch-droite');
            }

            Text_Desc.innerHTML = data.experiences[index].description;

            /* ########################## Langages Programmation experience ########################## */
            let bloc_lan_git = document.createElement('div');

            // Si le experience est à gauche
            if (index % 2 === 0) {
                bloc_lan_git.classList.add('git-lan-g');
            } else {
                bloc_lan_git.classList.add('git-lan-d');
            }

            for (let j = 0; j < data.experiences[index].langages.length; j++) {

                let ahref = document.createElement('a');
                ahref.classList.add("langues-prog");
                ahref.innerHTML = data.experiences[index].langages[j].nom;
                ahref.setAttribute("target", "_blank");
                ahref.setAttribute("href", data.experiences[index].langages[j].url);

                bloc_lan_git.appendChild(ahref);
            }

            /* ########################## Image experience ########################## */
            let img = document.createElement("img");
            img.setAttribute("src", data.experiences[index].image);

            // ##### AJOUT DE TOUS LES ELEMENTS ##### //
            bloc_content.appendChild(bloc_titre);
            bloc_content.appendChild(Text_Desc);
            bloc_content.appendChild(bloc_lan_git);

            // Si l'experience est à gauche
            if (index % 2 === 0) {
                article.appendChild(bloc_content);
                article.appendChild(img);
            } else {
                article.appendChild(img);
                article.appendChild(bloc_content);
            }

            article.classList.add("revelation");
            Section_experiences.appendChild(article);

        }

    })
    .catch(error => console.error(error));