<template>
    <div id="login-page" class="flex flex-wrap w-screen justify-center 
                                content-center lg:content-start 
                                py-24 lg:py-0
                                h-screen md:h-auto lg:h-screen">
        <CardLogin :header="welcomeTXT" textColor="text-yellow-400" >
            <div class="w-full p-6 flex flex-col">
                <Input :label="userNameTXT" />
                <Input :label="passwordTXT" />
            </div>
                <router-link to="/">
                    <div class="flex justify-center">
                        <DefaultBtn @click="toShowLogin" color="yellow" class="font-bold" :text="loginTXT" />
                    </div>
                </router-link>
                
                <div class="flex justify-center my-4">
                    <DefaultBtn color="blue" class="text-3xl">
                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    </DefaultBtn>
                </div>
                <div class="flex justify-center my-4">
                    <DefaultBtn color="red" class="text-3xl">
                        <i class="fa fa-google" aria-hidden="true"></i>
                    </DefaultBtn>
                </div>
            <div class="mt-4 flex justify-center text-xs break-words">
                <router-link to="/register_user">
                    <span @click="toShowRegister()" class="text-blue-400 cursor-pointer">{{newTXT}}</span>
                </router-link>
                    <router-link to="/forgot_password">
                        <span class="text-green-400 cursor-pointer">{{forgotTXT}}</span>
                    </router-link>
            </div>
        </CardLogin>
            <Snack emoji="&#9888;" :text="typeAllDatasTXT" bgColor="bg-red-400" />
            <Snack class="mx-2" :text="successLoginTXT" bgColor="bg-green-400" />
    </div>
</template>
<script>
import CardLogin from '../components/card/cardLogin.vue'
import Input from '../components/forms/input.vue'
import DefaultBtn from '../components/buttons/defaultBtn.vue'
import Snack from '../components/snack/snack.vue'
import { mapMutations, mapState } from 'vuex'


export default {
    name: 'LogIn',
    components: {
        CardLogin,
        Input,
        DefaultBtn,
        Snack        
    },
    data: () => ({
        welcomeTXT: 'Welcome',
        userNameTXT: 'Username',
        passwordTXT: 'Password',
        loginTXT: 'Login',
        newTXT: 'Are you new here?',
        forgotTXT: 'Or are you forgot the password?',
        typeAllDatasTXT: 'Type all datas!',
        successLoginTXT: 'Entering ...',
    }),
    methods: {
        ...mapMutations(['toShowLogin', 'toShowForgot', 'toShowRegister']),
        putLanguage(){
            if(this.LANGUAGE == 'en-US') {
                this.welcomeTXT = this.TRANSLATE.welcome.EN
                this.userNameTXT = this.TRANSLATE.userName.EN
                this.passwordTXT = this.TRANSLATE.password.EN
                this.loginTXT = this.TRANSLATE.login.EN
                this.newTXT = this.TRANSLATE.new.EN
                this.forgotTXT = this.TRANSLATE.forgot.EN
                this.typeAllDatasTXT = this.TRANSLATE.errorText.EN
                this.successLoginTXT = this.TRANSLATE.successLogin.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.welcomeTXT = this.TRANSLATE.welcome.PT
                this.userNameTXT = this.TRANSLATE.userName.PT
                this.passwordTXT = this.TRANSLATE.password.PT
                this.loginTXT = this.TRANSLATE.login.PT
                this.newTXT = this.TRANSLATE.new.PT
                this.forgotTXT = this.TRANSLATE.forgot.PT
                this.typeAllDatasTXT = this.TRANSLATE.errorText.PT
                this.successLoginTXT = this.TRANSLATE.successLogin.PT
            }
             else if(this.LANGUAGE == 'es-ES') {
                this.welcomeTXT = this.TRANSLATE.welcome.ES
                this.userNameTXT = this.TRANSLATE.userName.ES
                this.passwordTXT = this.TRANSLATE.password.ES
                this.loginTXT = this.TRANSLATE.login.ES
                this.newTXT = this.TRANSLATE.new.ES
                this.forgotTXT = this.TRANSLATE.forgot.ES
                this.typeAllDatasTXT = this.TRANSLATE.errorText.ES
                this.successLoginTXT = this.TRANSLATE.successLogin.ES
            }
             else if(this.LANGUAGE == 'ru') {
                this.welcomeTXT = this.TRANSLATE.welcome.RU
                this.userNameTXT = this.TRANSLATE.userName.RU
                this.passwordTXT = this.TRANSLATE.password.RU
                this.loginTXT = this.TRANSLATE.login.RU
                this.newTXT = this.TRANSLATE.new.RU
                this.forgotTXT = this.TRANSLATE.forgot.RU
                this.typeAllDatasTXT = this.TRANSLATE.errorText.RU
                this.successLoginTXT = this.TRANSLATE.successLogin.RU
            }
             else if(this.LANGUAGE == 'ch') {
                this.welcomeTXT = this.TRANSLATE.welcome.CH
                this.userNameTXT = this.TRANSLATE.userName.CH
                this.passwordTXT = this.TRANSLATE.password.CH
                this.loginTXT = this.TRANSLATE.login.CH
                this.newTXT = this.TRANSLATE.new.CH
                this.forgotTXT = this.TRANSLATE.forgot.CH
                this.typeAllDatasTXT = this.TRANSLATE.errorText.CH
                this.successLoginTXT = this.TRANSLATE.successLogin.CH
            }
             else if(this.LANGUAGE == 'ko') {
                this.welcomeTXT = this.TRANSLATE.welcome.KO
                this.userNameTXT = this.TRANSLATE.userName.KO
                this.passwordTXT = this.TRANSLATE.password.KO
                this.loginTXT = this.TRANSLATE.login.KO
                this.newTXT = this.TRANSLATE.new.KO
                this.forgotTXT = this.TRANSLATE.forgot.KO
                this.typeAllDatasTXT = this.TRANSLATE.errorText.KO
                this.successLoginTXT = this.TRANSLATE.successLogin.KO
            }
        }
    },
    mounted() {
        this.putLanguage()
    },
    watch: {
       LANGUAGE(){
        this.putLanguage()
       }
    },
    computed: {
        ...mapState(['TRANSLATE', 'LANGUAGE'])
    }
}
</script>
<style scoped>
#login-page {
    background-image: url("../assets/images/straw.jpg");
    background-color: #cccccc; /* Used if the image is unavailable */

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
}
</style>