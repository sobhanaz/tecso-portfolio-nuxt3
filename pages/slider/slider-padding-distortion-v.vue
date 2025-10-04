<script setup>
import data_Portf from "@/api/portfolio/portfolio.json";
</script>

<template>

	<Head>
		<Title>Portfolio - Nuxt 3 Blackdsn</Title>
	</Head>

	<Layout bodyStyle="bg-dots">
		<PortfolioSlider :data="data_Portf" setStyle="padding-v" contentStyle="end-between"
			direction="vertical" hasDescription linkDefualt :swiperOptions="{
				allowTouchMove: true,
				watchSlidesProgress: true,
				grabCursor: true,
				mousewheel: true,
				speed: 500,
			}" webgel>
		</PortfolioSlider>
	</Layout>
</template>


