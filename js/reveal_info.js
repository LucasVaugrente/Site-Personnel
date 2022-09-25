const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
}
const handleInterstect = function () {
    console.log('handleIntersect');
}

const observer = new IntersectionObserver(handleInterstect, options);