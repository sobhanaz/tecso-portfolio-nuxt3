<script setup>
import SwiperPagination from "@/components/swiper-pagination/SwiperPagination.vue"
const props = defineProps({
    className: String,
    data: Array,
    stringLine: { type: Number,default: 0 },
    haveOverlayBG: { type: Boolean,default: false },
    Pagination: { type: Boolean,default: false },
    classPag: { type: String,default: "tesimonials-pag" },
    setPagStyle: String,
    grabCursor: Boolean,
    desktop: {},
    tablet: {},
    mobile: {},
    centeredSlides: Boolean,
    loop: Boolean,
    blur: Boolean,
    parallax: Boolean,
    speed: Number,
    watchSlidesProgress: Boolean,
    loopedSlides: Number | Boolean,
    boxStyle: String,
    slideClass: String,
});
const slider = ref(null);
defineExpose({ slider });
const breakpoints = {
    desktop: { slidesPerView: 1.5 },
    tablet: { slidesPerView: 2 },
    mobile: { slidesPerView: 2 }
};
onMounted(() => {
    const sliderSwiper = slider.value;
    Object.assign(sliderSwiper,{
        init: false,
        grabCursor: props.grabCursor,
        slidesPerView: 1,
        centeredSlides: props.centeredSlides,
        loop: props.loop,
        parallax: props.parallax,
        speed: props.speed,
        watchSlidesProgress: props.watchSlidesProgress,
        loopedSlides: props.loopedSlides,
        allowTouchMove: true,
        pagination: { el: `.${props.classPag}`,enabled: true,clickable: true,},
        loop: true,
        spaceBetween: 40,
        breakpoints: {
            992: props.desktop ? props.desktop : breakpoints.desktop,
            768: props.tablet ? props.tablet : breakpoints.tablet,
            576: props.mobile ? props.mobile : breakpoints.mobile,
        },
    });
    sliderSwiper?.initialize();
})
</script>

<template>
    <div :class="['p-relative',props.className]">
        <div class="background-overlay bg-1" v-if="props.haveOverlayBG"></div>
        <div :class="props.boxStyle === 'center' ? null : 'container'">
            <slot name="title" />
            <div :class="props.boxStyle === 'center' ? 'filter-swiper-blur image-left-style quote-box-style elementor-align-center text-center' : 'elementor-widget-dsn_testimonial'"
                data-widget_type="dsn_testimonial.default">
                <div class="dsn-testimonials dsn-swiper p-relative has-parallax-image"
                    data-dsn-option='{"spaceBetween":30,"centeredSlides":false,"slidesPerView":2}'>
                    <div class="testimonials-content">
                        <div class="testimonial-inner">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 509 396.83" enable-background="new 0 0 509 396.83" xml:space="preserve">
                                <g>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M105.098,396.83c-2.062,0-4.122,0-6.183,0 c0.123-48.731,0.116-97.466,0.493-146.195c0.062-7.844-3.65-8.881-10.09-8.843c-29.772,0.182-59.545,0.047-89.318,0.026 C0,161.382,0,80.947,0,0c81.742,0,163.484,0,245.227,0c0.023,83.874,0.496,167.752-0.071,251.624 c-0.436,64.131-47.354,121.936-109.503,136.974C125.404,391.076,115.279,394.073,105.098,396.83z M127.891,360.509 c6.063-1.545,10.049-2.226,13.799-3.568c42.174-15.098,74.277-58.896,74.735-104.55c0.718-71.273,0.187-142.558,0.454-213.837 c0.03-7.696-2.596-10.07-10.136-10.038c-55.961,0.236-111.927,0.287-167.887-0.042c-8.413-0.049-10.398,3.014-10.363,10.831 c0.254,54.408,0.317,108.815-0.047,163.22c-0.061,8.994,3.321,10.93,11.452,10.803c25.744-0.405,51.505,0.184,77.245-0.329 c8.78-0.174,10.986,2.931,10.911,11.301c-0.363,40.63-0.164,81.264-0.163,121.897C127.891,350.262,127.891,354.325,127.891,360.509 z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M368.871,396.83c-2.061,0-4.122,0-6.184,0 c0.057-48.133-0.099-96.267,0.354-144.395c0.081-8.996-3.268-10.854-11.386-10.722c-26.047,0.42-52.108-0.083-78.152,0.299 c-7.577,0.108-10.083-2.194-10.053-9.942c0.294-77.357,0.262-154.713,0.322-232.07C345.353,0,426.929,0,509,0 c0,89.562,0,179.125,0,268.687c-1.256,3.464-2.793,6.854-3.73,10.401c-15.376,58.112-51.126,95.756-109.9,110.431 C386.48,391.735,377.7,394.382,368.871,396.83z M391.554,360.501c5.951-1.528,9.958-2.176,13.686-3.57 c43.103-16.135,74.464-59.44,74.864-105.611c0.616-70.931,0.138-141.869,0.404-212.803c0.03-7.722-2.58-10.037-10.111-10.005 c-55.963,0.24-111.926,0.285-167.889-0.036c-8.406-0.048-10.429,3.048-10.392,10.853c0.245,54.405,0.31,108.813-0.049,163.216 c-0.059,9.03,3.45,10.9,11.528,10.778c25.741-0.39,51.504,0.193,77.245-0.325c8.785-0.178,10.956,2.917,10.878,11.284 c-0.368,40.629-0.167,81.263-0.165,121.897C391.554,350.25,391.554,354.318,391.554,360.501z" />
                                </g>
                            </svg>
                            <swiper-container ref="slider" init="false" class="swiper-container">
                                <swiper-slide :class="['swiper-slide testimonial-inner-item',props.slideClass]"
                                    v-for="(client,index) in props.data" :key="index">
                                    <div class="avatar box-img dsn-auto">
                                        <NuxtImg format="webp" :src="client.imageSrc" class="cover-bg-img"
                                            alt="" />
                                    </div>
                                    <div class="testimonial-item">
                                        <div class="testimonial-content mb-25">
                                            <div class="quote">
                                                <p class="max-w750 testimonial-content p-large">{{
                                                    client.string[props.stringLine] }}</p>
                                            </div>
                                        </div>
                                        <div
                                            :class="['content-inner border-top',props.boxStyle === 'center' ? 'justify-content-center' : null]">
                                            <div class="d-flex align-items-center">
                                                <div class="avatar box-img dsn-auto">
                                                    <NuxtImg format="webp" :src="client.imageSrc"
                                                        class="cover-bg-img" alt="" />
                                                </div>
                                                <div class="label box-text">
                                                    <h4 class="testimonial-name sm-title-block">{{ client.name }}</h4>
                                                    <h5 class="testimonial-position">{{ client.job }}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper-container>
                            <SwiperPagination prev next pagination v-if="props.Pagination"
                                :setPagStyle="props.setPagStyle" :classPag="props.classPag" :el="slider" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/fonts";
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";

.dsn-testimonials {
    .testimonial-position {
        color: $body-color;
        font-size: 14px;
        font-weight: 400;
        margin-top: 5px;
    }

    .content-inner {
        display: flex;
    }

    .border-top {
        padding-top: 20px;
    }

    .testimonial-inner {
        .testimonial-inner-item {

            &.border-style,
            &.background-section,
            &.background-main,
            &.background-theme {
                padding: 30px;
            }
        }

        >svg {
            position: absolute;
            right: 0;
            top: 0;
            width: 247px;
            height: 192px;
            opacity: 0.3;
            fill: $assistant-color;

            .background-section & {
                fill: $bg-color;
            }

            [data-widget_type="dsn_testimonial.default"]:not(.quote-box-style) & {
                display: none;
            }
        }

        .elementor-widget-dsn_testimonial:not(.image-left-style) & .swiper-slide>.avatar {
            display: none;
        }

        .image-left-style & {
            @include media_768(min) {
                .content-inner .avatar {
                    display: none;

                    &+.box-text {
                        margin-left: 0;
                        text-align: inherit;
                    }
                }

                .swiper-slide {
                    >.avatar {
                        height: 80px;
                        width: 80px;
                        margin-bottom: 30px;

                        &,
                        img {
                            border-radius: 50%;
                        }
                    }
                }
            }

            @include media_768() {
                .swiper-slide>.avatar {
                    display: none;
                }
            }
        }
    }

    .content-inner {
        .avatar {
            width: 60px;
            height: 60px;

            &,
            img {
                border-radius: 50%;
            }

            +.box-text {
                margin-left: 10px;
                text-align: left;
            }
        }
    }

    h4,
    h5 {
        font-family: $body-font;
    }

    .testimonial-content h4.sm-title-block {
        letter-spacing: 1.2px;
        font-size: 18px;
    }

    .testimonial-name,
    .testimonial-content h4.sm-title-block {
        font-weight: 600;
    }
}
</style>