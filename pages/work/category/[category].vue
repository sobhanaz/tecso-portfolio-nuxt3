<script setup>
import data_Portf from "@/api/portfolio/portfolio.json";
import LinkAngle from "@/components/links/LinkAngle.vue";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
definePageMeta({ documentDriven: false });
const { category } = useRoute().params
</script>

<template>

	<Head>
		<Title>Work List 1</Title>
	</Head>

	<Layout bodyStyle="bg-dots">
		<!-- ========== Header Normal============= -->
		<HeaderNormal contentClass="container" subTitle="" btnScrollTo="portfolio">
			<template v-slot:title>{{category}}</template>
			<template v-slot:string>Professional Design Agency to provide solutions</template>
			<LinkAngle linkNameClass="heading-color" classColor="section" linkName="Get Started Now"
				linkTo="/contact" />
		</HeaderNormal>
		<!-- ========== End Header Normal ======== -->

		<!-- ========== Portfolio ================ -->
		<PortfolioFilter :filterCat="category.toString().toLowerCase().trim()" id="portfolio" class="container" :data="data_Portf" :useFilter="false"
			setStyle="cards-1" />
		<!-- ========== End Portfolio ============ -->

		<!-- ========== Footer =================== -->
		<DsnFooter light animate />
		<!-- ========== End Footer =============== -->
	</Layout>
</template>
