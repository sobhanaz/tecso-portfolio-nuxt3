<script setup>
import { nextProject } from "@/hooks/plugin.js"
import { Fancybox } from "@fancyapps/ui";
import data_Portf from "@/api/portfolio/portfolio.json";
import InfoProject from "@/components/portfolio/info-project/InfoProject.vue";
import InfoProjectItem from "@/components/portfolio/info-project/InfoProjectItem.vue";
import ParallaxImageTwo from "@/components/images/ParallaxImageTwo.vue";
import ImagePopup from "@/components/images/ImagePopup.vue";
import BoxInfoFull from "@/components/box-info/BoxInfoFull.vue";
import ParagraphBox from "@/components/string/ParagraphBox.vue";
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
        <Title>Project</Title>
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

        <!-- ========== Parallax Image With Popup  ========== -->
        <ParallaxImageTwo :src="item.images[1].src" :caption="item.images[1].name" fancybox="_1" />
        <!-- ========== End Parallax Image With Popup  ========== -->

        <!-- ========== Paragraph  ========== -->
        <ParagraphBox>{{ item.about[1].text[0] }}</ParagraphBox>
        <!-- ========== End Paragraph  ========== -->

        <!-- ========== Image Popup  ========== -->
        <ImagePopup class="dsn-container" :imageList="[item.images[2], item.images[3]]" />
        <!-- ========== End Image Popup  ========== -->

        <!-- ========== Parallax Image With Popup  ========== -->
        <ParallaxImageTwo :src="item.images[4].src" :caption="item.images[4].name" fancybox="_1" />
        <!-- ========== End Parallax Image With Popup  ========== -->

        <!-- ========== Image Popup  ========== -->
        <ImagePopup class="dsn-container" :imageList="[item.images[4], item.images[5]]" />
        <!-- ========== End Image Popup  ========== -->

        <!-- ========== Paragraph  ========== -->
        <ParagraphBox>
            {{ item.about[1].text[1] }}
            <h5 class="title-block dsn-up mt-15">Richard Price</h5>
        </ParagraphBox>
        <!-- ========== End Paragraph  ========== -->

        <!-- ========== Next Project  ========== -->
        <NextProject light :next="nextProject(item.id, data_Portf)" />
        <!-- ========== End Next Project  ========== -->
    </Layout>
</template>
