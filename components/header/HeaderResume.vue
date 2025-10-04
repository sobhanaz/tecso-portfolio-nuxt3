<script setup>
import { Back,gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Animate } from "@/hooks/pluginanimations.js";
import LinkScrollDown from "@/components/links/LinkScrollDown.vue";
import LinkDefualt from "@/components/links/LinkDefualt.vue";
const props = defineProps({ data: Object,btnScrollTo: String,});
const ahWords = ref(null);

onMounted(() => {
	const lines = gsap.utils.toArray(".ah-words-wrapper b");
	const animate = gsap.timeline({
		repeat: -1,
		repeatDelay: 0,
	});
	lines.forEach((line) => {
		animate
			.from(line,0.6,{
				duration: 0.3,
				width: 0,
				onUpdate() { line.parentElement.style = `border-right : 2px solid #333;width:${line.offsetWidth + 15}px`; },
			})
			.to(line,0.6,{
				duration: 0.3,width: line.offsetWidth,delay: 2,
				onUpdate() { line.parentElement.style = `border-right : 2px solid #333;width:${line.offsetWidth + 15}px` }
			}
			)
			.to(line,0,{
				autoAlpha: 0,
				duration: 0.1,
				width: 0,
				onUpdate() { line.parentElement.style = `border-right : 2px solid #333;width:${line.offsetWidth + 15}px` },
				onComplete() { line.parentElement.style = `width:0px`; },
			},"+=0.2");

	});
});
</script>

<template>
	<header id="dsn_header" class="dsn-header-animation dsn-full-header v-dark-head">
		<div class="entry-header p-relative over-hidden">
			<div id="hero_image" class="p-absolute dsn-hero-parallax-img over-hidden" data-dsn-ajax="img"
				data-overlay="6"
				data-dsn-animate='{"trigger":{"start":"top"}, "from":{ "yPercent": "0" }, "to":{ "yPercent": "20" }}'>
				<NuxtImg format="webp" :src="props.data.images[0].src" class="cover-bg-img transform-3d"
					alt="" />
			</div>

			<div id="hero_content" class="d-flex p-relative h-100 dsn-hero-parallax-title container align-items-center">
				<div class="content p-relative">
					<div class="intro-project w-100">
						<div class="intro-title">
							<h5 class="title-block body-font text-upper">
								{{ props.data.subtitle }}
							</h5>
							<div id="hero_title" class="mt-20">
								<h1 ref="headline" class="ah-headline title clip is-full-width">
									<span> I'm </span>
									<span ref="ahWords" class="ah-words-wrapper">
										<b>{{ props.data.name }}</b>
										<b v-for="(item,index) in props.data.job">{{ item }}</b>
									</span>
								</h1>
							</div>
							<p class="title-block mt-20 max-w570">
								{{ props.data.about[0] }}
							</p>
							<LinkDefualt linkClass="background-section" :iconAwesome="['fas','play']" popup
								linkName="PLAY VIDEO" :linkTo="props.data.video[0].src" parallax />
						</div>
					</div>
				</div>
			</div>
			<div class="footer-head w-100 left-0 p-absolute bottom-0 z-index-2 pb-40">
				<div class="container d-grid grid-1-half">
					<ul class="dsn-grid-layout dsn-grid dsn-list w-100">
						<li class="list-item grid-item d-flex align-items-center">
							<p class="heading-color">
								<strong>Email : </strong> {{ props.data.emails[0] }}
							</p>
						</li>
						<li class="list-item grid-item d-flex align-items-center">
							<p class="heading-color">
								<strong>Phone : </strong> {{ props.data.phone[0] }}
							</p>
						</li>

						<li class="list-item grid-item d-flex align-items-center">
							<p class="heading-color">
								<strong>Location: </strong> {{ props.data.location[0] }}
							</p>
						</li>
					</ul>
					<SocialNormal :data="props.data.social" />
				</div>
			</div>
		</div>
		<LinkScrollDown v-if="props.btnScrollTo" :goToEl="props.btnScrollTo" />
	</header>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";
.ah-headline {
	display: flex;
}

.ah-words-wrapper {
	width: 800px;
	position: relative;
	overflow: hidden;
	padding-left: 10px;

	b {
		position: absolute;
		white-space: nowrap;
		overflow: hidden;
	}

	.is-hidden {
		opacity: 0;
	}
}

#dsn_header .footer-head {
	.dsn-list {
		--dsn-width-item: 3;
		--dsn-col-item: 25px;
		--dsn-row-item: 15px;

		.grid-item {
			padding-left: 20px;
			border-left: 2px solid $border-color;
		}
	}

	@include media_768(min) {
		.grid-1-half {
			grid-template-columns: auto 35%;
		}
	}

	@include media_768() {
		.dsn-list {
			display: none;
		}

		.grid-1-half {
			justify-content: start;
		}
	}
}
</style>
