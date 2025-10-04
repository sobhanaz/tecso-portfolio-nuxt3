<script setup>
const props = defineProps({ imageSrc: String });
</script>

<template>
	<div class="right-box-image section-margin dsn-container dsn-left-container over-hidden">
		<div class="box-img">
			<div class="img-box-parallax h-v-80 w-100 before-z-index dsn-animate dsn-effect-left"
				data-dsn-grid="move-up" data-overlay="1" data-dsn-animate='{
                    "trigger":{"start":"-80% top","end":"100%"},
                    "from":{"y": "-20%","height": "120%"},
                    "to":{ "y": "0%", "height": "120%" }
                }'>
				<ClientOnly>
					<NuxtImg format="webp" :src="props.imageSrc" class="cover-bg-img has-direction"
						data-dsn-position="50% 0%" alt="direction" />
				</ClientOnly>

			</div>
		</div>
		<div class="box-info background-section box-padding section-margin" data-dsn-gap="30px 30px">
			<slot name="title" />
			<slot name="string" />
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/mixins/utilities";

.right-box-image {
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;

	.box-info {
		position: relative;
	}

	@include media_991(min) {
		--box-padding: 80px;

		.box-img,
		.img-box-parallax {
			position: absolute;
			height: 100%;
			left: 0;
			top: 0;
			width: 70%;
			z-index: 1;
		}

		.box-info {
			width: 40%;
			margin-left: auto;
			z-index: 2;
		}
	}

	@include media_991() {
		.box-img {
			position: relative;
			width: 100%;
		}

		.box-info {
			margin-top: 0;
			margin-bottom: 0;
		}
	}
}
</style>
