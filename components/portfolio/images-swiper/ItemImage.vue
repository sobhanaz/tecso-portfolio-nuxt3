<script setup>
const props = defineProps({ className: String,data: Array });
</script>

<template>
    <swiper-slide v-for="(item,index) in props.data" :key="index"
        :class="['over-hidden background-transparent',className]">
        <div class="item-img">
            <div class="img-box-parallax before-z-index">
                <NuxtImg format="webp" :src="item.src" alt='cover' class="cover-bg-img" />
            </div>
        </div>
    </swiper-slide>
</template>
