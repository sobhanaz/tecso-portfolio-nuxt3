<script setup>
const props = defineProps({ data: Array, fadeUp: { type: Boolean, default: false } });
</script>

<template>
	<div class="mt-section background-section section-padding">
		<div class="container">
			<slot name="title" />
			<div class="icon-top dsn-icon-heading-color">
				<div class="dsn-service d-grid grid-sm-2" data-dsn-iconsize="20px">
					<div class="dsn-up service-item p-relative grid-item" v-for="(service, index) in props.data"
						:key="index">
						<div class="service-item-inner number-item h-100" :data-fade-up="props.fadeUp">
							<div class="dsn-icon">
								<font-awesome-icon :icon="['far', 'window-minimize']" />
							</div>
							<div class="service-content p-relative">
								<h4 class="service_title title-block mb-20">
									{{ service.title }}
								</h4>
								<div class="service_description max-w570 dsn-auto">
									<p>{{ service.string }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
