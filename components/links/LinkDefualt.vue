<script setup>
import { Fancybox } from "@fancyapps/ui";
const df = { "data-fancybox": "" };
const props = defineProps({
	linkName: String,
	linkTo: String,
	popup: { type: Boolean,default: false },
	linkClass: { type: String,default: "background-main" },
	parallax: { type: Boolean,default: false },
	iconAwesome: { type: Array,default: ["fas","angle-right"] },
});
onMounted(() => {
	if (!props.popup) return;
	Fancybox.bind("[data-fancybox]",{ Hash: false });
});
onUpdated(() => Fancybox.close());
onBeforeUnmount(() => Fancybox.destroy());
</script>

<template>
	<div class="d-flex mt-20 dsn-def-btn dsn-border-style">
		<ClientOnly>
			<NuxtLink :to="props.linkTo"
				:class="['mr-15 dsn-btn dsn-border border-color-default has-icon-left',props.linkClass]"
				:data-dsn="props.parallax ? 'parallax' : null" v-bind="props.popup ? { 'data-fancybox': '' } : null">
				<span class="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
					<font-awesome-icon :icon="props.iconAwesome" />
				</span>
				<span class="title-btn p-relative z-index-1 heading-color">
					{{ props.linkName }}
				</span>
			</NuxtLink>
		</ClientOnly>

	</div>
</template>
