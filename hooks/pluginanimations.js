import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {splittingChar} from "@/hooks/spltting.js";
//--------------------------------------------------------------------------------------------
export function Animate(option, from, to, elTrigger, elTarget, ...props) {
    if (!elTarget || !elTrigger || !from || !to) {
        return false;
    }
    this.option = option;
    this.elTrigger = elTrigger;
    this.elTarget = elTarget;
    this.from = from;
    this.to = to;
    const nuxtApp = useNuxtApp();
    const animateTrigger = gsap.timeline();
    animateTrigger.fromTo(this.elTarget, {...this.from}, {...this.to}, {...props});
    ScrollTrigger.create({
        animation: animateTrigger,
        trigger: this.elTrigger,
        ease: "none",
        scrub: true,
        ...this.option,
    });
    setTimeout(ScrollTrigger.refresh, 500);
    nuxtApp.hook("page:loading:start", () => {
        animateTrigger.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    });
}
//--------------------------------------------------------------------------------------------
export const triggerElement = () => {
    const el = document.querySelectorAll("[data-dsn-animate]");
    el.forEach((item) => {
        const useThis = item.getAttribute("data-move-this");
        const obj = JSON.parse(item.getAttribute("data-dsn-animate"));
        new Animate(obj.trigger ?? {}, obj.from ?? {}, obj.to ?? {}, item, useThis ? item : item.firstElementChild);
    });
};
//--------------------------------------------------------------------------------------------
export const fadeUp = () => {
    const el = document.querySelectorAll("[data-fade-up]");
    el.forEach((item) => {
        new Animate(
            {scrub: false, start: "top 90%"},
            {autoAlpha: 0, y: 100},
            {autoAlpha: 1, y: 0, duration: 1.5},
            item,
            item
        );
    });
};
//--------------------------------------------------------------------------------------------
export const animateUp = () => {
    const el = document.querySelectorAll(".dsn-animate-up");
    el.forEach((item) => {
        new Animate({scrub: !0, start: "top top"}, {y: 0, x: 0}, {y: -20, x: -20}, item, item);
    });
};
//--------------------------------------------------------------------------------------------
export const animateDown = () => {
    const el = document.querySelectorAll(".dsn-animate-down");
    el.forEach((item) => {
        new Animate({scrub: 1, start: "top bottom"}, {y: 0}, {y: 50}, item, item);
    });
};
//--------------------------------------------------------------------------------------------
export const counter = () => {
    const el = document.querySelectorAll(".data-counter");
    el.forEach((item) => {
        if (Number(item.textContent) !== 0) {
            new Animate(
                {
                    scrub: false,
                    toggleActions: "play none none none",
                    start: "0% bottom",
                    end: "top",
                    extendTimeline: true,
                },
                {textContent: 0},
                {
                    textContent: Math.floor(item.innerText),
                    duration: 2.5,
                    stagger: 0.25,
                    onUpdate() {
                        item.textContent = Math.trunc(item.textContent);
                    },
                },
                item,
                item
            );
        }
    });
};
//--------------------------------------------------------------------------------------------
export const splitEl = () => {
    const el = document.querySelectorAll("[data-split-char]");
    el.forEach((item) => {
        splittingChar(item, true);
        const words = item.querySelectorAll(".word");
        words.forEach((word, index) => {
            new Animate(
                {scrub: false, start: "top 100%"},
                {
                    visibility: "hidden",
                    translateY: "50%",
                    rotation: "15deg",
                    scale: 0.8,
                    autoAlpha: 0,
                    stagger: 0.02,
                    ease: "none",
                },
                {
                    delay: index * 0.04,
                    visibility: "visible",
                    translateY: "0%",
                    rotation: "0deg",
                    scale: 1,
                    autoAlpha: 1,
                    stagger: 0.02,
                    ease: "none",
                },
                word,
                word
            );
        });
    });
};
//--------------------------------------------------------------------------------------------
export const runAnimationOnLoad = () => {
    triggerElement();
    fadeUp();
    counter();
    splitEl();
    animateUp();
    animateDown();
};
