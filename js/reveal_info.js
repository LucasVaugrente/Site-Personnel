const ratio = 0.1;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r);
});

// ############################ PROJETS ################################ //

const handleIntersect2 = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("revelation-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer2 = new IntersectionObserver(handleIntersect2, options);
document.querySelectorAll(".revelation").forEach(function (r) {
  observer2.observe(r);
});

// ######################### LANGAGES ############################## //

const handleIntersect3 = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("apparition-visible");
      observer.observe(entry.target);
    }
  });
};

const observer3 = new IntersectionObserver(handleIntersect3, options);
document.querySelectorAll(".apparition").forEach(function (r) {
  observer3.observe(r);
});

// ######################### NAVIGATION ############################## //

const handleIntersect4 = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("nav_reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer4 = new IntersectionObserver(handleIntersect4, options);
document.querySelectorAll('[class*="nav_reveal"]').forEach(function (r) {
  observer4.observe(r);
});
