<script setup>
import brandsImages from "@/api/brands/brand-one.json";
const props = defineProps({ data: { type: Array, default: brandsImages }, boxStyle: String, });
</script>

<template>
	<div class="p-relative">
		<slot name="title" />
		<div
			:class="props.boxStyle === '1' ? 'container d-grid grid-half-1 align-items-center' : 'grid-md-4 grid-sm-2 d-grid-no-space dsn-brand border-style'">
			<div class="experience" v-if="$slots.number">
				<span class="exp-number dsn-animate-number">
					<span class="animate-number data-counter">
						<slot name="number" />
					</span>
				</span>
				<h5 class="title-block mt-30">
					<slot name="description" />
				</h5>
			</div>
			<div class="d-grid grid-sm-4 d-grid-no-space dsn-brand">
				<div v-if="props.data.length > 0"
					:class="['brand-item',key == 0 || key == 1 || key == 2 ? 'border-bottom border-right' : null,
					 key === 3 ? 'border-bottom' : null, key > 3 && key != data.length - 1 ? 'border-right' : null]"
					v-for="(item, key) in props.data" :key="key">
					<div class="brand-item-inner over-hidden p-relative">
							<NuxtImg v-if="item.imageSrc" format="webp" height="40" :src="item.imageSrc" alt="brand" />
					</div>
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