<script setup>
const props = defineProps({imageList: Array,caption: String,fancybox: String,mask: Boolean,});
</script>

<template>
	<div class="p-relative mb-section">
		<div v-if="props.mask" class="dsn-bg-mask d-sm-none h-50 top-0 background-theme"></div>
		<div class="d-grid grid-sm-2 align-items-center" data-dsn-gap="80px 60px">
			<div class="p-relative img-box-parallax before-z-index has-popup" v-for="(item, index) in props.imageList"
				:key="index">
				<ClientOnly>
				<div class="effect-popup before-z-index h-100" :data-src="item.src" data-caption="Caption #2"
					data-fancybox="_1" data-cursor="open" data-dsn-overlay="0">
					<NuxtImg format="webp" :src="item.src" :alt="item.name" />
				</div>
				
					<div class="cap">
						<span>{{ item.name }}</span>
					</div>
				</ClientOnly>
				
			</div>
		</div>
	</div>
</template>


