<script setup>
const props = defineProps({ data: Object });
</script>

<template>
	<div class="root-blog">
		<div class="container">
			<div class="dsn-posts">
				<div class="news-content mt-section">
					<div class="news-content-inner">
						<div class="post-content">
							<p v-if="props.data.strings[0]" v-html="props.data.strings[0]" />
							<blockquote class="wp-block-quote" v-for="(blockquote,index) in props.data.blockquote"
								:key="index">
								<p>
									<strong><em>{{ blockquote }}</em></strong>
								</p>
							</blockquote>

							<p v-if="props.data.strings[1]" v-html="props.data.strings[1]" />

							<NuxtImg format="webp" class="w-100" :src="props.data.images[1].src" alt="post-image" />

							<p v-if="props.data.strings[2]" v-html="props.data.strings[2]" />

							<div class="post-tags p-relative">
								<NuxtLink :to="$route.path" class="fz-16" v-for="(tag,index) in props.data.tags"
									:key="index">
									<span class="post_tag post_tag">{{ tag }}</span>
								</NuxtLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/fonts";
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/mixins-master";
@import "@/assets/styles/mixins/utilities";
@import "./blog_style/blog";

.news-content {
	position: relative;
	overflow: hidden;

	.post-content {
		position: relative;
		display: block;

		>* {
			margin-bottom: 30px;
		}

		>*:first-child,
		&:first-child {
			margin-top: 0;
		}

		>*:last-child,
		&:last-child {
			margin-bottom: 0;
		}

		p {
			letter-spacing: -0.6px;

			a {
				display: inline-block;
			}
		}

		blockquote {
			font-size: 20px;
			font-family: serif;
			color: $heading-color;
			font-style: italic;
			padding: 10px 0 10px 15px;
			border-left: 1px solid $border-color;
		}

		a {
			position: relative;
			text-decoration: none;
			transition: color 670ms linear 417ms;

			&:before {
				content: "";
				position: absolute;
				bottom: 0;
				height: 45%;
				left: -0.15em;
				right: -0.15em;
				background: rgba(82, 83, 85, 0.19);
				background-size: 100% 100%;
				transition: 380ms transform cubic-bezier(0.165, 0.84, 0.44, 1);
				transform-origin: 50% 100%;
				transform: scale(0.98, 0) translateZ(0);
				-webkit-backface-visibility: hidden;
				backface-visibility: hidden;
				z-index: -1;
				background-repeat: repeat-x;
			}

			&:after {
				content: "";
				position: absolute;
				bottom: 0;
				height: 1px;
				left: -0.025em;
				right: -0.075em;
				background: rgba(82, 83, 85, 0.19);
				background-size: 100% 100%;
				transition:
					190ms opacity cubic-bezier(0.895, 0.03, 0.685, 0.22),
					background 670ms linear 417ms;
				transform: translateZ(0);
			}

			&:hover {
				&:before {
					transform: scale(1, 0.99999999) translateZ(0);
				}

				&:after {
					opacity: 0;
					transition: 126.66666667ms opacity cubic-bezier(0.165, 0.84, 0.44, 1);
				}
			}
		}
	}

	.post-tags {
		position: relative;
		display: flex;
		align-items: center;
		padding: 50px 0 0;

		@include media_768 {
			padding: 30px 0 0;
		}

		a {
			color: $heading-color;
			margin-right: 30px;
			display: inline-block;
			line-height: 1;
			float: left;

			&:before {
				content: "#";
				position: relative;
				margin-right: 5px;
				font-size: 14px;
				background-color: transparent;
				border: 0;
			}

			&::after {
				display: none;
			}
		}
	}
}
</style>
