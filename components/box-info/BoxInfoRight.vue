<script setup>
const props = defineProps({ data: Object });
</script>

<template>
	<div class="background-theme section-padding">
		<div class="dsn-container">
			<h2 class="title-block dsn-up">{{ data.title }}</h2>
			<p class="dsn-up max-w350 mt-20" v-for="(text, index) in data.text" :key="index">
				{{ text }}
			</p>
		</div>
	</div>
</template>


