<script setup>
const props = defineProps({ imageSrc: String })
</script>

<template>
    <header class="p-relative pt-header">
        <div class="hero-content text-center">
            <span class="sm-title-block heading-color text-upper">
                <slot name="subTitle" />
            </span>
            <h1 class="title-head mt-20 text-upper">
                <slot name="title" />
            </h1>
            <p class="max-w750 mt-20">
                <slot name="description" />
            </p>
            <slot />
        </div>
        <div class="mt-section hero-image dsn-box-shadow">
            <NuxtImg format="webp" class="w-100" :src="props.imageSrc" alt="" />
        </div>
    </header>
</template>
