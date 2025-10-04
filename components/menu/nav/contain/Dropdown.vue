<script setup>
// import { splittingChar } from "@/hooks/spltting.js";
import ArrowLeft from "@/components/menu/nav/contain/ArrowLeft.vue";
const { $Splitting } = useNuxtApp();
const li = ref(null);
const back = ref(null);
const props = defineProps({ name: String,href: String,dropdownMenu: {} });
const handleClick = (event) => li.value.closest(".open").classList.remove("open");
const handleClickSubMenu = (event) => {
	handleClick(li.value);
	li.value.querySelector("ul").classList.add("open");
};
const handleClickBackMenu = (event) => {
	back.value.closest(".open").classList.remove("open");
	li.value.closest("ul").classList.add("open");
};
onMounted(()=>{
	$Splitting();
})
</script>

<template>
	<li ref="li" class="nav-item has-sub-menu" v-if="props.dropdownMenu">
		<NuxtLink class="effect-ajax" :to="props.href" @click.prevent="handleClickSubMenu">
			<span class="overflow effect-ajax">{{ props.name }}</span>
		</NuxtLink>
		<ul class="sub-menu h3">
			<li ref="back" class="dsn-back effect-ajax" @click.prevent="handleClickBackMenu">
				<span>
					<ArrowLeft />
					<span class="text-toggle-back">
						<span class="text-name words chars splitting" data-splitting="chars">{{ props.name }}</span>
						<span class="text-back words chars splitting" data-splitting="chars">Back</span>
					</span>
				</span>
			</li>
			<slot />
		</ul>
	</li>
</template>
