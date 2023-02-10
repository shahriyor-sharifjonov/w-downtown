import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText.js";

gsap.registerPlugin(SplitText);

export function init() {
    let popupOpen = false;
    const openBtn = document.querySelector('.callback-open');
    const closeBtn = document.querySelector('.callback-close');

    const ease1 = "ease.inOut";

    const animate = gsap.timeline();
    
    animate.add('start')
        .to('.callback', {
            opacity: 1,
            visibility: 'visible',
            ease: ease1,
        }, 'start')
        .from('.callback__video video', {
            // xPercent: -100,
            // objectPosition: "20%",
            delay: 0.1,
            ease: ease1
        }, 'start')
    animate.pause();

    openBtn.addEventListener('click', () => {
        if(!popupOpen){
            popupOpen = true;
            animate.play();
        }
    })

    closeBtn.addEventListener('click', () => {
        if(popupOpen){
            popupOpen = false;
            animate.reverse();
        }
    })
}