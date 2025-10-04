<script setup>
const props = defineProps({ data: Array,id: Number });
const { slug } = useRoute().params;
const item = props.data.find((item) => item.slug === slug);
const id = item.id;
const prev = () => {
	const dataLength = props.data.length;
	if (id == dataLength) return Number(id) - 1;
	if (id < dataLength && id != 1) return Number(id) - 1;
	if (id == 1) return dataLength;
	return id;
};
const next = () => {
	const dataLength = props.data.length;
	if (id > 1 && id != dataLength) return Number(id) + 1;
	if (id > 1 && id == dataLength) return 1;
	if (id == 1) return 2;
	return id;
};
</script>

<template>
	<div class="container">
		<div class="pagination-post d-flex align-items-center border-style border-radius mt-section">
			<div class="pagination-item w-100 p-20">
				<NuxtLink :to="`/blog/${props.data[prev() - 1].slug}`">
					<span class="mb-5">PREVIOUS</span>
					<h4 class="title-block word-wrap ellipsis-1">
						{{ props.data[prev() - 1].title }}
					</h4>
				</NuxtLink>
			</div>
			<div class="icon p-20 border-right border-left">
				<NuxtLink to="/blog/stories" class="h-100 heading-color">
					<font-awesome-icon :icon="['fas','th-large']" />
				</NuxtLink>
			</div>
			<div class="pagination-item w-100 p-20 text-right">
				<NuxtLink :to="`/blog/${props.data[next() - 1].slug}`">
					<span class="mb-5">NEXT</span>
					<h4 class="title-block word-wrap ellipsis-1">
						{{ props.data[next() - 1].title }}
					</h4>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";

.ellipsis-1 {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 1;
	line-clamp: 1;
}

.pagination-post {
	position: relative;

	.pagination-item {
		border: 0;
	}

	a>span {
		letter-spacing: 2px;
	}

	@include media_768() {
		flex-direction: column;

		.icon {
			display: none;
		}

		.pagination-item {
			text-align: left;
			border: 0;

			&:not(.text-right) {
				border-bottom: 1px solid $border-color;
			}

			&.border-left {
				border-top: 1px solid $border-color;

				a {
					display: flex;
					flex-direction: column-reverse;

					>span {
						margin-top: 10px;
						margin-bottom: 0;
					}
				}
			}
		}
	}
}
</style>
