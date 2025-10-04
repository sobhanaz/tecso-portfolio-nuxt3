<script setup>
import LinkScrollDown from "@/components/links/LinkScrollDown.vue";
import LinkCircle from "@/components/links/LinkCircle.vue";
const props = defineProps({ data: Object,full: Boolean,boxShadow: Boolean,btnScrollTo: String,linkCircleTo: String });
import { Animate } from "@/hooks/pluginanimations.js";
const dsn_header = ref(null)
onMounted(() => {
	if (!dsn_header.value) return;
	new Animate({ scrub: false,start: "top" },{ delay: 1.5,scale: 1.096 },{ duration: 1,y: 0,scale: 1.009 },dsn_header.value,dsn_header.value);
});
</script>

<template>
	<header ref="dsn_header" id="dsn_header"
		:class="['dsn-header-animation dsn-container section-padding v-dark-head',props.full ? 'dsn-full-header' : null,props.boxShadow ? 'show-box-shadow' : null]">
		<div class="entry-header p-relative over-hidden"
			data-dsn-animate='{"trigger":{"start":"top"}, "from":{ "yPercent": "0" }, "to":{ "yPercent": "20" }}'>
			<div id="hero_image" class="p-absolute dsn-hero-parallax-img over-hidden z-index-1 full-width"
				data-dsn-ajax="img" data-overlay="3">
				<ClientOnly>
					<NuxtImg format="webp" class="cover-bg-img transform-3d"
						:src="props.data.images[0].src" :alt="props.data.title" />
				</ClientOnly>
			</div>

			<div id="hero_content" class="d-flex align-items-end p-relative h-100 dsn-hero-parallax-title container"
				data-dsn-animate='{"trigger":{"start":"top"}, "from":{ "yPercent": "0","opacity": "1" }, "to":{"yPercent": "-20", "opacity": "0" }}'>
				<div class="content p-relative">
					<div class="intro-project w-100">
						<div class="intro-title">
							<div id="dsn_metas" class="p-relative d-flex justify-content-between">
								<div class="metas has-separate p-relative">
									<MetaPost className="mb-10" v-if="props.data.categories"
										:category="props.data.categories" separate=" |" />
								</div>
								<span class="mb-20">{{ props.data.subtitle }}</span>
							</div>
							<div id="hero_title">
								<h1 class="title" data-dsn-ajax="title">
									{{ props.data.title }}
								</h1>
							</div>
							<ul class="subtitle-meta metas p-relative mt-10 heading-color">
								<li class="mb-10" v-for="(meta,index) in props.data.metas" :key="index">
									<b>{{ meta[0] }}</b> : {{ meta[1] }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<LinkCircle v-if="props.linkCircleTo" :to="props.linkCircleTo" blank />
		<LinkScrollDown v-if="props.btnScrollTo" :goToEl="props.btnScrollTo" />
	</header>
</template>
