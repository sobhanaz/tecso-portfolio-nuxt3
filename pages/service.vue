<script setup>
import data_Brand from "@/api/brands/brand-one.json";
import data_ServA from "@/api/services/services_accordion.json";
import data_Team from "@/api/team/team.json";
import data_Serve from "@/api/services/about-services.json";
import data_Teste from "@/api/testimonials/testimonials.json";
import SectionTitle from "@/components/title/SectionTitle.vue";
import SectionTitlePin from "@/components/title/SectionTitlePin.vue";
import AboutServices from "@/components/services/AboutServices.vue";
import BrandTwo from "@/components/brand/BrandTwo.vue";
import LinkAngle from "@/components/links/LinkAngle.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
</script>

<template>

    <Head>
        <Title>Services</Title>
    </Head>

    <Layout bodyStyle="bg-dots">
        <!-- ========== Header Normal ================ -->
        <HeaderNormal contentClass="container" subTitle="OUR SERVICES">
            <template v-slot:title>
                We are delivering beautiful <br />digital products for you.
            </template>
            <template v-slot:string>
                If you are looking for an agency to help you create a remarkable presence
                online, you’ve come to the right place. We can help you take your business
                to the next level.
            </template>
            <LinkAngle linkName="Get Started Now" linkTo="/contact" />
        </HeaderNormal>
        <!-- ========== End Header Normal ============ -->

        <!-- ========== About Section ================ -->
        <AboutServices :data="data_Serve" imageSrc="images/portfolio/project6/2.gif">
            <template v-slot:title>Let’s Check <b>Our Services</b></template>
            <template v-slot:smallBoxTitle>Best Practices from Industry Experts</template>
            <template v-slot:smallBoxDescription>
                <p>
                    We’ve designed a culture that allows our stewards to assimilate with
                    our clients and bring.
                </p>
            </template>
        </AboutServices>
        <!-- ========== End About Section ============ -->

        <!-- ========== Info Service ================= -->
        <div class="pt-section mb-section background-section">
            <div class="container">
                <div class="d-grid grid-md-2" data-dsn-gap="30px 60px">
                    <div class="left">
                        <h5 class="title-h2 body-font text-upper">
                            We provide you with the best service<b>in the market</b>
                        </h5>
                        <p class="mt-20">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration, by
                            injected humour. words
                        </p>
                    </div>
                    <div class="right align-self-end">
                        <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration, Injected
                            humour words web page editors now use as their.
                        </p>
                        <p class="mt-20">
                            Default and a search for will uncover many web sites still in
                            their infancy.suffered alteration, by injected humour words
                            web page.
                        </p>
                    </div>
                </div>
            </div>
            <div class="p-relative box-img">
                <div class="p-relative container d-grid grid-1-half mt-50 z-index-2">
                    <NuxtImg format="webp" src="images/s1.jpg" alt="" />
                    <NuxtImg format="webp" class="d-sm-none" src="images/s2.jpg" alt="" />
                </div>

                <div class="dsn-bg-mask background-main h-50 bottom-0 z-index-1"></div>
            </div>
        </div>
        <!-- ========== End Info Service ============= -->

        <!-- ========== About According ============== -->
        <about-according :data="data_ServA.slice(0, 3)">
            <template v-slot:title>
                <SectionTitlePin title="We have been doing projects <b>since 2008.</b>">
                    <p class="max-w570 mt-20">
                        Founded in 2000, Dsn Grid has become one of the best Digital Agency in
                        ThemeForest. Blue money going forward, but deploy to production.
                    </p>
                </SectionTitlePin>
            </template>
        </about-according>
        <!-- ========== End About According ========== -->

        <!-- ========== Team ========================= -->
        <Team :data="data_Team.slice(0, 4)" grid="grid-lg-4 grid-sm-2">
            <template v-slot:title>
                <SectionTitle class="container" subTitle="Our Team" title="The best team ever!"
                    beforeStyle="circle-before" />
            </template>
        </Team>
        <!-- ========== End Team ===================== -->

        <!-- ========== Brand ======================== -->
        <BrandTwo :data="data_Brand" />
        <!-- ========== End Brand ==================== -->

        <!-- ========== Testimonials ================= -->
        <Testimonials :data="data_Teste" :stringLine="1" Pagination loop grabCursor :centeredSlides="false"
            className="section-padding background-section" slideClass="background-main" :desktop="{
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
            }" :tablet="{
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
            }" :mobile="{
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: false,
            }" :speed="1200">
            <template v-slot:title>
                <SectionTitle title="Relationships <b>based on trust.</b>" />
            </template>
        </Testimonials>
        <!-- ========== End Testimonials ============= -->

        <!-- ========== Footer ======================= -->
        <DsnFooter animate />
        <!-- ========== End Footer =================== -->
    </Layout>
</template>


