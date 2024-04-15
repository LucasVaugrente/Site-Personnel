const Section_projects = document.querySelector(".section-projects");

const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

fetch('../data/projects.json')
    .then(response => response.json())
    .then(data => {
        for (let index = 0; index < data.projects.length; index++) {

            let article = document.createElement('article');
            let bloc_content = document.createElement('div');
            let bloc_title = document.createElement('div');

            bloc_content.classList.add('p-content');
            bloc_title.classList.add('title-project');

            // Si le project est à gauche
            if (index % 2 === 0) {
                article.classList.add('project_g');
                bloc_content.classList.add('p-content-gauche');
                bloc_title.classList.add('title-project-gauche');
            } else {
                article.classList.add('project_d');
                bloc_content.classList.add('p-content-droite');
                bloc_title.classList.add('title-project-droite');
            }

            article.classList.add('project');
            let numproject = index + 1;
            article.classList.add('project_' + numproject);

            /* ########################## Date, Type et title project ########################## */
            let Text_Date = document.createElement('p');
            let Text_title = document.createElement('h2');
            Text_title.classList.add('p-title');

            Text_Date.innerHTML = data.projects[index].date + " - " + data.projects[index].type_project;
            Text_title.innerHTML = data.projects[index].title;

            bloc_title.appendChild(Text_Date);
            bloc_title.appendChild(Text_title);

            /* ########################## Description project ########################## */
            let Text_Desc = document.createElement('p');

            Text_Desc.classList.add('p-pitch');

            // Si le project est à gauche
            if (index % 2 === 0) {
                Text_Desc.classList.add('p-pitch-gauche');
            } else {
                Text_Desc.classList.add('p-pitch-droite');
            }

            Text_Desc.innerHTML = data.projects[index].description;

            /* ########################## languages Programmation project ########################## */
            let bloc_lan_git = document.createElement('div');

            bloc_lan_git.classList.add('git-lan');

            // Si le project est à gauche
            if (index % 2 === 0) {
                bloc_lan_git.classList.add('git-lan-g');
            } else {
                bloc_lan_git.classList.add('git-lan-d');
            }

            for (let j = 0; j < data.projects[index].languages.length; j++) {

                let ahref = document.createElement('a');
                ahref.classList.add("langues-prog");
                ahref.innerHTML = data.projects[index].languages[j].name;
                ahref.setAttribute("target", "_blank");
                ahref.setAttribute("href", data.projects[index].languages[j].url);

                bloc_lan_git.appendChild(ahref);
            }

            /* ########################## Lien GitHub project ########################## */
            let imgGit = document.createElement("img");
            let agit = document.createElement("a");
            agit.classList.add("lien-github_project");

            imgGit.classList.add("logo-github");
            imgGit.setAttribute("src", "img/icones/logo/GitHub_blanc.png");
            imgGit.setAttribute("alt", "Logo Github");
            imgGit.setAttribute("title", "Lien Github");
            imgGit.setAttribute("width", "30");
            imgGit.setAttribute("height", "30");

            agit.setAttribute("href", data.projects[index].link_git);
            agit.setAttribute("target", "_blank");
            agit.appendChild(imgGit)
            bloc_lan_git.appendChild(agit);

            /* ########################## Compétences Portfolio project ########################## */
            let imgPortfolio = document.createElement("img");
            imgPortfolio.classList.add("skills-portfolio_project");

            imgPortfolio.setAttribute("src", "img/icones/logo/list_checked.png");
            imgPortfolio.setAttribute("alt", "Logo Skills Portfolio");
            imgPortfolio.setAttribute("title", "Compétences Portfolio");
            imgPortfolio.setAttribute("width", "30");
            imgPortfolio.setAttribute("height", "30");

            bloc_lan_git.appendChild(imgPortfolio);

            /* ########################## Vidéo project ########################## */
            let lien_vid = document.createElement("a");
            lien_vid.setAttribute("href", data.projects[index].link_git);
            lien_vid.setAttribute("target", "_blank");

            lien_vid.classList.add(data.projects[index].class);

            let video = document.createElement("video");
            let source = document.createElement("source");
            source.src = data.projects[index].video;
            source.type = "video/mp4"
            video.appendChild(source);

            video.setAttribute("controls", "true");
            video.setAttribute("preload", "metadata");
            video.setAttribute("muted", "");
            video.setAttribute("autoplay", "");
            video.setAttribute("loop", "");
            video.setAttribute("data-video-id", index + 1);
            video.volume = 0;

            lien_vid.appendChild(video);

            // ##### AJOUT DE TOUS LES ELEMENTS ##### //
            bloc_content.appendChild(bloc_title);
            bloc_content.appendChild(Text_Desc);
            bloc_content.appendChild(bloc_lan_git);

            // Si le project est à gauche
            if (index % 2 === 0) {
                article.appendChild(bloc_content);
                article.appendChild(lien_vid);
            } else {
                article.appendChild(lien_vid);
                article.appendChild(bloc_content);
            }

            article.classList.add("revelation");
            Section_projects.appendChild(article);

            if(index === data.projects.length - 1) {
                const portfolioSkills_Container = document.querySelector("#container-skills_portoflio");
                const portfolioSkills_OpenButtons = document.querySelectorAll(".skills-portfolio_project");
                const portfolioSkills_CloseButton = document.querySelector(".portfolio-skills-close");
                const portfolioSkills_List = document.querySelector(".skills-list");
    
                portfolioSkills_OpenButtons.forEach(button => {
                    button.addEventListener("click", (event) => {
                        document.querySelector("body").style.overflow = "hidden";
                        removeChilds(portfolioSkills_List);
                        portfolioSkills_Container.style.display = "block";
                        const num = event.target.closest(".project").classList[2].split('_')[1];
                        const title_project_label = data.projects[num-1].title;
                        const data_skills = data.projects[num-1].skills;
                        
                        let title_project = document.createElement("h2");
                        title_project.classList.add("title_project_skills_portfolio");
                        title_project.innerHTML = "Projet : " + title_project_label;
                        portfolioSkills_List.appendChild(title_project);

                        if(data_skills !== undefined) {
                            for (let index = 1; index <= 6; index++) {
                                let div = document.createElement("div");
                                let title_skills = document.createElement("h3");
                                let comment_skills = document.createElement("span");

                                div.classList.add("skills_line");
                                
                                let competenceNum = "competence" + index;
                                title_skills.innerHTML = "Compétence " + index + " : " + data_skills[competenceNum][0];   
                                comment_skills.innerHTML = data_skills[competenceNum][1];   
    
                                div.appendChild(title_skills);
                                div.appendChild(comment_skills);
                                portfolioSkills_List.appendChild(div);
                            }
                        } else {
                            let span = document.createElement("span");
                            span.innerHTML = "Aucune compétence portfolio";
                            portfolioSkills_List.appendChild(span);
                        }
                    });
                });
    
                portfolioSkills_CloseButton.addEventListener("click", () => {
                    portfolioSkills_Container.style.display = "none";
                    document.querySelector("body").style.overflow = "auto";
                });
            }
        }

    })
    .catch(error => console.error(error));