<script setup>
import data_Portf from "@/api/portfolio/portfolio.json";
import LinkAngle from "@/components/links/LinkAngle.vue";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
</script>

<template>

	<Head>
		<Title>Work Classic 1</Title>
	</Head>

	<Layout bodyStyle="bg-dots">
		<!-- ========== Header Normal============= -->
		<HeaderNormal center subTitle="" btnScrollTo="portfolio">
			<template v-slot:title> Professional Experience </template>
			<template v-slot:string>
				Professional Design Agency to provide solutions
			</template>
			<LinkAngle class="justify-content-center" linkNameClass="heading-color" classColor="section"
				linkName="Get Started Now" linkTo="/contact" />
		</HeaderNormal>
		<!-- ========== End Header Normal ======== -->

		<!-- ========== Portfolio ================ -->
		<PortfolioFilter id="portfolio" class="dsn-container" :data="data_Portf" :useFilter="true"
			setStyle="classic-1" :mode="true" />
		<!-- ========== End Portfolio ============ -->

		<!-- ========== Footer =================== -->
		<DsnFooter light animate />
		<!-- ========== End Footer =============== -->
	</Layout>
</template>
