<script setup>
import Skills from "@/components/skills/Skills.vue";
import SkillCircleBar from "@/components/skills/SkillCircleBar.vue";
const props = defineProps({ data: Object,subTitle: String,title: String });
</script>

<template>
	<div class="about-personal container section-margin">
		<div class="box-content pt-section">
			<div class="box-content-inner background-section">
				<div class="section-title d-flex">
					<div class="sub-section-title">
						<p class="description d-inline-block p-relative mb-10">
							{{ subTitle }}
						</p>
						<h2 class="title-h2 p-10 background-theme">
							{{ title }}
						</h2>
					</div>
				</div>
				<p class="max-w750 mt-30">
					{{ data.about[2] }}
				</p>
				<Skills class="d-grid grid-sm-3 mt-30 dsn-skills">
					<SkillCircleBar bgColor="background-theme" v-for="(skill,index) in data.skills"
						:number="skill.Percentage">{{ skill.skill }}</SkillCircleBar>
				</Skills>
			</div>
		</div>
		<div class="box-img p-relative">
			<div class="img-box-parallax before-z-index" data-dsn="parallax" data-overlay="0">
				<NuxtImg format="webp" :src="props.data.images[1].src" class="cover-bg-img" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/assets/styles/mixins/utilities";

.about-personal {
	position: relative;

	.box-content-inner {
		padding: 60px 40px;
	}

	@include media_991(min) {
		display: flex;

		.box-img {
			flex: 0 0 45%;
			max-width: 45%;
			width: 45%;

			.img-box-parallax {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}

		.box-content {
			flex: 0 0 55%;
			max-width: 55%;
			width: 55%;
		}
	}

	@include media_991() {
		.box-content {
			padding: 0;
		}

		.img-box-parallax,
		img {
			max-height: 70vh;
		}
	}
}
</style>
