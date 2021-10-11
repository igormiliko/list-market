<template>
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
</template>
<script>
import {mapMutations} from 'vuex'

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

    },
    data: () => ({
        priceInMarketTXT: 'Price in the Market',
        marketNameTXT: 'MarketName',
        productPriceTXT: 'Product Price'
    }),
    computed: {
        ...mapMutations(['showAddMarket'])
    }
}
</script>
