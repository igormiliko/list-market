/* eslint-disable vue/valid-v-model */
<template>
    <!-- Table to render the products added -->
    <table class="w-full border-collapse border border-gray-300 tracking-widest">
        <thead class="w-full bg-blue-400 text-white">
        <tr class="h-12">
            <th></th>
            <th class="w-1/2 border-none">{{productCol}}</th>
            <th class="w-1/2 border-none">{{priceCol}}</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody v-if="marketList.length == 0" key="noItemsToShow">
        <tr class="border-b text-center text-2xl text-gray-300 h-12">
            <td></td>
            <td>{{noItems}}</td>
            <td>{{noItems}}</td>
            <td></td>
        </tr>
        </tbody>
        <!-- Vue logic to render the products -->
        <tbody v-else key="itemsToShow">
        <transition-group name="list" mode="in-out">
            <tr v-for="(item, i) in marketList" :key="item.name" class="border-b text-center h-12">
            <td><button @click="deleteItem(i)" class="material-icons text-red-400 ml-2 mt-1">remove</button></td>
            <td>{{ item.name }}</td>
            <td>{{currency}}{{ item.price }}</td>
            <!-- ATENTION the variable 'ItemInMarket' store temporarialy the variable 'item' 
                    for each item in this list, don't change this rule, is the cerne of the logic-->
            <td @click="itemInMarket = item">
                <button @click="addMarket = !addMarket" 
                        :value="item.item_name" 

                         class="material-icons text-green-400 mr-2 mt-1">add</button>
                         <!--v-model="itemInMarket"-->
            </td>
            <td @click="itemInMarket = item">                              
                    <button @click="showMarketList" class="material-icons text-blue-400 mr-2 mt-1">storefront</button>
            </td>
            </tr>
        </transition-group>
        </tbody>

    </table>
</template>
<script>
export default {
    name: 'TableProducts',
    data(){
        return{
            //Bool
            addMarket: false,

            productCol: 'Product',
            priceCol: 'Price',
            noItems: 'No Items!',
            currency: '$',
            marketList: [],

            //Logic of state
            itemInMarket: 'Hi',
        }
    },
    methods: {
        deleteItem (ix) {
            this.marketList.splice(ix, 1)
          },
    },
}
</script>