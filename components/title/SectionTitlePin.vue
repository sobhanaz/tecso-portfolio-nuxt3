<script setup>
import { Animate } from "@/hooks/pluginanimations.js";
const props = defineProps({ title: String, subTitle: String });
const boxLeft = ref(null);
const h2 = ref(null);
onMounted(() => {
	setTimeout(() => {
		const setEndTo = boxLeft.value.parentElement.offsetHeight - h2.value.offsetHeight;
		new Animate({ pin: true, start: "-10%", end: `+=${setEndTo}` }, { yPercent: "20" }, { yPercent: "0" }, boxLeft.value, h2.value);
	}, 1000);
});
</script>

<template>
	<div class="box-left p-relative d-flex">
		<div ref="boxLeft" class="section-title">
			<div ref="h2">
				<h2 class="title-h2 body-font text-upper" v-html="props.title" />
				<slot />
			</div>
		</div>
	</div>
</template>
