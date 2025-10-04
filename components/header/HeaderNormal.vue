<script setup>
import LinkScrollDown from "@/components/links/LinkScrollDown.vue";
const props = defineProps({ subTitle: String, btnScrollTo: String, contentClass: String, center: Boolean });
</script>

<template>
	<header id="dsn_header" :class="['dsn-header-animation header-normal',center ? 'text-center' : null]">
		<div class="background-overlay bg-pattern p-absolute left-0 top-0 w-100 h-100"></div>
		<div class="entry-header p-relative over-hidden">
			<div id="hero_content" :class="['d-flex p-relative h-100 dsn-hero-parallax-title align-items-center pb-section',props.contentClass]">
				<div class="content p-relative w-100" data-dsn-animate='
                {"trigger":{"start":"top 10%"},
                 "from":{"opacity": "1" }, 
                 "to":{ "opacity": "0" }}'>
					<div class="intro-project w-100">
						<div class="intro-title">
							<p class="dsn-heading-title d-inline-block circle-before" v-if="props.subTitle">
								{{ props.subTitle }}
							</p>
							<div id="hero_title" class="mt-10">
								<h1 class="title text-upper" v-if="$slots.title">
									<slot name="title" />
								</h1>
							</div>
							<p class="mt-20 max-w570">
								<slot name="string" />
							</p>
							<slot />
						</div>
					</div>
				</div>
			</div>
		</div>
		<LinkScrollDown v-if="props.btnScrollTo" :goToEl="props.btnScrollTo" />
	</header>
</template>
