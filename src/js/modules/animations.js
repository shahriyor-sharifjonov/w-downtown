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
    gsap.utils.toArray(".amenities").forEach(el => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "0px 300px",
                end: "800px 300px",
                markers: false,
                scrub: 1,
            }
        })
        tl.from(".amenities__black", {
            xPercent: -100,
            duration: 1,
        })
        tl.from(".amenities__white", {
            xPercent: -100,
            duration: 1,
        }, "-=0")
        tl.from(".amenities__pagination", {
            xPercent: -100,
            opacity: 0,
            duration: 1,
        }, "-=0.5")
        tl.from(".amenities__gallery", {
            width: 0,
            duration: 1,
        }, "-=0.5")
        tl.from(".amenities__swiper", {
            opacity: 0,
            y: -100,
            duration: 1,
        })
    })
    gsap.utils.toArray(".amenities__trigger").forEach(el => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "-100px bottom",
                end: "bottom top",
                markers: true,
                scrub: 1,
            }
        })
    })
}