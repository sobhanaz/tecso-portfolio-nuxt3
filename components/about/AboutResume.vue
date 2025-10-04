<script setup>
const props = defineProps({ data: Object });
</script>

<template>
	<div class="about-section about-resume container section-margin text-center">
		<slot name="title" />
		<div class="d-grid grid-md-2 d-grid-no-space box-img">
			<div class="img-left" data-dsn-animate='{"to":{"rotation":"-15","y":"60"}}'>
				<NuxtImg format="webp" :src="props.data.images[1].src" alt="image" />
			</div>
			<div class="img-right" data-dsn-animate='{"to":{"rotation":"9","y":0}}'>
				<NuxtImg format="webp" :src="props.data.images[2].src" alt="image" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";
@import "./global_style/about-section";
.about-resume {
	.box-img {
		.img-left {
			margin-bottom: 60px;
		}

		.img-right img {
			height: 80vh;
		}

		@include media_991(min) {
			.img-left {
				margin-left: 100px;
			}

			.img-right {
				margin-left: -100px;
			}
		}

		@include media_768X991() {
			.img-left {
				transform: translateX(60px);
			}
		}

		@include media_768(min) {
			.img-right {
				margin-top: 60px;
			}
		}

		@include media_768() {
			.img-left {
				display: none;
			}
		}
	}
}
</style>
