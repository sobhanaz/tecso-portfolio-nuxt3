<script setup>
const props = defineProps({ data: Array });
</script>

<template>
	<div class="dsn-award text-center p-relative mb-section background-section">
		<div class="dsn-bg-mask w-100 h-50 bottom-0 background-main z-index-1"></div>
		<div class="section-padding container background-main border-style p-relative z-index-2">
			<div class="d-grid grid-md-3">
				<div class="award-item" v-for="(award,index) in props.data" :key="index">
					<h5 class="font-number dsn-animate-number">
						<span class="animate-number data-counter">{{ award.number }}</span>{{ award.mark }}
					</h5>
					<h4 class="title-block mt-10">{{ award.name }}</h4>
					<p class="sm-p mt-10">{{ award.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/mixins/utilities";
@import "@/assets/styles/variables-site/colors";

.dsn-award {
	&:not(.award-block) {
		@include media_768(min) {
			.award-item:not(:last-of-type) {
				margin-right: 15px;
				padding-right: 15px;
				border-right: 1px solid $border-color;
			}
		}

		@include media_768() {
			.award-item:not(:last-of-type) {
				padding-bottom: 30px;
				border-bottom: 1px solid $border-color;
			}
		}
	}

	&.award-block {
		.award-item {
			display: flex;
			align-items: center;

			@include media_575(min) {
				.content-award {
					padding-left: 30px;
					margin-left: 10px;
					border-left: 1px solid $border-color;
				}
			}

			@include media_575() {
				flex-direction: column;
				align-items: start;

				.content-award {
					margin-top: 10px;
				}
			}

			.award-num {
				min-width: var(--width-award);
				width: auto;

				@include media_991(min) {
					--width-award: 15%;
				}

				@include media_768X991() {
					--width-award: 20%;
				}

				@include media_575X768() {
					--width-award: 13%;
					margin-right: 10px;
				}
			}
		}
	}
}
</style>
