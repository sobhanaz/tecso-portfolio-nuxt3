<script setup>
import { Animate } from "@/hooks/pluginanimations.js"
const separator = ref(null)
const props = defineProps({ light: Boolean, animate: Boolean });
const setSeparator = () => {
    const path = separator.value.getElementsByTagName("path");
    new Animate({ end: "-180% top" }, { attr: { d: path[0].getAttribute("d") } }, { attr: { d: path[0].getAttribute("data-dsn-to") } }, separator.value, path);
}
onMounted(() => setSeparator())
onBeforeRouteUpdate(async (to, from) => setSeparator());
</script>

<template>
    <svg ref="separator"
        :class="['dsn-separator dsn-separator-up',props.light ? 'dsn-icon-main-color' : 'dsn-icon-assistant-color']" width="100%" height="100%"
        viewBox="0 0 100 10" preserveAspectRatio="none">
        <path class="path-anim separator__path" data-dsn-to="M 0 0 C 40 0 55 0 100 0 L 0 0 Z"
            d="M 0 0 C 40 16 75 10 100 0 L 0 0 Z"></path>
    </svg>
</template>
