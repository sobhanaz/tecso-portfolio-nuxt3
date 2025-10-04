<script setup>
const props = defineProps({ data: Object });
</script>

<template>
	<div class="resume-item">
		<h4 class="sm-title-block resume-title mb-15">{{ props.data.company }}</h4>
		<h6 class="resume-position">{{ props.data.time }}</h6>
		<div class="resume-description mt-10">
			<p>{{ props.data.description }}</p>
		</div>
	</div>
</template>
