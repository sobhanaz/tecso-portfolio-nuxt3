<script setup>
const props = defineProps({ linkTo: String, parallax: { type: Boolean, default: true }, });
</script>

<template>
	<NuxtLink :to="props.linkTo" class="effect-ajax dsn-post-link move-circle border-color-heading"
		:data-dsn="props.parallax ? 'parallax' : null">
		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
			<path class="arrow-after"
				d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
		</svg>
	</NuxtLink>
</template>
