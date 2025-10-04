<script setup>
import LinkScrollDown from "@/components/links/LinkScrollDown.vue";
const props = defineProps({ imageSrc: String, btnScrollTo: String });
</script>

<template>
    <header id="dsn_header" class="dsn-header-animation dsn-container section-padding v-dark-head">
        <div class="entry-header p-relative over-hidden">
            <div id="hero_image" class="p-absolute dsn-hero-parallax-img over-hidden" data-overlay="1"
                data-dsn-animate='{"trigger":{"start":"top"}, "from":{ "yPercent": "0" }, "to":{ "yPercent": "20" }}'>
                <ClientOnly>
                    <NuxtImg v-if="props.imageSrc" :src="props.imageSrc" format="webp" alt="image" class="cover-bg-img transform-3d" />
                </ClientOnly>
            </div>
            <div id="hero_content" class="d-flex p-relative h-100 dsn-hero-parallax-title container align-items-end">
                <div class="content p-relative "
                    data-dsn-animate='{"trigger":{"start":"top 30%"}, "from":{ "yPercent": "0","opacity": "1" }, "to":{"yPercent": "-20", "opacity": "0" }}'>
                    <div class="intro-project w-100">
                        <div class="intro-title ">
                            <div id="hero_title">
                                <h1 class="title" data-dsn-ajax="title">
                                    <slot name="title" />
                                </h1>
                            </div>
                            <p class="subtitle-meta metas p-relative mt-10 max-w570">
                                <slot name="description" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LinkScrollDown v-if="props.btnScrollTo" :goToEl="props.btnScrollTo" />
    </header>
</template>

