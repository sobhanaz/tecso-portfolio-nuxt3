<script setup>
import data_Accor from "@/api/about/about-according.json";
import data_Portf from "@/api/portfolio/portfolio.json";
import data_Serve from "@/api/services/ServicesFour.json";
import data_Award from "@/api/award/awarded-list.json";
import data_Teste from "@/api/testimonials/testimonials.json";
import data_Brand from "@/api/brands/brand-one.json";
import SectionTitle from "@/components/title/SectionTitle.vue";
import SectionTitlePin from "@/components/title/SectionTitlePin.vue";
import LinkDefualt from "@/components/links/LinkDefualt.vue";
import AboutTwo from "@/components/about/AboutTwo.vue";
import ServicesFour from "@/components/services/ServicesFour.vue";
import VideoOnly from "@/components/section-video/VideoOnly.vue";
import AboutAward from "@/components/awarded/AboutAward.vue";
import BrandTwo from "@/components/brand/BrandTwo.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
</script>

<template>

    <Head>
        <Title>Architecture</Title>
    </Head>

    <Layout>
        <!-- ========== Header ===================== -->
        <HeaderFlat imageSrc="images/architecture.jpg" btnScrollTo="about">
            <template v-slot:title>MODERN CITY BUILDINGS</template>
            <template v-slot:description>
                We’ve taken care of all the digital boring details, so you can take care
                of your online business grow and clients satisfaction.
            </template>
        </HeaderFlat>
        <!-- ========== End Header ================= -->

        <!-- ========== About Section ============== -->
        <about-two id="about">
            <template v-slot:title>
                <SectionTitle title="Welcome! We Are <b><br />Architecture studio</b>." :spaceDown="false" />
            </template>
            <template v-slot:description>
                <p class="dsn-heading-title d-inline-block p-relative mt-30">
                    Founded in 2000, Dsn Grid has become one of the best Digital Agency in
                    ThemeForest. Blue money going forward, but deploy to production.
                    <span class="mt-10 d-block">
                        The world needs innovators and problem solvers who turn challenges
                        into greater opportunities. We have an insatiable curiosity about
                        transformative .
                    </span>
                </p>
            </template>
            <template v-slot:icon><font-awesome-icon :icon="['fas', 'phone-square-alt']" /></template>
            <template v-slot:service_title>CALL US ANYTIME</template>
            <template v-slot:tel>+0125487000</template>
            <template v-slot:btn>
                <LinkDefualt class="mt-30" linkClass="background-main" :iconAwesome="['fas', 'angle-right']"
                    linkName="Get Free Estimate" linkTo="/contact" parallax />
            </template>
            <template v-slot:backImage><NuxtImg format="webp" class="cover-bg-img" src="images/arc1.jpg" alt="" /></template>
            <template v-slot:frontImage><NuxtImg format="webp" class="cover-bg-img" src="images/arc2.jpg"
                    alt="" /></template>
        </about-two>
        <!-- ========== End About Section ========== -->

        <!-- ========== Service ==================== -->
        <services-four :data="data_Serve.slice(0, 3)" />
        <!-- ========== End Service ================ -->

        <!-- ========== About According ============ -->
        <about-according :data="data_Accor">
            <template v-slot:title>
                <SectionTitlePin title="services in <b>various architecture fields.</b>" />
            </template>
        </about-according>
        <!-- ========== End About According ======== -->

        <!-- ========== Play Video ================= -->
        <VideoOnly imageSrc="images/about-4.jpg" btnName="PLAY" videoLink="https://vimeo.com/175353205" />
        <!-- ========== End Play Video ============= -->

        <!-- ========== Awarded ==================== -->
        <AboutAward :data="data_Award.slice(0, 3)">
            <template v-slot:boxRightTitle>
                <SectionTitle title="Rewards and <br><b>awards</b>" :spaceDown="false" />
            </template>
            <template v-slot:boxRightString>
                <p class="mt-20 max-w350">
                    We help ambitious businesses like yours generate more profits by
                    building awareness, driving web traffic, connecting with customers and
                    growing overall sales.
                </p>
            </template>
            <template v-slot:boxRightNumber>25</template>
            <template v-slot:boxRightDescription>YEARS OF <br />DIGITAL EXPERIENCE</template>
            <template v-slot:boxLeftTitle>Milestones <br /><b>that we proudly</b></template>
        </AboutAward>
        <!-- ========== End Awarded ================ -->

        <!-- ========== Portfolio ================== -->
        <PortfolioSwiper :data="data_Portf" setStyle="cards-1" allowPrevButton allowNextButton
            allowPagination grabCursor watchSlidesProgress centeredSlides loop parallax
            :desktop="{ slidesPerView: 1, }" :tablet="{ slidesPerView: 1, }" :mobile="{ slidesPerView: 1, }"
            :speed="1200" :loopedSlides="2">
            <template v-slot:title>
                <SectionTitle class="container" title="standard <b>in </b><br><b>AWESOME DESIGNS</b>" />
            </template>
        </PortfolioSwiper>
        <!-- ========== End Portfolio ============== -->

        <!-- ========== testimonials =============== -->
        <Testimonials :data="data_Teste" :stringLine="0" Pagination className="section-padding background-section"
            slideClass="background-main" :desktop="{ slidesPerView: 3, spaceBetween: 30, centeredSlides: false }"
            :tablet="{ slidesPerView: 2, spaceBetween: 30, centeredSlides: false }"
            :mobile="{ slidesPerView: 1, spaceBetween: 30, centeredSlides: false }" grabCursor :centeredSlides="false"
            loop :speed="1200">
            <template v-slot:title>
                <SectionTitle title="Relationships <br><b>based on trust.</b>" />
            </template>
        </Testimonials>
        <!-- ========== End testimonials =========== -->

        <!-- ========== Brand ====================== -->
        <BrandTwo :data="data_Brand" />
        <!-- ========== End Brand ================== -->

        <!-- ========== Footer ===================== -->
        <dsn-footer light animate />
        <!-- ========== End Footer ================= -->
    </Layout>
</template>


