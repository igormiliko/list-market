<template>
<div class="flex justify-center w-full h-screen">
    <Card :header="priceInMarketTXT">
        <div class="w-full p-6 flex flex-col">
            <Input :label="marketNameTXT" />
            <Input :label="productPriceTXT" />
        </div>
        <div class="flex justify-around">
            <BtnSave />
            <BtnCancel @click="showAddMarket()"/>
        </div>
    </Card>
        <Snack emoji="&#9888;" :text="errorSnackTxt" bgColor="bg-red-400" />
        <Snack :text="successMarketSnackTxt" bgColor="bg-green-400" />
</div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

import Snack from '../snack/snack.vue'
import Input from '../forms/input.vue'
import Card from './card.vue'
import BtnSave from '../buttons/btnSave.vue'
import BtnCancel from '../buttons/btnCancel.vue'

export default {
    name: "CardMarketAdd",
    components: {
        Card,
        Input,
        BtnSave,
        BtnCancel,
        Snack,

    },
    data: () => ({
        priceInMarketTXT: 'Price in the Market',
        marketNameTXT: 'Market name',
        productPriceTXT: 'Product Price',
        errorSnackTxt: 'Type all datas',
        successMarketSnackTxt: 'Success! Market Added',
    }),
    methods: {
        putLanguage(){
            this.TRANSLATE.translating.addMarketCard(this)
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
        ...mapMutations(['showAddMarket']),
        ...mapState(['LANGUAGE', 'TRANSLATE'])
    }
}
</script>
