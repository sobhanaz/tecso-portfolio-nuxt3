<script setup>
import PostCommentsForm from "@/components/blog/PostCommentsForm.vue"
const props = defineProps({ data: Object })
</script>

<template>
    <div class="container">
        <div class="comments-post section-margin">
            <div class="comments-area section-margin">
                <div class="comments-title">
                    <h4 class="title-block line-shap line-shap-before">
                        <span v-if="props.data.comments.length > 0" class="line-bg-right">Comments</span>
                        <span v-else class="line-bg-right">No Comments</span>
                    </h4>
                </div>
                <ol class="comment-list">
                    <li class="comment" v-for="(comment,index) in props.data.comments" :key="index">
                        <div class="comment-body">
                            <div class="comment-author">
                                <NuxtImg format="webp" :src="comment.imageSrc" alt="comment" />
                            </div>
                            <div class="comment-text">
                                <div class="comment-info">
                                    <h6 class="comment-name">{{ comment.name }}</h6>
                                </div>
                                <div class="comment-date">{{ comment.date }}</div>
                                <div class="text-holder">
                                    <p>{{ comment.subject }}</p>
                                </div>
                                <button class="comment-reply-link">
                                    <font-awesome-icon :icon="['fas','reply']" />
                                    reply
                                </button>
                            </div>
                        </div>
                        <ul class="children" v-for="(children,index) in props.data.comments[index].children"
                            :key="index">
                            <li class="comment">
                                <div class="comment-body">
                                    <div class="comment-author">
                                        <NuxtImg format="webp" :src="children.imageSrc" alt="comment" />
                                    </div>
                                    <div class="comment-text">
                                        <div class="comment-info">
                                            <h6 class="comment-name">{{ children.name }}</h6>
                                        </div>
                                        <div class="comment-date">{{ children.date }}</div>
                                        <div class="text-holder">
                                            <p>{{ children.subject }}</p>
                                        </div>
                                        <button class="comment-reply-link">
                                            <font-awesome-icon :icon="['fas','reply']" />
                                            reply
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
            <PostCommentsForm>
                <div class="comments-title">
                    <h4 class="title-block line-shap line-shap-before">
                        <span class="line-bg-right">Leave A Comment</span>
                    </h4>
                </div>
            </PostCommentsForm>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/structure";
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";

.comments-post {
    position: relative;
    width: 100%;
    vertical-align: middle;
    box-sizing: border-box;

    .comments-title {
        margin-bottom: 70px;

        @include media_991 {
            margin-bottom: 35px;
        }

        .subtitle {
            margin-bottom: 0;
        }
    }

    .comments-area {
        position: relative;

        .comment-list {
            >li.comment:first-child {
                margin-top: 0;

                >.comment-body {
                    padding-top: 0;
                }
            }
        }

        .comment {
            list-style: none;
            margin-top: 20px;

            .comment-body {
                position: relative;
                padding-top: 30px;

                .comment-author {
                    position: relative;
                    top: 10px;
                    left: 0;
                    width: 64px;
                    height: 64px;
                    display: block;
                    float: left;

                    @include media_575 {
                        width: 30px;
                        height: 30px;
                    }

                    img {
                        display: block;
                        height: auto;
                        max-width: 100%;
                        border-radius: 50%;
                    }
                }

                .comment-text {
                    padding: 0 0 0 90px;
                    min-height: 64px;

                    @include media_575 {
                        padding: 0 0 0 40px;
                    }

                    .comment-date {
                        font-size: 13px;
                        color: $body-color;
                        margin-top: 5px;

                        &:before {
                            content: "/";
                            display: inline-block;
                            margin-right: 5px;
                        }
                    }

                    .comment-info {
                        position: relative;
                        display: inline-block;

                        .comment-name {
                            float: left;
                            margin: 0;
                            font-weight: 700;
                            font-size: 17px;
                        }
                    }

                    .text-holder {
                        p {
                            margin: 7px 0 10px;
                        }
                    }

                    .comment-reply-link {
                        position: relative;
                        text-decoration: none;
                        transition: color 200ms linear 417ms;
                        font-weight: 700;
                        font-size: 15px;
                        line-height: 20px;
                        text-transform: uppercase;
                        color: $heading-color;
                        cursor: pointer;

                        &:before {
                            content: "";
                            position: absolute;
                            bottom: 0;
                            height: 45%;
                            left: -0.15em;
                            right: -0.15em;
                            background: rgba(82, 83, 85, 1);
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
                            background: rgba(82, 83, 85, 1);
                            background-size: 100% 100%;
                            transition: 190ms opacity cubic-bezier(0.895, 0.03, 0.685, 0.22), background 670ms linear 417ms;
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
            }

            .children {
                margin-left: 90px;

                @include media_575 {
                    margin-left: 40px;
                }

                @include media_400 {
                    margin-left: 20px;
                }
            }
        }
    }

    .comments-form {
        position: relative;
        width: 100%;
        margin-top: $margin-padding;
    }
}
</style>
