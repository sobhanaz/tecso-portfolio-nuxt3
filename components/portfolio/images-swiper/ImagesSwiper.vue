<script setup>
import ItemImage from "@/components/portfolio/images-swiper/ItemImage.vue";
import SwiperPagination from "@/components/swiper-pagination/SwiperPagination.vue"
const props = defineProps({
    data: Array,
    className: String,
    classPag: { type: String, default: "portfolio-pag" },
    setPagStyle: String,
    grabCursor: Boolean,
    desktop: {},
    tablet: {},
    mobile: {},
    centeredSlides: Boolean,
    loop: Boolean,
    blur: Boolean,
    parallax: { type: Boolean, default: true },
    speed: Number,
    watchSlidesProgress: Boolean,
    loopedSlides: Number | Boolean,
    Pagination: { type: Boolean, default: false },
});
const breakpoints = {
    desktop: { slidesPerView: 1.5 },
    tablet: { slidesPerView: 2 },
    mobile: { slidesPerView: 2 }
};
const slider = ref(null);
defineExpose({ slider });

onMounted(() => {
    const sliderSwiper = slider.value;
    Object.assign(sliderSwiper, {
        init: false,
        grabCursor: props.grabCursor,
        centeredSlides: props.centeredSlides,
        loop: props.loop,
        parallax: props.parallax,
        speed: props.speed,
        animating: true,
        watchSlidesProgress: props.watchSlidesProgress,
        loopedSlides: props.loopedSlides,
        pagination: { el: `.${props.classPag}`, enabled: true, clickable: true, },
        spaceBetween: 50,
        breakpoints: {
            992: props.desktop ? props.desktop : breakpoints.desktop,
            768: props.tablet ? props.tablet : breakpoints.tablet,
            576: props.mobile ? props.mobile : breakpoints.mobile,
        },
    });
    sliderSwiper.initialize();
})
</script>

<template>
    <div>
        <div class="background-overlay bg-1"></div>
        <slot name="title" />
        <swiper-container ref="slider" init="false" class="work">
            <ItemImage :data="props.data" />
        </swiper-container>
        <SwiperPagination prev next pagination v-if="props.Pagination" :setPagStyle="props.setPagStyle"
            :classPag="props.classPag" :el="slider" />
    </div>
</template>
