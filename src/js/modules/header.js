import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";


export function init() {
    let menuOpened = false;
    const headerButton = document.querySelector('.header__button');
    const tl = gsap.timeline();

    tl.add('start')
        .to('.header__button-p', {
            color: "#E1A346",
            ease: "ease.inOut"
        }, 'start')
        .to('.header__button-line_top', {
            width: 40,
            x: 8,
            y: 4,
            background: "#E1A346",
            ease: "ease.inOut"
        }, 'start')
        .to('.header__button-line_bot', {
            width: 40,
            x: 8,
            y: -4,
            background: "#E1A346",
            ease: "ease.inOut"
        }, 'start')
        .add('continue')
        .to('.header__button-line_top', {
            rotate: 45,
            y: 4,
            ease: "ease.inOut"
        }, 'continue')
        .to('.header__button-line_bot', {
            rotate: -45,
            y: -4,
            ease: "ease.inOut"
        }, 'continue')
        .to('.header__tel', {
            opacity: 0,
            autoAlpha: true,
            ease: "ease.inOut"
        }, 'continue')
        .to('.header__menu', {
            opacity: 1,
        }, 'continue')
        .add('list')
        .from('.header__menu-link', {
            yPercent: 150,
            skewY: 10,
            duration: 0.6,
            stagger: 0.1,
            ease: "circ.out",
        }, 'list')
    tl.pause()

    headerButton.addEventListener('click', () => {
        menuOpened = !menuOpened;
        if(menuOpened){
            tl.play();
        }
        if(!menuOpened){
            tl.reverse();
        }
    })
}