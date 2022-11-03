const ratio = .1;

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r);
})

// ############################ PROJETS ################################ //

const handleIntersect2 = function (entries, observer) {
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('revelation-visible');
            observer.unobserve(entry.target);
        }
    });
}

const observer2 = new IntersectionObserver(handleIntersect2, options);
document.querySelectorAll('.revelation').forEach(function (r) {
    observer2.observe(r);
})

// ######################### LANGAGES ############################## //

const handleIntersect3 = function (entries) {
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('apparition-visible');
            observer.observe(entry.target);
        }
    });
}

const observer3 = new IntersectionObserver(handleIntersect3, options);
document.querySelectorAll('.apparition').forEach(function (r) {
    observer3.observe(r);
})