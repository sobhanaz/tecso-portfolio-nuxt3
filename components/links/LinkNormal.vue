<script setup>
const props = defineProps({
	background: String,
	linkName: String,
	iconHeading: Boolean,
	moveCircle: Boolean,
	linkTo: String,
	parallax: Boolean,
	center: Boolean,
	end: Boolean,
});
</script>

<template>
	<div :class="['dsn-normal-btn mt-20 d-flex',props.center ? 'align-items-center justify-content-center' : null,
		props.end ? 'align-self-end justify-self-end' : null,
		props.iconHeading ? 'dsn-icon-heading-color' : null
	]">
		<NuxtLink
			:class="['dsn-btn dsn-border border-color-default background-main effect-ajax border-rdu move-circle',props.background ? props.background : null]"
			:to="props.linkTo" v-bind:data-dsn="props.parallax ? 'parallax' : null">
			<span class="title-btn p-relative z-index-1">{{ props.linkName }}</span>
		</NuxtLink>
	</div>
</template>
