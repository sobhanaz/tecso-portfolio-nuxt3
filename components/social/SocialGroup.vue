<script setup>
const props = defineProps({ data: Array })
</script>

<template>
    <ul class="dsn-socials box-social">
        <li v-for="(social,index) in data" :key="index">
            <NuxtLink class="init-color move-circle border-color-default" :to="!social.link ? $route.path : social.link"
                target="_blank" data-dsn="parallax">
                <span class="dsn-icon">
                    <font-awesome-icon :icon="[`${social.type}`,`${social.iconName}`]" />
                </span>
                <span>{{ social.name }}</span>
            </NuxtLink>
        </li>
    </ul>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";

.dsn-socials {
    li {
        display: inline-block;

        &:not(:last-of-type) {
            margin-right: -10px;
        }

        a {
            position: relative;
            width: 60px;
            height: 60px;
            border-width: 1px;
            border-style: solid;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $heading-color;

            a:not(.move-circle) {
                border-color: $border-color;
            }

            .icon-circle {
                z-index: 1;
            }

            &:after,
            span:not(.dsn-icon) {
                position: absolute;
                top: 50%;
                left: 50%;
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.55, 0.02, 0.1, 0.9);
            }

            &:after {
                content: "";
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: $theme-color;
                transform: translate(-50%, -50%) scale(0.2);
            }

            span:not(.dsn-icon) {
                color: $heading-color;
                font-weight: bold;
                font-size: 13px;
                transform-origin: center bottom;
                cursor: pointer;
            }

            svg,
            i {
                transform: scale(1);
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            &:hover {

                svg,
                i {
                    transform: scale(0);
                }

                span:not(.dsn-icon) {
                    opacity: 1;
                    transform: matrix(1, 0, 0, 1, 0, -20);
                    transition: all 0.6s cubic-bezier(0.75, -0.5, 0, 1.75);
                }

                &:after {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                    transition: all 0.5s cubic-bezier(0.75, -0.5, 0, 1.75);
                    transition-delay: 0.2s;
                }
            }
        }

        @include media_991 {
            a {
                width: 50px;
                height: 50px;
            }

            &:not(:last-of-type) {
                margin-right: 5px;
            }
        }
    }

    .elementor-align-right & .dsn-icon {
        margin: inherit;
    }
}
</style>
