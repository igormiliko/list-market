<template>
    <div id="login-page" class="flex flex-wrap w-screen justify-center 
                                content-center lg:content-start 
                                py-24 lg:py-0
                                h-screen sm:h-auto lg:h-screen">
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
                    <DefaultBtn @click="debug" color="red" class="text-3xl">
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
            this.TRANSLATE.translating.login(this)
        },
        debug(){
            console.log(this.APP)
            this.APP.registerUser('testing', 'teste@teste.com', '61985908787', '1234', 'ADM')
            this.APP.users[0].createList('Frutas')
            console.log('User : ===>',this.APP.users[0])
            console.log('Market List ===> ',this.APP.users[0].marketList[0])
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
        ...mapState(['TRANSLATE', 'LANGUAGE', 'APP'])
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