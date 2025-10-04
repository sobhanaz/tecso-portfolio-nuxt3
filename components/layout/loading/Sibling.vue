<script setup>
import SiteLogo from "@/components/logo/SiteLogo.vue";
const props = defineProps({ isSibling: Boolean });
</script>

<template>
	<span :class="['dsnload__row',props.isSibling ? 'dsnload__row--sibling' : null]">
		<span class="dsnload__img">
			<SiteLogo height="undefined" width="undefined" />
		</span>
	</span>
</template>
