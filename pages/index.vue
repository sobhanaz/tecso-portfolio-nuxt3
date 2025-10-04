<script setup>
import data_IServ from "@/components/z-main-page/api/service-icon.json";
import ServiceIcon from "@/components/services/ServiceIcon.vue";
import HeaderPages from "@/components/z-main-page/HeaderPages.vue";
import UniqueTitle from "@/components/z-main-page/UniqueTitle.vue";
import DemosPages from "@/components/z-main-page/DemosPages.vue";
import PortfolioSliders from "@/components/z-main-page/PortfolioSliders.vue";
import PortfolioGrids from "@/components/z-main-page/PortfolioGrids.vue";
import BuildVisually from "@/components/z-main-page/BuildVisually.vue";
import TheFeatures from "@/components/z-main-page/TheFeatures.vue";
import PagesFooter from "@/components/z-main-page/PagesFooter.vue";
import Layout from "~/components/layout/Layout.vue";

onMounted(() => {
	setTimeout(() => {
		const mainLogo = document.body.querySelector("#site_menu_header .main-logo img")
		mainLogo.setAttribute("src","images/logo.png")
		mainLogo.setAttribute("srcset","images/logo.png 1x, images/logo.png 2x")
		const site_menu_header = document.body.querySelector("#site_menu_header")
		site_menu_header.classList.add("v-light")
		site_menu_header.style.backgroundColor = "transparent"
	},100)

})

definePageMeta({
	layout: "view"
})
</script>

<template>

	<Head>
		<Title>Blackdsn</Title>
	</Head>

	<Layout bodyStyle="bg-dots">
		<!-- ========== Header ========== -->
		<HeaderPages />
		<!-- ========== End Header ========== -->

		<!-- ========== Service Icon Left ========== -->
		<ServiceIcon :data="data_IServ" />
		<!-- ========== End Service Icon Left ========== -->

		<!-- ========== Stunning Homepages ========== -->
		<DemosPages />
		<!-- ========== Stunning Homepages ========== -->

		<!-- ========== Portfolio Sliders  ========== -->
		<PortfolioSliders />
		<!-- ========== End Portfolio Sliders  ========== -->

		<!-- ========== Portfolio Grids  ========== -->
		<PortfolioGrids />
		<!-- ========== End Portfolio Grids  ========== -->

		<BuildVisually />

		<TheFeatures />

		<PagesFooter />
	</Layout>
</template>
