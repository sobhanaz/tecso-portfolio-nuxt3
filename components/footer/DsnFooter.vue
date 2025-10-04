<script setup>
import { Animate } from "@/hooks/pluginanimations.js";
import SiteLogo from "@/components/logo/SiteLogo.vue";
import LinkDefualt from "@/components/links/LinkDefualt.vue";
import SvgSeparator from "@/components/svg/SvgSeparator.vue";
const props = defineProps({ light: Boolean,animate: Boolean,animateContent: { type: Boolean,default: true },containerContent: Boolean,});
const footer = ref(null);
const footerContent = ref(null);
const socialData = [
    {
        name: "Fb",
        link: "",
        type: "fab",
        iconName: "facebook-f",
    },
    {
        name: "Tw",
        link: "",
        type: "fab",
        iconName: "twitter",
    },
    {
        name: "In",
        link: "",
        type: "fab",
        iconName: "linkedin-in",
    },
    {
        name: "Ins",
        link: "",
        type: "fab",
        iconName: "instagram",
    },
];
const footerLinks = [
    { link: "/",name: "HOME" },
    { link: "/work/work-classic-2",name: "PORTFOLIO" },
    { link: "/blog/stories",name: "NEWS" },
    { link: "/about-us",name: "ABOUT" },
    { link: "/contact",name: "CONTACT" },
];

onMounted(() => {
    if (!props.animateContent) return;
    new Animate({ start: "top bottom",end: "top " },{ yPercent: -70 },{ yPercent: 0 },footer.value,footerContent.value);
});
</script>

<template>
    <footer ref="footer" id="dsn_footer" :class="['p-relative svg-animate',
        props.light ? 'background-section' : 'background-main',
        props.animate ? 'footer-animate' : ''
    ]">
        <SvgSeparator :light="props.light" />
        <div ref="footerContent"
            :class="['footer-content p-relative mt-section',props.containerContent ? 'container' : null]">
            <div class="container">
                <h2 class="text-center title-h2">
                    LET'S BUILD SOMETHING
                    <span class="d-block"><b><i>AMAZING </i></b>TOGETHER</span>
                </h2>
                <LinkDefualt class="justify-content-center mt-30"
                    :linkClass="props.light ? 'background-main' : 'background-section'"
                    :iconAwesome="['fas','angle-right']" popup linkName="START A PROJECT" linkTo="/contact" parallax />
            </div>
            <div class="dsn-container pt-60">
                <div class="d-grid grid-lg-4 grid-md-2">
                    <div class="grid-col-1">
                        <div class="dsn-logo main-logo">
                            <SiteLogo height="undefined" width="undefined" />
                        </div>
                        <SocialGroup class="mt-20 dsn-icon-heading-color" :data="socialData" />
                    </div>
                    <div class="grid-col-2">
                        <h4 class="subtitle p-relative line-shape line-shape-after">
                            <span class="background-revere">NAVIGATION</span>
                        </h4>
                        <div class="menu-footer-menu-container">
                            <ul id="menu-footer-menu" class="menu">
                                <li v-if="footerLinks.length > 0" class="menu-item" v-for="(item,index) in footerLinks"
                                    :key="index">
                                    <NuxtLink :to="item.link ? item.link : $route.path" class="effect-ajax">{{ item.name
                                        }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="grid-col-3">
                        <h4 class="subtitle p-relative line-shape line-shape-after">
                            <span class="background-revere">CONTACT</span>
                        </h4>
                        <div class="col-contact">
                            <p><strong>T</strong> :&nbsp;+001 225 3351</p>
                            <p class="mt-10"><strong>F</strong> :&nbsp;+001 225 3351</p>
                            <p class="over-hidden mt-10">
                                <strong>E</strong> :
                                <a class="link-hover" href="mailto:info@dsngrid.com">&nbsp;info@dsngrid.com</a>
                            </p>
                        </div>
                    </div>
                    <div class="grid-col-4">
                        <h4 class="subtitle p-relative line-shape line-shape-after">
                            <span class="background-revere">ADDRESS</span>
                        </h4>
                        <div class="col-address">
                            <p>
                                El-Mahalla El-Kubra 37<br />
                                1776 Damietta<br />Egypt
                            </p>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom mt-60 pt-30 border-top pb-30 text-center">
                    <p class="over-hidden">
                        © 2022 Digital Agency Designed by
                        <a href="#0" class="link-hover" target="_blank">DSN Grid</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/fonts";
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";

#dsn_footer {
    overflow: hidden;

    @include media_575X768 {
        .grid-col-1 {
            grid-column: 1 / 4;
        }
    }

    &.container,
    &.dsn-container {

        .container,
        .dsn-container {
            padding-right: 0;
            padding-left: 0;
        }
    }

    h4.subtitle {
        margin-bottom: 20px;
        display: inline-block;

        span {
            padding: 3px 10px;
            font-size: 16px;
            letter-spacing: 2px;
            font-weight: $font-weight-body;
        }
    }

    ul.menu,
    ul.sub-menu {
        li {
            a {
                font-weight: 600;
                font-size: 11px;
                letter-spacing: 2.5px;
            }

            &:not(:last-child) a {
                margin-bottom: 7px;
            }
        }
    }

    .list-inline-block {

        ul.menu li,
        ul.sub-menu li {
            display: inline-block;

            a {
                margin-bottom: 0;
            }

            &:not(:last-of-type) {
                margin-left: 5px;
            }
        }
    }

    .textwidget {

        &>*,
        & p {
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }

    .col-contact {
        p {
            font-size: 14px;

            strong {
                color: $heading-color;
            }

            span {
                margin-right: 5px;
                margin-left: 5px;
            }

            a {
                text-transform: none;
            }
        }
    }
}
</style>