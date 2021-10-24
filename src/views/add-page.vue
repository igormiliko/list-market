<template>
    <div id="card-page" class="flex justify-center w-full h-screen" key="card">
        <Card class="sm:mt-16" :header="cardHeader">
            <AddProductForm />
        </Card>
        <Snack emoji="&#9888;" :text="typeAllDatasTxt" bgColor="bg-red-400" />
        <Snack :text="successSnackTxt" bgColor="bg-green-400" />
    </div>
</template>
<script>
import {  mapState } from 'vuex'

import Snack from '../components/snack/snack.vue'
import Card from '../components/card/card.vue'
import AddProductForm from '../components/forms/addProduct.vue'

export default {
    name: 'AddPage',
    components: {
        Snack,
        Card,
        AddProductForm
    },
    data: () => ({
        cardHeader: 'Adding a Product',
        typeAllDatasTxt: 'Type all datas',
        successSnackTxt: 'Success! Product Added'
    }),
    methods: {
        putLanguage() {
            if(this.LANGUAGE == 'en-US') {
                this.cardHeader = this.TRANSLATE.addingProduct.EN
                this.typeAllDatasTxt = this.TRANSLATE.errorText.EN
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.cardHeader = this.TRANSLATE.addingProduct.PT
                this.typeAllDatasTxt = this.TRANSLATE.errorText.PT
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.PT
            }
             else if(this.LANGUAGE == 'es-ES') {
                this.cardHeader = this.TRANSLATE.addingProduct.ES
                this.typeAllDatasTxt = this.TRANSLATE.errorText.ES
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.ES
            }
             else if(this.LANGUAGE == 'ru') {
                this.cardHeader = this.TRANSLATE.addingProduct.RU
                this.typeAllDatasTxt = this.TRANSLATE.errorText.RU
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.RU
            }
             else if(this.LANGUAGE == 'ch') {
                this.cardHeader = this.TRANSLATE.addingProduct.CH
                this.typeAllDatasTxt = this.TRANSLATE.errorText.CH
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.CH
            }
             else if(this.LANGUAGE == 'ko') {
                this.cardHeader = this.TRANSLATE.addingProduct.KO
                this.typeAllDatasTxt = this.TRANSLATE.errorText.KO
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.KO
            }
        }
    },
    mounted(){
        this.putLanguage()
    },
    watch: {
        LANGUAGE(){
            this.putLanguage()
        }
    },
    computed: {
        ...mapState(['LANGUAGE', 'TRANSLATE', 'marketList']),
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