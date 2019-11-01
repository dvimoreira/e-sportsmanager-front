<template>
    <div>
        <div id="fixed-banner"></div>
        <div class="subscription-content">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-10">
                        <div class="info-subscription">
                            <p>sdsdasd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'subscription',
        components: {},
        data () {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">
    .align-left { text-align: left; }
    .align-right { text-align: right; }
    .align-center { text-align: center; }

    #fixed-banner {
        position: relative;
        width: 100%;
        background: url("/img/banner.jpg") no-repeat center;
        background-size: cover;
        &:after {
            content: "";
            background: url("/img/pattern-1.png") no-repeat bottom;
            background-size: cover;
        }
    }

    .subscription-content {
        background: #040615;
        .info-subscription {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 5px;
        }
    }

    @media (max-width: 768px) {}
    @media (min-width: 769px) {}
    @media (min-width: 1200px) {
        #fixed-banner {
            height: 400px;
            &:after {
                width: 100%;
                height: 74px;
                z-index: 9;
                position: absolute;
                bottom: -1px;
            }
        }

        .subscription-content {
            padding: 70px 0;
            .info-subscription {
                padding: 30px;
            }
        }
    }
</style>
