<script setup>
const props = defineProps({ src: String, poster: String });
const videoPlayer = ref(null)

</script>

<template>
	<ClientOnly>
		<div class="p-relative mt-section">
			<div class="dsn-bg-mask h-50 bottom-0 background-theme"></div>
			<div class="dsn-container">
				<video ref="videoPlayer" class="w-100" preload autoPlay muted loop :poster="`@/../../../${props.poster}`">
					<source v-if="props.src" :src="props.src ? `@/../../../${props.src}` : null" type="video/mp4" />
				</video>
			</div>
		</div>
	</ClientOnly>
	
</template>
