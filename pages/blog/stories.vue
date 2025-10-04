<script setup>
import data_blogs from "@/api/blog/blog.json";
import BlogList from "@/components/blog/BlogList.vue"
import DsnFooter from '@/components/footer/DsnFooter.vue';
</script>

<template>

    <Head>
        <Title>Stories</Title>
    </Head>

    <Layout bodyStyle="bg-dots">
        <!-- ========== Header ========== -->
        <HeaderHalf title="Our Stories" :metas="['NEWS', 'IDEAS']" btnScrollTo="list" />
        <!-- ========== End Header ========== -->

        <!-- ========== Stories ========== -->
        <BlogList id="list" :data="data_blogs" />
        <!-- ========== End Stories ========== -->

        <!-- ========== Footer =================== -->
        <DsnFooter light animate />
        <!-- ========== End Footer =============== -->
    </Layout>
</template>
