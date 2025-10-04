<script setup>
import data_Portf from "@/api/portfolio/portfolio.json";
import SvgSeparator from "@/components/svg/SvgSeparator.vue";
const props = defineProps({ next: Number,light: Boolean,});
const item = data_Portf.find((item) => item.id === Number(props.next));
</script>

<template>
	<div class="next-project section-padding p-relative footer-animate svg-animate" data-dsn-animate='{
        "trigger":{"start":"-100%","end":"top"},
        "from":{"y": "-70%","height": "100%" ,"scale":"1.3"},
        "to":{ "y": "0%", "height": "100%","scale":"1" }}'>
		<div data-dsn-ajax="img" class="p-absolute dsn-hero-parallax-img transform-3d bg-container over-hidden"
			data-overlay="4">
			<ClientOnly>
				<NuxtImg format="webp" :src="item.images[0].src" alt="Next Image" class="cover-bg-img wp-post-image"
					data-dsn-position="50% 50%" />
			</ClientOnly>
		</div>
		<SvgSeparator :light="props.light" />
		<div class="dsn-container dsn-z-index-2 p-relative h-100 v-dark-head">
			<div class="p-relative h-100 d-flex flex-column justify-content-center">
				<div class="intro-project w-100">
					<div class="intro-title text-center">
						<div class="metas has-separate p-relative mb-10">
							<MetaPost className="has-separate mb-10" v-if="item.categories" :category="item.categories"
								separate="" catLink="/work/category" />
						</div>
						<div class="hero-title fill-text">
							<NuxtLink :to="`${item.link}/${item.slug}`" data-cursor="open" class="d-inline-block effect-ajax"
								data-dsn-ajax="next">
								<h2 class="title">{{ item.title }}</h2>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.next-project {
	position: relative;
	height: 100vh;
	overflow: hidden;
  
	.bg-container {
	  left: 0;
	  top: 0;
	  width: 100%;
	  height: 100%;
	}
  }
</style>
