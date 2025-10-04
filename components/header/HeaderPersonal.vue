<script setup>
import LinkAngle from "@/components/links/LinkAngle.vue";
const props = defineProps({ data: Object })
</script>

<template>
    <header class="p-relative header-personal d-grid grid-md-2 d-grid-no-space">
        <div class="p-relative box-img ">
            <div class="img-box-parallax before-z-index " data-dsn-grid="move-up" data-overlay="4"
                data-dsn-animate='{"trigger":{"start":"top"}, "from":{ "yPercent": "0" }, "to":{ "yPercent": "20" }}'>
                <NuxtImg format="webp" :src="props.data.images[0].src" class=" cover-bg-img has-direction"
                    :alt='props.data.images[0].name' />
            </div>
            <SocialGroup :data="props.data.social" />
        </div>
        <div class="box-content box-padding d-flex align-items-center" style="z-index:9">
            <div class="box-content-inner">
                <h1 class="title text-upper">
                    <span class="letter-stroke d-block">{{ props.data.subtitle }}</span>
                    <span class="p-10 background-theme heading-color">{{ props.data.name }}</span>
                </h1>
                <h6 class="sm-title-block mt-30 text-upper">{{ props.data.about[0] }}</h6>
                <p class="sm-title-block border-top border-bottom mt-20 pt-20 pb-20 max-w570">
                    {{ props.data.about[1] }}
                </p>
                <LinkAngle classColor="section" linkName="About Me" linkTo="/about-us" />
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import "@/assets/styles/mixins/utilities";

.header-personal {
    .title .p-10 {
        @include media_991(min) {
            font-size: 90px;
            line-height: 90px;
            letter-spacing: 2.5px;
        }

        @include media_991() {
            font-size: 50px;
            line-height: 50px;
            letter-spacing: 2px;
        }
    }

    .dsn-socials {
        position: absolute;
        right: 20px;
        bottom: 20px;
        --dsn-icon-size: 14px;
        z-index: 2;
    }

    .box-content {
        position: relative;
        z-index: 1;

        .title span:last-child {
            @include media_768(min) {
                margin-left: -140px;
            }
        }
    }
}
</style>
