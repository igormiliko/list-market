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
            <router-link to="/forgot_password">    
                <div class="mt-4 flex justify-center text-xs break-words">
                    <span class="text-green-400 cursor-pointer">{{forgotTXT}}</span>
                </div>
            </router-link>
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
        putLanguage(){
            this.TRANSLATE.translating.registerPage(this)
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
    background-image: url("../assets/images/avocado.jpg");
    background-color: #cccccc; /* Used if the image is unavailable */

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
}
</style>