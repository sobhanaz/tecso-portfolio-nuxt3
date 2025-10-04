<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkCircleArrow from "@/components/links/LinkCircleArrow.vue";
const props = defineProps({ data: Array, });
const parallaxAnimate = ref(null);
const animate = {};

onMounted(() => {
	/**
	 *
	 * @type HTMLDivElement
	 */
	const element = parallaxAnimate.value;
	const { speed = 0, start = 0 } = {};
	animate.target = gsap.timeline({
		scrollTrigger: {
			trigger: element,
			invalidateOnRefresh: true,
			pin: true,
			scrub: 1,
			anticipatePin: 2,
			end: () => `+=${element.offsetWidth + (speed * 100)}`,
			start: `${start}0px`
		},
	});
	const startUp = element?.querySelector('.start-section .dsn-animate-up');
	const startDown = element?.querySelector('.start-section .dsn-animate-down');
	const endUp = element?.querySelector('.end-section .dsn-animate-up');
	const endDown = element?.querySelector('.end-section .dsn-animate-down');
	const postTitle = element?.querySelectorAll('.box-content > .post-title');
	animate.animateEnd = gsap.timeline({
		scrollTrigger: {
			trigger: endDown,
			containerAnimation: animate.target,
			start: "0% 70%",
			end: "0% 30%",
			scrub: true,
		}
	});
	animate.target.to(element, { x: -((element.scrollWidth + 100) - window.innerWidth), ease: "none" });
	if (startUp)
		animate.target.to(startUp, { y: -150, opacity: 0 }, 0);
	if (startDown)
		animate.target.to(startDown, { y: 150, opacity: 0 }, 0);
	if (endDown)
		animate.animateEnd.from(endDown, { y: 150, opacity: 0, ease: "none" }, 0);
	if (endDown)
		animate.animateEnd.from(endUp, { y: -150, opacity: 0, ease: "none" }, 0);
})
</script>

<template>
	<div class="p-relative pb-section over-hidden box-shadow-image box-image-transform dsn-style-cards ">
		<div class="root-posts">
			<div ref="parallaxAnimate"
				class="dsn-grid-layout dsn-grid dsn-posts dsn-post-type-cards use-horizontal-scroll box-image-normal">
				<article class="dsn-item-post start-section grid-item">
					<h2 class="dsn-animate-up letter-stroke">OUR</h2>
					<h2 class="dsn-animate-down letter-stroke">WORK</h2>
				</article>
				<article class="dsn-item-post grid-item over-hidden box-hover-image swiper-slide"
					v-for="(item, index) in props.data" :key="index">
					<div class="box-content d-flex ">
						<NuxtLink class="effect-ajax box-image-link bg-shadow" :to="`${item.link}/${item.slug}`"
							title="HEADPHONES">
							<div class="box-image-bg before-z-index dsn-swiper-parallax-transform" data-overlay="4">
								<NuxtImg format="webp" class="cover-bg-img" :src="item.images[0].src" alt="" />
							</div>
						</NuxtLink>
						<div class="post-content dsn-bg p-relative z-index-1 d-flex flex-column">
							<div class="post-title-info">
								<div class="post-meta max-w750">
									<div class="p-relative d-inline-block dsn-category dsn-bg metas mb-10 entry-meta">
										<MetaPost className="mb-10" v-if="item.categories" :category="item.categories"
											separate=" &" />
									</div>
								</div>
								<h2 class="post-title title-block">
									<NuxtLink :to="`${item.link}/${item.slug}`">
										{{ item.title }}
									</NuxtLink>
								</h2>
								<p class="section_description mt-15 max-w570 ">
									{{ item.description }}
								</p>
								<LinkCircleArrow :linkTo="`${item.link}/${item.slug}`" />
							</div>
						</div>
					</div>
				</article>
				<article class="dsn-item-post end-section grid-item">
					<h2 class="dsn-animate-up letter-stroke">AWESOME</h2>
					<h2 class="dsn-animate-down letter-stroke">DESIGNS</h2>
				</article>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.use-horizontal-scroll{
	&.dsn-grid-layout{
		flex-wrap: nowrap;
		height: 100vh !important;
		.box-content{
			height: 100%;
			.box-image-bg{
				height: 100%;
			}
		}
	}
}
</style>