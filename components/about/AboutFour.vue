<script setup>
const props = defineProps({ imageOneSrc: String,imageTwoSrc: String,imageThreeSrc: String });
</script>

<template>
	<section class="about-section about-2 p-relative section-padding background-section">
		<div class="p-relative container">
			<div class="p-relative d-grid grid-md-2 d-grid-no-space z-index-1">
				<div class="bg-mask background-main v-middle"></div>
				<div class="box-img">
					<NuxtImg format="webp" :src="props.imageOneSrc" alt="" />
					<NuxtImg format="webp" :src="props.imageTwoSrc" alt="" />
				</div>
				<div class="box-info">
					<slot name="title" />
					<p class="max-w570 mt-20 pr-120">
						<slot name="description" />
					</p>
					<slot />
					<NuxtImg format="webp" class="mt-20" :src="props.imageThreeSrc" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/variables-site/structure";
@import "@/assets/styles/mixins/utilities";
@import "./global_style/about-section";


.about-2 {
	img {
		width: 100%;
		height: auto;
	}

	.box-info,
	.box-img {
		position: relative;
		z-index: 2;
	}

	@include media_768(min) {
		.bg-mask {
			width: calc(100% - 120px);
			height: calc(100% - 120px);
		}

		.box-img {
			margin-right: 60px;

			img:first-child {
				padding-right: 30px;
			}

			img:last-child {
				padding: 40px 0 0 120px;
			}
		}

		.box-info {
			.section-title.mt-section {
				padding-right: 90px;
			}

			.pr-120 {
				padding-right: 120px;
			}

			img.mt-20 {
				margin-left: -30px;
			}
		}
	}

	@include media_768() {
		.bg-mask {
			width: 100%;
			height: 100%;
		}

		.box-info {
			padding: 0 30px $margin-padding;
		}

		.box-img {
			display: none;
		}
	}
}
</style>
