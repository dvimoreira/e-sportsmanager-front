<template>
    <div>
        <div class="columns is-gapless">
            <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd">
                <div class="auth-forms">
                    <router-view></router-view>
                </div>
            </div>
            <div class="column is-variable is-12-mobile is-12-tablet is-8-desktop is-8-widescreen is-8-fullhd is-Tablet is-Desktop">
                <div class="banner-fixed"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    .align-left { text-align: left; }
    .align-right { text-align: right; }
    .align-center { text-align: center; }

    .auth-forms {
        background: #040615;
        .input, .taginput .taginput-container.is-focusable, .textarea, .select select {
            background: transparent;
            border: 2px solid #FFFFFF;
            color: #FFFFFF;
            &:focus { box-shadow: none; }
        }

        .select:not(.is-multiple):not(.is-loading)::after { border-color: #FFFFFF; }
        ::-webkit-input-placeholder { color:#FFFFFF; }
        :-moz-placeholder, ::-moz-placeholder, :-ms-input-placeholder { color:#FFFFFF; }
        ::-moz-placeholder, :-ms-input-placeholder { color:#FFFFFF; }
        :-ms-input-placeholder { color:#FFFFFF; }

        h1 {
            color: #FFFFFF;
            text-transform: uppercase;
        }

        a.reset-pass { color: #FFFFFF; }

        .auth-btn {
            color: #FFFFFF;
            text-transform: uppercase;
            &.is-warning { background: #ff7a21; }
            &:hover {
                color: #FFFFFF;
                background: rgba(255, 122, 33, 0.761);
            }
        }

        .other-form {
            margin: 60px 0 0 0;
        }
    }

    @media (max-width: 768px) {}
    @media (min-width: 769px) {}
    @media (min-width: 1200px) {
        .auth-forms {
            padding: 30px;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            h1 {
                font-size: 20px;
                font-weight: 600;
                margin: 0 0 40px 0;
            }
        }

        .banner-fixed {
            background: url('/img/banner.jpg') no-repeat center;
            background-size: cover;
            width: 100%;
            height: 100vh;
            display: block;
        }
    }
</style>
