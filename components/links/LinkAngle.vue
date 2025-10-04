<script setup>
const props = defineProps({ classColor: { type: String,default: "section" },linkTo: String,linkName: String,linkNameClass: String,parallax: Boolean,iconPosition: { type: String,default: "left" },});
</script>

<template>
	<div class="dsn-def-btn dsn-hover-icon dsn-icon-heading-color mt-20 d-flex">
		<NuxtLink class="dsn-btn dsn-border border-color-default effect-ajax" :class="props.classColor ? `background-${props.classColor}` : 'background-section',
			props.iconPosition === 'left' ? 'has-icon-left' : 'has-icon-right'
			" :to="props.linkTo" data-dsn-text="Contact Us" v-bind:data-dsn="props.parallax ? 'parallax' : ''">
			<span :class="['dsn-icon dsn-bg-before heading-color z-index-1',props.iconPosition === 'left' ? 'btn-icon-left' : 'btn-icon-right']">
				<font-awesome-icon :icon="['fas','angle-right']" />
			</span>
			<span :class="['title-btn p-relative z-index-1',props.linkNameClass]">{{
				props.linkName
			}}</span>
		</NuxtLink>
	</div>
</template>
