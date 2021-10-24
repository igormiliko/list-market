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
            this.TRANSLATE.translating.addPage(this)
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