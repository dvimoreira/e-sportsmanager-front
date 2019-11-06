<template>
    <div style="width: 100%;">
        <div class="align-center">
            <h1>Fazer Cadastro</h1>
        </div>

        <div class="columns is-centered is-vcentered">
            <div class="column is-variable is-12-mobile is-12-tablet is-8-desktop is-8-widescreen is-8-fullhd">
                <div class="login-form">
                    <div class="columns is-multiline">
                        <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                            <b-input class="form-control" v-model="form.name" placeholder="Nome Completo"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                            <b-input class="form-control" v-model="form.email" placeholder="E-mail"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                            <b-input class="form-control" v-model="form.phone" placeholder="Celular"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                            <b-input class="form-control" v-model="form.dt_birth" placeholder="Data de Nascimento"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                            <b-input class="form-control" v-model="form.cpf" placeholder="CPF"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                            <b-input class="form-control" v-model="form.gender" placeholder="Sexo"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                            <b-input class="form-control" v-model="form.cep" placeholder="CEP"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                            <b-input class="form-control" v-model="form.district" placeholder="Rua"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                            <b-input class="form-control" v-model="form.state" placeholder="Estado"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                            <b-input class="form-control" v-model="form.city" placeholder="Cidade"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                            <b-input class="form-control" v-model="form.complement" placeholder="Complemento"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                            <b-input type="password"  class="form-control" v-model="form.password" placeholder="Senha"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd align-center">
                            <b-button type="is-warning" class="auth-btn">Cadastrar</b-button>
                        </div>
                    </div>
                </div>

                <div class="other-form align-center">
                    <router-link :to="{ name: 'auth.login' }" class="reset-pass">Fazer Login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AuthService from '@/services/auth/auth'

    export default {
        name: 'auth',
        components: {},
        data () {
            return {
                form: {}
            }
        },
        methods: {
            async onRegister () {
                try {
                    this.loading = true

                    var data = {
                        full_name: this.form.register.full_name,
                        email: this.form.register.email,
                        mobile_phone: this.form.register.mobile_phone,
                        dt_birth: this.form.register.dt_birth,
                        password: this.form.register.password,
                        isOrganizer: true
                    }

                    let result = await AuthService.register(data)

                    if (result.status === 200) {
                        this.onLogin(this.form.register.email, this.form.register.password)
                        return
                    } else if (result.status === 422) {
                        for (const key in result.data.errors) {
                            if (result.data.errors.hasOwnProperty(key)) {
                                const element = result.data.errors[key]
                                throw Error(element.message)
                            }
                        }
                        return
                    }
                    throw Error(result.data.message)
                } catch (e) {
                    this.loading = false
                } finally {
                    this.loading = false
                }
            }
        }
    }
</script>

<style lang="scss">
    @media (max-width: 768px) {}
    @media (min-width: 769px) {}
    @media (min-width: 1200px) {}
</style>
