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
        marketNameTXT: 'MarketName',
        productPriceTXT: 'Product Price',
        errorSnackTxt: 'Type all datas',
        successMarketSnackTxt: 'Success! Market Added',
    }),
    watch: {
        LANGUAGE(){
            if(this.LANGUAGE == 'en-US') {
                this.priceInMarketTXT = this.TRANSLATE.priceInMarketTXT.EN
                this.productPriceTXT = this.TRANSLATE.productPrice.EN
                this.marketNameTXT = this.TRANSLATE.marketNameTXT.EN
                this.errorSnackTxt = this.TRANSLATE.errorText.EN
                this.successMarketSnackTxt = this.TRANSLATE.productMarketAddedTXT.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.priceInMarketTXT = this.TRANSLATE.priceInMarketTXT.PT
                this.productPriceTXT = this.TRANSLATE.productPrice.PT
                this.marketNameTXT = this.TRANSLATE.marketNameTXT.PT
                this.errorSnackTxt = this.TRANSLATE.errorText.PT
                this.successMarketSnackTxt = this.TRANSLATE.productMarketAddedTXT.PT
            }
            else if(this.LANGUAGE == 'es-ES') {
                this.priceInMarketTXT = this.TRANSLATE.priceInMarketTXT.ES
                this.productPriceTXT = this.TRANSLATE.productPrice.ES
                this.marketNameTXT = this.TRANSLATE.marketNameTXT.ES
                this.errorSnackTxt = this.TRANSLATE.errorText.ES
                this.successMarketSnackTxt = this.TRANSLATE.productMarketAddedTXT.ES
            }
            else if(this.LANGUAGE == 'ru') {
                this.priceInMarketTXT = this.TRANSLATE.priceInMarketTXT.RU
                this.productPriceTXT = this.TRANSLATE.productPrice.RU
                this.marketNameTXT = this.TRANSLATE.marketNameTXT.RU
                this.errorSnackTxt = this.TRANSLATE.errorText.RU
                this.successMarketSnackTxt = this.TRANSLATE.productMarketAddedTXT.RU
            }
            else if(this.LANGUAGE == 'ch') {
                this.priceInMarketTXT = this.TRANSLATE.priceInMarketTXT.CH
                this.productPriceTXT = this.TRANSLATE.productPrice.CH
                this.marketNameTXT = this.TRANSLATE.marketNameTXT.CH
                this.errorSnackTxt = this.TRANSLATE.errorText.CH
                this.successMarketSnackTxt = this.TRANSLATE.productMarketAddedTXT.CH
            }
            else if(this.LANGUAGE == 'ko') {
                this.priceInMarketTXT = this.TRANSLATE.priceInMarketTXT.KO
                this.productPriceTXT = this.TRANSLATE.productPrice.KO
                this.marketNameTXT = this.TRANSLATE.marketNameTXT.KO
                this.errorSnackTxt = this.TRANSLATE.errorText.KO
                this.successMarketSnackTxt = this.TRANSLATE.productMarketAddedTXT.KO
            }
        }
    },
    computed: {
        ...mapMutations(['showAddMarket']),
        ...mapState(['LANGUAGE', 'TRANSLATE'])
    }
}
</script>
