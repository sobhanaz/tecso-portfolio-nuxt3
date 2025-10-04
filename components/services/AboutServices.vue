<script setup>
const props = defineProps({
    data: Array,
    imageSrc: String
})
</script>

<template>
    <div class="box-under-img">
        <div class="img-box-parallax before-z-index dsn-animate dsn-effect-down" data-overlay="0" data-dsn-animate='
            {"trigger":{}, 
            "from":{ "yPercent": "-30", "scale": "1.8" }, 
            "to":{ "yPercent": "20", "scale": "1" }}'>
            <img class="has-bigger-scale cover-bg-img has-direction"
                :src="props.imageSrc" alt="direction" />
        </div>
        <div class="content section-padding h-100 dsn-container d-flex align-items-center">
            <div class="background-main box-padding">
                <h3 class="title-h2 body-font text-upper">
                    <slot name="title" />
                </h3>
                <ul class="d-grid grid-sm-2 mt-30 dsn-list">
                    <li class="list-item grid-item d-flex align-items-center" v-for="(item,index) in props.data"
                        :key="index">
                        <span class="dsn-icon mr-15">
                            <font-awesome-icon :icon="['far','circle']" />
                        </span>
                        <p class="dsn-heading-title" v-if="item.name">{{ item.name }}</p>
                    </li>
                </ul>
                <div class="icon-left dsn-icon-theme-color mt-30">
                    <div class="dsn-service icon-left" data-dsn-iconsize="60px">
                        <div class="service-item p-relative grid-item style-box background-transparent">
                            <div class="service-item-inner number-item h-100 border-style p-20 border-rdu">
                                <div class="dsn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        id="Layer_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50"
                                        xml:space="preserve">
                                        <g>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M25.515,27.051c-0.371-0.159-0.756-0.298-1.117-0.483  c-6.626-3.398-13.254-6.794-19.865-10.221c-0.416-0.215-1.031-0.76-0.972-1.019c0.102-0.446,0.593-0.919,1.04-1.152  c6.651-3.461,13.312-6.904,20.007-10.279c0.516-0.259,1.414-0.177,1.955,0.099c3.589,1.828,7.11,3.788,10.689,5.634  c3.028,1.562,6.114,3.01,9.149,4.558c0.454,0.232,0.77,0.738,1.149,1.116c-0.358,0.331-0.665,0.76-1.082,0.977  c-6.629,3.457-13.272,6.887-19.914,10.319C26.234,26.765,25.895,26.888,25.515,27.051z M44.76,15.372  c-0.513-0.362-0.775-0.596-1.078-0.752c-5.791-2.994-11.577-5.999-17.402-8.927c-0.479-0.24-1.32-0.129-1.835,0.131  c-5.546,2.792-11.063,5.643-16.583,8.488c-0.508,0.262-0.983,0.59-1.696,1.021c6.433,3.309,12.539,6.471,18.68,9.562  c0.432,0.217,1.206,0.052,1.695-0.189c2.922-1.443,5.806-2.963,8.705-4.454C38.347,18.659,41.449,17.07,44.76,15.372z">
                                            </path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                style="--dsn-color-icon: var(--heading-color)"
                                                d="M6.153,25.292c1.245,0.667,2.225,1.209,3.22,1.722  c5.014,2.583,10.02,5.182,15.065,7.701c0.544,0.272,1.446,0.323,1.973,0.059c5.826-2.926,11.61-5.933,17.403-8.924  c0.257-0.133,0.479-0.329,0.912-0.632c-1.152-0.605-2.191-1.057-3.114-1.681c-0.401-0.271-0.563-0.897-0.833-1.363  c0.501-0.038,1.084-0.26,1.489-0.081c1.456,0.645,2.868,1.395,4.266,2.163c1.333,0.732,1.365,1.37,0.078,2.036  c-6.755,3.495-13.519,6.975-20.308,10.403c-0.455,0.229-1.24,0.185-1.71-0.053c-6.743-3.407-13.462-6.859-20.174-10.326  c-1.297-0.67-1.284-1.349,0.015-2.057c1.454-0.792,2.922-1.563,4.431-2.241c0.35-0.157,0.885,0.097,1.334,0.162  c-0.185,0.413-0.256,0.999-0.575,1.206C8.602,24.052,7.487,24.577,6.153,25.292z">
                                            </path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M44.767,35.25c-1.224-0.643-2.298-1.123-3.27-1.759  c-0.362-0.237-0.485-0.838-0.718-1.272c0.493-0.05,1.072-0.29,1.465-0.115c1.51,0.674,2.977,1.452,4.43,2.247  c1.189,0.651,1.184,1.312-0.063,1.957c-6.71,3.476-13.429,6.936-20.176,10.341c-0.502,0.253-1.354,0.251-1.857-0.002  c-6.748-3.402-13.468-6.859-20.181-10.33c-1.246-0.645-1.257-1.307-0.06-1.968c1.496-0.824,3.012-1.618,4.566-2.322  c0.339-0.154,0.877,0.129,1.323,0.211c-0.203,0.407-0.299,0.974-0.627,1.189c-0.968,0.637-2.028,1.135-3.331,1.838  c0.666,0.42,1.023,0.683,1.412,0.884c5.565,2.872,11.125,5.757,16.72,8.57c0.548,0.275,1.453,0.354,1.977,0.091  c5.83-2.921,11.619-5.925,17.416-8.912C44.055,35.763,44.287,35.572,44.767,35.25z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="service-content p-relative">
                                    <h4 class="service_title title-block">
                                        <slot name="smallBoxTitle" />
                                    </h4>
                                    <div class="service_description mt-10 max-w570 dsn-auto">
                                        <slot name="smallBoxDescription" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/mixins/utilities";

.box-under-img {
    position: relative;
    overflow: hidden;

    .content {
        position: absolute;
        top: 0;

        @include media_991(min) {
            width: 50%;
        }

        @include media_768X991() {
            width: 65%;
        }

        @include media_768(min) {
            right: 0;
        }
    }
}
</style>
