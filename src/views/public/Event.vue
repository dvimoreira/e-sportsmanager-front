<template>
    <div>
        <div id="fixed-banner"></div>
        <div class="event-content">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="info-event">
                            <h1>Torneio de Fifa 2019</h1>
                            <hr>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra in lectus at tristique. Praesent pellentesque porttitor massa a ullamcorper. 
                            Nam viverra, lectus nec pretium iaculis, ante augue blandit mi, semper convallis nunc velit et ex. Proin et ultrices massa, eu semper nisi. Nulla convallis 
                            venenatis lorem eu accumsan. Praesent fermentum urna a rutrum maximus. Integer et pulvinar leo, a malesuada diam. Aliquam posuere pulvinar tellus sit amet semper. 
                            Phasellus placerat auctor elit vel porta. Donec eu dui massa.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra in lectus at tristique. Praesent pellentesque porttitor massa a ullamcorper. 
                            Nam viverra, lectus nec pretium iaculis, ante augue blandit mi, semper convallis nunc velit et ex. Proin et ultrices massa, eu semper nisi. Nulla convallis 
                            venenatis lorem eu accumsan. Praesent fermentum urna a rutrum maximus. Integer et pulvinar leo, a malesuada diam. Aliquam posuere pulvinar tellus sit amet semper. 
                            Phasellus placerat auctor elit vel porta. Donec eu dui massa.</p>
                        </div>
                    </div>
                    <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                        qqqqqqq
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'event',
        components: {},
        data () {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">
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

    .event-content {
        background: #040615;
        .info-event {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 5px;
            h1 { color: #FFFFFF; }
            hr { background: #ff7a21; }
            p, a { color: #FFFFFF; }
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

        .event-content {
            padding: 70px 0;
            .info-event {
                padding: 30px;
                h1 {
                    font-size: 48px;
                    font-weight: 700;
                    margin: 0 0 5px 0;
                }
                hr {
                    width: 100px;
                    height: 6px;
                    display: block;
                    margin: 0 0 30px 0;
                }
            }
        }
    }
</style>
