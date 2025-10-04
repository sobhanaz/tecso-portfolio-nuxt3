<script setup>
const socialData = [
    { link: "",iconType: 'fab',icon: 'facebook-f',name: "Fb" },
    { link: "",iconType: 'fab',icon: 'instagram',name: "In" },
    { link: "",iconType: 'fab',icon: 'twitter',name: "Tw" },
    { link: "",iconType: 'fab',icon: 'linkedin-in',name: "Linkedin" },
];
</script>

<template>
    <div class="social-side d-flex align-items-center flex-column justify-content-center">
        <ul class="socials d-flex flex-column-reverse">
            <li style="--dsn-index-animate" v-for="(item,index) in socialData" :key="index">
                <NuxtLink :href="item.link ? item.link : $route.path" target="_blank">
                    <font-awesome-icon :icon="[item.iconType,item.icon]" />
                    <span>{{ item.name }}</span>
                </NuxtLink>
            </li>
        </ul>
        <div class="icon">FOLLOW US</div>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";

.social-side {
    position: fixed;
    left: 25px;
    bottom: 50px;
    z-index: 10;
    display: flex;
    mix-blend-mode: exclusion;
    color: #fff;
    --heading-color: #fff;
    --border-color: #fff;

    @include media_991 {
        display: none;
    }

    .icon {
        text-align: center;
        width: 30px;
        line-height: 30px;
        cursor: pointer;
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        -webkit-text-orientation: mixed;
        text-orientation: mixed;
        white-space: nowrap;
        letter-spacing: 2px;
        font-weight: 600;
        font-size: 12px;

        &:before {
            content: "";
            position: relative;
            display: inline-block;
            border-left: 1px solid $border-color;
            height: 50px;
            margin-bottom: 10px;
        }
    }
}

.socials {
    text-align: center;
    font-size: 14px;

    li {
        a {
            position: relative;
            margin-bottom: 10px;
            margin-top: 5px;
            color: $heading-color;

            &:after,
            span,
            &:hover i,
            &:hover svg {
                transition: all 0.3s cubic-bezier(0.55, 0.02, 0.1, 0.9);
            }

            &:after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: $heading-color;
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.2);
            }

            svg,
            i {
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            span {
                position: absolute;
                top: 50%;
                left: 50%;
                color: $heading-color;
                font-size: 13px;
                opacity: 0;
                transform-origin: center bottom;
                cursor: pointer;
                transform: translateX(0px) translateY(-50%);
            }

            &:hover {

                svg,
                i {
                    transform: scale(0);
                }

                label {
                    opacity: 1;
                    transform: matrix(1, 0, 0, 1, 12, -8);
                    transition: all 0.6s cubic-bezier(0.75, -0.5, 0, 1.75);
                }

                &:after {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                    transition: all 0.5s cubic-bezier(0.75, -0.5, 0, 1.75);
                    transition-delay: 0.2s;
                }

                span {
                    opacity: 1;
                    transform: translateX(10px) translateY(-50%);
                }
            }
        }
    }
}
</style>
