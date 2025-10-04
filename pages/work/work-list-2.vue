<script setup>
import data_Portf from "@/api/portfolio/portfolio.json";
import LinkAngle from "@/components/links/LinkAngle.vue";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
</script>

<template>

	<Head>
		<Title>Work List 2</Title>
	</Head>

	<Layout bodyStyle="bg-dots">
		<!-- ========== Header Normal============= -->
		<HeaderNormal contentClass="container" subTitle="" btnScrollTo="portfolio">
			<template v-slot:title> Professional Experience </template>
			<template v-slot:string>
				Professional Design Agency to provide solutions
			</template>
			<LinkAngle linkNameClass="heading-color" classColor="section" linkName="Get Started Now"
				linkTo="/contact" />
		</HeaderNormal>
		<!-- ========== End Header Normal ======== -->

		<!-- ========== Portfolio ================ -->
		<PortfolioFilter id="portfolio" :data="data_Portf" :useFilter="true" setStyle="list-2" />
		<!-- ========== End Portfolio ============ -->

		<!-- ========== Footer =================== -->
		<DsnFooter light animate />
		<!-- ========== End Footer =============== -->
	</Layout>
</template>
