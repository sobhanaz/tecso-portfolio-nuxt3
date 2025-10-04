<script setup>
import { Animate } from "@/hooks/pluginanimations.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animationUp,animationDown } from "@/components/svg/SvgAnimate.js";
const { $Splitting } = useNuxtApp();
const nav = ref(null);
const navbarToggle = ref(null);
const backgroundMain = ref(null);
const svg = ref(null);
const store = reactive({ typeNave: "",reserved: false });
const props = defineProps({ hamburger: { type: Boolean,default: false } });
//--------------------------------------------------------------------------------------------
const resizeNav = () => {
	if (window.innerWidth > 991) {
		store.typeNave = "";
		const ul = nav.value.querySelectorAll("ul");
		if (ul) {
			nav.value
				.querySelectorAll("ul")
				.forEach((item) => item.classList.remove("open"));
		}
		return;
	}
	store.typeNave = "dsn-hamburger";
};
//--------------------------------------------------------------------------------------------
const cutterElement = () => {
	const ul = nav.value.querySelectorAll("ul");
	if (!ul) return
	ul.forEach((item,index) => {
		item.style.setProperty("--dsn-li-name",`dsn${index}`);
		Object.keys(item.children).forEach(($key) => {
			item.children[$key].style.setProperty("--dsn-li-index",$key);
		});
	});
};
//--------------------------------------------------------------------------------------------
const removeOpenMenu = () => {
	const ul = nav.value.querySelectorAll("ul");
	if (ul) { nav.value.querySelectorAll("ul").forEach((item) => item.classList.remove("open")); }
};
const TransEnd = () => {
	if (store.reserved) {
		const ul = nav.value.querySelector(".primary-nav");
		if (ul) { nav.value.querySelector(".primary-nav").classList.add("open"); }
	}
};
const onCompleteAnimate = (e) => {
	if (!nav.value) return
	nav.value.classList.toggle("dsn-open");
	if (navbarToggle.value) { navbarToggle.value.classList.toggle("open"); }
	document.body.classList.toggle("over-hidden");
};
const toggleClick = (e) => {
	store.reserved = !store.reserved;
	if (store.reserved) {
		removeOpenMenu();
		animationUp(svg.value,TransEnd)
			.to("#main_root",{ y: -200,duration: 1,ease: "power4.in" },"top")
			.set(backgroundMain.value,{ autoAlpha: 1 },"center");
		onCompleteAnimate(this);
		return;
	}
	const ul = nav.value.querySelector(".primary-nav");
	if (ul) { nav.value.querySelector(".primary-nav").classList.remove("open"); }
	animationDown(svg.value,() => onCompleteAnimate(this))
		.to("#main_root",{ y: 0,clearProps: "y",duration: 1,ease: "power4" },"-=1")
		.set(backgroundMain.value,{ autoAlpha: 0 },"center");
};
//--------------------------------------------------------------------------------------------
onMounted(() => {
	$Splitting();
	cutterElement();
	if (props.hamburger) {
		store.typeNave = "dsn-hamburger";
	} else {
		window.addEventListener("resize",resizeNav);
		resizeNav();
	}
});
</script>

<template>
	<header id="site_menu_header" ref="nav"
		:class="['site-header dsn-container',store.typeNave,props.hamburger ? 'dsn-hamburger' : null]">
		<slot />
		<div id="navbar_toggle" :class="['navbar-toggle',props.className]" @click="toggleClick" ref="navbarToggle">
			<div class="toggle-icon">
				<div class="toggle-line" />
				<div class="toggle-line" />
				<div class="toggle-line" />
			</div>
			<div class="toggle-text">
				<div class="text-menu words chars splitting" data-splitting="chars">Menu</div>
				<div class="text-open words chars splitting" data-splitting="chars">Open</div>
				<div class="text-close words chars splitting" data-splitting="chars">Close</div>
			</div>
		</div>
		<div class="bg-load background-main" ref="backgroundMain" />
		<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
			class="bg-load dsn-svg-transition">
			<path vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" ref="svg" />
		</svg>
	</header>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/transitions";
@import "@/assets/styles/variables-site/structure";
@import "@/assets/styles/variables-site/fonts";
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/mixins-master";
@import "@/assets/styles/mixins/utilities";

.site-header {
	position: fixed;
	top: 0;
	width: 100%;
	padding-top: 22px;
	padding-bottom: 22px;
	transition-property: background-color, padding-top, padding-bottom, transform;
	transition-duration: 0.5s;
	z-index: 97;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;

	>.p-relative.dsn-container {
		padding: 0;
		display: flex;
		align-items: center;
	}

	.dsn-svg-transition {
		fill: $assistant-color;
	}

	.bg-load:not(.dsn-svg-transition) {
		opacity: 0;
		visibility: hidden;
		z-index: -1;
	}

	.bg-load {
		position: fixed;
		pointer-events: none;
	}



	@include admin-sticky-fix();

	.main-logo {
		position: relative;
		z-index: 1;
	}

	ul.primary-nav {
		display: flex;
		padding-left: 0;
		margin-bottom: 0;
		flex-wrap: wrap;

		ul {
			position: absolute;
		}
	}

	@include media_991(min) {
		&:not(.dsn-hamburger) {
			@import "../menu_style/menu/classic";

			.menu-cover-title {
				display: none;
			}
		}
	}

	&.dsn-hamburger {
		@import "../menu_style/menu/hamburger";
	}

	&:not(.dsn-hamburger) .container-content {
		display: none;
	}

	@import "../menu_style/menu/scroll_nav";
}
</style>
