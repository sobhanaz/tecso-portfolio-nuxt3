<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const props = defineProps({ data: Object, className: String, bgColor: String, number: Number });
const store = reactive({ width: 0 });
const skillSvg = ref(null);
const animate = gsap.timeline();
onMounted(() => {
	if (props.number == null) return;

	animate.to(skillSvg.value, 1.5, {
		strokeDashoffset: 100 - props.number,
		onUpdate() { store.width = Math.floor(this.progress() * props.number); },
		onComplete() { animate.scrollTrigger.kill(); animate.kill(); },
	});
	ScrollTrigger.create({
		animation: animate,
		trigger: skillSvg.value,
		start: "top 95%",
	});
});
onUnmounted(() => {
	if (animate.scrollTrigger)
		animate.scrollTrigger.kill();

	animate.kill();
});
</script>

<template>
	<div class="dsn-skills-item grid-item">
		<div class="skills-inner">
			<div class="bar-svg">
				<div :class="`fill-bar p-relative ${props.bgColor}`">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
						<circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
						<circle cx="16" cy="16" r="15.9155"
							class="progress-bar__progress js-progress-bar dsn-animate-skill" data-dsn-progress="80"
							ref="skillSvg" style="stroke-dashoffset: 100" />
					</svg>
					<h4 class="dsn-number-award number sm-title-block v-middle">{{ store.width }}%</h4>
				</div>
				<h5 class="dsn-title-award sm-title-block mt-30">
					<slot />
				</h5>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "./global_skills_style/skills"
</style>
