<script setup>
const props = defineProps({ imageSrc: String,});
</script>

<template>
    <div class="container  section-margin">
        <div class="d-grid grid-lg-2 d-grid-no-space">
            <div class="left-box-image mb-section">
                <div class="box-img w-100" data-dsn-animate='{
                        "trigger":{"scrub":"0","start":"-80%","end":"100%"},
                        "from":{},
                        "to":{"y":"120"},
                        "responsive":["desktop"]}'>
                    <div class="img-box-parallax h-v-80 before-z-index w-100" data-overlay="1">
                        <NuxtImg format="webp" class="cover-bg-img" :src="imageSrc" alt="" />
                    </div>
                </div>
            </div>
            <div class="box-info background-section p-80 mt-section">
                <slot name="title" />
                <p class="mt-20">
                    <slot name="string" />
                </p>
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/structure";
@import "@/assets/styles/mixins/utilities";

.left-box-image {
    position: relative;

    @include media_991(min) {

        .box-img,
        .img-box-parallax {
            position: absolute;
            height: 100%;
            left: 0;
            top: 0;
        }
    }
}

@include media_991() {
	.left-box-image.mb-section,
	.box-info.mt-section {
		--margin-padding: 0;
	}

	.box-info.p-80 {
		padding: $box-padding;
	}
}
</style>
