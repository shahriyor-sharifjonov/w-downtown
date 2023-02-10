import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText.js";

gsap.registerPlugin(SplitText);

export function init() {
    let menuOpened = false;
    const headerButton = document.querySelector('.header__button');
    const headerLinks = document.querySelectorAll('.header__menu-link');
    const headerTel = document.querySelector('.tel-animation');
    const headerCall = document.querySelector('.call-animation');
    const imageHeight = document.querySelector('.header__menu-images-item').clientHeight;

    const menuAnimation = gsap.timeline();
    const telAnimation = gsap.timeline();
    const callAnimation = gsap.timeline();

    const ease1 = "ease.inOut";
    const ease2 = "circ.out";
    
    const telChar = new SplitText(".tel-anim", { type: "words,chars" })
    const telChars = telChar.chars;

    telAnimation.add('start')
        .to(telChars, {
            yPercent: -100,
            duration: 0.6,
            stagger: 0.015,
            ease: "power4",
        })
    telAnimation.pause();

    const callChar = new SplitText(".call-anim", { type: "words,chars" })
    const callChars = callChar.chars;

    callAnimation.add('start')
        .to(callChars, {
            yPercent: -100,
            duration: 0.6,
            stagger: 0.015,
            ease: "power4",
        })
    callAnimation.pause();

    menuAnimation.add('start')
        .to('.header__button-p', {
            color: "#E1A346",
            ease: ease1
        }, 'start')
        .to('.header__button-line_top', {
            width: 40,
            x: 8,
            y: 4,
            background: "#E1A346",
            ease: ease1
        }, 'start')
        .to('.header__button-line_bot', {
            width: 40,
            x: 8,
            y: -4,
            background: "#E1A346",
            ease: ease1
        }, 'start')
        .add('continue')
        .to('.header__button-line_top', {
            rotate: 45,
            y: 4,
            ease: ease1
        }, 'continue')
        .to('.header__button-line_bot', {
            rotate: -45,
            y: -4,
            ease: ease1
        }, 'continue')
        .to('.header__tel', {
            opacity: 0,
            autoAlpha: true,
            ease: ease1
        }, 'continue')
        .to('.header__menu', {
            opacity: 1,
            ease: ease1,
            visibility: 'visible'
        }, 'continue')
        .add('rect')
        .to('.header__menu-rect', {
            y: 0,
            ease: ease1
        }, 'rect')
        .add('list')
        .from('.noopp', {
            yPercent: -20,
            duration: 2,
            opacity: 0,
            ease: "power4"
        }, 'list')
        .from('.opp', {
            yPercent: 20,
            duration: 2,
            opacity: 0,
            ease: "power4"
        }, 'list')
        .from('.header__menu-link', {
            yPercent: 150,
            skewY: 10,
            duration: 0.6,
            stagger: 0.1,
            ease: ease2,
        }, 'list')
    menuAnimation.pause()

    function toggleMenu() {
        menuOpened = !menuOpened;
        if(menuOpened){
            document.body.style.overflowY = "hidden";
            menuAnimation.play();
        }
        if(!menuOpened){
            document.body.style.overflowY = "auto";
            menuAnimation.reverse();
        }
    }

    headerLinks.forEach(el => {
        el.addEventListener('click', () => {
            toggleMenu()
        })
        el.addEventListener('mouseenter', () => {
            const num = el.getAttribute('data-scroll');
            gsap.to('.noopp', {
                y: - (imageHeight * num) - (32 * num),
                duration: 2,
                ease: "power4"
            })
            gsap.to('.opp', {
                y: (imageHeight * num) + (32 * num) - imageHeight - 32,
                duration: 2,
                ease: "power4"
            })
        })
    })

    headerButton.addEventListener('click', () => {
        toggleMenu()
    })

    headerTel.addEventListener('mouseenter', () => {
        telAnimation.play()
    })

    headerTel.addEventListener('mouseleave', () => {
        telAnimation.reverse()
    })

    headerCall.addEventListener('mouseenter', () => {
        callAnimation.play()
    })

    headerCall.addEventListener('mouseleave', () => {
        callAnimation.reverse()
    })
}