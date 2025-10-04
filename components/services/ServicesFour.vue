<script setup>
import { Animate } from "@/hooks/pluginanimations.js"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const props = defineProps({ data: Array });
const services = ref(null)
const serviceHover = (event) => {
    const item = services.value.querySelectorAll(".service-item")
    item.forEach(element => {
        element.classList.remove("active")
        const ul = element.querySelector(".service_description")
        const ulHeight = ul.getBoundingClientRect().height
        new Animate({ duration: 1,scrub: false },{ height: ulHeight,overflow: "hidden" },{ height: 0,overflow: "hidden" },event.target,ul);
    });
    event.target.classList.add("active")
    const ul = event.target.querySelector(".service_description")
    ul.style = "display:block"
    const ulHeight = ul.getBoundingClientRect().height
    new Animate({ duration: 1,scrub: false },{ height: 0,overflow: "hidden" },{ height: ulHeight,overflow: "hidden" },event.target,ul);
}

onMounted(() => {
    const item = services.value.querySelectorAll(".service-item")
    item.forEach(element => {
        const dataImage = element.getAttribute("data-image")
        element.insertAdjacentHTML('afterend',`<div class="item-bg cover-bg"  data-overlay="4" style="background-image:url(${dataImage})"></div>`);
    });
})
</script>

<template>
    <div ref="services" class="dsn-container p-relative mb-section">
        <div class="service-with-img text-center icon-top dsn-icon-theme-color v-dark-head-mobile">
            <div class="dsn-service d-grid grid-md-3 grid-sm-2 hv-100" data-dsn-iconsize="80px">
                <div 
                    :class="['service-item p-relative  grid-item',index === 0 ? 'active' : null,index === 0 || index === 1 ? 'border-right' : null]"
                    v-for="(service,index) in props.data" :key="index" @mouseenter="serviceHover($event)"
                    :data-image="service.imgSrc">
                    <div class="service-item-inner number-item h-100">
                        <div class="dsn-icon">
                            <NuxtImg format="webp" :src="service.svgLight" />
                        </div>
                        <div class="service-content p-relative">
                            <h4 class="service_title  title-block ">{{ service.title }}</h4>
                            <div class="service_description mt-20 max-w570 dsn-auto">
                                <ul>
                                    <li v-for="(description,index) in service.description" :key="index">
                                        {{ description }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dsn-bg-mask h-50 top-0 background-section"></div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/variables-site/structure";
@import "@/assets/styles/mixins/utilities";

.dsn-service {
    .service-with-img & {
        @include media_991(min) {
            .service-item {
                position: relative;
                overflow: hidden;
                display: flex;
                align-items: center;
                z-index: 1;
                background-color: transparent;

                .service_description {
                    color: $heading-color;
                }

                &,
                .dsn-def-btn {
                    justify-content: center;
                }

                .service-item-inner {
                    height: auto;
                }

                &.active+.item-bg {
                    opacity: 1;
                }
            }

            .service_description {
                display: none;
            }

            .item-bg {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
                opacity: 0;
                overflow: hidden;
                transition:
                    opacity 3s cubic-bezier(0.19, 1, 0.22, 1) 0ms,
                    transform 2s cubic-bezier(0.19, 1, 0.22, 1) 0ms;
            }
        }

        @include media_991() {
            .service-item {
                height: auto !important;
            }

            .item-bg {
                display: none;
            }
        }
    }
}

.service-with-img {
    .dsn-service {
        position: relative;
    }

    @include media_991() {
        margin-top: $margin-padding;

        .dsn-service {
            &.hv-100 {
                height: inherit;
            }

            .service-item {
                border: 1px solid $border-color;
                padding: 60px 30px;
            }
        }

        .dsn-bg-mask {
            display: none;
        }
    }
}
</style>