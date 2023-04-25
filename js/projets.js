let Section_Projets = document.querySelector(".section-projets");

fetch('../data/projets.json')
    .then(response => response.json())
    .then(data => {
        for (let index = 0; index < data.projets.length; index++) {

            let article = document.createElement('article');
            let bloc_content = document.createElement('div');
            let bloc_titre = document.createElement('div');

            // Si le projet est à gauche
            if (index % 2 === 0) {
                article.classList.add('projet_g');
                bloc_content.classList.add('p-content-gauche');
                bloc_titre.classList.add('titre-projet-gauche');
            } else {
                article.classList.add('projet_d');
                bloc_content.classList.add('p-content-droite');
                bloc_titre.classList.add('titre-projet-droite');
            }

            let p = index + 1;
            article.classList.add('projet_' + p);
            // article.classList.add('revelation');

            /* ########################## Date, Type et Titre PROJET ########################## */
            let Text_Date = document.createElement('p');
            let Text_Titre = document.createElement('h1');
            Text_Titre.classList.add('p-titre');

            Text_Date.innerHTML = data.projets[index].date + " - " + data.projets[index].type_projet;
            Text_Titre.innerHTML = data.projets[index].titre;

            bloc_titre.appendChild(Text_Date);
            bloc_titre.appendChild(Text_Titre);

            /* ########################## Description PROJET ########################## */
            let Text_Desc = document.createElement('p');

            // Si le projet est à gauche
            if (index % 2 === 0) {
                Text_Desc.classList.add('p-pitch-gauche');
            } else {
                Text_Desc.classList.add('p-pitch-droite');
            }

            Text_Desc.innerHTML = data.projets[index].description;

            /* ########################## Langages Programmation PROJET ########################## */
            let bloc_lan_git = document.createElement('div');

            // Si le projet est à gauche
            if (index % 2 === 0) {
                bloc_lan_git.classList.add('git-lan-g');
            } else {
                bloc_lan_git.classList.add('git-lan-d');
            }

            for (let j = 0; j < data.projets[index].langages.length; j++) {

                let ahref = document.createElement('a');
                ahref.classList.add("langues-prog");
                ahref.innerHTML = data.projets[index].langages[j].nom;
                ahref.setAttribute("target", "_blank");
                ahref.setAttribute("href", data.projets[index].langages[j].url);

                bloc_lan_git.appendChild(ahref);
            }

            /* ########################## Lien GitHub PROJET ########################## */
            let imgGit = document.createElement("img");
            let agit = document.createElement("a");
            agit.classList.add("lien-github_projet");

            imgGit.classList.add("logo-github");
            imgGit.setAttribute("src", "img/icones/logo/GitHub.png");
            imgGit.setAttribute("alt", "Logo Github");
            imgGit.setAttribute("title", "Lien Github");
            imgGit.setAttribute("width", "30");
            imgGit.setAttribute("height", "30");

            agit.setAttribute("href", data.projets[index].lien_git);
            agit.setAttribute("target", "_blank");
            agit.appendChild(imgGit)
            bloc_lan_git.appendChild(agit);

            /* ########################## Vidéo PROJET ########################## */
            let lien_vid = document.createElement("a");
            lien_vid.setAttribute("href", data.projets[index].lien_git);
            lien_vid.setAttribute("target", "_blank");

            lien_vid.classList.add(data.projets[index].class);

            let video = document.createElement("video");
            let source = document.createElement("source");
            source.src = data.projets[index].video;
            source.type = "video/mp4"
            video.appendChild(source);

            video.setAttribute("controls", "true");
            video.setAttribute("preload", "metadata");
            video.setAttribute("loop", "");
            video.setAttribute("data-video-id", index + 1);

            lien_vid.appendChild(video);

            console.log(video);
            // ##### AJOUT DE TOUS LES ELEMENTS ##### //
            bloc_content.appendChild(bloc_titre);
            bloc_content.appendChild(Text_Desc);
            bloc_content.appendChild(bloc_lan_git);

            // Si le projet est à gauche
            if (index % 2 === 0) {
                article.appendChild(bloc_content);
                article.appendChild(lien_vid);
            } else {
                article.appendChild(lien_vid);
                article.appendChild(bloc_content);
            }

            article.classList.add("revelation");
            Section_Projets.appendChild(article);


        }

    })
    .catch(error => console.error(error));