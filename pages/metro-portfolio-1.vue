<script setup>
import data_Portf from "@/api/portfolio/portfolio.json";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
</script>

<template>

	<Head>
		<Title>Metro Portfolio 1</Title>
	</Head>

	<Layout>
		<!-- ========== Header ========== -->
		<HeaderHalf grid pattern title="CREATIVITY" :metas="['NEWS', 'IDEAS']" btnScrollTo="list">
			<template v-slot:string>
				We are a team of professional specialists who craft and execute your
				marketing strategy from development to designing.
			</template>
			<template v-slot:subTitle>CREATIVE AGENCY</template>
		</HeaderHalf>
		<!-- ========== End Header ========== -->

		<!-- ========== Portfolio ========== -->
		<PortfolioFilter id="list" class="container" :data="data_Portf" :useFilter="true" setStyle="metro-1" />
		<!-- ========== End Portfolio ========== -->

		<!-- ========== Footer =================== -->
		<DsnFooter light animate />
		<!-- ========== End Footer =============== -->
	</Layout>
</template>
