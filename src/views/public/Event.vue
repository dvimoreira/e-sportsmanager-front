<template>
    <div>
        <div id="fixed-banner"></div>
        <div class="event-content">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="info-event">
                            <h1>Torneio de Fifa 2019</h1>
                            <span class="date"><b><i class="icofont-calendar"></i> Data do Evento: </b> 23 de Janeiro de 2020</span>
                            <hr>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra in lectus at tristique. Praesent pellentesque porttitor massa a ullamcorper.
                            Nam viverra, lectus nec pretium iaculis, ante augue blandit mi, semper convallis nunc velit et ex. Proin et ultrices massa, eu semper nisi. Nulla convallis
                            venenatis lorem eu accumsan. Praesent fermentum urna a rutrum maximus. Integer et pulvinar leo, a malesuada diam. Aliquam posuere pulvinar tellus sit amet semper.
                            Phasellus placerat auctor elit vel porta. Donec eu dui massa.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra in lectus at tristique. Praesent pellentesque porttitor massa a ullamcorper.
                            Nam viverra, lectus nec pretium iaculis, ante augue blandit mi, semper convallis nunc velit et ex. Proin et ultrices massa, eu semper nisi. Nulla convallis
                            venenatis lorem eu accumsan. Praesent fermentum urna a rutrum maximus. Integer et pulvinar leo, a malesuada diam. Aliquam posuere pulvinar tellus sit amet semper.
                            Phasellus placerat auctor elit vel porta. Donec eu dui massa.</p>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14285.838138049994!2d-49.09181785!3d-26.47314505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1572528195910!5m2!1spt-BR!2sbr" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                        <div class="widget-tickets">
                            <div class="widget-header">
                                <h2>Inscrição</h2>
                            </div>
                            <div class="widget-body">
                                <div class="lote">
                                    <h3>1º Lote: <span class="date">15/10/2019 até 20/10/2019</span></h3>
                                    <div class="item-lote">
                                        <div class="columns is-vcentered is-gapless">
                                            <div class="column">
                                                <h4>Fifa 19 - Xbox one</h4>
                                                <small>Incluso: Medalha, Camisa e bebida.</small>
                                            </div>
                                            <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd align-right">
                                                <span class="price">R$ 59,90</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item-lote">
                                        <div class="columns is-vcentered is-gapless">
                                            <div class="column">
                                                <h4>Fifa 19 - Xbox one</h4>
                                                <small>Incluso: Medalha, Camisa e bebida.</small>
                                            </div>
                                            <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd align-right">
                                                <span class="price">R$ 59,90</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="lote">
                                    <h3>2º Lote: <span class="date">21/10/2019 até 28/10/2019</span></h3>
                                    <div class="item-lote">
                                        <div class="columns is-vcentered is-gapless">
                                            <div class="column">
                                                <h4>Fifa 19 - Xbox one</h4>
                                                <small>Incluso: Medalha, Camisa e bebida.</small>
                                            </div>
                                            <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd align-right">
                                                <span class="price">R$ 99,90</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item-lote">
                                        <div class="columns is-vcentered is-gapless">
                                            <div class="column">
                                                <h4>Fifa 19 - Xbox one</h4>
                                                <small>Incluso: Medalha, Camisa e bebida.</small>
                                            </div>
                                            <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd align-right">
                                                <span class="price">R$ 99,90</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-footer">
                                <b-button type="is-warning" class="subs-btn">Fazer Inscrição</b-button>
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
        name: 'event',
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

    .event-content {
        background: #040615;
        .info-event {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 5px;
            h1 { color: #FFFFFF; }
            hr { background: #ff7a21; }
            p, a { color: #FFFFFF; }
            .date {
                display: block;
                margin: 0;
                color: #FFFFFF;
                font-size: 18px;
                margin-bottom: 30px;
                b {
                    color: #ff7a21;
                    font-weight: 600;
                }
            }
        }

        .widget-tickets {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 5px;
            .widget-header {
                h2 { color: #FFFFFF; }
            }
            .widget-body {
                .lote {
                    h3 { color: #ff7a21; }
                    .item-lote {
                        border-bottom: 1px solid rgba(255, 255, 255, 0.11);
                        h4 {
                            color: #FFFFFF;
                            text-transform: uppercase;
                        }
                        small {
                            color: #f79351;
                        }
                        .price { color: #ff7a21; }
                    }
                }
            }
            .widget-footer {
                .subs-btn {
                    width: 100%;
                    color: #FFFFFF;
                    text-transform: uppercase;
                    &.is-warning { background: #ff7a21; }
                }
            }
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
                    margin: 0;
                }
                hr {
                    width: 100px;
                    height: 6px;
                    display: block;
                    margin: 0 0 30px 0;
                }
                iframe {
                    width: 100%;
                    height: 400px;
                    display: block;
                    margin-top: 40px;
                }
            }
        }

        .widget-tickets {
            padding: 30px;
            .widget-header {
                h2 {
                    margin: 0 0 25px 0;
                    font-size: 20px;
                    font-weight: 600;
                    text-transform: uppercase;
                }
            }
            .widget-body {
                .lote {
                    h3 {
                        font-size: 14px;
                        font-weight: 600;
                        margin: 0 0 15px 0;
                    }
                    .item-lote {
                        display: block;
                        padding-bottom: 15px;
                        margin-bottom: 15px;
                        h4 {
                            font-size: 13px;
                            font-weight: 400;
                            margin: 0;
                            display: block;
                        }
                        small {
                            font-size: 12px;
                            font-weight: 400;
                            display: block;
                        }
                    }
                }
            }
            .widget-footer {
                .subs-btn {
                    font-size: 16px;
                    font-weight: 400;
                    text-transform: uppercase;
                    height: 40px;
                }
            }
        }
    }
</style>
