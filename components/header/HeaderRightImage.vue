<script setup>
import LinkScrollDown from "@/components/links/LinkScrollDown.vue";
import LinkCircle from "@/components/links/LinkCircle.vue";
const props = defineProps({ data: Object,btnScrollTo: String,linkCircleTo: String,});
</script>

<template>
	<header id="dsn_header" class="dsn-header-animation right-img dsn-container section-padding v-dark-head-mobile">
		<div class="entry-header p-relative over-hidden" data-dsn-animate='{
            "trigger":{"start":"top 10%"},
            "from":{"y": "0%","height": "100%"},
            "to":{ "y": "20%", "height": "100%" }
        }'>
			<div id="hero_image" class="p-absolute dsn-hero-parallax-img over-hidden z-index-1 full-width"
				data-dsn-ajax="img" data-overlay="4">
				<ClientOnly>
					<NuxtImg format="webp" :src="props.data.images[0].src" :alt="props.data.title" class="cover-bg-img transform-3d"
						data-dsn-position="50% 50%" />
				</ClientOnly>

			</div>
			<div id="hero_content" class="d-flex p-relative h-100 dsn-hero-parallax-title align-items-center container">
				<div class="content p-relative">
					<div class="intro-project w-100">
						<div class="intro-title">
							<MetaPost className="mb-10" :category="props.data.categories" separate=" &" />
							<div id="hero_title">
								<h1 class="title" data-dsn-ajax="title">
									{{ props.data.title }}
								</h1>
							</div>
							<p class="subtitle-meta metas p-relative mt-10">
								<b>Photographer : </b> {{ props.data.Photographer }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<LinkCircle v-if="props.linkCircleTo" :to="props.linkCircleTo" blank />
		<LinkScrollDown v-if="props.btnScrollTo" :goToEl="props.btnScrollTo" />
	</header>
</template>
