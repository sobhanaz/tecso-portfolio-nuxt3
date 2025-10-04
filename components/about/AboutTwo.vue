<script setup>
const store = reactive({ tel: 0 });
const telNum = ref(null);
onMounted(() => (store.tel = telNum.value.textContent));
</script>

<template>
	<div class="about-section about-arc background-section pt-40 pb-section">
		<div class="container d-grid grid-md-2">
			<div class="box-left">
				<slot name="title" />
				<slot name="description" />
				<div class="icon-left dsn-icon-theme-color mt-30" data-dsn-iconsize="80px">
					<div class="dsn-service d-grid grid-1-half">
						<div class="service-item p-relative grid-item style-box background-main p-10 border-rdu">
							<div class="service-item-inner number-item h-100 align-items-center">
								<div class="dsn-icon mr-20">
									<slot name="icon" />
								</div>
								<div class="service-content p-relative">
									<h4 class="service_title sm-p">
										<span class="circle-before">
											<slot name="service_title" />
										</span>
									</h4>
									<div class="service_description mt-20 max-w570 dsn-auto">
										<a ref="telNum" :href="`tel:${store.tel}`" target="_blank"
											class="init-color sm-title-block">
											<slot name="tel" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<slot name="btn" />
			</div>
			<div class="box-right box-img">
				<div class="dsn-bg-mask w-100 h-50 bottom-0 z-index-1"></div>
				<div class="img-first h-100">
					<slot name="backImage" />
				</div>
				<div class="img-last h-100">
					<slot name="frontImage" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";
@import "./global_style/about-section";
.about-arc {
	@include media_991() {
		.dsn-service {
			display: flex;

			.service-item {
				padding: 10px 20px;
			}
		}
	}

	.box-img {
		position: relative;

		.img-first {
			position: relative;
			z-index: 2;
			padding: 0 30px 80px 20px;
			margin-left: auto;
		}

		.img-last {
			position: absolute;
			padding-top: 120px;
			bottom: 30px;
			left: 30px;

			z-index: 3;
		}

		.dsn-bg-mask {
			background-image: url("@/assets/images/for-styles/dots-dark.png");
		}

		@include media_991(min) {
			.img-last {
				width: 45%;
			}

			.img-first {
				width: 65%;
			}
		}

		@include media_991() {
			.img-last {
				width: 65%;
			}
		}

		@include media_768(min) {
			.img-first {
				width: 65%;
			}
		}

		@include media_768() {
			.img-first {
				padding-bottom: 30px;
			}

			.img-last {
				display: none;
			}
		}

		@include media_575() {
			.img-first {
				padding: 0;
			}
		}
	}
}
</style>
