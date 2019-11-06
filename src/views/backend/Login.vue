<template>
    <div style="width: 100%;">
        <div class="align-center">
            <h1>Faça o Login</h1>
        </div>

        <div class="columns is-centered is-vcentered">
            <div class="column is-variable is-12-mobile is-12-tablet is-8-desktop is-8-widescreen is-8-fullhd">
                <div class="login-form">
                    <div class="columns is-multiline">
                        <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                            <b-input class="form-control" placeholder="E-mail" v-model="form.email"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                            <b-input type="password" class="form-control" placeholder="Senha" v-model="form.password"></b-input>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd align-left">
                            <a href="#" class="reset-pass">Esqueci minha senha</a>
                        </div>

                        <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd align-right">
                            <b-button type="is-warning" class="auth-btn" v-on:click="onSubmit()">Fazer Login</b-button>
                        </div>
                    </div>
                </div>

                <div class="other-form align-center">
                    <router-link :to="{ name: 'auth.register' }" class="reset-pass">Criar uma conta</router-link>
                </div>
            </div>
        </div>

        <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
    </div>
</template>

<script>
    import AuthService from '@/services/auth/auth'

    export default {
        name: 'auth',
        components: {},
        data () {
            return {
                isLoading: false,
                isFullPage: false,
                form: {}
            }
        },
        methods: {
            async onSubmit () {
                try {
                    this.isLoading = true

                    let data = {
                        email: this.form.email,
                        password: this.form.password
                    }

                    let result = await AuthService.login(data)

                    if (result.status === 200) {
                        this.$store.dispatch('login', result.data)
                        this.$router.push({ name: 'painel.dashboard' })
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
                    this.isLoading = false
                    this.$buefy.notification.open({
                        duration: 2000,
                        message: e.message,
                        position: 'is-top-left',
                        type: 'is-danger',
                        hasIcon: true
                    })
                } finally {
                    this.isLoading = false
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
