let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', ()=> {
    if (window.scrollY == 0) {
        navbar.style.backgroundColor = 'rgba(23, 17, 54, 0)';
        navbar.style.backdropFilter = 'blur(0px)';
        navbar.style.transition = "all 0.3s ease";
    } 
    else if (window.scrollY != 0) {
        navbar.style.backgroundColor = 'rgba(23, 17, 54, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.transition = "all 0.3s ease";
    }
});