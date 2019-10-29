<template>
    <div>
        <div id="main-navigation">
            <div class="top-bar">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <p><a href="mailto:suporte@e-sportsmanager.com.br">suporte@e-sportsmanager.com.br</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
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
    @media (max-width: 768px) {}
    @media (min-width: 769px) {}
    @media (min-width: 1200px) {
        #main-navigation {
            .top-bar {
                text-align: right;
            }
        }
    }
</style>
