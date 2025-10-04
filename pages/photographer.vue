<script setup>
import data_Serve from "@/api/services/service.json";
import data_Portf from "@/api/portfolio/portfolio.json";
import data_Teste from "@/api/testimonials/testimonials.json";
import data_blogs from "@/api/blog/blog.json";
import SectionTitle from '~/components/title/SectionTitle.vue';
import SectionTitleGrid from "@/components/title/SectionTitleGrid.vue";
import LinkNormal from '~/components/links/LinkNormal.vue';
import LinkDefualt from "@/components/links/LinkDefualt.vue";
import AboutFour from '~/components/about/AboutFour.vue';
import HeaderCenter from "@/components/header/HeaderCenter.vue";
import ServiceStyle from "@/components/services/ServiceStyle.vue";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter.vue"
import DsnFooter from "@/components/footer/DsnFooter.vue";
const pageStyle = { titleBeforeStyle: "circle-before" }
</script>

<template>

    <Head>
        <Title>Photographer</Title>
    </Head>

    <Layout bodyStyle="bg-dots">

        <!-- ========== Header ========== -->
        <HeaderCenter imageSrc="images/photos.png">
            <template v-slot:subTitle>Photographer & Visual Artist</template>
            <template v-slot:title>Aperture Studios</template>
            <template v-slot:description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
            </template>
            <LinkNormal class="justify-content-center" linkTo="/contact" linkName="Get Started Now" center parallax
                background="background-section" />
        </HeaderCenter>
        <!-- ========== End Header ========== -->

        <!-- ========== About Section ========== -->
        <AboutFour imageOneSrc="images/photo-1.jpg" imageTwoSrc="images/photo-2.jpg"
            imageThreeSrc="images/photo-3.jpg">
            <template v-slot:title>
                <SectionTitle class="mt-section" subTitle="The Gear cage" title="Why I started <b>as a photographer"
                    :beforeStyle="pageStyle.titleBeforeStyle" :spaceDown="false" />
            </template>
            <template v-slot:description>
                Founded in 2000, Dsn Grid has become one of the best Digital Agency in ThemeForest. Blue
                money going forward, but deploy to production. First-order optimal strategies build on a
                culture of contribution and inclusion so those options
            </template>
            <LinkNormal linkTo="/service" linkName="CHECK IT OUT" parallax background="background-section" />
        </AboutFour>
        <!-- ========== End About Section ========== -->

        <!-- ========== Service ========== -->
        <ServiceStyle :data="data_Serve.slice(0, 6)" :masonry="false" :center="false"
            serviceInnerClass="border-bottom" iconsize="50px" :fadeUp="false" :haveButton="false">
            <template v-slot:title>
                <SectionTitleGrid grid btnBackground="background-section" beforeStyle="circle-before"
                    subTitle="advantages" title="Let’s Check <b>Our Services</b>">
                    <LinkNormal linkTo="/service" linkName="VIEW ALL SERVICES" end parallax
                        background="background-section" />
                </SectionTitleGrid>
            </template>
        </ServiceStyle>
        <!-- ========== End Service ========== -->

        <!-- ========== Portfolio ========== -->
        <PortfolioFilter :data="data_Portf.slice(0, 5)" setStyle="list-3">
            <template v-slot:title>
                <SectionTitleGrid center beforeStyle="circle-before" subTitle="OUR WORK"
                    title="Our latest  <br><b>AWESOME DESIGNS </b>">
                    <LinkNormal linkTo="/work/work-list-1" linkName="BROWSER ALL PROJECT" center parallax
                        background="background-main" />
                </SectionTitleGrid>
            </template>
        </PortfolioFilter>
        <!-- ========== End Portfolio ========== -->

        <!-- ========== About Section ========== -->
        <AboutOne bgMask="background-section" smTitleBlock imageOneSrc="images/photo-4.jpg"
            imageTwoSrc="images/photo-5.jpg" linkName="ABOUT US" linkTo="/about-us">
            <template v-slot:moveTitle>PHOTOS</template>
            <template v-slot:centerTitle>THAT ARE</template>
            <template v-slot:lastTitle>ADMIRED</template>
            <template v-slot:description>
                Making photos. <br>Dreaming and making <br>your dreams real.
            </template>
            <template v-slot:button>
                <LinkDefualt linkClass="background-section" :iconAwesome="['fas', 'play']" popup linkName="PLAY VIDEO"
                    linkTo="https://vimeo.com/175353205" parallax />
            </template>
        </AboutOne>
        <!-- ========== About Section ========== -->

        <!-- ========== testimonials =============== -->
        <Testimonials :data="data_Teste" :stringLine="1" Pagination
            className="section-margin section-padding background-section" slideClass="background-main"
            :desktop="{ slidesPerView: 2, spaceBetween: 30, centeredSlides: false }"
            :tablet="{ slidesPerView: 2, spaceBetween: 30, centeredSlides: false }"
            :mobile="{ slidesPerView: 1, spaceBetween: 30, centeredSlides: false }" grabCursor :centeredSlides="false"
            loop :speed="1200">
            <template v-slot:title>
                <SectionTitleGrid grid btnBackground="background-section" beforeStyle="circle-before"
                    subTitle="testimonials" title="What People <b>are <br>Saying</b>">
                    <LinkNormal linkTo="/contact" linkName="CONTACT US" end parallax background="background-main" />
                </SectionTitleGrid>
            </template>
        </Testimonials>
        <!-- ========== End testimonials =========== -->

        <!-- ========== Stories ==================== -->
        <BlogOne :data="data_blogs.slice(0, 2)" class="section-margin " boxStyle="list" allowDescription>
            <template v-slot:title>
                <SectionTitleGrid center beforeStyle="circle-before" subTitle="Latest News"
                    title="Latest and <b>greatest post</b>">

                    <LinkNormal center parallax linkTo="/blog/stories" linkName="BROWSER ALL STORIES"
                        background="background-section" />
                </SectionTitleGrid>
            </template>
        </BlogOne>
        <!-- ========== End Stories ================ -->

        <!-- ========== Footer ============== -->
        <DsnFooter light animate />
        <!-- ========== End Footer ========== -->
    </Layout>
</template>

