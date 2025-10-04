<script setup>
import { elScrollDown } from "@/hooks/plugin.js"
const props = defineProps({ goToEl: String });
</script>

<template>
	<div ref="btnScroll" @click="elScrollDown(goToEl)" class="dsn-scroll-bottom"
		data-dsn-option='{"ease": "power4.inOut" , "duration" : 1.5}'>
		<div class="text">SCROLL</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/variables-site/transitions";
.dsn-scroll-bottom {
	position: absolute;
	right: 20px;
	bottom: 50px;
	z-index: 99;
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	min-width: 13px;
	font-size: 10px;
	letter-spacing: 5px;
	cursor: pointer;

	&:before,
	&:after {
		content: "";
		display: block;
		width: 1px;
		height: 40px;
		left: 50%;
		margin-bottom: 10px;
	}

	&:before {
		position: relative;
		background-color: $bg-color;
	}

	&:after {
		position: absolute;
		top: 0;
		background-color: $theme-color;
		transform: scale(0);
		transform-origin: top;
		-webkit-animation: scroll-down 2.5s $easeInOutExpo infinite;
		animation: scroll-down 2.5s $easeInOutExpo infinite;
	}

	.text {
		-webkit-writing-mode: vertical-lr;
		-ms-writing-mode: tb-lr;
		writing-mode: vertical-lr;
	}
}

@-webkit-keyframes scroll-down {
	0% {
		transform: scale(0);
		transform-origin: top;
		//animation-timing-function: $easeOutExpo;
	}

	50% {
		transform: scale(1);
		transform-origin: top;
	}

	51% {
		transform: scale(1);
		transform-origin: bottom;
		//animation-timing-function: $easeInExpo;
	}

	100% {
		transform: scale(0);
		transform-origin: bottom;
	}
}

@keyframes scroll-down {
	0% {
		transform: scale(0);
		transform-origin: top;
		//animation-timing-function: $easeOutExpo;
	}

	50% {
		transform: scale(1);
		transform-origin: top;
	}

	51% {
		transform: scale(1);
		transform-origin: bottom;
		//animation-timing-function: $easeInExpo;
	}

	100% {
		transform: scale(0);
		transform-origin: bottom;
	}
}
</style>
