$(document).ready(function() {
    let hero = document.getElementById('slide--artistes');
    let slides = document.getElementById('slide--artiste');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let slideCount = slides.children.length;
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
});

$(window).on('load', function(){
    setTimeout(removeLoader, 500);
});
function removeLoader(){
    const progressSound = document.querySelector('.progress-bar');

    const progressBarStates = [0, 7, 27, 34, 68, 80, 95, 100];

    let time = 0;
    let endState = 100;

    progressBarStates.forEach(state => {
        let randomTime = Math.floor(Math.random());
        setTimeout(() => {
            if(state == endState){
                gsap.to(progressSound, {
                    x: `${state}%`,
                    duration: 2,
                    onComplete: () => {
                        $( "#loading" ).fadeOut();
                        $("body").addClass("animation");
                    }
                });
            }else{
                gsap.to(progressSound, {
                    x: `${state}%`,
                    duration: 2,
                });
            }
        }, randomTime + time);
        time += randomTime;
    })
}