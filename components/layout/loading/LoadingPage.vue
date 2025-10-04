<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pageLoad } from "@/hooks/plugin.js";
import { store as pStore } from '@/store/store'
import Sibling from "@/components/layout/loading/Sibling.vue"
const props = defineProps({ glitchLogo: Boolean,});
const store = reactive({ progressValue: 0,remove: true });
const preloader = ref(null);
const present = { value: 0 };

onMounted(() => {
	const tl = gsap.timeline();
	document.body.style.overflow = "hidden";
	const handleLoad = () => {
		clearInterval(timer);
		tl.to(present,1,{ value: 100,onUpdate() { store.progressValue = present.value; },})
			.to(".preloader .bg-load",{ autoAlpha: 1 })
			.to(".preloader span",{ autoAlpha: 0 })
			.to(".preloader p",{ autoAlpha: 0 })
			.to(".preloader .v-middle",{ autoAlpha: 0 })
			.to(('.preloader .bg-load'),{ yPercent: -100,ease: "Expo.easeInOut",duration: 1.5 })
			.to('.bg-load .separator__path',{ attr: { d: "M 0 0 C 40 0 55 0 100 0 L 0 0 Z" },ease: "Power4.easeInOut",duration: 1.5 },'-=1.5')
			.fromTo(pStore.activeScrollbar ? "#dsn-scrollbar" : "#main_root",1,{ y: 400 },{ y: 0,clearProps: "y",ease: "Expo.easeInOut" },"-=1.2")
			.call(() => { store.remove = false; document.body.style.overflow = "" });
	}
	const timer = pageLoad(0,100,300,(val) => {
		store.progressValue = val;
		present.value = val;
		if (val >= 100)
			clearInterval(timer);
		handleLoad();
	});
});
</script>

<template>
	<div id="dsn_preloader" class="preloader" ref="preloader" v-show="store.remove">
		<div class="dsnload p-absolute" v-if="glitchLogo">
			<Sibling />
			<Sibling isSibling />
			<Sibling isSibling />
			<Sibling isSibling />
		</div>
		<svg width="100%" height="100%" viewBox="0 0 100 100" class="v-middle" preserveAspectRatio="xMinYMin meet"
			fill="none">
			<linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" style="stop-color:var(--theme-color)" />
				<stop offset="50%" style="stop-color:var(--border-color)" />
				<stop offset="100%" style="stop-color:var(--assistant-color)" />
			</linearGradient>
			<path class="dsn-progress-path" :style="`stroke-dashoffset: ${300 - (store.progressValue * 3)}`"
				d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
		</svg>
		<div class="loading-circle v-middle">
			<p class="loading-count v-middle">{{ store.progressValue.toFixed(0) }}</p>
		</div>
		<div class="loading-text text-uppercase mt-30 dsn-container">
			<span>Loading ...</span>
		</div>
		<div class="bg-load background-section d-flex align-items-end">
			<svg class="dsn-separator-bottom dsn-icon-assistant-color" width="100%" height="100%" viewBox="0 0 100 10"
				preserveAspectRatio="none">
				<path class="path-anim separator__path" vectorEffect="non-scaling-stroke"
					d="M 0 0 C 40 16 75 10 100 0 L 0 0 Z" />
			</svg>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";

#dsn_preloader {
	position: fixed;
	width: 100vw;
	max-width: 100%;
	height: 100vh;
	z-index: 98;
	flex-direction: column;
	overflow: hidden;
	left: 0;

	.bg-load {
		z-index: -1;
	}

	@include media_991(min) {
		--width-loading-circle: 25vw;
	}

	@include media_991 {
		--width-loading-circle: 50vw;
	}

	svg.v-middle,
	.loading-circle {
		width: var(--width-loading-circle);
		height: var(--width-loading-circle);
	}

	svg.v-middle {
		path {
			display: block;
			stroke-dasharray: 310px;
			stroke-dashoffset: 310px;
			stroke: url(#linearColors);
			-webkit-animation: spin 1s infinite linear;
			animation: spin 1s infinite linear;
			transform-origin: center;
			width: 100%;
			height: 100%;
			stroke-width: 1.4;
		}
	}

	.loading-circle {
		font-size: 7vw;
		border-radius: 50%;
		border: 1px solid #000;
	}

	.loading-text {
		position: absolute;
		font-size: 22px;
		color: $heading-color;
		left: var(--dsn-gap-container);
		bottom: 50px;
	}
}

.dsnload {
	top: 22px;
	left: var(--dsn-gap-container);

	.dsnload__img {
		display: block;
		transform-origin: bottom left;
		-webkit-animation: moveIn 2s 0s cubic-bezier(0.36, 0, 0.06, 1) alternate infinite;
		animation: moveIn 2s 0s cubic-bezier(0.36, 0, 0.06, 1) alternate infinite;

		img {
			width: 96px;
		}
	}

	.dsnload__row {
		&:nth-child(1) {
			-webkit-clip-path: polygon(-10% 75%, 110% 75%, 110% 110%, -10% 110%);
			clip-path: polygon(-10% 75%, 110% 75%, 110% 110%, -10% 110%);

			.dsnload__img {
				transform: translateY(-0.1em);
			}
		}

		&:nth-child(2) {
			-webkit-clip-path: polygon(-10% 50%, 110% 50%, 110% 75.3%, -10% 75.3%);
			clip-path: polygon(-10% 50%, 110% 50%, 110% 75.3%, -10% 75.3%);

			.dsnload__img {
				transform: translateY(-0.3em) scaleY(1.1);
			}
		}

		&:nth-child(3) {
			-webkit-clip-path: polygon(-10% 25%, 110% 25%, 110% 50.3%, -10% 50.3%);
			clip-path: polygon(-10% 25%, 110% 25%, 110% 50.3%, -10% 50.3%);

			.dsnload__img {
				transform: translateY(-0.5em) scaleY(1.2);
			}
		}

		&:nth-child(4) {
			-webkit-clip-path: polygon(-10% 0%, 110% 0%, 110% 25.3%, -10% 25.3%);
			clip-path: polygon(-10% 0%, 110% 0%, 110% 25.3%, -10% 25.3%);

			.dsnload__img {
				transform: translateY(-0.7em) scaleY(1.3);
			}
		}

		&.dsnload__row--sibling {
			position: absolute;
			top: 0;
			left: 0;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}
	}
}

.main-brand,
.dsnload__img {
	img {
		width: 80px;
		max-width: 100%;
		height: auto;
	}

	.v-light .site-header &,
	#dsn_footer.v-light &,
	&,
	.v-light #dsn_footer:not(.v-light, .v-dark) & {
		.logo-dark {
			display: block;
		}
	}

	.v-dark .site-header &,
	#dsn_footer.v-dark &,
	.v-dark #dsn_footer:not(.v-light, .v-dark) & {
		.logo-dark {
			display: none;
		}
	}
}

@-webkit-keyframes moveIn {

	50%,
	100% {
		transform: translateY(0em);
	}

	0% {
		opacity: 0;
		-webkit-filter: blur(5px);
		filter: blur(5px);
	}

	100% {
		opacity: 1;
		-webkit-filter: blur(0px);
		filter: blur(0px);
	}
}

@keyframes moveIn {

	50%,
	100% {
		transform: translateY(0em);
	}

	0% {
		opacity: 0;
		-webkit-filter: blur(5px);
		filter: blur(5px);
	}

	100% {
		opacity: 1;
		-webkit-filter: blur(0px);
		filter: blur(0px);
	}
}

@-webkit-keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>