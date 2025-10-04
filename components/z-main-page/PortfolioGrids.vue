<script setup>
const { $Isotope } = useNuxtApp();
const portfolioData = [
	{
		name: "",
		imageSrc: "images/preview/2.webp",
		link: "/work/work-card-1",
	},
	{
		name: "",
		imageSrc: "images/preview/12.webp",
		link: "/metro-portfolio-1",
	},
	{
		name: "",
		imageSrc: "images/preview/5.webp",
		link: "http://localhost:3000/work/work-card-2",
	},
	{
		name: "",
		imageSrc: "images/preview/11.webp",
		link: "/work/work-classic-2",
	},
	{
		name: "",
		imageSrc: "images/preview/8.webp",
		link: "/work/work-list-1",
	},
	{
		name: "",
		imageSrc: "images/preview/7.webp",
		link: "/work/work-classic-1",
	},
	{
		name: "",
		imageSrc: "images/preview/9.webp",
		link: "/work/work-list-2",
	},
];
const iso = ref(null);
onMounted(()=>{
	setTimeout(() => {
		if(!iso.value) return
		iso.value = new $Isotope(".dsn-gisotope", { itemSelector: ".grid-item" });
		iso.value.arrange("*");
	}, 3000);
})

</script>

<template>
	<div class="dsn-award text-center p-relative v-light background-theme">
		<div class="dsn-bg-mask w-100 h-50 top-0 v-dark background-section z-index-1"></div>
		<div
			class="unique-demos section-title section-padding container v-light background-theme border-style p-relative z-index-2">
			<div class="d-flex justify-content-between w-100 v-middle box-content">
				<h6 class="title">Unique</h6>
				<h6 class="title">Portfolio</h6>
			</div>
			<div class="align-items-center text-center">
				<div class="p-relative">
					<h2 class="title-head mb-10">Portfolio Grids</h2>
					<p>
						Choose a homepage to start navigating dsn. Build strong &amp;
						impressive <br />
						websites using dsn’s premade templates.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div ref="iso" class="background-theme v-light section-padding">
		<div class="p-relative dsn-container">
			<div class="p-relative box-image-transform dsn-style-cards">
				<div class="root-posts">
					<div class="dsn-grid-masonry d-grid grid-md-3 dsn-gisotope dsn-isotope dsn-masonry-grid use-filter">
						<div class="box-item grid-item p-30 background-transparent"
							v-for="(item, index) in portfolioData" :key="index">
							<NuxtLink :to="item.link == '' ? $route.path : item.link" target="_blank" rel="nofollow"
								class="w-100">
								<div class="img-box-parallax before-z-index" data-overlay="0">
									<NuxtImg format="webp" :src="item.imageSrc" class="cover-bg-img" data-dsn-speed="30%" alt="" />
								</div>
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