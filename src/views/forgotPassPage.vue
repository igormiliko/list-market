<template>
    <div id="login-page" class="flex flex-wrap w-screen justify-center 
                                content-center lg:content-start 
                                py-24 lg:py-0
                                h-screen sm:h-auto lg:h-screen">
        <CardLogin :header="recoverPassTXT" textColor="text-yellow-400" >
            <div class="w-full p-6 flex flex-col">
                <Input :label="emailTXT" />
                <Input :label="phoneTXT" />
            </div>
                <div class="flex justify-center">
                    <DefaultBtn @click="toShowLogin" color="yellow" class="font-bold" :text="recoverPassTXT" />
                </div>
            <router-link to="/register_user">
                <div class="mt-4 flex justify-center text-xs break-words">
                    <span class="text-blue-400 cursor-pointer">{{newTXT}}</span>
                </div>
            </router-link>
        </CardLogin>
            <Snack emoji="&#9888;" :text="errorForgotPassTXT" bgColor="bg-red-400" />
            <Snack class="mx-2" :text="successForgotPassTXT" bgColor="bg-green-400" />
        
    </div>
</template>
<script>
import CardLogin from '../components/card/cardLogin.vue'
import Input from '../components/forms/input.vue'
import DefaultBtn from '../components/buttons/defaultBtn.vue'
import Snack from '../components/snack/snack.vue'

import { mapMutations, mapState } from 'vuex'


export default {
    name: 'ForgotPassPage',
    components: {
        CardLogin,
        Input,
        DefaultBtn,
        Snack,
    },
    data: () => ({
        recoverPassTXT: 'Recover Password',
        emailTXT: 'Email',
        phoneTXT: 'Phone number',
        newTXT: 'Are you new here?',

        errorForgotPassTXT: 'Type all datats!',
        successForgotPassTXT: 'Recovery send with success!',
    }),
    methods: {
        ...mapMutations(['toShowLogin']),
    },
    watch: {
        LANGUAGE(){
            if(this.LANGUAGE == 'en-US') {
                this.recoverPassTXT = this.TRANSLATE.recoverPass.EN
                this.emailTXT = this.TRANSLATE.email.EN
                this.phoneTXT = this.TRANSLATE.phone.EN
                this.newTXT = this.TRANSLATE.new.EN
                this.successForgotPassTXT = this.TRANSLATE.successRecoveryPass.EN
                this.errorForgotPassTXT = this.TRANSLATE.errorText.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.recoverPassTXT = this.TRANSLATE.recoverPass.PT
                this.emailTXT = this.TRANSLATE.email.PT
                this.phoneTXT = this.TRANSLATE.phone.PT
                this.newTXT = this.TRANSLATE.new.PT
                this.successForgotPassTXT = this.TRANSLATE.successRecoveryPass.PT
                this.errorForgotPassTXT = this.TRANSLATE.errorText.PT

            }
             else if(this.LANGUAGE == 'es-ES') {
                this.recoverPassTXT = this.TRANSLATE.recoverPass.ES
                this.emailTXT = this.TRANSLATE.email.ES
                this.phoneTXT = this.TRANSLATE.phone.ES
                this.newTXT = this.TRANSLATE.new.ES
                this.successForgotPassTXT = this.TRANSLATE.successRecoveryPass.ES
                this.errorForgotPassTXT = this.TRANSLATE.errorText.ES
            }
             else if(this.LANGUAGE == 'ru') {
                this.recoverPassTXT = this.TRANSLATE.recoverPass.RU
                this.emailTXT = this.TRANSLATE.email.RU
                this.phoneTXT = this.TRANSLATE.phone.RU
                this.newTXT = this.TRANSLATE.new.RU
                this.successForgotPassTXT = this.TRANSLATE.successRecoveryPass.RU
                this.errorForgotPassTXT = this.TRANSLATE.errorText.RU
            }
             else if(this.LANGUAGE == 'ch') {
                this.recoverPassTXT = this.TRANSLATE.recoverPass.CH
                this.emailTXT = this.TRANSLATE.email.CH
                this.phoneTXT = this.TRANSLATE.phone.CH
                this.newTXT = this.TRANSLATE.new.CH
                this.successForgotPassTXT = this.TRANSLATE.successRecoveryPass.CH
                this.errorForgotPassTXT = this.TRANSLATE.errorText.CH
            }
             else if(this.LANGUAGE == 'ko') {
                this.recoverPassTXT = this.TRANSLATE.recoverPass.KO
                this.emailTXT = this.TRANSLATE.email.KO
                this.phoneTXT = this.TRANSLATE.phone.KO
                this.newTXT = this.TRANSLATE.new.KO
                this.successForgotPassTXT = this.TRANSLATE.successRecoveryPass.KO
                this.errorForgotPassTXT = this.TRANSLATE.errorText.KO
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
    background-image: url("../assets/images/pineapple.jpg");
    background-color: #cccccc; /* Used if the image is unavailable */

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
}
</style>