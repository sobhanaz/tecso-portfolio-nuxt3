<script setup>
import SwiperPagination from "@/components/swiper-pagination/SwiperPagination.vue";
import PostItem from "@/components/blog/PostItem.vue";
const props = defineProps({
	data: Array,
	setStyle: { type: String, default: "normal" },
	haveOverlayBG: { type: Boolean, default: false },
	grabCursor: Boolean,
	desktop: {},
	tablet: {},
	mobile: {},
	centeredSlides: Boolean,
	loop: Boolean,
	blur: Boolean,
	parallax: Boolean,
	speed: Number,
	watchSlidesProgress: Boolean,
	loopedSlides: Number | Boolean,
	allowPagination: { type: Boolean, default: false },
	allowPrevButton: { type: Boolean, default: false },
	allowNextButton: { type: Boolean, default: false },
});

const styles = [
	{
		style: "normal",
		div1: "p-relative section-margin",
		div2:
			"p-relative dsn-style-classic dsn-under-img dsn-container dsn-right-container",
		div3: "dsn-posts dsn-post-type-classic h-350",
		paginationClass: "blog-pag",
		pagStyle:
			"dsn-pagination d-flex align-items-center justify-content-between dsn-container mt-30",
		postContentParallax: {},
		linkCircle: false,
	},
	{
		style: "cards",
		div1: "p-relative container section-margin",
		div2: "p-relative box-image-transform dsn-style-cards",
		div3: "dsn-posts dsn-post-type-cards box-content-hover",
		paginationClass: "blog-pag",
		pagStyle:
			"dsn-pagination d-flex align-items-center justify-content-between dsn-container mt-30",
		postContentParallax: {},
		linkCircle: true,
	},
];

const itemStyle = () => {
	if (!props.setStyle) {
		return styles[0];
	}
	const getStyle = styles.find((item) => item.style === props.setStyle);
	if (!getStyle) {
		return styles[0];
	}
	return getStyle;
};

const breakpoints = {
	desktop: {
		slidesPerView: 1,
	},
	tablet: {
		slidesPerView: 1,
	},
	mobile: {
		slidesPerView: 1,
	},
};

const blogSlider = ref(null);
defineExpose({ blogSlider });

onMounted(() => {
	const sliderSwiper = blogSlider.value;
	Object.assign(sliderSwiper, {
		init: false,
		grabCursor: props.grabCursor,
		centeredSlides: props.centeredSlides,
		loop: props.loop,
		parallax: props.parallax,
		speed: props.speed,
		watchSlidesProgress: props.watchSlidesProgress,
		loopedSlides: props.loopedSlides,
		pagination: {
			el: `.${itemStyle().paginationClass}`,
			enabled: true,
			clickable: true,
		},
		spaceBetween: 50,
		breakpoints: {
			992: props.desktop ? props.desktop : breakpoints.desktop,
			768: props.tablet ? props.tablet : breakpoints.tablet,
			576: props.mobile ? props.mobile : breakpoints.mobile,
		},
	});

	sliderSwiper.initialize();
});
</script>

<template>
	<div :class="itemStyle().div1">
		<div class="background-overlay bg-1" v-if="props.haveOverlayBG"></div>
		<slot name="title" />
		<div :class="itemStyle().div2">
			<div class="root-posts">
				<div :class="itemStyle().div3">
					<div class="has-parallax-image dsn-swiper p-relative">
						<swiper-container ref="blogSlider" init="false">
							<PostItem :data="props.data" :linkCircle="itemStyle().linkCircle" />
						</swiper-container>

						<SwiperPagination :prev="props.allowPrevButton" :next="props.allowNextButton"
							:pagination="props.allowPagination" v-if="
								props.allowPrevButton ||
								props.allowNextButton ||
								props.allowPagination
							" :setPagStyle="itemStyle().pagStyle" :classPag="itemStyle().paginationClass" :el="blogSlider" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
