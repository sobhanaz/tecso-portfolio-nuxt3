<script setup>
const props = defineProps({ data: Array })
</script>

<template>
    <div class="social-icons-wrapper d-grid grid-3 justify-self-end" data-dsn-gap="20px" data-dsn-iconsize="17px">
        <span class="grid-item" data-cursor="open" v-for="(social, index) in data" :key="index">
            <NuxtLink class="dsn-icon" :to="!social.link ? $route.path : social.link" target="_blank">
                <font-awesome-icon :icon="[`${social.type}`, `${social.iconName}`]" />
            </NuxtLink>
        </span>
    </div>
</template>

