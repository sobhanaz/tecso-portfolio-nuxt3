<script setup>
import Accordion from "@/components/accordion/Accordion.vue";
import AccordionItem from "@/components/accordion/AccordionItem.vue";
const props = defineProps({ data: Array })
</script>

<template>
    <div class="about-section section-margin container d-grid grid-md-2" data-dsn-gap="30px 60px">
        <slot name="title" />
        <div class="box-right">
            <Accordion>
                <AccordionItem :title="item.title" :active="index == 0 ? true : false" :number="Number(index) + 1"
                    v-for="(item,index) in props.data" :key="index">
                    <template v-slot:question></template>
                    <template v-slot:answer>
                        <p>{{ item.description }} </p>
                    </template>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";
@import "./global_style/about-section"
</style>
