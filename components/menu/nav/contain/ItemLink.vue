<script setup>
const props = defineProps({ name: String, href: String });
const li = ref(null)
const handleClickCloseMenu = () => {
	li.value.closest(".open").classList.remove("open");
	const header = document.querySelector(".site-header");
	const parent = header.closest(".site-header");
	if (!parent) return;
	if (!parent.classList.contains("dsn-hamburger") || !parent.classList.contains("dsn-open")) return;
	const navToggle = parent.querySelector(".navbar-toggle");
	if (navToggle) navToggle.click();
};
</script>

<template>
	<li ref="li" class="nav-item">
		<NuxtLink class="effect-ajax" :to="props.href" @click.prevent="handleClickCloseMenu">
			<span class="overflow">
				{{ props.name }}
			</span>
		</NuxtLink>
	</li>
</template>
