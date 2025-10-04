<script setup>
import data_Portf from "@/api/portfolio/portfolio.json";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter.vue";
import LinkAngle from "@/components/links/LinkAngle.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
</script>

<template>

	<Head>
		<Title>Metro Portfolio 2</Title>
	</Head>

	<Layout bodyStyle="bg-dots">
		<!-- ========== Header Normal============= -->
		<HeaderNormal contentClass="dsn-container" subTitle="" btnScrollTo="list">
			<template v-slot:title>
				Digital Agency That <br />Thrives on Your Success
			</template>
			<template v-slot:string>
				If you are looking for an agency to help you create a remarkable presence
				online, you’ve come to the right place. We can help you take your business
				to the next level.
			</template>
			<LinkAngle linkNameClass="heading-color" classColor="section" linkName="Get Started Now"
				linkTo="/contact" />
		</HeaderNormal>
		<!-- ========== End Header Normal ======== -->

		<!-- ========== Portfolio ========== -->
		<PortfolioFilter id="list" class="dsn-container" :data="data_Portf" :useFilter="true" setStyle="metro-2" />
		<!-- ========== End Portfolio ========== -->

		<!-- ========== Footer =================== -->
		<DsnFooter light animate />
		<!-- ========== End Footer =============== -->
	</Layout>
</template>


