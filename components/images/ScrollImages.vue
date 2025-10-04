<script setup>
const props = defineProps({ data: Array });
</script>

<template>
	<div class="dsn-container dsn-right-container over-hidden background-section section-padding section-margin"
		data-dsn-animate='{"from":{"x":"-50%"},"to":{"x":"0"}}'>
		<div class="dsn-grid-layout dsn-grid section-image section-move-image use-horizontal-scroll-image"
			style="flex-wrap: nowrap">
			<div class="grid-item" v-for="(item, index) in props.data" :key="index">
				<div class="image-item">
					<NuxtImg format="webp" class="cover-bg-img" :src="item.src" alt="img" />
				</div>
			</div>
		</div>
	</div>
</template>
