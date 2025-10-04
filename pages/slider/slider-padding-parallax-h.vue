<script setup>
import data_Portf from "@/api/portfolio/portfolio.json";
</script>

<template>

	<Head>
		<Title>Portfolio - Nuxt 3 Blackdsn</Title>
	</Head>

	<Layout bodyStyle="bg-dots">
		<PortfolioSlider :data="data_Portf" setStyle="padding-parallax-h" contentStyle="center-between"
			direction="horizontal" hasDescription linkLine :swiperOptions="{
				allowTouchMove: true,
				watchSlidesProgress: true,
				grabCursor: true,
				mousewheel: true,
				speed: 1200,
			}">
		</PortfolioSlider>
	</Layout>
</template>
