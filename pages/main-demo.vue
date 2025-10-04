<script setup>

import data_InBox from "@/api/box-info/box-info.json";
import data_Portf from "@/api/portfolio/portfolio.json";
import data_blogs from "@/api/blog/blog.json";
import data_Serve from "@/api/services/service.json";
import data_IServ from "@/api/services/service-icon.json";
import data_Teste from "@/api/testimonials/testimonials.json";
import data_Brand from "@/api/brands/brand-one.json";
import SectionTitle from "@/components/title/SectionTitle.vue";
import SectionTitleGrid from "@/components/title/SectionTitleGrid.vue";
import LinkDefualt from "@/components/links/LinkDefualt.vue";
import LinkAngle from "@/components/links/LinkAngle.vue";
import ServiceIcon from "@/components/services/ServiceIcon.vue";
import ServiceStyle from "@/components/services/ServiceStyle.vue";
import BoxImage from "@/components/box-image/BoxImage.vue";
import BoxInfo from "@/components/box-info/BoxInfo.vue";
import BoxInfoList from "@/components/box-info/BoxInfoList.vue";
import BoxInfoItem from "@/components/box-info/BoxInfoItem.vue";
import BlogSwiper from "@/components/blog/BlogSwiper.vue";
import Testimonials from "@/components/testimonials/Testimonials.vue";
import BrandOne from "@/components/brand/BrandOne.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
</script>

<template>

	<Head>
		<Title>Home</Title>
	</Head>

	<Layout>
		<!-- ========== Slider Parallax ========== -->
			<PortfolioSlider :data="data_Portf" setStyle="padding-h" contentStyle="end-between" hasDescription
				linkDefualt :webgel="true" :webgelOptions="{
					displacement: 'images/displacement/7.jpg',
					speedIn: 3.5,
				}" :optionSlider="{ direction: 'horizontal' }" :swiperOptions="{
				allowTouchMove: true,
				watchSlidesProgress: true,
				grabCursor: true,
				mousewheel: false,
				speed: 500,
			}" />
		<!-- ========== End Slider Parallax ========== -->

		<!-- ========== Service Icon Left ========== -->
		<ServiceIcon :data="data_IServ" />
		<!-- ========== End Service Icon Left ========== -->

		<!-- ========== About Section One ========== -->
		<AboutOne class="section-padding background-section" bgMask="background-main"
			imageOneSrc="images/about-1.jpg" imageTwoSrc="images/about-2.jpeg">
			<template v-slot:moveTitle>WE ARE</template>
			<template v-slot:centerTitle>BLACK DSN</template>
			<template v-slot:lastTitle>AGENCY</template>
			<template v-slot:description>
				We build and activate brands through cultural insight, strategic vision,
				and the power of emotion across every element of its expression.
			</template>
			<template v-slot:button>
				<LinkAngle classColor="main" linkName="ABOUT US" linkTo="/about-us" />
			</template>
		</AboutOne>
		<!-- ========== About Section One ========== -->

		<!-- ========== Service ========== -->
		<ServiceStyle :data="data_Serve.slice(0,3)" fadeUp counter titleClass="border-bottom pb-20 mb-20"
			serviceInnerClass="border-style" iconsize="80px" masonry :center="false" haveButton>
			<template v-slot:title>
				<SectionTitleGrid grid btnBackground="background-section" beforeStyle="circle-before"
					subTitle="advantages" title="Let’s Check <b>Our Services</b>" linkTo="/service"
					linkName="VIEW ALL SERVICES" />
			</template>
		</ServiceStyle>
		<!-- ========== End Service ========== -->

		<!-- ========== About Section One ========== -->
		<BoxInfo imageSrc="images/about-3.jpg">
			<template v-slot:title>
				<SectionTitle subTitle="TECHNOLOGY" title="How is your <br>visual <b>identity?</b>"
					beforeStyle="circle-before" :spaceDown="false" />
			</template>
			<template v-slot:string>
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
				deserunt mollit laborum. Sed ut perspiciatis unde omnis iste natus sit .
				<span class="d-block mt-10"></span>
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
				deserunt
			</template>
			<BoxInfoList>
				<BoxInfoItem v-for="(item,index) in data_InBox" :key="index" :item="item.text" />
			</BoxInfoList>
			<LinkDefualt linkClass="background-main" :iconAwesome="['fas','angle-right']" popup linkName="LEARN MORE"
				linkTo="/portfolio/style-6/headphones" parallax />
		</BoxInfo>
		<!-- ========== End About Section One ========== -->

		<!-- ========== Portfolio ========== -->
		<PortfolioSwiper :data="data_Portf" setStyle="classic" haveOverlayBG allowPrevButton mode
			allowNextButton allowPagination grabCursor loop parallax :centeredSlides="false"
			:desktop="{ slidesPerView: 2.5, spaceBetween: 30, centeredSlides: false }"
			:tablet="{ spaceBetween: 30, slidesPerView: 2, centeredSlides: false }"
			:mobile="{ spaceBetween: 30, slidesPerView: 1, centeredSlides: false }" :speed="1200" watchSlidesProgress
			>
			<template v-slot:title>
				<SectionTitleGrid grid class="container" btnBackground="background-main" beforeStyle="circle-before"
					subTitle="OUR WORK" title="Our latest <br><b>AWESOME DESIGNS </b>" linkTo="/work/work-list-1"
					linkName="VIEW ALL Work" />
			</template>
		</PortfolioSwiper>
		<!-- ========== End Portfolio ========== -->

		<!-- ========== background Box Image ========== -->
		<BoxImage imageSrc="images/about-4.jpg">
			<h3 class="title-h2">
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
			<LinkDefualt linkClass="background-section" :iconAwesome="['far','envelope-open']" popup
				linkName="CONTACT US" linkTo="/contact" parallax />
		</BoxImage>
		<!-- ========== End background Box Image ========== -->

		<!-- ========== testimonials ========== -->
		<Testimonials :data="data_Teste" :stringLine="1" haveOverlayBG Pagination
			className="section-padding background-section" slideClass="border-style" :desktop="{ slidesPerView: 2 }"
			:tablet="{ slidesPerView: 2 }" :mobile="{ slidesPerView: 1 }" grabCursor :centeredSlides="false"
			spaceBetween="30" loop :speed="1200">
			<template v-slot:title>
				<SectionTitleGrid grid btnBackground="background-main" beforeStyle="circle-before" subTitle="advantages"
					title="What People <b>ARE <br>SAYING</b>" linkTo="/contact" linkName="GET STARTED NOW" />
			</template>
		</Testimonials>
		<!-- ========== End testimonials ========== -->

		<!-- ========== Stories ========== -->
		<BlogSwiper setStyle="normal" :data="data_blogs" haveOverlayBG allowPrevButton allowNextButton allowPagination
			grabCursor parallax loop :speed="1200" :desktop="{ slidesPerView: 2.5, spaceBetween: 30 }"
			:tablet="{ slidesPerView: 2, spaceBetween: 30 }" :mobile="{ slidesPerView: 1, spaceBetween: 30 }">
			<template v-slot:title>
				<SectionTitleGrid grid class="container" btnBackground="background-section" beforeStyle="circle-before"
					subTitle="advantages" title="What People <b>ARE <br>SAYING</b>" linkTo="/blog/stories"
					linkName="GET STARTED NOW" />
			</template>
		</BlogSwiper>
		<!-- ========== End Stories ========== -->

		<!-- ========== Brand ========== -->
		<BrandOne :data="data_Brand.slice(0,8)" boxStyle="1" class="background-section section-padding">
			<template v-slot:number>25</template>
			<template v-slot:description>YEARS OF <br />DIGITAL EXPERIENCE</template>
		</BrandOne>
		<!-- ========== End Brand ========== -->

		<!-- ========== Footer ============== -->
		<DsnFooter containerContent animate />
		<!-- ========== End Footer ========== -->
	</Layout>
</template>
