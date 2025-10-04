<script setup>
import { nextProject } from "@/hooks/plugin.js"
import { Fancybox } from "@fancyapps/ui";
import data_Portf from "@/api/portfolio/portfolio.json";
import SectionTitle from "@/components/title/SectionTitle.vue";
import LinkCircle from "@/components/links/LinkCircle.vue"
import InfoProject from "@/components/portfolio/info-project/InfoProject.vue";
import InfoProjectItem from "@/components/portfolio/info-project/InfoProjectItem.vue";
import ParallaxImage from "@/components/images/ParallaxImage.vue";
import ImagePopup from "@/components/images/ImagePopup.vue";
import BoxInfoFull from "@/components/box-info/BoxInfoFull.vue";
import BoxInfoList from "@/components/box-info/BoxInfoList.vue";
import BoxInfoItem from "@/components/box-info/BoxInfoItem.vue";
import ImagesSwiper from "@/components/portfolio/images-swiper/ImagesSwiper.vue";
import NextProject from "@/components/next/NextProject.vue";
definePageMeta({ documentDriven: false });
const { slug } = useRoute().params
const item = await data_Portf.find(item => item.slug === slug)
if (!item) {
    throw createError({
        fatal: true, statusCode: 404,
        statusMessage: "Work Not Found",
        data: { msg: useRoute().path, redirectLink: "/work/work-list-1", linkName: "Portfolio" }
    })
}
onMounted(() => {
    Fancybox.defaults.Hash = false;
    Fancybox.bind("[data-fancybox]", {
        Thumbs: { Thumbs: true, showOnStart: true, type: "modern" },
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY",],
                right: ["slideshow", "thumbs", "close"],
            },
        },
        Carousel: { infinite: true },
    });
})
onUpdated(() => Fancybox.close())
onBeforeUnmount(() => Fancybox.destroy());
</script>

<template>

    <Head>
        <Title>{{ item.title }}</Title>
    </Head>

    <Layout>
        <!-- ========== Header  ========== -->
        <HeaderRightImage :data="item" btnScrollTo="info" :linkCircleTo="item.autherLink" />
        <!-- ========== End Header  ========== -->

        <!-- ========== Info Project  ========== -->
        <InfoProject id="info">
            <InfoProjectItem v-for="(info, index) in item.infoProject" :key="index" :title="info.title"
                :description="info.description" />
        </InfoProject>
        <!-- ========== End Info Project  ========== -->

        <!-- ========== Parallax Image With Popup  ========== -->
        <ParallaxImage class="section-margin" :src="item.images[1].src" :caption="item.images[1].name" fancybox="_1" />
        <!-- ========== End Parallax Image With Popup  ========== -->

        <!-- ========== Image Popup  ========== -->
        <ImagePopup class="container" :imageList="[item.images[2], item.images[3]]" />
        <!-- ========== End Image Popup  ========== -->

        <!-- ========== Right Box With Image ========== -->
        <BoxInfoFull v-if="item.images[4].src" :imageSrc="item.images[4].src">
            <template v-slot:title>
                <SectionTitle :title="item.about[1].title" beforeStyle="circle-before" :spaceDown="false" />
            </template>
            <template v-slot:string>
                <p class="mt-20 pt-20 border-top">{{ item.about[1].text[0] }}</p>
            </template>
            <BoxInfoList>
                <BoxInfoItem v-for="(item, index) in item.textLines" :key="index" :item="item.text" />
            </BoxInfoList>
        </BoxInfoFull>
        <!-- ========== End Right Box With Image ========== -->

        <!-- ========== Portfolio ========== -->
        <ImagesSwiper :data="item.images.slice(5, 9)"
            class="dsn-container dsn-right-container over-hidden background-section section-padding section-margin dsn-swiper"
            Pagination grabCursor loop parallax :centeredSlides="false"
            :desktop="{ slidesPerView: 2.5, spaceBetween: 30, centeredSlides: false }"
            :tablet="{ spaceBetween: 30, slidesPerView: 2, centeredSlides: false }"
            :mobile="{ spaceBetween: 30, slidesPerView: 1, centeredSlides: false }" :speed="800"
            :loopedSlides="2">
        </ImagesSwiper>
        <!-- ========== End Portfolio ========== -->

        <!-- ========== Next Project  ========== -->
        <NextProject light :next="nextProject(item.id, data_Portf)" />
        <!-- ========== End Next Project  ========== -->
    </Layout>
</template>
