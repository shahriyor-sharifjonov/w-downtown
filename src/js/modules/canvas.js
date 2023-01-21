import CanvasScrollClip from "canvas-scroll-clip";

export function init() {
    new CanvasScrollClip(document.querySelector('.about__canvas'), {
        framePath: "img/000000.png",
        frameCount: 100,
        scrollArea: window.innerHeight * 2
    })
}