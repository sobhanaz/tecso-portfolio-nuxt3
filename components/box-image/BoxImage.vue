<script setup>
const props = defineProps({ imageSrc: String });
</script>

<template>
	<div class="p-relative section-padding v-dark-head">
		<div class="dsn-bg-section p-absolute w-100 h-100 over-hidden top-0 left-0" style="z-index: -1"
			data-dsn-animate='{"trigger":{"start":"-80% top","end":"100%"},"from":{"y": "-20%","height": "120%"},"to":{ "y": "0%", "height": "120%" }}'>
			<div class="h-100 img-box-parallax before-z-index" data-dsn-grid="move-up" data-overlay="4">
				<NuxtImg format="webp" :src="props.imageSrc" class="cover-bg-img has-direction" alt="img" />
			</div>
		</div>
		<div class="container">
			<slot />
		</div>
	</div>
</template>
