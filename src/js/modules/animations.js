import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function init() {
    gsap.set(".about__canvas", {
        x: 100,
    })
    gsap.utils.toArray(".about").forEach(el => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top top",
                end: "bottom bottom",
                markers: false,
                scrub: true,
            }
        })
        tl.add('start')
            .fromTo(".about__canvas", {
                x: 100,
            }, {x: -200}, 'start')
    })
}