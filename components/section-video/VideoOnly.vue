<script setup>
import { Fancybox } from "@fancyapps/ui";
const props = defineProps({ imageSrc: String, btnName: String, videoLink: String })
onMounted(() => Fancybox.bind("[data-fancybox]", { Hash: false }))
onUpdated(() => Fancybox.close())
onBeforeUnmount(() => Fancybox.destroy());
</script>

<template>
    <div class="p-relative dsn-container section-padding hv-80">
        <div class="dsn-bg-mask h-50 bottom-0 background-section"></div>
        <div class="container section-video h-100 d-flex align-items-center justify-content-center">
            <div class="dsn-normal-btn dsn-icon-heading-color">
                <a class="dsn-btn dsn-border border-color-default vid background-section move-circle has-icon-left"
                    :href="props.videoLink" target="_blank" data-fancybox="vid" data-dsn="parallax">
                    <span class="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                        <font-awesome-icon :icon="['fas', 'play']" />
                    </span>
                    <span class="title-btn p-relative z-index-1">{{ props.btnName }}</span>
                </a>
            </div>
        </div>
        <div class="dsn-bg-section dsn-container p-absolute w-100 h-100 over-hidden top-0 left-0" data-dsn-animate='{
            "trigger":{"start":"-80% top","end":"100%"},
            "from":{"y": "-20%","height": "120%"},
            "to":{ "y": "0%", "height": "120%" }
        }'>
            <div class="h-100 img-box-parallax before-z-index " data-dsn-grid="move-up" data-overlay="4">
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
