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
        speed: 1000,
    });
    document.addEventListener('scroll', () => {
        if(isScrolledIntoView(document.querySelector('.amenities__swiper'))){
            amenitiesSwiper.mousewheel.enable();
        }else{
            amenitiesSwiper.mousewheel.disable();
        }
    })
    amenitiesSwiper.on('slideChange', function(swiper) {
        console.log('fa');
    })
}