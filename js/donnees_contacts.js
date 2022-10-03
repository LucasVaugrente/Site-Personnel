const block_m = document.querySelector(".block-mail");
const info_m = document.querySelector(".info-mail");

const block_cv = document.querySelector(".block-cv");
const info_cv = document.querySelector(".info-cv");

const block_l = document.querySelector(".block-linkedin");
const info_l = document.querySelector(".info-linkedin");

const block_g = document.querySelector(".block-git");
const info_g = document.querySelector(".info-git");

block_m.addEventListener("mousemove", () => {
    info_m.style.display = 'block';
    info_m.style.transition = "all 2s";
});

block_m.addEventListener("mouseleave", () => {
    info_m.style.display = 'none';
    info_m.style.transition = "all 2s";
});


block_cv.addEventListener("mousemove", () => {
    info_cv.style.display = 'block';
});

block_cv.addEventListener("mouseleave", () => {
    info_cv.style.display = 'none';
});


block_l.addEventListener("mousemove", () => {
    info_l.style.display = 'block';
});

block_l.addEventListener("mouseleave", () => {
    info_l.style.display = 'none';
});


block_g.addEventListener("mousemove", () => {
    info_g.style.display = 'block';
});

block_g.addEventListener("mouseleave", () => {
    info_g.style.display = 'none';
});