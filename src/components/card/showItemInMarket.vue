<template>
    <div class="flex justify-center w-full h-screen">
        <Card class="relative" :header="productName">
            <button @click="toShowItemInMarket()" class="material-icons text-gray-200 absolute top-2 right-2 hover:text-gray-100">close</button>
            <BtnBestPrice />
            <Table />
        </Card>
    </div>
</template>
<script>
import Table from '../table/marketTable/table.vue'
import Card from './card.vue'
import BtnBestPrice from '../buttons/btnBestPrice.vue'

import { mapMutations } from 'vuex'

export default {
    name: 'ShowItemInMarket',
    components: {
        Card,
        BtnBestPrice,
        Table
    },
    data: () => ({
       
        productName: 'Banana'
    }),
    methods : {
        ...mapMutations(['toShowItemInMarket']),
    },
}
</script>
