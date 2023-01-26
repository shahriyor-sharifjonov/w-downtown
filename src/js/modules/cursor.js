import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export function init() {
    function lerp(start, end, amount) {
        return (1-amount)*start+amount*end
    }
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    
    const cursorF = document.createElement('div');
    cursorF.className = 'cursor-f';
    let cursorX = 0;
    let cursorY = 0;
    let pageX = 0;
    let pageY = 0;
    let size = 8;
    let sizeF = 36;
    let followSpeed = .16;
    
    document.querySelector('.fixed').appendChild(cursor);
    document.querySelector('.fixed').appendChild(cursorF);

    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        cursorF.style.display = 'none';
    }
      
    cursor.style.setProperty('--size', size+'px');
    cursorF.style.setProperty('--size', sizeF+'px');
    
    window.addEventListener('mousemove', function(e) {
        pageX = e.clientX;
        pageY = e.clientY;
        cursor.style.left = e.clientX-size/2+'px';
        cursor.style.top = e.clientY-size/2+'px';
    });
    
    function loop() {
        cursorX = lerp(cursorX, pageX, followSpeed);
        cursorY = lerp(cursorY, pageY, followSpeed);
        cursorF.style.top = cursorY - sizeF/2 + 'px';
        cursorF.style.left = cursorX - sizeF/2 + 'px';
        requestAnimationFrame(loop);
    }
      
    loop();
    
    let startY;
    let endY;
    let clicked = false;
    
    function mousedown(e) {
        gsap.to(cursor, {scale: 4.5});
        gsap.to(cursorF, {scale: .4});
        clicked = true;
        startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
    }
      
    function mouseup(e) {
        gsap.to(cursor, {scale: 1});
        gsap.to(cursorF, {scale: 1});
        endY = e.clientY || endY;
        if (clicked && startY && Math.abs(startY - endY) >= 40) {
            clicked = false;
            startY = null;
            endY = null;
        }
    }
    document.querySelectorAll('.btn:not(disabled)').forEach(el => {
        el.addEventListener('mouseover', mousedown)
        el.addEventListener('mouseleave', mouseup)
    });
    document.querySelectorAll('.hover').forEach(el => {
        el.addEventListener('mouseover', mousedown)
        el.addEventListener('mouseleave', mouseup)
    });
    window.onload = function() {
        document.querySelectorAll('.swiper-pagination-bullet').forEach(el => {
            el.addEventListener('mouseover', mousedown)
            el.addEventListener('mouseleave', mouseup)
        });
    }
    document.querySelectorAll('.floor__tab-item').forEach(el => {
        el.addEventListener('mouseover', mousedown)
        el.addEventListener('mouseleave', mouseup)
    });
    document.querySelectorAll('.gotoblock').forEach(el => {
        el.addEventListener('mouseover', mousedown)
        el.addEventListener('mouseleave', mouseup)
    });
    window.addEventListener('mousedown', mousedown, false);
    window.addEventListener('touchstart', mousedown, false);
    window.addEventListener('touchmove', function(e) {
    if (clicked) {
        endY = e.touches[0].clientY || e.targetTouches[0].clientY;
    }
    }, false);
    window.addEventListener('touchend', mouseup, false);
    window.addEventListener('mouseup', mouseup, false);
}