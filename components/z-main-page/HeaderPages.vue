<script setup>
import { elScrollDown } from "@/hooks/plugin.js";
import LinkNormal from "@/components/links/LinkNormal.vue";
</script>

<template>
	<header class="p-relative pt-header background-theme">
		<div class="hero-content text-center">
			<div class="main-logo">
				<NuxtLink to="/" class="custom-logo-link main-brand effect-ajax">
					<NuxtImg format="webp" src="images/logo.png" class="logo-dark" alt="Nuxt Blackdsn" />
				</NuxtLink>
			</div>
			<h1 class="title-head mt-20 text-upper">
				Vue Nuxt Js blackdsn
				<br />
				Get your own
				<br />
				beautiful website.
			</h1>
			<p class="max-w570 mt-20">
				Power your creative ideas with cutting-edge technology and pixel-perfect
				design. Create your beautiful website now.
			</p>
			<LinkNormal :linkTo="$route.path" @click="elScrollDown('demospage')" linkName="Get Started Now" center
				parallax background="background-section" />
		</div>
		<div class="mt-section hero-image dsn-container">
			<NuxtImg format="webp" class="w-100" src="images/preview/demo.png" alt="" />
		</div>
	</header>
</template>
