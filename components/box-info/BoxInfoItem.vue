<script setup>
const props = defineProps({ item: String });
</script>

<template>
	<li class="list-item d-flex align-items-center background-main">
		<span class="dsn-icon mr-15">
			<font-awesome-icon :icon="['fas', 'check']" />
		</span>
		<p class="dsn-heading-title heading-color">{{ props.item }}</p>
	</li>
</template>


