import Swiper, { EffectCreative, Mousewheel } from 'swiper'
import gsap from 'gsap';

function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

export function init() {
    const duration = 600;
    const durationS = duration / 1000;
    const amenitiesSwiper = new Swiper('.amenities__swiper', {
        modules: [Mousewheel],
        direction: 'vertical',
        allowTouchMove: false,
        mousewheel: {
            forceToAxis: false,
            sensitivity: 1,
            releaseOnEdges: true,
        },
        watchSlidesProgress: true,
        speed: duration,
    });
    document.addEventListener('scroll', () => {
        if(isScrolledIntoView(document.querySelector('.amenities__swiper'))){
            amenitiesSwiper.mousewheel.enable();
        }else{
            amenitiesSwiper.mousewheel.disable();
        }
    })
    amenitiesSwiper.on('slideChange', function(swiper) {
        const galleries = document.querySelectorAll('.amenities__gallery-slide');
        const active = swiper.slides[swiper.activeIndex];
        const target = active.getAttribute('data-gallery');
        const element = document.querySelector(target);
        galleries.forEach(el => {
            el.classList.remove('prev');
            if(el.classList.contains('active')){
                el.classList.add('prev')
                el.classList.remove('active');
                gsap.to(el, {
                    xPercent: 20
                })
            }
        })
        element.classList.add('active');
        gsap.fromTo(element, {
            xPercent: -100,
            duration: durationS
        }, {
            xPercent: 0,
            duration: durationS
        })
        gsap.fromTo(element.querySelector('.amenities__gallery-inner'), {
            xPercent: 20,
            duration: durationS
        }, {
            xPercent: 0,
            duration: durationS
        })
    })
} 