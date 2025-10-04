<script setup>
import PortfolioItem from "@/components/portfolio/PortfolioItem.vue";
const { $Isotope } = useNuxtApp();
const store = reactive({ catName: "" });
const props = defineProps({
	data: Array,
	setStyle: { type: String,default: "metro-1" },
	useFilter: Boolean,
	filterCat: String,
	mode: Boolean,
});
const styles = [
	{
		style: "metro-1",
		main: "",
		div1: "dsn-style-metro dsn-metro-1 dsn-background-inherit",
		div2: "dsn-post-type-metro grid-md-2 dsn-isotope",
		div3: "",
		gap: "80px 30px",
		titleClass: "dsn-bg",
		itemClass: "background-theme",
		ContentClass: "dsn-bg dsn-swiper-parallax-transform",
		filteringClass: "",
		showDescription: false,
		linkCircle: false,
		LinkCircleArrow: false,
		imageAnimate: false,
	},
	{
		style: "metro-2",
		bgItem: "",
		main: "",
		div1:
			"dsn-style-metro dsn-metro-2 box-image-transform dsn-background-inherit",
		div2: "dsn-isotope dsn-post-type-metro grid-lg-3 grid-md-2 dsn-masonry-grid",
		div3: "",
		gap: "80px 30px",
		titleClass: "title-h2",
		itemClass: "",
		ContentClass: "dsn-swiper-parallax-transform",
		filteringClass: "",
		showDescription: false,
		linkCircle: false,
		LinkCircleArrow: false,
		imageAnimate: false,
	},
	{
		style: "cards-1",
		bgItem: "",
		main: "",
		div1: "dsn-style-cards dsn-background-inherit box-image-transform",
		div2:
			"dsn-post-type-cards grid-md-2 dsn-style-cards box-image-normal v-dark-head dsn-isotope",
		div3: "",
		gap: "60px",
		itemClass: "",
		titleClass: "title-block",
		ContentClass: "dsn-bg z-index-2",
		filteringClass: "",
		showDescription: true,
		linkCircle: false,
		LinkCircleArrow: true,
		imageAnimate: false,
	},
	{
		style: "cards-2",
		main: "",
		div1: "dsn-style-cards box-image-transform",
		div2:
			"dsn-post-type-cards box-image-normal box-image-hover grid-md-3 dsn-masonry-grid dsn-masonry-grid-2 v-dark-head dsn-isotope",
		div3: "",
		gap: "60px",
		itemClass: "",
		titleClass: "title-h2",
		ContentClass: "dsn-bg z-index-2",
		filteringClass: "",
		showDescription: false,
		linkCircle: false,
		LinkCircleArrow: false,
		imageAnimate: false,
	},
	{
		style: "classic-1",
		main: "",
		div1: "dsn-style-classic box-image-transform",
		div2:
			"dsn-post-type-classic grid-md-3  dsn-masonry-grid dsn-masonry-grid-2 dsn-isotope",
		div3: "",
		gap: "60px",
		itemClass: "",
		titleClass: "title-h2",
		ContentClass: "",
		filteringClass: "",
		showDescription: false,
		linkCircle: false,
		LinkCircleArrow: false,
		imageAnimate: false,
	},
	{
		style: "classic-2",
		main: "",
		div1: "dsn-style-classic box-image-transform",
		div2: "dsn-post-type-classic grid-md-2  dsn-masonry-grid dsn-isotope",
		div3: "",
		gap: "60px",
		itemClass: "",
		titleClass: "title-h2",
		ContentClass: "",
		filteringClass: "",
		showDescription: false,
		linkCircle: false,
		LinkCircleArrow: false,
		imageAnimate: false,
	},
	{
		style: "list-1",
		main: "",
		div1: "dsn-style-list dsn-image-odd box-image-parallax",
		div2: "dsn-post-type-list dsn-isotope",
		div3: "",
		gap: "60px",
		itemClass: "",
		titleClass: "title-block",
		ContentClass: "",
		filteringClass: "",
		showDescription: true,
		linkCircle: true,
		linkCircleArrow: false,
		imageAnimate: false,
	},
	{
		style: "list-2",
		main: "",
		div1: "box-image-transform dsn-style-cards",
		div2: " dsn-post-type-cards  box-content-hover v-dark-head dsn-isotope",
		div3: "",
		gap: "0px",
		itemClass: "w-100",
		titleClass: "title-block",
		ContentClass: "",
		filteringClass: "container",
		showDescription: true,
		linkCircle: true,
		LinkCircleArrow: false,
		imageAnimate: false,
	},
	{
		style: "list-3",
		main: "section-margin background-section section-padding",
		div1: "p-relative dsn-style-list dsn-image-odd box-image-parallax",
		div2: "dsn-post-type-list d-grid-no-space",
		div3: "",
		gap: "",
		itemClass: "grid-item over-hidden p-relative box-hover-image",
		titleClass: "title-block",
		ContentClass: "",
		filteringClass: "",
		showDescription: true,
		linkCircle: true,
		LinkCircleArrow: false,
		imageAnimate: true,
	},
];
const itemStyle = () => {
	if (!props.setStyle) return styles[0];

	const getStyle = styles.find((item) => item.style === props.setStyle);
	if (!getStyle) return styles[0];

	return getStyle;
};
const getCategory = new Set();
props.data.forEach((element) => {
	element.categories.map((category) => {
		getCategory.add(category);
	});
});
const iso = ref(null);
defineExpose({ iso });
const filterBtn = ref(null);
function active(category) {
	store.catName = category == "All" ? "" : category.toString().toLowerCase();
	const btns = filterBtn.value.querySelectorAll("button");
	btns.forEach((item) => {
		if (item.textContent.trim() === category) {
			item.classList.add("active");
		} else {
			item.classList.remove("active");
		}
	});
	iso.value.arrange({
		filter:
			store.catName === ""
				? "*"
				: `.${store.catName.trim().toString().toLowerCase()}`,
	});
}
onMounted(() => {
	store.catName = props.filterCat
		? props.filterCat.trim().toString().toLowerCase()
		: "";
	const getClassIso = iso.value.querySelectorAll(".dsn-isotope");
	if (getClassIso.length == 0) return;

	setTimeout(() => {
		iso.value = new $Isotope('.dsn-isotope',{ itemSelector: '.grid-item' });
		iso.value.arrange({ filter: store.catName.trim().toString().toLowerCase() == '' ? '*' : `.${store.catName.trim().toString().toLowerCase()}` });
	},1000)
});
</script>

<template>
	<div ref="iso" :class="['p-relative section-margin',itemStyle().main]">
		<div class="container">
			<slot name="title" />
		</div>
		<div :class="['p-relative box-image-parallax',itemStyle().div1]">
			<div class="root-posts has-filter">
				<div v-if="useFilter" class="dsn-filtering z-index-1 p-relative w-100 mb-50">
					<div :class="['filtering-t',itemStyle().filteringClass]">
						<div class="filtering-wrap">
							<h5 class="filter-title">AWESOME DESIGNS</h5>
							<div ref="filterBtn" class="filtering">
								<button class="active" @click="active('All')">All</button>
								<ClientOnly>
									<button v-for="(cat,index) in getCategory" :key="index"
										@click="active(cat.toLowerCase())">
										{{ cat }}
									</button>
								</ClientOnly>
							</div>
						</div>
					</div>
				</div>
				<div :class="['dsn-posts d-grid',itemStyle().div2]"
					:data-dsn-gap="itemStyle().gap ? itemStyle().gap : null">
					<PortfolioItem :className="itemStyle().itemClass" :data="props.data" tag="article"
						:postTitleClass="itemStyle().titleClass" :LinkCircleArrow="itemStyle().LinkCircleArrow"
						:postContentClass="itemStyle().ContentClass" :showDescription="itemStyle().showDescription"
						:linkCircle="itemStyle().linkCircle" :imageAnimate="itemStyle().imageAnimate"
						:mode="props.mode" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";

.dsn-filtering {
	display: flex;

	.filtering-t {
		z-index: 2;

		.filtering-wrap {
			.filter-title {
				margin: 0 0 12px;
				text-transform: uppercase;
				font-size: 18px;
				letter-spacing: 2px;
			}

			.filtering {
				button {
					color: $heading-color;
					width: auto;
					margin-right: 10px;
					font-size: 14px;
					font-weight: 400;
					cursor: pointer;
					transition: all 0.3s ease-in-out;
					letter-spacing: 2px;
					text-transform: uppercase;

					&:not(:last-of-type) {
						&:after {
							content: "/";
							position: absolute;
							margin: 0 2px;
							color: $heading-color;
						}
					}

					&.active {
						color: $theme-color;
					}

					@include media_575 {
						padding-top: 0;
						padding-bottom: 10px;
						margin: 0 10px 10px 0;
					}
				}
			}
		}
	}
}
</style>