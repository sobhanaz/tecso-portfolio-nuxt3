<script setup>
import LinkDefualt from "@/components/links/LinkDefualt.vue";
const props = defineProps({
    subTitle: String,
    title: String,
    linkTo: String,
    linkName: String,
    btnBackground: String,
    beforeStyle: String,
    center: Boolean,
    grid: Boolean,
});
</script>

<template>
    <div class="section-title mb-70 "
        :class="props.grid ? 'd-grid grid-md-2' : null,props.center ? 'text-center' : null">
        <div class="sub-section-title">
            <p :class="['description d-inline-block p-relative mb-10',props.beforeStyle]">
                <span>{{ props.subTitle }}</span>
            </p>
            <span class="title-h2 title-block-lg d-block heading-color" v-html="props.title" />
        </div>

        <LinkDefualt v-if="props.linkTo" class="align-self-end justify-self-end" :linkClass="props.btnBackground"
            :iconAwesome="['fas','angle-right']" :linkName="props.linkName" :linkTo="props.linkTo" parallax />
    </div>
</template>
