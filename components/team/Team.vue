<script setup>
const props = defineProps({ data: Array,grid: String });
</script>

<template>
    <div class="dsn-container over-hidden background-section section-padding">
        <slot name="title" />
        <div :class="['d-grid dsn-team',props.grid]">
            <div class="team-item p-relative grid-item box-hover-image" v-for="(member,index) in props.data"
                :key="index">
                <div class="team-item-inner background-main">
                    <div class="avatar box-img" data-overlay="4">
                        <NuxtImg format="webp" class="cover-bg-img" :src="member.imageSrc" alt="" />
                    </div>
                    <div class="team-content border-before text-center">
                        <h4 class="text-name sm-title-block">{{ member.name }}</h4>
                        <span class="text-position">{{ member.job }}</span>
                        <SocialGroup class="team-socials" :data="member.social" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";

.dsn-team {
    .team-item-inner {
        .box-img {
            position: relative;
            height: 450px;
            max-height: 450px;
            overflow: hidden;

            &:before {
                z-index: 1;
            }

            img {
                transition: transform 0.8s cubic-bezier(0.24, 0.87, 0.24, 0.89);
            }
        }

        .team-content {
            position: relative;
            margin-top: -58px;
            width: 100%;
            backdrop-filter: blur(8px);
            border: 1px solid $border-color;
            padding: 30px;
            z-index: 2;
        }

        .text-name+.text-position {
            margin-top: 10px;
        }

        .text-position,
        .text-name {
            transition: transform cubic-bezier(0.4, 0, 0.2, 1) 0.3s,
                opacity cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }

        .text-position {
            font-weight: 400;
            transform: translateY(0);
        }

        .team-socials {
            list-style: none;
            position: absolute;
            width: 100%;
            left: 0;
            opacity: 0;
            transform: translateY(-25px);

            &,
            li a {
                transition: transform cubic-bezier(0.4, 0, 0.2, 1) 0.5s,
                    opacity cubic-bezier(0.4, 0, 0.2, 1) 1s;
            }

            li {
                a {
                    position: relative;
                    width: 50px;
                    height: 50px;

                    &:hover {
                        border: 0;
                    }
                }
            }
        }

        &:hover {
            img {
                transform: scale(1.2);
            }

            .text-name {
                transform: translateY(-10px);
            }

            .text-position {
                transform: translateY(-25px);
                opacity: 0;
            }

            .team-socials {
                opacity: 1;
                transform: translateY(-32px);
            }
        }
    }
}
</style>
