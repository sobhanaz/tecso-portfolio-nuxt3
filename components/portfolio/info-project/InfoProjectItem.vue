<script setup>
const props = defineProps({ title: String, description: String })
</script>

<template>
    <li class="dsn-up grid-item number-item">
        <h5 class="title-list-project sm-title-block" data-fade-up>{{ props.title }}</h5>
        <p class="description-list-project dsn-auto" data-fade-up>{{ props.description }}</p>
    </li>
</template>
