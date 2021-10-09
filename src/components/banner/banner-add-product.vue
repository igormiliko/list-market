<template>
    <div id="start" class="pt-8">
        <p class="text-white text-2xl text-center mb-3 shadow-2xl">{{addProduct}}</p>
        <div class="flex justify-center">
            <button @click="debug" 
                    class="material-icons w-8/12 h-8 mb-6 border-2 border-green-400 rounded-lg text-center text-blue-400 hover:bg-green-400 hover:text-white hover:pointer">
                    add</button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'BannerAddProduct',
    data(){
        return{
            LANGUAGE: '',
            addProduct: 'Click to add a product',
            showCard: false // Make a prop to share with the add page component and show then
        }
    },
    methods: {
        debug(){
            console.log(this.LANGUAGE)
        }
    },
    watch: {
        //implement the translate state method
    }
}
</script>
<style>
 #start{
    background-image: url("../../assets/images/bg-add.jpg");
    background-color: #cccccc; /* Used if the image is unavailable */

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    -webkit-transition: -webkit-transform .5s ease;
    transition: transform 2s ease;
    }
#start:hover  {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    }
</style>