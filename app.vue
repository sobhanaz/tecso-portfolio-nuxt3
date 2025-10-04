<template>
  <NuxtLayout>
    <LoadingPage glitchLogo />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import LoadingPage from "@/components/layout/loading/LoadingPage.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { register } from 'swiper/element/bundle';
gsap.registerPlugin(ScrollTrigger);
register();
</Script>