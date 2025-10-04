<template>
    <!-- <ClientOnly></ClientOnly> -->
     
</template>
<script setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { smoothScrollBar } from '~/hooks/plugin.js'
onMounted(() => { smoothScrollBar() });
onBeforeUnmount(() => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()) });
</script>


