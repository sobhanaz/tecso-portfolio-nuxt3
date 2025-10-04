<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Animate } from "@/hooks/pluginanimations.js";
import { Fancybox } from "@fancyapps/ui";
const props = defineProps({ imageSrc: String,btnName: String,videoLink: String });
const secVideo = ref(null);
const containImg = ref(null);
const leftText = ref(null);
const rightText = ref(null);
onMounted(() => {
	Fancybox.bind("[data-fancybox]",{ Hash: false });
	new Animate({ start: "top" },{ xPercent: 0 },{ xPercent: 50 },secVideo.value,leftText.value);
	new Animate({ start: "top" },{ xPercent: 0 },{ xPercent: -50 },secVideo.value,rightText.value);
	new Animate({ pin: true },{ scale: 0.5 },{ scale: 1 },secVideo.value,containImg.value);
});
onUpdated(() => Fancybox.close());
onBeforeUnmount(() => Fancybox.destroy());
</script>

<template>
	<div ref="secVideo" class="section-video p-relative section-padding hv-100 dsn-animate-video v-dark-head">
		<div class="container d-flex align-items-center h-100">
			<div class="content d-grid grid-3 justify-content-between align-items-center w-100">
				<h6 ref="leftText" class="title animate-left text-left">PLAY</h6>
				<div class="dsn-normal-btn dsn-icon-heading-color d-flex justify-content-center">
					<a class="dsn-btn dsn-border border-color-default vid background-section move-circle has-icon-left"
						:href="props.videoLink" target="_blank" data-fancybox="vid" data-dsn="parallax">
						<span class="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
							<font-awesome-icon :icon="['fas','play']" />
						</span>
						<span class="title-btn p-relative z-index-1">
							{{ props.btnName }}
						</span>
					</a>
				</div>
				<h6 ref="rightText" class="title animate-right text-right">REEL</h6>
			</div>
		</div>
		<div ref="containImg" class="dsn-bg-section p-absolute w-100 h-100 over-hidden top-0 left-0">
			<div class="h-100 img-box-parallax before-z-index section-margin w-100" data-overlay="4">
				<NuxtImg format="webp" :src="props.imageSrc" class="cover-bg-img has-direction" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/mixins/utilities";

.section-video {
	.dsn-btn {
		width: 150px;
		height: 150px;
		border-radius: 50% 50% 50% 50%;
		align-items: center;
		justify-content: center;
	}

	.dsn-bg-section {
		display: flex;
		align-items: center;
		justify-content: center;

		.img-box-parallax {
			position: relative;
		}
	}

	@include media_575() {
		.content {
			display: flex;
			justify-content: center;
		}

		.animate-left,
		.animate-right {
			display: none;
		}
	}
}
</style>
