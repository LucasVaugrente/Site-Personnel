let Section_Projets = document.querySelector(".section-projets");

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
                
                let article = document.createElement('article');
                let bloc_content = document.createElement('div');
                let bloc_titre = document.createElement('div');
                article.classList.add('projet_g');
                // article.classList.add('revelation');
                bloc_content.classList.add('p-content-gauche');
                bloc_titre.classList.add('titre-projet-gauche');

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
                Text_Desc.classList.add('p-pitch-gauche');
                Text_Desc.innerHTML = data.projets[index].description;

                /* ########################## Langages Programmation PROJET ########################## */
                let bloc_lan_git = document.createElement('div');
                bloc_lan_git.classList.add('git-lan');

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
                let video = document.createElement("video");
                video.classList.add(data.projets[index].class);
                video.setAttribute("src", data.projets[index].video);
                video.setAttribute("autoplay", "");
                video.setAttribute("loop", "");
                video.setAttribute("muted", "");
                video.setAttribute("preload", "auto");

                // ##### AJOUT DE TOUS LES ELEMENTS ##### //
                bloc_content.appendChild(bloc_titre);
                bloc_content.appendChild(Text_Desc);
                bloc_content.appendChild(bloc_lan_git);
                article.appendChild(bloc_content);
                article.appendChild(video);
                Section_Projets.appendChild(article);
            }
            // Projet à droite
            else {
                let article = document.createElement('article');
                let bloc_content = document.createElement('div');
                let bloc_titre = document.createElement('div');
                article.classList.add('projet_d');
                // article.classList.add('revelation');
                bloc_content.classList.add('p-content-droite');
                bloc_titre.classList.add('titre-projet-droite');

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
                Text_Desc.classList.add('p-pitch-droite');
                Text_Desc.innerHTML = data.projets[index].description;

                /* ########################## Langages Programmation PROJET ########################## */
                let bloc_lan_git = document.createElement('div');
                bloc_lan_git.classList.add('git-lan');

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
                let video = document.createElement("video");
                video.classList.add(data.projets[index].class);
                video.setAttribute("src", data.projets[index].video);
                video.setAttribute("autoplay", "");
                video.setAttribute("loop", "");
                video.setAttribute("muted", "");
                video.setAttribute("preload", "auto");

                // ##### AJOUT DE TOUS LES ELEMENTS ##### //
                bloc_content.appendChild(bloc_titre);
                bloc_content.appendChild(Text_Desc);
                bloc_content.appendChild(bloc_lan_git);
                article.appendChild(video);
                article.appendChild(bloc_content);
                Section_Projets.appendChild(article);
            }
        }

    } else {
        console.error('Une erreur est survenue');
    }
};


xhr.send();
