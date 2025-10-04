<script setup>
const props = defineProps({ data: Array });
</script>

<template>
	<div class="container icon-left pt-30 pb-30">
		<div class="d-grid grid-md-3 grid-sm-2 dsn-service" data-dsn-iconsize="60px">
			<div  :class="['service-item p-relative grid-item',index != 0 ? 'border-left' : null]"
				v-for="(item, index) in props.data" :key="index">
				<div class="service-item-inner align-items-center number-item h-100">
					<div class="dsn-icon">
						<div v-html="item.src"></div>
					</div>
					<div class="service-content p-relative">
						<h4 class="service_title sm-title-block text-upper">
							{{ item.title }}
						</h4>
						<div class="service_description mt-10 max-w570 dsn-auto">
							{{ item.description }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
