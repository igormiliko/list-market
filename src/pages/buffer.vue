<template>
    <div id="card-page" class="flex justify-center w-full h-screen" key="card">
        <div class="w-11/12 lg:w-2/4 h-80 mt-12 sm:mt-4 md:mt-8 lg:mt-32 rounded-t-xl rounded-b-md shadow-2xl bg-white bg-opacity-90">
            <div class="w-full h-12 text-2xl text-white text-center pt-2 rounded-t-xl bg-blue-500 shadow-xl">
                <div class="text-center shadow-lg">{{addingProduct}}</div>
            </div>
            <form @submit.prevent="saveProduct">
            <div class="w-full p-6 flex flex-col">
                <div class="flex flex-col">
                    <label>{{productName}}</label>
                        <input class="mt-3 border-b-2 border-r-2 rounded-md border-gray-400 w-full px-2 py-1 shadow-sm focus:outline-none focus:border-yellow-400" 
                            v-model="itemName"
                            type="text" 
                            :placeholder="exampleItem">
                </div>
                <div class="flex flex-col mt-4">
                    <label>{{productPrice}}</label>
                        <input class="mt-3 border-b-2 border-r-2 rounded-md border-gray-400 w-full px-2 py-1 shadow-sm focus:outline-none focus:border-yellow-400" 
                            step="0.01" 
                            v-model="itemPrice" 
                            type="number" 
                            :placeholder="currency + currency + currency">
                </div>
            </div>

                <div class="flex justify-around mt-4 sm:mt-2">
                    <button type="submit" 
                            class="w-1/3 h-8 border rounded-md border-green-400 text-center text-green-400 hover:bg-green-400 hover:text-white">
                        {{saveBtn}}</button>
                    <button @click="cancelProduct()" type="reset" class="w-1/3 h-8 border rounded-md border-red-400 text-center text-red-400 hover:bg-red-400 hover:text-white" >
                        {{cancelBtn}}</button>
                </div>
            </form>
        </div>
        
        <br>
        <!-- Snack cards -->
        <transition name="slide-fade" mode="out-in">
            <div v-show="successAdded" class="absolute flex flex-wrap shadow-2xl justify-center content-center top-16 w-72 h-16 text-xl rounded-md bg-green-400 text-white">
            {{productAddedTXT}}
            </div>
        </transition>
        <transition name="slide-fade" mode="out-in">
            <div v-show="errorAdded" class="absolute flex flex-wrap shadow-2xl justify-center content-center top-16 w-72 h-16 text-xl rounded-md bg-red-400 text-white">
            &#9888; {{errorTXT}} &#9888;
            </div>
        </transition>
        <Snack text="Hello World" bgColor="bg-red-400" />
    </div>
</template>
<script>
import Snack from '../components/snack/snack.vue'

export default {
    name: 'AddPage',
    components: {
        Snack
    },
    data(){
        return{
            addingProduct: '',
            itemName: '',
            itemPrice: '',
            productPrice: '',
            productName: '',
            exampleItem: '',
            currency: '$',

            saveBtn: 'Save',
            cancelBtn: 'Cancel',

            successAddes: false,
            productAddedTXT: '',

            errorAdded: false,
            errorTXT: ''

        }
    },
    methods: {
        saveProduct(){
            //TODO  
        },
        cancelProduct(){
            //TODO
        }
    }
}
</script>
<style>
#card-page{
    background-image: url("../assets/images/bg-card.jpg");
    background-color: #cccccc; /* Used if the image is unavailable */

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
}
</style>