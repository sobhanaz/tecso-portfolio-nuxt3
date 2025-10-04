<script setup>
import PortfolioItem from "@/components/portfolio/PortfolioItem.vue";
import SwiperPagination from "@/components/swiper-pagination/SwiperPagination.vue";
import SwiperPaginationOne from "@/components/swiper-pagination/SwiperPaginationOne.vue";
const props = defineProps({
	data: Array,
	setStyle: { type: String, default: "classic" },
	haveOverlayBG: { type: Boolean, default: false },
	grabCursor: Boolean,
	desktop: {},
	tablet: {},
	mobile: {},
	centeredSlides: Boolean,
	loop: Boolean,
	parallax: { type: Boolean, default: true },
	speed: Number,
	watchSlidesProgress: Boolean,
	loopedSlides: Number | Boolean,
	allowPagination: { type: Boolean, default: false },
	allowPrevButton: { type: Boolean, default: false },
	allowNextButton: { type: Boolean, default: false },
	paginationOne: { type: Boolean, default: false },
	allowPaginationOne: { type: Boolean, default: false },
	allowPrevButtonOne: { type: Boolean, default: false },
	allowNextButtonOne: { type: Boolean, default: false },
	dataParallax: {},
	postContentClass: String,
	postContentParallax: {},
	postTitleClass: String,
	swiperOptions: {},
	mode: Boolean,
});
const styles = [
	{
		style: "classic",
		main: "mt-section background-section section-padding",
		divStyle: "dsn-container dsn-right-container dsn-style-classic",
		stylePost: "h-350 dsn-post-type-classic",
		paginationClass: "portfolio-pag",
		pagStyle:
			"dsn-pagination d-flex align-items-center justify-content-between dsn-container mt-30",
		titleClass: "title-block",
		postContentClass: "",
		postContentParallax: {},
		dataParallax: {},
		viewDescription: false,
		linkCircle: true,
		swiperClass: "",
	},
	{
		style: "cards-1",
		main: "bg-dots section-padding",
		divStyle: "container dsn-style-cards",
		stylePost: "dsn-posts dsn-post-type-cards box-image-normal box-image-hover",
		paginationClass: "portfolio-pag",
		pagStyle:
			"dsn-pagination d-flex align-items-center justify-content-between dsn-container mt-30",
		titleClass: "title-h2",
		postContentClass:
			"post-content dsn-bg p-relative z-index-1 d-flex flex-column text-center",
		postContentParallax: { "data-swiper-parallax-opacity": 0 },
		dataParallax: { "data-swiper-parallax-scale": "1.2" },
		viewDescription: false,
		linkCircle: false,
		swiperClass: "",
	},
	{
		style: "cards-2",
		main: "mt-section ",
		divStyle: "dsn-style-cards",
		stylePost: "box-image-normal box-image-hover",
		paginationClass: "portfolio-pag",
		pagStyle:
			"dsn-pagination d-flex align-items-center justify-content-between dsn-container mt-30",
		titleClass: "title-h2",
		postContentClass: "text-center",
		postContentParallax: { "data-swiper-parallax-opacity": 0 },
		dataParallax: { "data-swiper-parallax-scale": "1.2 " },
		viewDescription: false,
		linkCircle: false,
		swiperClass: "",
	},
	{
		style: "carousel-1",
		main: "",
		divStyle: "dsn-style-cards dsn-align-center",
		stylePost: "dsn-post-type-cards box-image-normal ",
		paginationClass: "portfolio-pag",
		pagStyle:
			"dsn-swiper-paginate p-absolute  dsn-nav-arrow d-flex p-relative w-100 h-100 mt-50 dsn-container justify-content-center dsn-icon-heading-color",
		titleClass: "title",
		postContentClass: "",
		postContentParallax: {
			"data-swiper-parallax-opacity": 0,
			"data-swiper-parallax": "100%",
		},
		dataParallax: { "data-swiper-parallax-scale": "1.2 " },
		viewDescription: false,
		linkCircle: false,
		swiperClass: "",
	},
	{
		style: "carousel-2",
		main: "",
		divStyle: "dsn-style-cards dsn-align-center",
		stylePost: "dsn-post-type-cards box-image-normal dsn-container",
		paginationClass: "portfolio-pag",
		pagStyle:
			"dsn-swiper-paginate p-absolute  dsn-nav-arrow d-flex p-relative w-100 h-100 mt-50 dsn-container justify-content-center dsn-icon-heading-color",
		titleClass: "title",
		postContentClass: "text-center",
		postContentParallax: {
			"data-swiper-parallax-opacity": 0,
			"data-swiper-parallax": "100%",
		},
		dataParallax: { "data-swiper-parallax-scale": "1.2 " },
		viewDescription: false,
		linkCircle: false,
		swiperClass: "",
	},
	{
		style: "carousel-3",
		main: "",
		divStyle:
			"dsn-style-metro dsn-background-inherit dsn-metro-2 dsn-align-center",
		stylePost: "dsn-post-type-metro",
		paginationClass: "portfolio-pag",
		pagStyle:
			"dsn-swiper-paginate p-absolute  dsn-nav-arrow d-flex p-relative w-100 h-100 mt-50 dsn-container justify-content-center dsn-icon-heading-color",
		titleClass: "title-h2",
		postContentClass: "",
		postContentParallax: {
			"data-swiper-parallax-opacity": 0,
			"data-swiper-parallax": "100%",
		},
		dataParallax: { "data-swiper-parallax-scale": "1.2 " },
		viewDescription: false,
		linkCircle: false,
		swiperClass: "text-right",
	},
];
const itemStyle = () => {
	if (!props.setStyle) return styles[0];

	const getStyle = styles.find((item) => item.style === props.setStyle);
	if (!getStyle) return styles[0];

	return getStyle;
};
const breakpoints = {
	desktop: { slidesPerView: 1.5, },
	tablet: { slidesPerView: 2, },
	mobile: { slidesPerView: 2, },
};
const slider = ref(null);
defineExpose({ slider });
onMounted(() => {
	const sliderSwiper = slider.value;
	Object.assign(sliderSwiper, {
		init: false,
		grabCursor: props.grabCursor,
		centeredSlides: props.centeredSlides,
		loop: true,
		parallax: props.parallax,
		speed: props.speed,
		animating: true,
		watchSlidesProgress: props.watchSlidesProgress,
		// loopedSlides: props.loopedSlides,
		pagination: {
			el: `.${itemStyle().paginationClass}`,
			enabled: true,
			clickable: true,
		},
		breakpoints: {
			992: props.desktop ? props.desktop : breakpoints.desktop,
			768: props.tablet ? props.tablet : breakpoints.tablet,
			576: props.mobile ? props.mobile : breakpoints.mobile,
		},
		...props.swiperOptions,
	});
	setTimeout(()=> sliderSwiper.initialize() ,1)
	
});
</script>

<template>
	<div :class="['p-relative',itemStyle().main]">
		<div class="background-overlay bg-1" v-if="props.haveOverlayBG"></div>
		<slot name="title" />
		<div  :class="['p-relative',itemStyle().divStyle]">
			<div class="root-posts">
				<div :class="['dsn-posts',itemStyle().stylePost]">
					<div class="has-parallax-image dsn-swiper p-relative">
						<swiper-container ref="slider" init="false" :class="['work',itemStyle().swiperClass]">
							<PortfolioItem :data="props.data" tag="swiper-slide" :mode="props.mode"
								:linkCircle="itemStyle().linkCircle" :dataParallax="itemStyle().dataParallax"
								:postTitleClass="itemStyle().titleClass" :itemDescription="itemStyle().viewDescription"
								:postContentClass="itemStyle().postContentClass"
								:postContentParallax="itemStyle().postContentParallax" />
						</swiper-container>
						<SwiperPagination v-if="
							props.allowPrevButton ||
							props.allowNextButton ||
							props.allowPagination
						" :prev="props.allowPrevButton" :next="props.allowNextButton" :pagination="props.allowPagination"
							:setPagStyle="itemStyle().pagStyle" :classPag="itemStyle().paginationClass" :el="slider" />
						<SwiperPaginationOne v-if="
							props.paginationOne ||
							props.allowPrevButton ||
							props.allowNextButton ||
							props.allowPagination
						" :prev="props.allowPrevButtonOne" :next="props.allowNextButtonOne" :pagination="props.allowPaginationOne"
							:setPagStyle="itemStyle().pagStyle" :classPag="itemStyle().paginationClass" :el="slider" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
