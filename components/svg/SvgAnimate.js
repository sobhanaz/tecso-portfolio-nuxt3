import {gsap} from "gsap";
export function animationUp(svg, onComplete) {
    return gsap
    .timeline()
    .addLabel("top")
    .set(svg, {attr: {d: "M 0 100 V 100 Q 50 100 100 100 V 100 z"}}, 0)
    .to(svg, {duration: 0.8, ease: "power4.in", attr: {d: "M 0 100 V 50 Q 50 0 100 50 V 100 z"}}, 0)
    .to(svg, {duration: 0.3, ease: "power2", attr: {d: "M 0 100 V 0 Q 50 0 100 0 V 100 z"}, onComplete})
    .addLabel("center")
    .set(svg, {attr: {d: "M 0 0 V 100 Q 50 100 100 100 V 0 z"}})
    .to(svg, {duration: 0.3, ease: "power2.in", attr: {d: "M 0 0 V 50 Q 50 0 100 50 V 0 z"}})
    .to(svg, {duration: 0.8, ease: "power4", attr: {d: "M 0 0 V 0 Q 50 0 100 0 V 0 z"}});
}
export function animationDown(svg, onComplete) {
    return gsap
    .timeline()
    .addLabel("top")
    .set(svg, {attr: {d: "M 0 0 V 0 Q 50 0 100 0 V 0 z"}}, 0)
    .to(svg, {duration: 0.8, ease: "power4.in", attr: {d: "M 0 0 V 50 Q 50 100 100 50 V 0 z"}}, 0)
    .to(svg, {duration: 0.3, ease: "power2", attr: {d: "M 0 0 V 100 Q 50 100 100 100 V 0 z"}, onComplete})
    .addLabel("center")
    .set(svg, {attr: {d: "M 0 100 V 0 Q 50 0 100 0 V 100 z"}})
    .to(svg, {duration: 0.3, ease: "power2.in", attr: {d: "M 0 100 V 50 Q 50 100 100 50 V 100 z"}})
    .to(svg, {duration: 0.8, ease: "power4", attr: {d: "M 0 100 V 100 Q 50 100 100 100 V 100 z"}});
}
const SvgAnimate = {
    up: animationUp,
    down: animationDown,
};
export default SvgAnimate;
