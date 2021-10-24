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
        putLanguage(){
            this.TRANSLATE.translating.forgotPassPage(this)
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
    background-image: url("../assets/images/pineapple.jpg");
    background-color: #cccccc; /* Used if the image is unavailable */

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
}
</style>