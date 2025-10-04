<script setup></script>

<template>
	<div class="dsn-resume">
		<slot />
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/variables-site/fonts";
@import "@/assets/styles/mixins/utilities";

.dsn-resume {
	.resume-item {
		position: relative;
		padding-left: 20px;

		&:not(:last-of-type) {
			@include media_991(min) {
				padding-bottom: 50px;
			}

			@include media_768X991 {
				padding-bottom: 30px;
			}

			@include media_768 {
				padding-bottom: 20px;
			}

			&:after {
				top: 20px;
				left: 4px;
				width: 1px;
				height: calc(100% - 24px);
				background-color: $border-color;
			}
		}

		&:before,
		&:after {
			content: "";
			position: absolute;
		}

		&:before {
			top: 5px;
			left: 0;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: $theme-color;
		}

		.resume-position {
			font-family: $body-font;
			line-height: 1.6;
			font-weight: 500;
			color: $body-color;
		}
	}
}
</style>