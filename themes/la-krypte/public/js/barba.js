const loadingScreen = document.querySelector('.loading-screen')
const mainNavigation = document.querySelector('.header')
const contentTitle = document.querySelector('.page--content--banner--title')


function pageTransitionIn() {
    return gsap
        .to(loadingScreen, { duration: .5, scaleY: 1, transformOrigin: 'bottom left'})
}
function pageTransitionOut(container) {
    return gsap
        .timeline({ delay: 1 })
        .add('start')
        .to(loadingScreen, {
            duration: 0.5,
            scaleY: 0,
            skewX: 0,
            transformOrigin: 'top left',
            ease: 'power1.out'
        }, 'start')
        .call(contentAnimation, [container], 'start')
}

function contentAnimation(container) {
    $(container.querySelector('.content-wrapper')).addClass('show')
    return gsap
        .timeline()
        .from(mainNavigation, { duration: .5, translateY: -10, opacity: 0})
        .from(contentTitle, { duration: .5, translateX: -10, opacity: 0})
}

$(function() {
    barba.init({
        timeout: 5000,
        sync: true,
        transitions: [{
            async leave(data) {
                await pageTransitionIn()
                data.current.container.remove()
            },
            async enter(data) {
                await pageTransitionOut(data.next.container)
            },
            async once(data) {
                await contentAnimation(data.next.container);
            }
        }],
        views: [{
            namespace: 'homepage',
            beforeEnter(data) {
                let script = document.createElement('script');
                script.src = 'wp-content/themes/la-krypte/public/js/index.js';
                data.next.container.appendChild(script);
            }
        }]
    });

});