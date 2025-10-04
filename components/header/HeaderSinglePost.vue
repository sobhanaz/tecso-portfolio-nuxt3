<script setup>

import LinkScrollDown from "@/components/links/LinkScrollDown.vue";
const props = defineProps({ data: Object, btnScrollTo: String })
</script>

<template>
    <header id="dsn_header" class="dsn-header-animation  dsn-full-header v-dark-head">
        <div class="entry-header p-relative over-hidden">
            <div id="hero_image"
                class="p-absolute dsn-hero-parallax-img over-hidden before-z-index z-index-1 full-width"
                data-dsn-ajax="img" data-overlay="6">
                <NuxtImg format="webp" :src="props.data.images[0].src" class="cover-bg-img transform-3d " alt="post"
                    data-dsn-position="50% 50%" />
            </div>
            <div id="hero_content" class="d-flex p-relative h-100 dsn-hero-parallax-title align-items-end container">
                <div class="content p-relative ">
                    <div class="intro-project w-100">
                        <div class="intro-title ">
                            <div id="dsn_metas" class="p-relative d-flex justify-content-between ">
                                <div class="metas has-separate p-relative mb-10">
                                    <MetaPost className="mb-10" v-if="props.data.categories"
                                        :category="props.data.categories" separate=" &" />
                                </div>
                            </div>
                            <div id="hero_title">
                                <h1 class="title text-upper" data-dsn-ajax="title">{{ props.data.title }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LinkScrollDown v-if="props.btnScrollTo" :goToEl="props.btnScrollTo" />
    </header>
</template>
