<script setup>
const props = defineProps({ data: Array });
</script>

<template>
	<div class="dsn-brand over-hidden section-margin">
		<div class="dsn-grid-layout dsn-grid section-image section-move-image use-horizontal-scroll-image"
			data-move-this="true" data-dsn-animate='{"from":{"x":"-200"},"to":{"x":"0"}}' style="flex-wrap: nowrap">
			<div class="grid-item" v-for="(item,index) in props.data" :key="index">
				<div class="image-item">
					<NuxtImg format="webp" class="cover-bg-img" :src="item.imageSrc" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";
@import "./global_brand_style/brand"
</style>