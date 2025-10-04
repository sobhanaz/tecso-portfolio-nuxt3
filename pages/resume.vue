<script setup>
import data_Personal from "@/api/personal/personal.json"
import data_Serve from "@/api/services/service.json";
import data_Portf from "@/api/portfolio/portfolio.json"
import SectionTitle from "@/components/title/SectionTitle.vue";
import SectionTitlePin from "@/components/title/SectionTitlePin.vue";
import Skills from "@/components/skills/Skills.vue"
import SkillProgressBar from "@/components/skills/SkillProgressBar.vue"
import ExperienceList from "@/components/experience/ExperienceList.vue"
import HeaderResume from "@/components/header/HeaderResume.vue"
import ServiceStyle from "@/components/services/ServiceStyle.vue";
import SectionData from "@/components/sections/SectionData.vue"
import PortfolioFilter from "@/components/portfolio/PortfolioFilter.vue"
import DsnFooter from "@/components/footer/DsnFooter.vue";
const personal = 1
</script>

<template>

    <Head>
        <Title>Resume</Title>
    </Head>

    <Layout bodyStyle="bg-dots">

        <!-- ========== Header ========== -->
        <HeaderResume :data="data_Personal[personal]" btnScrollTo="about" />
        <!-- ========== End Header ========== -->

        <!-- ========== About Section ========== -->
        <AboutResume id="about" :data="data_Personal[personal]">
            <template v-slot:title>
                <SectionTitle center subTitle="" title="Main Information About Me<br> And What I Love To Do." spaceDown>
                    <p class="max-w750 mt-20">
                        {{ data_Personal[personal].about[1] }}
                    </p>
                </SectionTitle>
            </template>
        </AboutResume>
        <!-- ========== End About Section ========== -->

        <!-- ========== Service ================== -->
        <ServiceStyle class="border-top pt-section" :data="data_Serve.slice(0,3)" :masonry="false" center
            serviceInnerClass="border-style" iconsize="80px" :haveButton="false" fadeUp>
            <template v-slot:title>
                <SectionTitle subTitle="" title="Let’s Check Our Services" center beforeStyle="">
                    <p class="max-w570 mt-20">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullat.
                    </p>
                </SectionTitle>
            </template>
        </ServiceStyle>
        <!-- ========== End Service ============== -->

        <!-- ========== Skills ========== -->
        <SectionData>
            <template v-slot:title>
                <SectionTitlePin title="MY SKILLS">
                    <p class="max-w350 mt-20">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullat.
                    </p>
                </SectionTitlePin>
            </template>
            <template v-slot:items>
                <Skills class="d-grid">
                    <SkillProgressBar v-for="(skill,index) in data_Personal[personal].skills" :key="index"
                        :data="skill" />
                </Skills>
            </template>
        </SectionData>
        <!-- ========== End skills ========== -->

        <!-- ========== Experience ========== -->
        <SectionData>
            <template v-slot:title>
                <SectionTitlePin title="My past experience">
                    <p class="max-w350 mt-20">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullat.
                    </p>
                </SectionTitlePin>
            </template>
            <template v-slot:items>
                <ExperienceList>
                    <ExperienceItem v-for="(ex,index) in data_Personal[personal].experience" :key="index" :data="ex" />
                </ExperienceList>
            </template>
        </SectionData>
        <!-- ========== End Experience ========== -->

        <!-- ========== Portfolio ========== -->
        <PortfolioFilter class="container" :data="data_Portf" setStyle="cards-1" LinkCircleArrow />
        <!-- ========== End Portfolio ========== -->

        <!-- ========== Contact ========== -->
        <SectionData>
            <template v-slot:title>
                <SectionTitlePin title="Contact me">
                    <p class="max-w350 mt-0">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullat.
                    </p>
                </SectionTitlePin>
            </template>
            <template v-slot:items>
                <ContactFormSmall />
            </template>
        </SectionData>
        <!-- ========== End Contact ========== -->

        <!-- ========== Footer ======================= -->
        <DsnFooter class="container border-top" :animateContent="false" />
        <!-- ========== End Footer =================== -->
    </Layout>
</template>
