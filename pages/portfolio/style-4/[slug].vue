<script setup>
import { nextProject } from "@/hooks/plugin.js"
import { Fancybox } from "@fancyapps/ui";
import data_Portf from "@/api/portfolio/portfolio.json";
import SectionTitle from "@/components/title/SectionTitle.vue";
import InfoProject from "@/components/portfolio/info-project/InfoProject.vue";
import InfoProjectItem from "@/components/portfolio/info-project/InfoProjectItem.vue";
import ScrollImages from "@/components/images/ScrollImages.vue";
import ImagePopup from "@/components/images/ImagePopup.vue";
import BoxInfoFull from "@/components/box-info/BoxInfoFull.vue";
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
        <HeaderFull :data="item" boxShadow btnScrollTo="info" :linkCircleTo="item.autherLink" />
        <!-- ========== End Header  ========== -->

        <!-- ========== Info Project  ========== -->
        <InfoProject id="info">
            <template v-slot:about>
                <h2 class="title-h2 dsn-up" data-fade-up>
                    {{ item.about[0].title }}
                </h2>
                <p class="max-w750 mt-30 dsn-up" data-fade-up>
                    {{ item.about[0].text[0] }}
                </p>
            </template>
            <InfoProjectItem v-for="(info, index) in item.infoProject" :key="index" :title="info.title"
                :description="info.description" />
        </InfoProject>
        <!-- ========== End Info Project  ========== -->

        <!-- ========== Image Popup  ========== -->
        <ImagePopup class="container" :imageList="[item.images[2], item.images[3]]" />
        <!-- ========== End Image Popup  ========== -->

        <!-- ========== Right Box With Image ========== -->
        <BoxInfoFull :imageSrc="item.images[4].src">
            <template v-slot:title>
                <SectionTitle :title="item.about[1].title" beforeStyle="circle-before" :spaceDown="false" />
            </template>
            <template v-slot:string>
                <p class="mt-20 pt-20 border-top">{{ item.about[1].text[0] }}</p>
                <p class="mt-20">{{ item.about[1].text[1] }}</p>
            </template>
        </BoxInfoFull>
        <!-- ========== End Right Box With Image ========== -->

        <!-- ========== Scroll Image Right  ========== -->
        <ScrollImages :data="item.images.slice(4, 9)" />
        <!-- ========== End Scroll Image Right  ========== -->

        <!-- ========== Paragraph  ========== -->
        <div class="container section-margin">
            <p class="title-block heading-color">
                <span class="dsn-up d-block" data-split-char>SHOKZ_OPENRUN</span>
                <span class="dsn-up" data-split-char><b>Render/Postproduction</b>: Tardis 42</span>
            </p>
        </div>
        <!-- ========== End Paragraph  ========== -->

        <!-- ========== Next Project  ========== -->
        <NextProject light :next="nextProject(item.id, data_Portf)" />
        <!-- ========== End Next Project  ========== -->
    </Layout>
</template>
