<template>
    <div id="card-page" class="flex justify-center w-full h-screen" key="card">
        <Card :header="cardHeader">
            <AddProductForm />
        </Card>
        <Snack emoji="&#9888;" :text="errorSnackTxt" bgColor="bg-red-400" />
        <Snack :text="successSnackTxt" bgColor="bg-green-400" />
    </div>
</template>
<script>
import { mapState } from 'vuex'

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
        errorSnackTxt: 'Type all datas',
        successSnackTxt: 'Success! Product Added'
    }),
    watch: {
        LANGUAGE() {
            if(this.LANGUAGE == 'en-US') {
                this.cardHeader = this.TRANSLATE.addingProduct.EN
                this.errorSnackTxt = this.TRANSLATE.errorText.EN
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.cardHeader = this.TRANSLATE.addingProduct.PT
                this.errorSnackTxt = this.TRANSLATE.errorText.PT
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.PT
            }
             else if(this.LANGUAGE == 'es-ES') {
                this.cardHeader = this.TRANSLATE.addingProduct.ES
                this.errorSnackTxt = this.TRANSLATE.errorText.ES
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.ES
            }
             else if(this.LANGUAGE == 'ru') {
                this.cardHeader = this.TRANSLATE.addingProduct.RU
                this.errorSnackTxt = this.TRANSLATE.errorText.RU
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.RU
            }
             else if(this.LANGUAGE == 'ch') {
                this.cardHeader = this.TRANSLATE.addingProduct.CH
                this.errorSnackTxt = this.TRANSLATE.errorText.CH
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.CH
            }
             else if(this.LANGUAGE == 'ko') {
                this.cardHeader = this.TRANSLATE.addingProduct.KO
                this.errorSnackTxt = this.TRANSLATE.errorText.KO
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.KO
            }
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