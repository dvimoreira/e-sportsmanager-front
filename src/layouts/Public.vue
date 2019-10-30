<template>
    <div>
        <header id="main-navigation">
            <div class="top-bar">
                <div class="container">
                    <div class="columns is-gapless">
                        <div class="column">
                            <p><a href="mailto:suporte@e-sportsmanager.com.br">suporte@e-sportsmanager.com.br</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="navigation">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <ul class="list-navigation">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Eventos</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>

                            <ul class="social-icons">
                                <li><a href="#"><i class="icofont-facebook"></i></a></li>
                                <li><a href="#"><i class="icofont-instagram"></i></a></li>
                                <li><a href="#"><i class="icofont-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <router-view></router-view>

        <footer>          
            <div class="footer-box">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <ul>
                                <li><a href="#">Termos de Uso</a></li>
                                <li><a href="#">Politica de Privacidade</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </div>
                        <div class="column"></div>
                    </div>
                </div>
            </div>
        </footer>
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
    #main-navigation {
        .top-bar {
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            p {
                margin: 0;
                a {
                    color: #FFFFFF;
                    &:hover { text-decoration: underline; }
                }
            }
        }

        .navigation {
            ul {
                padding: 0;
                margin: 0;
                display: inline-block;
                li {
                    display: inline-block;
                    list-style: none;
                    a {
                        display: inline-block;
                        font-weight: 600;
                        text-transform: uppercase;
                        color: #FFFFFF;
                    }
                }
                &.list-navigation li a:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    ul.social-icons {
        li {
            margin-right: 10px;
            &:last-child { margin: 0; }
            a {
                display: block;
                text-align: center;
                background: #000000;
                border-radius: 100%;
                color: #FFFFFF;
            }
        }
    }

    .footer-box {
        background: #040615;
        ul {
            padding: 0;
            margin: 0;
            li {
                a {
                    display: block;
                    color: #FFFFFF;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {}
    @media (min-width: 769px) {}
    @media (min-width: 1200px) {
        #main-navigation {
            position: absolute;
            width: 100%;
            z-index: 9;
            .top-bar {
                text-align: right;
                height: 50px;
                line-height: 50px;
                p {
                    font-size: 14px;
                    font-weight: 600;
                }
            }

            .navigation {
                text-align: right;
                height: 100px;
                line-height: 100px;
                ul {
                    &.list-navigation {
                        margin-right: 80px;
                        li {
                            margin-right: 40px;
                            &:last-child { margin: 0; }
                            a { font-size: 16px; }
                        }
                    }

                }
            }
        }

        ul.social-icons {
            li {
                a {
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 20px;
                }
            }
        }

        .footer-box {
            padding: 50px 0;
            ul {
                li {
                    display: block;
                    list-style: none;
                    margin-bottom: 10px;
                    &:last-child { margin: 0; }
                    a {
                        font-size: 16px;
                    }
                }
            }
        }
    }
</style>
