<template>
    <div id="start" class="pt-8">
        <div class="text-white text-3xl font-bold text-center mb-3 shadow-2xl p-2">{{addProduct}}</div>
        <router-link to="/add_product">
            <div class="flex justify-center">
                    <button class="material-icons w-8/12 h-8 mb-6 border-2 border-green-400 rounded-lg text-center text-blue-400 bg-white bg-opacity-50 hover:bg-green-400 hover:text-white hover:pointer">
                            add
                    </button>
            </div>
        </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'BannerAddProduct',
    data(){
        return{
            addProduct: 'Click to add a product',
            showCard: false, // Make a prop to share with the add page component and show then  
        }
    },
    methods: {
        debug() {
            console.log(this.addAproduct)
            this.addAproduct = 'Hi'
            console.log(this.addAproduct)
        },
        putLanguage(){
            this.LANGUAGE == 'en-US' ? this.addProduct = this.TRANSLATE.addProduct.EN :
            this.LANGUAGE == 'pt-BR' ? this.addProduct = this.TRANSLATE.addProduct.PT :
            this.LANGUAGE == 'es-ES' ? this.addProduct = this.TRANSLATE.addProduct.ES :
            this.LANGUAGE == 'ru' ? this.addProduct = this.TRANSLATE.addProduct.RU :
            this.LANGUAGE == 'ch' ? this.addProduct = this.TRANSLATE.addProduct.CH :
            this.LANGUAGE == 'ko' ? this.addProduct = this.TRANSLATE.addProduct.KO :
            this.addProduct = this.TRANSLATE.addProduct.EN
      }
    },
    watch: {
        LANGUAGE(){
            this.putLanguage()
        }
    },
    mounted() {
        this.putLanguage()
    },
    computed: {
        ...mapState(['LANGUAGE', 'TRANSLATE']),
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