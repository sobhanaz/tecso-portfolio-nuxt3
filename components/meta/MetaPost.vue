<script setup>
const props = defineProps({ date: Boolean, className: String, category: Object, separate: String,catLink: String });
</script>

<template>
	<span class="dsn-posts p-relative d-inline-block dsn-category dsn-bg metas mb-10 entry-meta">
		<div :class="['metas',props.className]" v-if="props.category">
			<NuxtLink class="heading-color" :to="props.catLink ? props.catLink + `/${cat.toString().toLowerCase()}` : $route.path" :data-separator="props.separate"
				v-for="(cat, index) in props.category" :key="index">
				{{ cat }}
			</NuxtLink>
		</div>
	</span>
</template>
