<script setup>
import { nextProject } from "@/hooks/plugin.js";
import data_blogs from "@/api/blog/blog.json";
import PostData from "@/components/blog/PostData.vue";
import PostPagination from "@/components/blog/PostPagination.vue";
import PostComments from "@/components/blog/PostComments.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
definePageMeta({ documentDriven: false });
const { slug } = useRoute().params;
const item = await data_blogs.find((item) => item.slug === slug);

if (!item) {
    throw createError({
        fatal: true,
        statusCode: 404,
        statusMessage: "Post Not Found",
        data: {
            msg: useRoute().path,
            redirectLink: "/blog/stories",
            linkName: "Blog",
        },
    });
}
</script>

<template>

    <Head>
        <Title>Post - {{ item.title }}</Title>
    </Head>

    <Layout>
        <HeaderSinglePost :data="item" btnScrollTo="" />
        <PostData :data="item" />
        <PostPagination :data="data_blogs" />
        <PostComments :data="item" />
        <DsnFooter light animate />
    </Layout>
</template>
