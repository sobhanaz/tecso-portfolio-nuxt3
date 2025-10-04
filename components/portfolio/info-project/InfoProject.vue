<script setup></script>

<template>
    <div class="info-project container text-center section-margin">
        <slot name="about" />
        <ul class="intro-project-list mt-30 d-grid grid-md-3 text-sm-left ">
            <slot />
        </ul>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/variables-site/colors";
@import "@/assets/styles/mixins/utilities";

ul.intro-project-list {
    list-style: none;
  
    li {
      margin-bottom: 0;
  
      .list-with-number & {
        @include media_991(min) {
          padding-left: 60px;
        }
        @include media_991() {
          padding-left: 30px;
        }
      }
  
      .title-list-project {
        letter-spacing: 3px;
      }
  
      h5.title-list-project + p.description-list-project {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid $border-color;
      }
    }
  
    .list-with-number & .number-item:before {
      left: 0;
      top: 0;
    }
  }
</style>
