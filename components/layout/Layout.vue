<script setup>
import { setBodyClass, hideNav } from "@/hooks/plugin.js";
import { store } from "@/store/store";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmooth from "@/components/helper/ScrollSmooth.vue";
import RightScrollTop from "@/components/option-theme/RightScrollTop.vue";

import SocialOne from "@/components/social/SocialOne.vue";
import ModeColors from "@/components/option-theme/ModeColors"
const props = defineProps({ bodyStyle: String });
onMounted(() => {
	setBodyClass(props.bodyStyle);
	const route = useRoute();
	const queryParams = route.query;
	const mode = queryParams.mode;
	if (mode != undefined) { store.colorPage = `v-${mode === "dark" || mode === "light" ? mode : "dark"}` };
	hideNav()
});
</script>

<template>
	<div id="main_layout" class="background-main">
		<ModeColors />
		<div id="line_head"><span class="container"></span></div>
		<div v-if="store.activeScrollbar" class="main-content p-relative dsn-main-scrollbar">
			<div id="dsn-scrollbar">
				<ScrollSmooth />
				<div id="main_root" class="p-relative" v-if="$slots">
					<slot />
				</div>
			</div>
		</div>
		<div v-else id="main_root" class="p-relative">
			<slot />
		</div>
		<SocialOne />
		<RightScrollTop :options="{ duration: 1.5, ease: 'power4.inOut' }" />
	</div>
</template>
