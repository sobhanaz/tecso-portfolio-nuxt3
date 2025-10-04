<script setup>
import DsnMap from '@/components/contact/DsnMap.vue';
import DsnFooter from '@/components/footer/DsnFooter.vue';
</script>

<template>

    <Head>
        <Title>Contact</Title>
    </Head>

    <Layout>
        <!-- ========== Header Normal=============== -->
        <HeaderNormal contentClass="container" subTitle="" :linkTo="$route.path" linkName="See More Works">
            <template v-slot:title>
                Look around you<br> everything is changing.
            </template>
            <template v-slot:string>
                What if the time has come for you to change? Starting a collaboration is easy! Order a
                free consultation or call back. We are always in touch and happy to cooperate with you
            </template>
        </HeaderNormal>
        <!-- ========== End Header Normal ========== -->

        <!-- ========== Contact  =================== -->
        <contactForm>
            <template v-slot:form_title>IF YOU HAVE QUESTIONS PLEASE <br>CONTACT US</template>
            <template v-slot:address_title>Head Office:</template>
            <template v-slot:address>El-Mahalla El-Kubra37<br>1776 Damietta Egypt</template>
            <template v-slot:phones_title>Phones:</template>
            <template v-slot:phones>
                <NuxtLink to="tel:+1850344066">+1 (850) 344 066</NuxtLink>
            </template>
            <template v-slot:email_title>Write Us:</template>
            <template v-slot:email>
                <NuxtLink to="mailto:info@dsngrid.com">info@dsngrid.com</NuxtLink>
            </template>
        </contactForm>
        <!-- ========== End Contact  =============== -->

        <!-- ========== Map  ======================= -->
        <DsnMap mapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg" :zoom="10" height="80vh"
            :defaultCenter="{ lat: 30.0489206, lng: 31.258553 }" />
        <!-- ========== End Map  =================== -->

        <!-- ========== Footer ===================== -->
        <DsnFooter :animateContent="false" />
        <!-- ========== End Footer ================= -->

    </Layout>
</template>
