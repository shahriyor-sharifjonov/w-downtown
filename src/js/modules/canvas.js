import CanvasScrollClip from "canvas-scroll-clip";

export function init() {
    if(window.innerWidth <= 576){
        if(document.querySelector('.about__canvas')){
            new CanvasScrollClip(document.querySelector('.about__canvas'), {
                framePath: "img/about-mob/00000.png",
                frameCount: 119,
                scrollArea: window.innerHeight * 2
            })
        }
    }else {
        if(document.querySelector('.intro__canvas')){
            new CanvasScrollClip(document.querySelector('.intro__canvas'), {
                framePath: "img/intro-desktop/00000.png",
                frameCount: 150,
                scrollArea: window.innerHeight * 3
            })
        }
        if(document.querySelector('.about__canvas')){
            new CanvasScrollClip(document.querySelector('.about__canvas'), {
                framePath: "img/about-desktop/000000.png",
                frameCount: 100,
                scrollArea: window.innerHeight * 2
            })
        }
    }
}