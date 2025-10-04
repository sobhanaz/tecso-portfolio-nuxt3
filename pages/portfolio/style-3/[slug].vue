<script setup>
import { nextProject } from "@/hooks/plugin.js"
import { Fancybox } from "@fancyapps/ui";
import data_Portf from "@/api/portfolio/portfolio.json";
import ParallaxImage from "@/components/images/ParallaxImage.vue";
import NextProject from "@/components/next/NextProject.vue";
definePageMeta({ documentDriven: false });
const { slug } = useRoute().params
const item = await data_Portf.find(item => item.slug === slug)
if (!item) {
    throw createError({
        fatal: true,statusCode: 404,
        statusMessage: "Work Not Found",
        data: { msg: useRoute().path,redirectLink: "/work/work-list-1",linkName: "Portfolio" }
    })
}
onMounted(() => {
    Fancybox.defaults.Hash = false;
    Fancybox.bind("[data-fancybox]",{
        Thumbs: { Thumbs: true,showOnStart: true,type: "modern" },
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: ["zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY",],
                right: ["slideshow","thumbs","close"],
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
        <HeaderFull :data="item" full btnScrollTo="info" :linkCircleTo="item.autherLink" />
        <!-- ========== End Header  ========== -->

        <!-- ========== Parallax Image With Popup  ========== -->
        <ParallaxImage id="info" v-for="(image,index) in item.images.slice(1,item.images.length - 1)" :key="index"
            :src="image.src" :caption="image.name" fancybox="_1"
            animate='{"trigger": { "start": "top top" },"from": { "y": "-20%", "height": "120%","scale":"1.4" },"to": { "y": "0%", "height": "120%","scale":"1" }}' />
        <!-- ========== End Parallax Image With Popup  ========== -->

        <!-- ========== Next Project  ========== -->
        <NextProject light :next="nextProject(item.id,data_Portf)" />
        <!-- ========== End Next Project  ========== -->
    </Layout>
</template>
