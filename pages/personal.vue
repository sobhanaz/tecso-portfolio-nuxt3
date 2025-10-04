<script setup>
import data_Personal from "@/api/personal/personal.json";
import data_Serve from "@/api/services/service.json";
import data_Portf from "@/api/portfolio/portfolio.json";
import data_Teste from "@/api/testimonials/testimonials.json";
import data_blogs from "@/api/blog/blog.json";
import SectionTitle from "@/components/title/SectionTitle.vue";
import LinkDefualt from "@/components/links/LinkDefualt.vue";
import BoxImage from "@/components/box-image/BoxImage.vue";
import ServiceStyle from "@/components/services/ServiceStyle.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
const personal = 0;
</script>

<template>

	<Head>
		<Title>Personal - {{ data_Personal[personal].name }}</Title>
	</Head>

	<Layout bodyStyle="bg-dots">
		<!-- ========== Header Personal ========== -->
		<HeaderPersonal :data="data_Personal[personal]"></HeaderPersonal>
		<!-- ========== End Header Personal ========== -->

		<!-- ========== About Section ========== -->
		<AboutPersonal :data="data_Personal[personal]" subTitle="ABOUT US" title="What CAN I do" />
		<!-- ========== End About Section ========== -->

		<!-- ========== Service ========== -->
		<ServiceStyle :data="data_Serve.slice(0, 3)" titleClass="border-bottom border-top pt-20 pb-20 mb-20"
			serviceInnerClass="background-section" iconsize="80px" masonry center>
			<template v-slot:title>
				<SectionTitle center subTitle="advantages" title="Let’s Check Our Services" beforeStyle=""
					:spaceDown="true" titleClass="background-theme p-10" />
			</template>
		</ServiceStyle>
		<!-- ========== End Service ========== -->

		<PortfolioHorizontalScroll :data="data_Portf" />

		<!-- ========== background Box Image ========== -->
		<BoxImage imageSrc="images/about-4.jpg">
			<h3 class="title-h2 text-upper">
				Need help with professional <br />photography?
				<b>Let's work together!</b>
			</h3>
			<p class="mt-30 max-w570">
				In my work, I try to find the right balance between form and function.
				From technical drawings, all the way to the photographic renders, and the
				actual representations of my work as a designer, my philosophy is that of
				simplicity.
				<span class="mb-10 d-block"></span>
				At the same time, my style is distinctly mine – uncluttered, with clean
				shapes and modern space-saving solutions.
			</p>
			<LinkDefualt linkClass="background-section" :iconAwesome="['far', 'envelope-open']" popup
				linkName="CONTACT US" linkTo="/contact" parallax />
		</BoxImage>
		<!-- ========== End background Box Image ========== -->

		<!-- ========== testimonials =============== -->
		<div class="background-section section-padding">
			<Testimonials :data="data_Teste" :stringLine="1" className="container  " slideClass="border-style"
				boxStyle="center" Pagination loop :speed="1200" grabCursor
				:desktop="{ slidesPerView: 1, spaceBetween: 30, centeredSlides: false }"
				:tablet="{ slidesPerView: 1, spaceBetween: 30, centeredSlides: false }"
				:mobile="{ slidesPerView: 1, spaceBetween: 30, centeredSlides: false }">
				<template v-slot:title>
					<SectionTitle center subTitle="TESTIMONIALS" title="What People ARE SAYING" beforeStyle=""
						titleClass="background-theme p-10" />
				</template>
			</Testimonials>
		</div>

		<!-- ========== End testimonials =========== -->

		<!-- ========== Stories ==================== -->
		<BlogSwiper setStyle="cards" :data="data_blogs" allowPrevButton allowNextButton allowPagination grabCursor
			parallax loop :speed="1200" :desktop="{ slidesPerView: 1, spaceBetween: 30 }"
			:tablet="{ slidesPerView: 1, spaceBetween: 30 }" :mobile="{ slidesPerView: 1, spaceBetween: 30 }">
			<template v-slot:title>
				<SectionTitle center subTitle="Lasts post" title="Latest And Greatest Post" beforeStyle=""
					:spaceDown="true" titleClass="background-theme p-10" />
			</template>
		</BlogSwiper>
		<!-- ========== End Stories ================ -->

		<!-- ========== Footer ============== -->
		<DsnFooter light animate />
		<!-- ========== End Footer ========== -->
	</Layout>
</template>
