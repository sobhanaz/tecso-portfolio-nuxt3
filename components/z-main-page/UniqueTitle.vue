<script setup>
const props = defineProps({ leftText: String, rightText: String, title: String, description: String, });
</script>

<template>
	<div class="unique-demos section-title align-items-center text-center mt-section">
		<div class="container p-relative">
			<div class="d-flex justify-content-between w-100 v-middle box-content">
				<h6 class="title" v-html="props.leftText" />
				<h6 class="title" v-html="props.rightText" />
			</div>
			<h1 class="heading-h2 mb-10" v-html="props.title" />
			<p v-html="props.description" />
		</div>
	</div>
</template>

<style lang="scss">
@import "./main_page_style/style"
</style>