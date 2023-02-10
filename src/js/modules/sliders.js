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
    if(document.querySelector('.amenities__swiper')){
        const duration = 600;
        const durationS = duration / 1000;
        const amenitiesSwiper = new Swiper('.amenities__swiper', {
            modules: [Mousewheel],
            direction: 'vertical',
            allowTouchMove: false,
            mousewheel: {
                forceToAxis: false,
                sensitivity: 0.5,
                thresholdDelta: 30,
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
            console.log(swiper.activeIndex+1);
            const activeTxt = document.querySelector('#activeSlide');
            activeTxt.innerHTML = `0${swiper.activeIndex+1}`
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
                        xPercent: 20,
                        backgroundPosition: "50% 100%",
                        duration: durationS,
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
                backgroundPosition: "-50% 100%",
                backgroundSize: "120% 100%",
                duration: durationS,
            }, {
                backgroundPosition: "100% 100%",
                backgroundSize: "100% 100%",
                duration: durationS,
            })
            const tl = gsap.timeline()
            tl.to('.amenities__pagination-thumb', {
                height: "100%",
                duration: durationS / 2,
            })
            tl.to('.amenities__pagination-thumb', {
                yPercent: -100,
                duration: durationS / 2,
            })
            tl.to('.amenities__pagination-thumb', {
                yPercent: 0,
                height: 0,
                duration: 0,
            })
        })
    }
} 