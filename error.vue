<script setup>
import { store } from "@/store/store";
import { runOnLoad } from "@/hooks/plugin.js";
import { runAnimationOnLoad } from "@/hooks/pluginanimations.js";
import BlackMenu from "@/components/menu/BlackMenu.vue";
import LinkDefualt from "@/components/links/LinkDefualt.vue";

defineProps(['error'])
const handleClearError = () => clearError({ redirect: error.data.redirectLink ? error.data.redirectLink : '/' })
const handleContactClearError = () => clearError({ redirect: '/contact' })

onMounted(() => {
    // runOnLoad();
    // runAnimationOnLoad();
})
</script>

<template>
    <div id="__dsn_error" :class="['dsn_error',store.colorPage]">
        <BlackMenu hamburger />
        <div class="vh-100">
            <h1 class="mb-10">{{ error.statusCode }}</h1>
            <p class="mb-20" v-if="error.message"</p>
            <!-- <p class="mb-20" v-if="error.data.msg">{{ error.data.msg ? error.data.msg : null }}</p> -->
            <h2 class="mb-20">{{ error ? error.message : 'Sorry, this page does not exist' }}</h2>
            <div class="contain-btns">
                <!-- <LinkDefualt class="justify-content-center mt-30 " linkClass="background-section"
                    :iconAwesome="['fas', 'angle-right']" :linkName="error.data.linkName ? error.data.linkName : 'Home'"
                    @click.prevent="handleClearError()"
                    :linkTo="error.data.redirectLink ? error.data.redirectLink : '/'" parallax />
                <LinkDefualt class="justify-content-center mt-30 " linkClass="background-section"
                    :iconAwesome="['fas', 'angle-right']" linkName="Contact" linkTo="/contact"
                    @click.prevent="handleContactClearError()" parallax /> -->
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.dsn_error {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 15vh;
        white-space: pre-line;
    }
}

.contain-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>