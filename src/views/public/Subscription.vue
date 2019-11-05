<template>
    <div>
        <div id="fixed-banner"></div>
        <div class="subscription-content">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-10">
                        <div class="info-subscription">
                            <h1><b>Inscrição:</b> Torneio de Fifa 2019</h1>
                            <span class="date"><b><i class="icofont-calendar"></i> Data do Evento: </b> 23 de Janeiro de 2020</span>
                            <span class="location"><b><i class="icofont-google-map"></i> Local do Evento:</b> Presidente Epitácio Pessoa, Nº 465 - Jaraguá do Sul - SC</span>
                        </div>

                        <div class="columns">
                            <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                <div class="info-subscription tickets-card">
                                    <div class="list-tickets">
                                        <span class="date-lote">1º Lote: 21/10/2019 até 28/10/2019</span>
                                        <div class="item-ticket">
                                            <div class="columns is-vcentered">
                                                <div class="column is-variable is-12-mobile is-1-tablet is-1-desktop is-1-widescreen is-1-fullhd align-left">
                                                    <div class="field">
                                                        <b-radio v-model="ticket.value" native-value="default"></b-radio>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <h3>Fifa 19 - Xbox One</h3>
                                                    <small>Incluso: Medalha, Camisa e bebida.</small>
                                                </div>
                                                <div class="column is-2 align-right">
                                                    <span class="price">R$ 99,90</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="item-ticket">
                                            <div class="columns is-vcentered">
                                                <div class="column is-variable is-12-mobile is-1-tablet is-1-desktop is-1-widescreen is-1-fullhd align-left">
                                                    <div class="field">
                                                        <b-radio v-model="ticket.value" native-value="default"></b-radio>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <h3>Fifa 19 - Xbox One</h3>
                                                    <small>Incluso: Medalha, Camisa e bebida.</small>
                                                </div>
                                                <div class="column is-3 align-right">
                                                    <span class="price">R$ 99,90</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="list-tickets">
                                        <span class="date-lote">2º Lote: 22/10/2019 até 28/10/2019</span>
                                        <div class="item-ticket">
                                            <div class="columns is-vcentered">
                                                <div class="column is-variable is-12-mobile is-1-tablet is-1-desktop is-1-widescreen is-1-fullhd align-left">
                                                    <div class="field">
                                                        <b-radio v-model="ticket.value" native-value="default"></b-radio>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <h3>Fifa 19 - Xbox One</h3>
                                                    <small>Incluso: Medalha, Camisa e bebida.</small>
                                                </div>
                                                <div class="column is-2 align-right">
                                                    <span class="price">R$ 99,90</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="item-ticket">
                                            <div class="columns is-vcentered">
                                                <div class="column is-variable is-12-mobile is-1-tablet is-1-desktop is-1-widescreen is-1-fullhd align-left">
                                                    <div class="field">
                                                        <b-radio v-model="ticket.value" native-value="default"></b-radio>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <h3>Fifa 19 - Xbox One</h3>
                                                    <small>Incluso: Medalha, Camisa e bebida.</small>
                                                </div>
                                                <div class="column is-3 align-right">
                                                    <span class="price">R$ 99,90</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                <div class="info-subscription total-card align-center">
                                    <h4>Total do Carrinho</h4>
                                    <span>R$ 99,90</span>
                                </div>

                                <div class="info-subscription payment-options">
                                    <b-tabs type="is-toggle" expanded>
                                        <b-tab-item label="Cartão de Crédito">
                                            <div class="creditcard-tab">
                                                <div class="columns is-multiline">
                                                    <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                                        <b-input class="form-control" v-model="form.creditcard.name" placeholder="Nome do Títular"></b-input>
                                                    </div>

                                                    <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                                        <b-input class="form-control" v-model="form.creditcard.card" placeholder="Número do Cartão"></b-input>
                                                    </div>

                                                    <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd">
                                                        <b-select class="form-control" placeholder="Mês" expanded>
                                                            <option
                                                                v-for="mouth in ccMouth"
                                                                :value="mouth"
                                                                :key="mouth">
                                                                {{ mouth }}
                                                            </option>
                                                        </b-select>
                                                    </div>

                                                    <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd">
                                                        <b-select class="form-control" placeholder="Ano" expanded>
                                                            <option
                                                                v-for="year in ccYear"
                                                                :value="year"
                                                                :key="year">
                                                                {{ year }}
                                                            </option>
                                                        </b-select>
                                                    </div>

                                                    <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd">
                                                        <b-input class="form-control" v-model="form.creditcard.cvv" placeholder="CVV"></b-input>
                                                    </div>

                                                    <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                                        <b-input class="form-control" v-model="form.creditcard.brand" placeholder="Bandeira do cartão"></b-input>
                                                    </div>

                                                    <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                                        <b-input class="form-control" v-model="form.creditcard.cpf" placeholder="CPF"></b-input>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-tab-item>
                                        <b-tab-item label="Boleto"></b-tab-item>
                                    </b-tabs>
                                </div>

                                <div class="align-right">
                                    <b-button type="is-warning" class="finish-btn">Finalizar</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODAL AUTHENTICATION -->
        <b-modal :active.sync="isComponentModalActive" has-modal-card trap-focus aria-role="dialog" aria-modal :width="650" :can-cancel="false">
            <div class="modal-card" style="width: auto">
                <section class="modal-card-body">
                    <b-tabs type="is-toggle" expanded>
                        <b-tab-item label="Login">
                            <div class="columns is-multiline is-vcentered">
                                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                                    <b-input class="form-control" v-model="form.auth.email" placeholder="E-mail"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                                    <b-input type="password"  class="form-control" v-model="form.auth.password" placeholder="Senha"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                    <a href="#" class="reset-pass">Esqueci minha senha</a>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd align-right">
                                    <b-button type="is-warning" class="auth-btn">Login</b-button>
                                </div>
                            </div>
                        </b-tab-item>

                        <b-tab-item label="Cadastro" v-on:click="showAuthForm('register')">
                            <div class="columns is-multiline is-vcentered">
                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                    <b-input class="form-control" v-model="form.auth.name" placeholder="Nome Completo"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                    <b-input class="form-control" v-model="form.auth.email" placeholder="E-mail"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                    <b-input class="form-control" v-model="form.auth.phone" placeholder="Celular"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                    <b-input class="form-control" v-model="form.auth.dt_birth" placeholder="Data de Nascimento"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                    <b-input class="form-control" v-model="form.auth.cpf" placeholder="CPF"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                    <b-input class="form-control" v-model="form.auth.gender" placeholder="Sexo"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                    <b-input class="form-control" v-model="form.auth.cep" placeholder="CEP"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                    <b-input class="form-control" v-model="form.auth.district" placeholder="Rua"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                    <b-input class="form-control" v-model="form.auth.state" placeholder="Estado"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                                    <b-input class="form-control" v-model="form.auth.city" placeholder="Cidade"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                                    <b-input class="form-control" v-model="form.auth.complement" placeholder="Complemento"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                                    <b-input type="password"  class="form-control" v-model="form.auth.password" placeholder="Senha"></b-input>
                                </div>

                                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd align-right">
                                    <b-button type="is-warning" class="auth-btn">Cadastrar</b-button>
                                </div>
                            </div>
                        </b-tab-item>
                    </b-tabs>
                </section>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'subscription',
        components: {},
        data () {
            return {
                isComponentModalActive: false,
                authOpc: 'login',
                ticket: {
                    value: {}
                },
                form: {
                    creditcard: {},
                    auth: {}
                }
            }
        },
        computed: {
            ccMouth () {
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            },

            ccYear () {
                let getYear = new Date().getFullYear()
                let yearArray = []

                for (let index = 0; index < 10; index++) {
                    let year = getYear + index
                    yearArray.push(year)
                }

                return yearArray
            }
        },
        methods: {
            showAuthForm (form) {
                console.log(form)
            }
        }
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

    .tabs.is-toggle li.is-active a {
        background-color: #ff7a21;
        border-color: #ff7a21;
    }
    .tabs.is-toggle a {
        border-color: #ff7a21;
        color: #FFFFFF;
        &:hover {
            border-color: rgba(255, 122, 33, 0.549);
            background: rgba(255, 122, 33, 0.549);
        }
    }
    .b-tabs {
        margin-bottom: 0 !important;
        .tabs { margin-bottom: 30px; }
        .tab-content { padding: 0; }
    }

    .subscription-content {
        background: #040615;
        .info-subscription {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 5px;
            margin-bottom: 30px;
            h1 { color: #FFFFFF; }
            hr { background: #ff7a21; }
            p, a { color: #FFFFFF; }
            .date, .location {
                display: block;
                margin: 5px 0;
                color: #FFFFFF;
                font-size: 18px;
                b {
                    color: #ff7a21;
                    font-weight: 600;
                }
            }
            &.tickets-card {
                .date-lote {
                    display: block;
                    color: #ff7a21;
                    text-transform: uppercase;
                }
                .item-ticket {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.11);
                    h3 {
                        color: #FFFFFF;
                        text-transform: uppercase;
                    }
                    small {
                        color: #f79351;
                    }
                    .price { color: #ff7a21; }
                    .b-radio.radio input[type=radio]:checked + .check, .b-radio.radio:hover { border-color: #ff7a21; }
                    .b-radio.radio input[type=radio] + .check:before { background: #ff7a21; }
                }
            }
            &.payment-options {
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
            }
            &.total-card {
                color: #ff7a21;
            }
        }

        .finish-btn {
            color: #FFFFFF;
            text-transform: uppercase;
            &.is-warning { background: #ff7a21; }
            &:hover {
                color: #FFFFFF;
                background: rgba(255, 122, 33, 0.761);
            }
        }
    }

    .modal-card {
        .modal-card-body {
            background: #040615;
            border-radius: 5px;
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
                h1 {
                    font-size: 30px;
                    font-weight: 700;
                    margin: 0;
                }
                hr {
                    width: 100px;
                    height: 6px;
                    display: block;
                    margin: 0 0 30px 0;
                }
                &.tickets-card {
                    .date-lote {
                        margin: 0 0 25px 0;
                        font-size: 16px;
                        font-weight: 600;
                    }
                    .item-ticket {
                        display: block;
                        padding-bottom: 15px;
                        margin-bottom: 15px;
                        h3 {
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
                &.total-card {
                    h4 {
                        font-size: 16px;
                        font-weight: 600;
                        text-transform: uppercase;
                        margin: 0 0 15px 0;
                    }
                    span {
                        font-size: 26px;
                        font-weight: 600;
                        margin: 0;
                    }
                }
            }

            .finish-btn {
                font-size: 16px;
                font-weight: 400;
                text-transform: uppercase;
                height: 40px;
            }
        }

        .modal-card {
            .modal-card-body {
                padding: 30px;
            }
        }
    }
</style>
