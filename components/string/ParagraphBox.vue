<script setup>
const props = defineProps({ string: String })
</script>

<template>
    <ClientOnly>
        <div class="container section-margin text-center">
            <p class="title-block dsn-up max-w750" data-fade-up>
                <slot />
            </p>
        </div>
    </ClientOnly>
</template>

