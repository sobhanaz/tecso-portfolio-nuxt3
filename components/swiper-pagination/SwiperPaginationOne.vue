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
    <div ref="pag"
        class="dsn-swiper-paginate p-absolute  dsn-nav-arrow d-flex p-relative w-100 h-100 mt-50 dsn-container justify-content-center dsn-icon-heading-color">
        <div class="border-color-default swiper-prev background-section image-zoom move-circle dsn-nav-left"
            data-dsn="parallax" v-if="props.prev" @click="slidePrev()">
            <div class="dsn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <g>
                        <polygon
                            points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001" />
                    </g>
                </svg>
            </div>
        </div>
        <div :class="['swiper-pagination mr-30 ml-30 heading-color',props.classPag]" v-if="props.pagination"
            data-dsn-type="progressbar" />
        <div class="border-color-default swiper-next background-section image-zoom move-circle dsn-nav-right"
            data-dsn="parallax" v-if="props.next" @click="slideNext()">
            <div class="dsn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <g>
                        <polygon
                            points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001" />
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>
