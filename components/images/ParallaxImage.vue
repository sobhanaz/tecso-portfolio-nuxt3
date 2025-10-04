<script setup>
const imgParallax = '{"trigger": { "start": "-80% top", "end": "100%" },"from": { "y": "-20%", "height": "120%" },"to": { "y": "0%", "height": "120%" }}';
const props = defineProps({ src: String,caption: String,animate: String,fancybox: String,});
</script>

<template>
	<div class="over-hidden">
		<div class="img-box-parallax dsn-effect-down has-popup" data-dsn-grid="move-up">
			<!-- <ClientOnly> -->
				<div class="effect-popup before-z-index h-100" :data-src="props.src" :data-caption="props.caption"
					:data-fancybox="props.fancybox ? props.fancybox : null" data-cursor="open" data-overlay="2"
					:data-dsn-animate="props.animate ? props.animate : imgParallax">
					<NuxtImg format="webp" class="cover-bg-img has-direction" :src="props.src" data-dsn-position="50% 0%"
						alt="image" />
				</div>

				<div class="cap">
					<span>{{ props.caption }}</span>
				</div>
			<!-- </ClientOnly> -->

		</div>
	</div>
</template>
