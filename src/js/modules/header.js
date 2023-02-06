import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";

export function init() {
    let menuOpened = false;
    const headerButton = document.querySelector('.header__button');
    const tl = gsap.timeline();
    tl
        .add('start')
        .to('.header__tel', {
            opacity: 0,
            autoAlpha: true,
            ease: "ease.inOut"
        }, 'start')
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