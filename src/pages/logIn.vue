<template>
    <div id="login-page" class="flex flex-wrap justify-center content-center lg:content-start w-screen h-screen">
        <CardLogin :header="welcomeTXT" textColor="text-yellow-400" >
            <div class="w-full p-6 flex flex-col">
                <Input :label="userNameTXT" />
                <Input :label="passwordTXT" />
            </div>
                <div class="flex justify-center">
                    <DefaultBtn @click="toShowLogin" color="yellow" class="font-bold" :text="loginTXT" />
                </div>
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
              <span class="text-blue-400 cursor-pointer">{{newTXT}}</span> <span class="text-green-400 cursor-pointer">{{forgotTXT}}</span>
            </div>
        </CardLogin>
    </div>
</template>
<script>
import CardLogin from '../components/card/cardLogin.vue'
import Input from '../components/forms/input.vue'
import DefaultBtn from '../components/buttons/defaultBtn.vue'
import { mapMutations, mapState } from 'vuex'


export default {
    name: 'LogIn',
    components: {
        CardLogin,
        Input,
        DefaultBtn,
        
    },
    data: () => ({
        welcomeTXT: 'Welcome',
        userNameTXT: 'Username',
        passwordTXT: 'Password',
        loginTXT: 'Login',
        newTXT: 'Are you new here?',
        forgotTXT: 'Or are you forgot the password?'
    }),
    methods: {
        ...mapMutations(['toShowLogin']),
    },
    watch: {
        LANGUAGE(){
            if(this.LANGUAGE == 'en-US') {
                this.welcomeTXT = this.TRANSLATE.welcome.EN
                this.userNameTXT = this.TRANSLATE.userName.EN
                this.passwordTXT = this.TRANSLATE.password.EN
                this.loginTXT = this.TRANSLATE.login.EN
                this.newTXT = this.TRANSLATE.new.EN
                this.forgotTXT = this.TRANSLATE.forgot.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.welcomeTXT = this.TRANSLATE.welcome.PT
                this.userNameTXT = this.TRANSLATE.userName.PT
                this.passwordTXT = this.TRANSLATE.password.PT
                this.loginTXT = this.TRANSLATE.login.PT
                this.newTXT = this.TRANSLATE.new.PT
                this.forgotTXT = this.TRANSLATE.forgot.PT

            }
             else if(this.LANGUAGE == 'es-ES') {
                this.welcomeTXT = this.TRANSLATE.welcome.ES
                this.userNameTXT = this.TRANSLATE.userName.ES
                this.passwordTXT = this.TRANSLATE.password.ES
                this.loginTXT = this.TRANSLATE.login.ES
                this.newTXT = this.TRANSLATE.new.ES
                this.forgotTXT = this.TRANSLATE.forgot.ES
            }
             else if(this.LANGUAGE == 'ru') {
                this.welcomeTXT = this.TRANSLATE.welcome.RU
                this.userNameTXT = this.TRANSLATE.userName.RU
                this.passwordTXT = this.TRANSLATE.password.RU
                this.loginTXT = this.TRANSLATE.login.RU
                this.newTXT = this.TRANSLATE.new.RU
                this.forgotTXT = this.TRANSLATE.forgot.RU
            }
             else if(this.LANGUAGE == 'ch') {
                this.welcomeTXT = this.TRANSLATE.welcome.CH
                this.userNameTXT = this.TRANSLATE.userName.CH
                this.passwordTXT = this.TRANSLATE.password.CH
                this.loginTXT = this.TRANSLATE.login.CH
                this.newTXT = this.TRANSLATE.new.CH
                this.forgotTXT = this.TRANSLATE.forgot.CH
            }
             else if(this.LANGUAGE == 'ko') {
                this.welcomeTXT = this.TRANSLATE.welcome.KO
                this.userNameTXT = this.TRANSLATE.userName.KO
                this.passwordTXT = this.TRANSLATE.password.KO
                this.loginTXT = this.TRANSLATE.login.KO
                this.newTXT = this.TRANSLATE.new.KO
                this.forgotTXT = this.TRANSLATE.forgot.KO
            }
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