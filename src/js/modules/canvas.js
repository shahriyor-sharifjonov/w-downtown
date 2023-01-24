import CanvasScrollClip from "canvas-scroll-clip";

export function init() {
    if(window.innerWidth <= 576){
        new CanvasScrollClip(document.querySelector('.about__canvas'), {
            framePath: "img/about-mob/00000.png",
            frameCount: 119,
            scrollArea: window.innerHeight * 2
        })
    }else {
        new CanvasScrollClip(document.querySelector('.about__canvas'), {
            framePath: "img/about-desktop/000000.png",
            frameCount: 100,
            scrollArea: window.innerHeight * 2
        })
    }
}