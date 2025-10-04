<script setup>
const props = defineProps({ data: Array });
</script>

<template>
    <div class="p-relative container section-margin">
        <slot name="title" />
        <div class="d-grid grid-md-4 grid-sm-2 dsn-brand">
            <div class="brand-item border-style" v-for="(client,index) in props.data" :key="index">
                <div class="brand-item-inner over-hidden p-relative">
                    <NuxtImg format="webp" :src="client.imageSrc" />
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
