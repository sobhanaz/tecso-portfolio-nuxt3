<script setup>
const props = defineProps({ imageSrc: String });
</script>

<template>
	<div class="box-under-bottom-img mb-section">
		<div class="img-box-parallax before-z-index dsn-animate dsn-effect-down h-v-80" data-dsn-animate='
            {"trigger":{"start":"top bottom"}, 
            "from":{ "yPercent": "-30", "scale": "1.2" }, 
            "to":{ "yPercent": "0", "scale": "1" }}'>
			<NuxtImg format="webp" class="has-bigger-scale cover-bg-img has-direction" :src="props.imageSrc" />
		</div>
		<div class="p-relative content container background-theme box-padding border-rdu text-center">
			<h3 class="title-block-lg text-upper">
				<slot name="title" />
			</h3>
			<p class="dsn-heading-title mt-20 max-w750">
				<slot name="string" />
			</p>
		</div>
	</div>
</template>
<style lang="scss">
@import "@/assets/styles/mixins/utilities";

.box-under-bottom-img {
	position: relative;
	overflow: hidden;

	@include media_991(min) {
		.content {
			margin-top: -130px;
		}
	}

	@include media_991() {
		.content {
			border-radius: 0;
		}
	}
}
</style>