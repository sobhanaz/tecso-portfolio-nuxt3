<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const props = defineProps({ data: Object });
const bar = ref(null);
const progressTextAnimate = ref(null);
const progressValueAnimate = ref(null);
const animateText = gsap.timeline();
const animate = gsap.timeline();
onMounted(() => {
	ScrollTrigger.create({
		animation: animateText,
		trigger: bar.value,
		toggleActions: "play none none none",
		start: "0% bottom",
		end: "top",
		extendTimeline: true,
	});
	animateText.to(progressTextAnimate.value, {
		textContent: Math.floor(props.data.Percentage),
		duration: 1.5,
		onUpdate() { progressTextAnimate.value.textContent = `${Math.trunc(progressTextAnimate.value.textContent)}%`; },
		onComplete() { animateText.scrollTrigger.kill(); animateText.kill(); },
	});
	ScrollTrigger.create({
		animation: animate,
		trigger: bar.value,
		toggleActions: "play none none none",
		start: "0% bottom",
		end: "top",
		extendTimeline: true,
	});
	animate.to(progressValueAnimate.value, {
		duration: 1.5,
		width: `${props.data.Percentage}%`,
		onComplete() {
			animate.scrollTrigger.kill();
			animate.kill();
		},
	});
});
onUnmounted(() => {
	if (animate.scrollTrigger) animate.scrollTrigger.kill();
	animate.kill();

	if (animateText.scrollTrigger) animateText.scrollTrigger.kill();
	animateText.kill();
});
</script>

<template>
	<div class="dsn-skills-item grid-item">
		<div class="skills-inner">
			<h6 class="dsn-title-award sm-title-block mb-15">{{ props.data.skill }}</h6>
			<div ref="bar" class="bar-progress">
				<span ref="progressValueAnimate" class="fill dsn-animate-skill box-shadow background-section"
					data-dsn-width="98%">
					<span ref="progressTextAnimate" class="dsn-number-award number sm-title-block"></span>
				</span>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@import "./global_skills_style/skills"
</style>