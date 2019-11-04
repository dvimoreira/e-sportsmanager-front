<template>
    <div>
        <div id="fixed-banner">
            <div class="content-banner">
                <h1>A <b>MELHOR</b> PLATAFORMA DE INSCRIÇÕES PARA EVENTOS DE E-SPORTS</h1>
            </div>
        </div>

        <div id="event-list">
            <div class="container">
                <div class="title-box">
                    <h2>Eventos e-Sports</h2>
                    <hr>
                </div>

                <div class="columns is-multiline is-desktop">
                    <div class="column is-4">
                        <div class="item-event">
                            <img src="/img/thumb.jpg">
                            <div class="content-event">
                                <span class="date">28 out 19</span>
                                <h3><a href="#">Esports Games this wheekend</a></h3>
                            </div>
                        </div>
                    </div>

                    <div class="column is-4">
                        <div class="item-event">
                            <img src="/img/thumb.jpg">
                            <div class="content-event">
                                <span class="date">28 out 19</span>
                                <h3><a href="#">Esports Games this wheekend</a></h3>
                            </div>
                        </div>
                    </div>

                    <div class="column is-4">
                        <div class="item-event">
                            <img src="/img/thumb.jpg">
                            <div class="content-event">
                                <span class="date">28 out 19</span>
                                <h3><a href="#">Esports Games this wheekend</a></h3>
                            </div>
                        </div>
                    </div>

                    <div class="column is-4">
                        <div class="item-event">
                            <img src="/img/thumb.jpg">
                            <div class="content-event">
                                <span class="date">28 out 19</span>
                                <h3><a href="#">Esports Games this wheekend</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data () {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">
    #fixed-banner {
        background: url("/img/banner.jpg") no-repeat center;
        &:after {
            content: "";
            background: url("/img/pattern-1.png") no-repeat bottom;
        }
        .content-banner {
            h1 {
                margin: 0;
                b { color: #ff7a21; }
            }
        }
    }

    #event-list {
        background: #040615;
        .title-box {
            h2 { color: #FFFFFF; }
            hr { background: #ff7a21; }
        }

        .item-event {
            position: relative;
            .content-event {
                position: absolute;
                bottom: 0;
                padding: 25px;
                width: 100%;
                .date {
                    background: #ff7a21;
                    padding: 5px 10px;
                    color: #FFFFFF;
                    display: inline-block;
                    text-transform: uppercase;
                    font-weight: 600;
                }
                h3 {
                    margin: 10px 0 0 0;
                    a {
                        display: block;
                        color: #FFFFFF;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {}
    @media (min-width: 769px) {}
    @media (min-width: 1200px) {
        #fixed-banner {
            position: relative;
            width: 100%;
            height: 100vh;
            &:after {
                width: 100%;
                height: 74px;
                z-index: 9;
                position: absolute;
                bottom: -1px;
            }
            .content-banner {
                width: 850px;
                height: 100%;
                display:flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                h1 {
                    font-size: 60px;
                    font-weight: 300;
                    color: #FFFFFF;
                    text-align: center;
                    b { font-weight: 700; }
                }
            }
        }

        #event-list {
            padding: 70px 0;
            .title-box {
                text-align: center;
                margin-bottom: 70px;
                h2 {
                    font-size: 48px;
                    font-weight: 700;
                    margin: 0 0 20px 0;
                }
                hr {
                    width: 100px;
                    height: 6px;
                    display: block;
                    margin: 0 auto;
                }
            }

            .item-event {
                img {
                    width: 100%;
                    display: block;
                }
                h3 a {
                    font-size: 24px;
                    font-weight: 900;
                    line-height: 25px;
                    text-transform: uppercase;
                }
            }
        }
    }
</style>
