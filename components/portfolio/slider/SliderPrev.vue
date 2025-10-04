<script setup>
import { gsap } from "gsap";
const prevPaginate = ref(null);
const prevSlider = ref(null);
const tl = gsap.timeline();
const { $Splitting } = useNuxtApp();
defineExpose({ prevSlider });
const props = defineProps({ el: {},data: Array,})
const setPrev = () => {
    const id = prevSlider.value.swiper.activeIndex
    const dataLength = prevSlider.value.swiper.slides.length - 1

    if (id > 0 && id != dataLength) return props.el.swiper.slideTo(Number(id) + 1)

    if (id > 0 && id == dataLength) return props.el.swiper.slideTo(0)

    if (id == 0) return props.el.swiper.slideTo(1)

    return props.el.swiper.slideTo(id)
}
const slidePrev = () => {
    if (prevSlider.value.swiper.activeIndex === 0) {
        prevSlider.value.swiper.slideTo(prevSlider.value.swiper.slides.length - 1);
    } else {
        prevSlider.value.swiper.slidePrev();
    }
};
onMounted(() => {
    $Splitting();
    const sliderSwiper = prevSlider.value;
    if (window.innerWidth > 575) {
        sliderSwiper.querySelectorAll('h6.sm-title-block').forEach($item => {
            const s = $item.querySelectorAll(".char");
            s.forEach((item,index) => {
                if (index === 0) {
                    index += 4;

                    sliderSwiper.querySelectorAll('.next-arrow').forEach($next => {
                        $next.setAttribute('data-swiper-parallax-y',`${index * 3}%`);
                        $next.setAttribute(`data-swiper-parallax-opacity`,'0');
                        $next.classList.add('swiper-parallax-transform');

                    })
                    index = 0;
                }
                index += 5;
                item.setAttribute('data-swiper-parallax-y',`${index * 9}%`);
                item.setAttribute(`data-swiper-parallax-opacity`,'0');
                item.setAttribute('data-swiper-parallax-duration',index * 100);
                item.classList.add('swiper-parallax-transform');
            });
        });
    }
    setTimeout(() => { prevPaginate.value.classList.remove('d-none'); },3000);
    Object.assign(sliderSwiper,{
        grabCursor: true,
        parallax: true,
        slidesPerView: 1,
        speed: 1500,
        touchRatio: 0.2,
        resistanceRatio: 0.65,
        effect: 'fade',
        allowTouchMove: false,
    });
    sliderSwiper.initialize();
    sliderSwiper.swiper.on("slideChange",() => { setPrev() });
    setTimeout(() => {
        prevSlider.value.swiper.slideTo(prevSlider.value.swiper.slides.length - 1)
    },100)
});

</script>

<template>
    <div ref="prevPaginate" class="prev-paginate dsn-paginate-arrow box-shadow">
        <swiper-container ref="prevSlider" class="h-100" init="false">
            <swiper-slide v-for="(item,index) in props.data" :key="index" :data-dsn-id="index">
                <div class="box-content w-100 d-flex align-items-center">
                    <div class="prev-arrow" @click="slidePrev()">
                        <div class="container-inner">
                            <svg class="arrow v-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.214 23.057">
                                <g fill="none" stroke-linecap="square" stroke-width="1">
                                    <path d="M23.528 11.685h-20M16.685 19.528l8-8-8-8"></path>
                                </g>
                            </svg>
                            <svg class="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g class="circle-wrap" fill="none" stroke-width="1" stroke-linejoin="round"
                                    stroke-miterlimit="10">
                                    <circle cx="12" cy="12" r="10.5"></circle>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class='box-title'>
                        <h6 class="sm-title-block words chars splitting" data-splitting="chars">{{ item.title }}</h6>
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>
