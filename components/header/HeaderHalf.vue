<script setup>
import LinkScrollDown from "@/components/links/LinkScrollDown.vue";
const props = defineProps({ title: String,metas: Array,btnScrollTo: String,pattern: Boolean,grid: Boolean,});
const socialData = [
	{
		name: "Fb",
		link: "",
		type: "fab",
		iconName: "facebook-f",
	},
	{
		name: "Tw",
		link: "",
		type: "fab",
		iconName: "twitter",
	},
	{
		name: "Yt",
		link: "",
		type: "fab",
		iconName: "youtube",
	},
];
</script>

<template>
	<header id="dsn_header" class="header-normal">
		<div v-if="props.pattern" class="background-overlay bg-pattern p-absolute left-0 top-0 w-100 h-100"></div>
		<div class="entry-header p-relative over-hidden">
			<div id="hero_content" class="d-flex p-relative h-100 dsn-hero-parallax-title container">
				<div class="content p-relative">
					<div class="intro-project w-100">
						<div class="intro-title">
							<div v-if="!props.grid">
								<h1 class="title title-org">{{ props.title }}</h1>
								<p class="subtitle-meta metas p-relative mt-10">
									<ClientOnly>
										<MetaPost v-if="props.metas" :category="props.metas" separate=" &" />
									</ClientOnly>
								</p>
							</div>
							<div v-if="props.grid"
								class="d-grid grid-sm-2 justify-content-between pb-30 mb-30 border-bottom">
								<h1 class="title title-org text-upper">
									{{ props.title }}
								</h1>
								<p class="max-w350 ml-auto text-right align-self-end">
									<slot name="string" />
								</p>
							</div>
							<div v-if="props.grid" class="d-grid grid-sm-2 justify-content-between">
								<p>
									<slot name="subTitle" />
								</p>
								<SocialNormal :data="socialData" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<LinkScrollDown v-if="props.btnScrollTo" :goToEl="props.btnScrollTo" />
	</header>
</template>
