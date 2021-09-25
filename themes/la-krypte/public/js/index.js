let hero = document.getElementById('slide--artistes');
let slides = document.getElementById('slide--artiste');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let slideChildren = slides.children;
let slideCount = slides.children.length;
let currentlyDemoing = false;
let currentPage = 0;
let slidesPerPage = () => window.innerWidth > 1700 ? 4 : window.innerWidth > 1200 ? 4 : 2;
let maxPageCount = () => slideCount / slidesPerPage() - 1;

function goToPage(pageNumber = 0) {
    currentPage = Math.min(maxPageCount(), Math.max(0, pageNumber));
    console.log(currentPage);
    hero.style.setProperty('--page', currentPage);
}

if (next) {
    next.addEventListener('click', () => goToPage(currentPage + 1));
}
if (prev) {
    prev.addEventListener('click', () => goToPage(currentPage - 1));
}

// window.addEventListener('resize', () => {
// console.log(document.body.style.getPropertyValue('--slide-per-page'));
// });