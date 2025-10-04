<script setup>
const props = defineProps({
    subTitle: String,
    title: String,
    center: Boolean,
    spaceDown: { type: Boolean,default: true },
    beforeStyle: String,
    titleClass: String
});
</script>

<template>
    <div
        :class="['section-title d-flex',props.center ? 'justify-content-center' : null,props.spaceDown ? 'mb-70' : null]">
        <div :class="['sub-section-title',center ? 'text-center' : null]">
            <p v-if="props.subTitle" :class="['description d-inline-block mb-10',props.beforeStyle]">{{ props.subTitle
                }}
            </p>
            <ClientOnly>
                <span v-if="props.title"
                :class="['title-h2 dsn-heading-title p-relative title-block-lg d-block heading-color',props.titleClass]" v-html="props.title" />
            </ClientOnly>
            
            <slot />
        </div>
    </div>
</template>
