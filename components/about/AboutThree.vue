<script setup></script>

<template>
	<div class="about-section about-3 container d-grid grid-md-2 section-margin" data-dsn-gap="30px 60px">
		<div class="box-left">
			<slot name="boxLeftTitle" />
			<slot name="boxLeftContain" />
		</div>
		<div class="box-right">
			<h3 class="title-block heading-color body-font text-upper">
				<slot name="boxRightTitle" />
			</h3>
			<p class="mt-30">
				<slot name="boxRightDescrption" />
			</p>
			<div class="mt-30">
				<h6 class="sm-title-block body-font heading-color square-after d-inline-block">
					<slot name="boxRightSmTitle" />
				</h6>
				<span class="d-block">
					<slot name="boxRightSmTitleSm" />
				</span>
			</div>
			<div class="experience mt-30">
				<span class="exp-number dsn-animate-number exp-font-2">
					<span class="animate-number data-counter">
						<slot name="boxRightnumber" />
					</span>
				</span>
				<h5 class="title-block mt-20">
					<slot name="boxRightP" />
				</h5>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";
@import "./global_style/about-section";
</style>
