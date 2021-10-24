<template>
    <div id="card-page" class="flex justify-center w-full h-screen" key="card">
<<<<<<< HEAD
        <Card class="sm:mt-16" :header="cardHeader">
            <AddProductForm />
        </Card>
        <Snack emoji="&#9888;" :text="typeAllDatasTxt" bgColor="bg-red-400" />
=======
        <Card :header="cardHeader">
            <AddProductForm />
        </Card>
        <Snack emoji="&#9888;" :text="errorSnackTxt" bgColor="bg-red-400" />
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
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
<<<<<<< HEAD
        typeAllDatasTxt: 'Type all datas',
=======
        errorSnackTxt: 'Type all datas',
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
        successSnackTxt: 'Success! Product Added'
    }),
    watch: {
        LANGUAGE() {
            if(this.LANGUAGE == 'en-US') {
                this.cardHeader = this.TRANSLATE.addingProduct.EN
<<<<<<< HEAD
                this.typeAllDatasTxt = this.TRANSLATE.errorText.EN
=======
                this.errorSnackTxt = this.TRANSLATE.errorText.EN
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.cardHeader = this.TRANSLATE.addingProduct.PT
<<<<<<< HEAD
                this.typeAllDatasTxt = this.TRANSLATE.errorText.PT
=======
                this.errorSnackTxt = this.TRANSLATE.errorText.PT
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.PT
            }
             else if(this.LANGUAGE == 'es-ES') {
                this.cardHeader = this.TRANSLATE.addingProduct.ES
<<<<<<< HEAD
                this.typeAllDatasTxt = this.TRANSLATE.errorText.ES
=======
                this.errorSnackTxt = this.TRANSLATE.errorText.ES
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.ES
            }
             else if(this.LANGUAGE == 'ru') {
                this.cardHeader = this.TRANSLATE.addingProduct.RU
<<<<<<< HEAD
                this.typeAllDatasTxt = this.TRANSLATE.errorText.RU
=======
                this.errorSnackTxt = this.TRANSLATE.errorText.RU
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.RU
            }
             else if(this.LANGUAGE == 'ch') {
                this.cardHeader = this.TRANSLATE.addingProduct.CH
<<<<<<< HEAD
                this.typeAllDatasTxt = this.TRANSLATE.errorText.CH
=======
                this.errorSnackTxt = this.TRANSLATE.errorText.CH
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
                this.successSnackTxt = this.TRANSLATE.productAddedTXT.CH
            }
             else if(this.LANGUAGE == 'ko') {
                this.cardHeader = this.TRANSLATE.addingProduct.KO
<<<<<<< HEAD
                this.typeAllDatasTxt = this.TRANSLATE.errorText.KO
=======
                this.errorSnackTxt = this.TRANSLATE.errorText.KO
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
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