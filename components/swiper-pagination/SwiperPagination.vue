<script setup>
const props = defineProps({ classPag: String,setStyle: { type: String,default: "normal" },prev: Boolean,pagination: Boolean,next: Boolean,el: {} });
const styles = [
    {
        style: "normal",
        main: "dsn-pagination d-flex align-items-center justify-content-between dsn-container mt-30"
    }
]
const itemStyle = () => {
    if (!props.setStyle) return styles[0]

    const getStyle = styles.find(item => item.style === props.setStyle)
    if (!getStyle) return styles[0]

    return getStyle
}
const pag = ref(null);
const slidePrev = () => props.el?.swiper.slidePrev();
const slideNext = () => props.el?.swiper.slideNext();
</script>

<template>
    <div ref="pag" :class="itemStyle().main">
        <div class="swiper-prev" v-if="props.prev" @click="slidePrev()">
            <div class="prev-container">
                <div class="container-inner">
                    <div class="triangle" />
                    <svg class="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g class="circle-wrap" fill="none" strokeWidth="1" strokeLinejoin="round" strokeMiterlimit="10">
                            <circle cx="12" cy="12" r="10.5" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div :class="['swiper-pagination mr-30 ml-30 heading-color',props.classPag]" v-if="props.pagination"
            data-dsn-type="progressbar" />
        <div class="swiper-next" v-if="props.next" @click="slideNext()">
            <div class="next-container">
                <div class="container-inner">
                    <div class="triangle" />
                    <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g class="circle-wrap" fill="none" strokeWidth="1" strokeLinejoin="round" strokeMiterlimit="10">
                            <circle cx="12" cy="12" r="10.5" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
