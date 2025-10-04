<script setup>
import { gsap } from "gsap";
import { store } from '@/store/store'
import { cursorGrowing } from "@/hooks/plugin.js"
const dsn_cursor = ref(null);
const dsn_cursor_inner = ref(null);
const animate = gsap.timeline();
if (store.mouseGrow) {
    const nuxtApp = useNuxtApp()
    const head = nuxtApp.vueApp._context.provides.usehead
    head.push({ style: [{ innerHTML: '.scale { cursor: none; }' }] })
}
onMounted(() => {
    cursorGrowing()
    if (!store.mouseGrow) return
    let mouseX = 0;
    let mouseY = 0;
    animate.to({},0.000009,{ repeat: -1,onRepeat() { gsap.set(dsn_cursor.value,{ css: { left: mouseX,top: mouseY,} }) } });
    animate.to({},0.000009,{ repeat: -1,onRepeat() { gsap.set(dsn_cursor_inner.value,{ css: { left: mouseX,top: mouseY,},}) } });
    window.addEventListener("mousemove",(e) => { mouseX = e.clientX; mouseY = e.clientY; });
});
onUnmounted(() => animate.kill());
</script>

<template>
    <div ref="dsn_cursor" class="dsn_cursor swiper-parallax-transform"></div>
    <div ref="dsn_cursor_inner" class="dsn_cursor_inner ball"></div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";
.dsn_cursor,
.dsn_cursor_inner {
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 50%;
    pointer-events: none;
    z-index: 99;
    mix-blend-mode: exclusion;

    @include media_991() {
        display: none;
    }
}

.dsn_cursor {
    width: 30px;
    height: 30px;
    border: 2px solid $theme-color;
    transform: translate(-14px, -14px);
    transition: all 0.05s ease-in-out;

    path {
        display: none;
        stroke-dasharray: 400;
        stroke-dashoffset: 400;
        stroke-width: 1;
    }
}

.dsn_cursor_inner {
    width: 7px;
    height: 7px;
    background-color: $theme-color;
    transform: translate(-2px, -2px);
    transition: all 0.03s ease-in-out;
}

.grow {
    opacity: 0.5;
    background-color: #e4e4dd;
    transform: translate(-15px, -15px) scale(2);
    transition: 0.5s;
    transition-property: transform;
    transition-timing-function: linear;
}

.non-grow {
    transition: 0.5s;
    transition-property: transform;
    transition-timing-function: linear;
}
</style>
