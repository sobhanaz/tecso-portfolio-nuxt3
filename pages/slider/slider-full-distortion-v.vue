<script setup>
import data_Portf from "@/api/portfolio/portfolio.json";
</script>

<template>

	<Head>
		<Title>Portfolio - Nuxt 3 Blackdsn</Title>
	</Head>

	<Layout>
		<PortfolioSlider :data="data_Portf" setStyle="full-v" contentStyle="container-center-center"
			direction="vertical" :swiperOptions="{
				allowTouchMove: true,
				watchSlidesProgress: true,
				grabCursor: true,
				mousewheel: true,
				speed: 500,
			}" webgel>
		</PortfolioSlider>
	</Layout>
</template>
