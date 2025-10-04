<script setup>
const props = defineProps({ data: Array });
</script>

<template>
    <div class="dsn-brand over-hidden mt-80 mb-80">
        <div class="dsn-grid-layout dsn-grid section-image section-move-image use-horizontal-scroll-image"
            data-dsn-option='{"start":"100%","end":"0%","pin":false}'>
            <div class="grid-item" v-for="(client,index) in props.data" :key="index">
                <div class="image-item">
                    <NuxtImg format="webp" class="cover-bg-img" :src="client.imageSrc" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";
@import "./global_brand_style/brand"
</style>
