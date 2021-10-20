<template>
    <div id="login-page" class="flex flex-wrap justify-center w-screen h-screen">
        <CardLogin header="Market List" textColor="text-yellow-400" >
            <div class="w-full p-6 flex flex-col">
                <Input :label="loginTXT" />
                <Input :label="passwrdTXT" />
            </div>
            <div class="flex justify-center">
                <DefaultBtn color="yellow" text="Login" />
            </div>
            <div class="mt-1 flex justify-center text-xs">
                <span>Are you <span class="text-blue-400 cursor-pointer"> new </span> here? Or are you forgot the <span class="text-blue-400 cursor-pointer">password?</span></span>
            </div>
        </CardLogin>
    </div>
</template>
<script>
import CardLogin from '../components/card/cardLogin.vue'
import Input from '../components/forms/input.vue'
import DefaultBtn from '../components/buttons/defaultBtn.vue'


export default {
    name: 'LogIn',
    components: {
        CardLogin,
        Input,
        DefaultBtn,
        
    },
    data: () => ({
        loginTXT: 'Login',
        passwrdTXT: 'Password'
    }),
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