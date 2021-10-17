<template>
   <tbody>
        <tr v-for="market in itemInMarket.markets" :key="market.name" class="border-b text-center h-12">
        <td @click="showBestPrice = false">
            <button @click="itemInMarket.deleteMarket(market.name)" class="material-icons text-red-400 ml-2 mt-1">
            remove
            </button>
        </td>
        <td>{{ market.name }}</td>
        <td>{{currency}}{{ market.price }}</td>
        <td></td>
        </tr>
    </tbody>
</template>
<script>
export default {
    name: 'MarketTablebody',
    data: () => ({
        showBestPrice: false,
        bestPriceItem: {name: 'Banana', price: '2.22'},
        currency: '$',
        
        itemInMarket: {
            markets: {
                name: 'Mark',
                price: '2.34'
            }
        },
    })
}
</script>