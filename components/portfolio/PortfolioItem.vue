<script setup>
import LinkAngle from "@/components/links/LinkAngle.vue";
import LinkCircleArrow from "@/components/links/LinkCircleArrow.vue";
const setImageParallax =
	'{"trigger": { "start": "-80% top", "end": "100%" },"from": { "y": "-20%", "height": "120%" },"to": { "y": "0%", "height": "120%" }}';
const props = defineProps({
	className: String,
	linkCircle: Boolean,
	LinkCircleArrow: Boolean,
	tag: { type: String,default: "div" },
	data: Array,
	showDescription: Boolean,
	dataParallax: {},
	imageAnimate: { type: Boolean,default: false },
	itemDescription: { type: Boolean,default: true },
	postContentClass: String,
	postTitleClass: String,
	postContentParallax: {},
	mode: Boolean,
});
</script>

<template>
	<ClientOnly>
		<props.tag v-for="(item,index) in props.data" :key="index" :class="['dsn-item-post grid-item over-hidden p-relative box-hover-image',props.className,
			!props.mode ? 'v-dark' : '',
			typeof item.categories === 'object'
				? item.categories.join(' ').toString().toLowerCase()
				: item.categories.toString().toLowerCase()
		]">
			<div class="box-content d-flex">
				<NuxtLink class="box-image-link bg-shadow effect-ajax" v-if="item.link" :to="`${item.link}/${item.slug}`"
					data-dsn-ajax="work" title="HEADPHONES">
					<div class="box-image-bg before-z-index dsn-swiper-parallax-transform" data-overlay="4"
						v-bind="props.dataParallax" :data-dsn-animate="props.imageAnimate ? setImageParallax : null">
						<NuxtImg format="webp" class="cover-bg-img" :src="item.images[0].src" alt="img" />
					</div>
				</NuxtLink>
				<div :class="['post-content p-relative z-index-1 d-flex flex-column dsn-swiper-parallax-transform',props.postContentClass]"
					v-bind="props.postContentParallax">
					<div class="post-title-info">
						<div class="post-meta max-w750">
							<MetaPost className="mb-10" v-if="item.categories" :category="item.categories"
								catLink="/work/category" separate=" &" />
						</div>
						<h2 v-if="item.title" :class="['post-title',props.postTitleClass]">
							<NuxtLink class="effect-ajax" :to="`${item.link}/${item.slug}`">{{
								item.title
							}}</NuxtLink>
						</h2>
					</div>

					<div class="post-description-info" v-if="
						props.itemDescription ||
						props.showDescription ||
						props.linkCircle
					">
						<p class="section_description mt-15 max-w570" v-if="props.showDescription">
							{{ item.about[1].text[0] }}
						</p>
						<LinkCircleArrow v-if="props.LinkCircleArrow" :linkTo="`${item.link}/${item.slug}`" />

						<LinkAngle v-if="props.linkCircle" classColor="section" :linkName="item.linkName"
							:linkTo="`${item.link}/${item.slug}`" />
					</div>
				</div>
			</div>
		</props.tag>
	</ClientOnly>
</template>
