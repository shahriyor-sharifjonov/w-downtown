import * as functions from "./modules/functions.js";
import SmoothScroll from "smoothscroll-for-websites";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";
import CanvasScrollClip from "canvas-scroll-clip";
// import Swiper, { Navigation, Pagination } from 'swiper';

functions.isWebp();

SmoothScroll({
    animationTime: 600,
    stepSize: 60,
    keyboardSupport: true,
    arrowScroll: 100,
    touchpadSupport: true,
});

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

new CanvasScrollClip(document.querySelector('.about__canvas'), {
  framePath: "img/000000.png",
  frameCount: 100,
  scrollArea: window.innerHeight * 2
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

// let canIScroll = true;
// function disableSroll() {
//     canIScroll = false;
//     document.body.style.overflowY = "hidden"
//     setTimeout(() => {
//         canIScroll = true; 
//         document.body.style.overflowY = "auto"
//     }, 2000);
// }
// gsap.utils.toArray(".amenities__section").forEach(section => {
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: section,
//             start: 'top 99%',
//             end: 'bottom 1%',
//             scrub: true,
//             markers: true,
//             onEnter: () => {
//                 console.log('enter');
//                 if(canIScroll){
//                     gsap.to(window, {duration: 1, scrollTo: section.offsetTop + section.offsetHeight})
//                     disableSroll()
//                 }
//             },
//             onEnterBack: () => {
//                 console.log('back');
//                 if(canIScroll){
//                     gsap.to(window, {duration: 1, scrollTo: section.offsetTop - section.offsetHeight})
//                     disableSroll()
//                 }
//             },
//         }
//     })
// })