<script setup>
import LinkAngle from "@/components/links/LinkAngle.vue";
const props = defineProps({
	className: String,
	linkCircle: Boolean,
	data: {},
});
</script>

<template>
	<swiper-slide v-for="(item,index) in props.data" :key="index"
		:class="['dsn-item-post grid-item over-hidden p-relative box-hover-image v-dark-head background-section swiper-slide',props.className]">
		<div class="box-content d-flex">
			<NuxtLink class="effect-ajax box-image-link bg-shadow" :to="`/blog/${item.slug}`">
				<div class="box-image-bg before-z-index dsn-swiper-parallax-transform" data-overlay="4">
					<NuxtImg format="webp" :src="item.images[0].src" class="cover-bg-img" alt="" />
				</div>
			</NuxtLink>
			<div class="post-content dsn-bg p-relative z-index-2 d-flex flex-column">
				<div class="post-title-info">
					<div class="post-meta max-w750">
						<NuxtLink :to="`/blog/${item.slug}`"
							class="entry-date d-inline-block entry-meta mb-10 init-color heading-color">{{ item.date }}
						</NuxtLink>
						<span class="mr-5 ml-5 separator-between"> ..</span>
						<MetaPost class="mb-10" v-if="item.categories" :category="item.categories" separate=" &" />
					</div>
					<h2 class="post-title dsn-bg title-block">
						<NuxtLink class="effect-ajax" :to="`/blog/${item.slug}`">{{
							item.title
						}}</NuxtLink>
					</h2>
				</div>
				<div class="post-description-info">
					<p class="section_description mt-15 max-w570">
						{{ item.description }}
					</p>

					<LinkAngle v-if="props.linkCircle" classColor="main" :linkName="item.linkName"
						:linkTo="`/blog/${item.slug}`" />
				</div>
			</div>
		</div>
	</swiper-slide>
</template>
