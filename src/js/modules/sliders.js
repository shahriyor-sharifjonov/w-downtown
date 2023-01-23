import Swiper, { EffectCreative, Mousewheel } from 'swiper'
import gsap from 'gsap';

export function init() {
    const amenitiesSwiper = new Swiper('.amenities__swiper', {
        modules: [Mousewheel],
        direction: 'vertical',
        allowTouchMove: false,
        mousewheel: true,
        speed: 1000,
    });
    amenitiesSwiper.on('slideChangeTransitionEnd', function(swiper) {
        const next = swiper.slides[swiper.realIndex+1];
        if(next){
            return;
        }else {
            swiper.mousewheel.disable()
        }
    })
    gsap.utils.toArray(".amenities__swiper").forEach(el => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "1px top",
                end: "bottom bottom",
                markers: true,
                onLeaveBack: () => {
                    amenitiesSwiper.mousewheel.enable()
                }
            }
        })
        tl.add('start')
            .fromTo(".about__canvas", {
                x: 100,
            }, {x: -200}, 'start')
    })

    const amenitiesGallery = new Swiper('.amenities__gallery', {
        modules: [EffectCreative],
        slidesPerView: 1,
        speed: 1000,
        effect: "creative",
        creativeEffect: {
            prev: {
                scale: 1.01,
            },
            next: {
                translate: ['100%', 0, 0],
            },
        },
    });
}