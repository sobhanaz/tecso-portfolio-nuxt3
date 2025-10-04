<script setup>
import { nextProject } from "@/hooks/plugin.js"
import { Fancybox } from "@fancyapps/ui";
import data_Portf from "@/api/portfolio/portfolio.json";
import InfoProject from "@/components/portfolio/info-project/InfoProject.vue";
import InfoProjectItem from "@/components/portfolio/info-project/InfoProjectItem.vue";
import ParallaxImage from "@/components/images/ParallaxImage.vue";
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
            <InfoProjectItem v-for="(info, index) in item.infoProject" :key="index" :title="info.title"
                :description="info.description" />
        </InfoProject>
        <!-- ========== End Info Project  ========== -->

        <!-- ========== Parallax Image With Popup  ========== -->
            <ParallaxImage id="info"
            v-for="(image, index) in item.images.slice(1, item.images.length)"
            :key="index" :src="image.src" :caption="image.name" fancybox="_1" animate='
            {"trigger": { "start": "top" },
            "from": { "y": "-10%", "height": "120%" },
            "to": { "y": "40%", "height": "120%" }}' />
        <!-- ========== End Parallax Image With Popup  ========== -->

        <!-- ========== Next Project  ========== -->
        <NextProject :next="nextProject(item.id, data_Portf)" />
        <!-- ========== End Next Project  ========== -->
    </Layout>
</template>
