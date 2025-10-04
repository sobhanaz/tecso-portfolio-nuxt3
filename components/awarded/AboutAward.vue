<script setup>
const props = defineProps({ data: Array });
</script>

<template>
	<div class="about-award pt-section background-section">
		<div class="container d-grid grid-half-1">
			<div class="box-left">
				<slot name="boxRightTitle" />
				<slot name="boxRightString" />
				<div class="experience mt-30">
					<span class="exp-number d-block">
						<span class="data-counter">
							<slot name="boxRightNumber" />
						</span>
					</span>
					<h5 class="sm-title-block d-inline-block mt-30 background-main p-10">
						<slot name="boxRightDescription" />
					</h5>
				</div>
			</div>
			<div class="box-right background-main bg-dots">
				<h2 class="title-h2 body-font text-upper">
					<span>
						<slot name="boxLeftTitle" />
					</span>
				</h2>
				<div class="dsn-award award-block mt-30 d-grid">
					<div class="award-item" v-for="(award,index) in props.data" :key="index">
						<h5 class="award-num title-h2">
							<span class="data-counter">{{ award.number }}</span>
						</h5>
						<div class="content-award">
							<h4 class="title-block text-upper">{{ award.name }}</h4>
							<p class="mt-10">{{ award.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/structure";
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";

.about-award {
	.grid-half-1 {
		@include media_768(min) {
			grid-template-columns: 40% 60%;
		}
	}

	@include media_991() {
		&.dsn_testimonial .grid-half-1 {
			grid-template-columns: 100%;
		}
	}

	.box-right {

		&.background-main,
		&.background-section,
		.background-theme {
			@include media_768(min) {
				margin-top: -180px;
				padding: 120px 60px;
			}

			@include media_768() {
				padding: $box-padding;
				margin-bottom: $margin-padding;
			}
		}
	}
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
}
</style>
