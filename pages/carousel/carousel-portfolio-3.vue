<script setup>
import data_Portf from "@/api/portfolio/portfolio.json";
</script>

<template>

	<Head>
		<Title>Carousel Portfolio 3</Title>
	</Head>

	<Layout bodyStyle="bg-dots">
		<!-- ========== Portfolio ================== -->
		<PortfolioSwiper :data="data_Portf" setStyle="carousel-3" parallax centeredSlides loop grabCursor
			:speed="1200" paginationOne allowPrevButtonOne allowNextButtonOne mode
			:desktop="{ slidesPerView: 3, spaceBetween: 60 }" :tablet="{ slidesPerView: 1, spaceBetween: 30 }"
			:mobile="{ slidesPerView: 1, spaceBetween: 30 }" :swiperOptions="{ mousewheel: true }">
		</PortfolioSwiper>
		<!-- ========== End Portfolio ============== -->
	</Layout>
</template>
