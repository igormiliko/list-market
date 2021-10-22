<template>
    <div id="login-page" class="flex flex-wrap w-screen justify-center 
                                content-center lg:content-start 
                                py-24 lg:py-0
                                h-auto md:h-auto lg:h-screen">
        <CardLogin :header="registerTXT" textColor="text-yellow-400" >
            <div class="w-full p-6 flex flex-col">
                <Input :label="userNameTXT" />
                <Input :label="emailTXT" />
                <Input :label="phoneTXT" />
                <Input :label="passwordTXT" />
                <Input :label="confirmPasswordTXT" />

            </div>
                <div class="flex justify-center">
                    <DefaultBtn @click="toShowLogin" color="yellow" class="font-bold" :text="registerTXT" />
                </div>
                
            <div class="mt-4 flex justify-center text-xs break-words">
              <span class="text-green-400 cursor-pointer">{{forgotTXT}}</span>
            </div>
        </CardLogin>
            <Snack emoji="&#9888;" :text="typeAllDatasTXT" bgColor="bg-red-400" />
            <Snack class="mx-2" :text="successRegisterTXT" bgColor="bg-green-400" />
    </div>
</template>
<script>
import CardLogin from '../components/card/cardLogin.vue'
import Input from '../components/forms/input.vue'
import DefaultBtn from '../components/buttons/defaultBtn.vue'
import { mapMutations, mapState } from 'vuex'
import Snack from '../components/snack/snack.vue'

export default {
    name: 'RegisterPage',
    components: {
        CardLogin,
        Input,
        DefaultBtn,
        Snack,        
    },
    data: () => ({
        registerTXT: 'Register',
        userNameTXT: 'Username',
        emailTXT: 'Email',
        phoneTXT: 'Phone number',
        passwordTXT: 'Password',
        confirmPasswordTXT: 'Confirm the Password',
        newTXT: 'Are you new here?',
        forgotTXT: 'Or are you forgot the password?',
        typeAllDatasTXT: 'Type all datas',
        successRegisterTXT: 'Success on register, enjoy!'

    }),
    methods: {
        ...mapMutations(['toShowLogin']),
    },
    watch: {
        LANGUAGE(){
            if(this.LANGUAGE == 'en-US') {
                this.registerTXT = this.TRANSLATE.register.EN
                this.userNameTXT = this.TRANSLATE.userName.EN
                this.emailTXT = this.TRANSLATE.email.EN
                this.phoneTXT = this.TRANSLATE.phone.EN
                this.passwordTXT = this.TRANSLATE.password.EN
                this.confirmPasswordTXT = this.TRANSLATE.confirmPassword.EN
                this.newTXT = this.TRANSLATE.new.EN
                this.forgotTXT = this.TRANSLATE.forgot.EN
                this.typeAllDatasTXT = this.TRANSLATE.errorText.EN
                this.successRegisterTXT = this.TRANSLATE.successRegister.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.registerTXT = this.TRANSLATE.register.PT
                this.userNameTXT = this.TRANSLATE.userName.PT
                this.emailTXT = this.TRANSLATE.email.PT
                this.phoneTXT = this.TRANSLATE.phone.PT
                this.passwordTXT = this.TRANSLATE.password.PT
                this.confirmPasswordTXT = this.TRANSLATE.confirmPassword.PT
                this.newTXT = this.TRANSLATE.new.PT
                this.forgotTXT = this.TRANSLATE.forgot.PT
                this.typeAllDatasTXT = this.TRANSLATE.errorText.PT
                this.successRegisterTXT = this.TRANSLATE.successRegister.PT

            }
             else if(this.LANGUAGE == 'es-ES') {
                this.registerTXT = this.TRANSLATE.register.ES
                this.userNameTXT = this.TRANSLATE.userName.ES
                this.emailTXT = this.TRANSLATE.email.ES
                this.phoneTXT = this.TRANSLATE.phone.ES
                this.passwordTXT = this.TRANSLATE.password.ES
                this.confirmPasswordTXT = this.TRANSLATE.confirmPassword.ES
                this.newTXT = this.TRANSLATE.new.ES
                this.forgotTXT = this.TRANSLATE.forgot.ES
                this.typeAllDatasTXT = this.TRANSLATE.errorText.ES
                this.successRegisterTXT = this.TRANSLATE.successRegister.ES
            }
             else if(this.LANGUAGE == 'ru') {
                this.registerTXT = this.TRANSLATE.register.RU
                this.userNameTXT = this.TRANSLATE.userName.RU
                this.emailTXT = this.TRANSLATE.email.RU
                this.phoneTXT = this.TRANSLATE.phone.RU
                this.passwordTXT = this.TRANSLATE.password.RU
                this.confirmPasswordTXT = this.TRANSLATE.confirmPassword.RU
                this.newTXT = this.TRANSLATE.new.RU
                this.forgotTXT = this.TRANSLATE.forgot.RU
                this.typeAllDatasTXT = this.TRANSLATE.errorText.RU
                this.successRegisterTXT = this.TRANSLATE.successRegister.RU
            }
             else if(this.LANGUAGE == 'ch') {
                this.registerTXT = this.TRANSLATE.register.CH
                this.userNameTXT = this.TRANSLATE.userName.CH
                this.emailTXT = this.TRANSLATE.email.CH
                this.phoneTXT = this.TRANSLATE.phone.CH
                this.passwordTXT = this.TRANSLATE.password.CH
                this.confirmPasswordTXT = this.TRANSLATE.confirmPassword.CH
                this.newTXT = this.TRANSLATE.new.CH
                this.forgotTXT = this.TRANSLATE.forgot.CH
                this.typeAllDatasTXT = this.TRANSLATE.errorText.CH
                this.successRegisterTXT = this.TRANSLATE.successRegister.CH
            }
             else if(this.LANGUAGE == 'ko') {
                this.registerTXT = this.TRANSLATE.register.KO
                this.userNameTXT = this.TRANSLATE.userName.KO
                this.emailTXT = this.TRANSLATE.email.KO
                this.phoneTXT = this.TRANSLATE.phone.KO
                this.passwordTXT = this.TRANSLATE.password.KO
                this.confirmPasswordTXT = this.TRANSLATE.confirmPassword.KO
                this.newTXT = this.TRANSLATE.new.KO
                this.forgotTXT = this.TRANSLATE.forgot.KO
                this.typeAllDatasTXT = this.TRANSLATE.errorText.KO
                this.successRegisterTXT = this.TRANSLATE.successRegister.KO
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
    background-image: url("../assets/images/avocado.jpg");
    background-color: #cccccc; /* Used if the image is unavailable */

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
}
</style>