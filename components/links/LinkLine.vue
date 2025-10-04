<script setup>
const props = defineProps({ linkName: String, linkTo: String, parallax: { type: Boolean, default: false } });
</script>

<template>
	<div class="d-flex mt-20 dsn-def-btn dsn-border-style">
		<NuxtLink
			class="mr-15 line-shape line-shape-before background-transparent dsn-btn dsn-border border-color-default background-main dsn-parallax-hover"
			:to="props.linkTo" :data-dsn="props.parallax ? 'parallax' : null">
			<span class="title-btn p-relative z-index-1 heading-color">
				{{ props.linkName }}
			</span>
		</NuxtLink>
	</div>
</template>
