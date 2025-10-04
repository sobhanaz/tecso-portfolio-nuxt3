<script setup>
import data_Team from "@/api/team/team.json";
import data_Teste from "@/api/testimonials/testimonials.json";
import data_Brand from "@/api/brands/brand.json";
import data_Serve from "@/api/services/service.json";
import LinkAngle from "@/components/links/LinkAngle.vue"
import Layout from "@/components/layout/Layout.vue";
import SectionTitle from "@/components/title/SectionTitle.vue";
import ServiceStyle from "@/components/services/ServiceStyle.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
const pageStyle = { titleBeforeStyle: "circle-before", };
</script>

<template>

    <Head>
        <Title>About</Title>
    </Head>

    <Layout>
        <!-- ========== Header Normal============= -->
        <HeaderNormal contentClass="container" subTitle="" btnScrollTo="about">
            <template v-slot:title>
                Digital Agency That <br />Thrives on Your Success
            </template>
            <template v-slot:string>
                If you are looking for an agency to help you create a remarkable presence
                online, you’ve come to the right place. We can help you take your business
                to the next level.
            </template>
            <LinkAngle classColor="section" linkName="Get Started Now" linkTo="/contact" />
        </HeaderNormal>
        <!-- ========== End Header Normal ======== -->

        <!-- ========== About Section ============ -->
        <AboutSection id="about" imageSrc="images/about-5.jpg">
            <template v-slot:title>Help Millions To Bring <br />There Creative Projects To Life</template>
            <template v-slot:string>e were thoughtful about presenting these in a way where we could also
                tell the story of the individual.. It is a long established fact that a
                reader will be distracted by the readable content of a page when looking
                at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters.
            </template>
        </AboutSection>
        <!-- ========== End About Section ======== -->

        <!-- ========== Service ================== -->
        <ServiceStyle :data="data_Serve.slice(0, 6)" counter :masonry="false" center
            serviceInnerClass="border-style" iconsize="80px" :haveButton="false" fadeUp>
            <template v-slot:title>
                <SectionTitle subTitle="advantages" title="Let’s Check Our Services" center
                    :beforeStyle="pageStyle.titleBeforeStyle" />
            </template>
        </ServiceStyle>
        <!-- ========== End Service ============== -->

        <!-- ========== Team ===================== -->
        <Team :data="data_Team.slice(0, 3)" class="dsn-right-container" grid="grid-md-3 grid-sm-2">
            <template v-slot:title>
                <SectionTitle subTitle="Our Team" title="The best team ever!"
                    :beforeStyle="pageStyle.titleBeforeStyle" />
            </template>
        </Team>
        <!-- ========== End Team ================= -->

        <!-- ========== testimonials ============= -->
        <Testimonials :data="data_Teste" :stringLine="1" className="section-margin" slideClass="border-style" Pagination
            spaceBetween="30" :desktop="{ slidesPerView: 2 }" :tablet="{ slidesPerView: 2 }"
            :mobile="{ slidesPerView: 1 }" grabCursor :centeredSlides="false" loop :speed="1200">
            <template v-slot:title>
                <SectionTitle subTitle="testimonials" title="What People are Saying" center
                    :beforeStyle="pageStyle.titleBeforeStyle" />
            </template>
        </Testimonials>
        <!-- ========== End testimonials ========= -->

        <!-- ========== Brand ==================== -->
        <Brand :data="data_Brand.slice(0, 8)">
            <template v-slot:title>
                <SectionTitle subTitle="Our Clients" title="Your successful, our reputation" center
                    :beforeStyle="pageStyle.titleBeforeStyle" />
            </template>
        </Brand>
        <!-- ========== End Brand ================ -->

        <!-- ========== Footer =================== -->
        <DsnFooter light animate />
        <!-- ========== End Footer =============== -->
    </Layout>
</template>


