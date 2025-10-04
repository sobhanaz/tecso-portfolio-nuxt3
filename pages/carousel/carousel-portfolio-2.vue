<script setup>
import data_Portf from "@/api/portfolio/portfolio.json";
</script>

<template>

	<Head>
		<Title>Carousel Portfolio 2</Title>
	</Head>

	<Layout bodyStyle="bg-dots">
		<!-- ========== Portfolio ================== -->
		<PortfolioSwiper :data="data_Portf" setStyle="carousel-2" parallax centeredSlides loop
			watchSlidesProgress grabCursor :speed="1200" :loopedSlides="2" paginationOne allowPrevButtonOne
			allowNextButtonOne :desktop="{ slidesPerView: 1, spaceBetween: 60 }"
			:tablet="{ slidesPerView: 1, spaceBetween: 30 }" :mobile="{ slidesPerView: 1, spaceBetween: 30 }"
			:swiperOptions="{ mousewheel: true }">
		</PortfolioSwiper>
		<!-- ========== End Portfolio ============== -->
	</Layout>
</template>
