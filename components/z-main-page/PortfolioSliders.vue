<script setup>
const { $Isotope } = useNuxtApp();
const portfolioData = [
	{
		name: "Fullscreen / Distortion / Horizontal",
		caption: "Fullscreen",
		imageSrc: "images/preview/1.jpg",
		link: "/slider/slider-full-distortion-h",
	},
	{
		name: "Fullscreen / Distortion / Vertical",
		caption: "Fullscreen",
		imageSrc: "images/preview/2.jpg",
		link: "/slider/slider-full-distortion-v",
	},
	{
		name: "Fullscreen / Parallax / Horizontal",
		caption: "Fullscreen",
		imageSrc: "images/preview/4.jpg",
		link: "/slider/slider-full-parallax-h",
	},
	{
		name: "Fullscreen / Parallax / Vertical",
		caption: "Fullscreen",
		imageSrc: "images/preview/5.jpg",
		link: "/slider/slider-full-parallax-v",
	},
	{
		name: "Padding / Distortion / Horizontal",
		caption: "Dark",
		imageSrc: "images/preview/6.jpg",
		link: "/slider/slider-padding-distortion-h",
	},
	{
		name: "Padding / Distortion / Horizontal",
		caption: "Light",
		imageSrc: "images/preview/7.jpg",
		link: "/slider/slider-Padding-distortion-h",
	},
	{
		name: "Padding / Distortion / Vertical",
		caption: "Dark",
		imageSrc: "images/preview/8.jpg",
		link: "/slider/slider-padding-distortion-V",
	},
	{
		name: "Padding / Distortion / Vertical",
		caption: "Light",
		imageSrc: "images/preview/9.jpg",
		link: "/slider/slider-padding-distortion-V",
	},
	{
		name: "Half / Distortion / Horizontal",
		caption: "Dark",
		imageSrc: "images/preview/10.jpg",
		link: "/slider/slider-half-distortion-h",
	},
	{
		name: "Half / Distortion / Horizontal",
		caption: "Light",
		imageSrc: "images/preview/11.jpg",
		link: "/slider/slider-half-distortion-h",
	},
	{
		name: "Half / Distortion / Vertical",
		caption: "Dark",
		imageSrc: "images/preview/12.jpg",
		link: "/slider/slider-half-distortion-v",
	},
	{
		name: "Half / Distortion / Vertical",
		caption: "Light",
		imageSrc: "images/preview/13.jpg",
		link: "/slider/slider-half-distortion-v",
	},
	{
		name: "Half / Parallax / Horizontal",
		caption: "Dark",
		imageSrc: "images/preview/14.jpg",
		link: "/slider/slider-half-parallax-h",
	},
	{
		name: "Half / Parallax / Horizontal",
		caption: "Light",
		imageSrc: "images/preview/15.jpg",
		link: "/slider/slider-half-parallax-h",
	},
	{
		name: "Half / Parallax / Vertical",
		caption: "Dark",
		imageSrc: "images/preview/16.jpg",
		link: "/slider/slider-half-parallax-v",
	},
	{
		name: "Half / Parallax / Vertical",
		caption: "Light",
		imageSrc: "images/preview/17.jpg",
		link: "/slider/slider-half-parallax-v",
	},
	{
		name: "Showcase Carousel V1",
		caption: "Dark",
		imageSrc: "images/preview/carousel-1.jpg",
		link: "/carousel/carousel-portfolio-1",
	},
	{
		name: "Showcase Carousel V1",
		caption: "Light",
		imageSrc: "images/preview/carousel-1-light.jpg",
		link: "/carousel/carousel-portfolio-1",
	},
	{
		name: "Showcase Carousel V2",
		caption: "Dark",
		imageSrc: "images/preview/carousel-2.jpg",
		link: "/carousel/carousel-portfolio-2",
	},
	{
		name: "Showcase Carousel V2",
		caption: "Light",
		imageSrc: "images/preview/carousel-2-light.jpg",
		link: "/carousel/carousel-portfolio-2",
	},
	{
		name: "Showcase Carousel V3",
		caption: "Dark",
		imageSrc: "images/preview/carousel-3.jpg",
		link: "/carousel/carousel-portfolio-3",
	},
	{
		name: "Showcase Carousel V3",
		caption: "Light",
		imageSrc: "images/preview/carousel-3-light.jpg",
		link: "/carousel/carousel-portfolio-3",
	},
];
const iso = ref(null);

onMounted(() => {
	setTimeout(() => {
		if (!iso.value) return
		iso.value = new $Isotope(".dsn-pisotope",{ itemSelector: ".grid-item" });
		iso.value.arrange("*");
	},3000);
})
</script>

<template>
	<div class="dsn-award text-center p-relative">
		<div class="dsn-bg-mask w-100 h-50 bottom-0 background-section z-index-1"></div>
		<div
			class="unique-demos section-title section-padding container background-main border-style p-relative z-index-2">
			<div class="d-flex justify-content-between w-100 v-middle box-content">
				<h6 class="title">Unique</h6>
				<h6 class="title">Sliders</h6>
			</div>
			<div class="align-items-center text-center">
				<div class="p-relative">
					<h2 class="title-head mb-10">Portfolio Sliders</h2>
					<p>WOW Slider effects for photographers & creatives.</p>
				</div>
			</div>
		</div>
	</div>
	<div ref="iso" class="background-section section-padding">
		<div class="p-relative dsn-container">
			<div class="p-relative box-image-transform dsn-style-cards">
				<div class="root-posts">
					<div class="dsn-grid-masonry d-grid grid-md-3 dsn-pisotope dsn-isotope dsn-masonry-grid use-filter"
						data-dsn-gap="60px">
						<div class="box-item grid-item background-main p-30" v-for="(item,index) in portfolioData"
							:key="index">
							<NuxtLink
								:to="item.link == '' ? $route.path : item.link + `?mode=${item.caption.toLowerCase().trim()}`"
								target="_blank" rel="nofollow" class="w-100">
								<div class="img-box-parallax before-z-index" data-overlay="0">
									<NuxtImg format="webp" :src="item.imageSrc" class="cover-bg-img"
										alt="" />
									<div class="cap" v-if="item.caption">
										<span>{{ item.caption }}</span>
									</div>
								</div>
								<h2 class="d-inline-block p-relative dsn-title sm-title-block">
									{{ item.name }}
								</h2>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@import "@/assets/styles/mixins/utilities";
@import "@/assets/styles/variables-site/colors";
@import "./main_page_style/style";
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
