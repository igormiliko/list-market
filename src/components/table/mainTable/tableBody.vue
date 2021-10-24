<template>
    <tbody key="itemsToShow">
        <transition-group name="list" mode="in-out">
            <tr v-for="(item, i) in marketList" :key="item.name" class="border-b text-center h-12">
                <td><button @click="deleteItem(i)" class="material-icons text-red-400 ml-2 mt-1">remove</button></td>
                <td>{{ item.name }}</td>
                <td>{{currency}}{{ item.price }}</td>
                <td>
                    <button @click="showAddMarket()" 
                            :value="item.item_name" 
                            class="material-icons text-green-400 mr-2 mt-1">add</button>

                </td>
                <td @click="itemInMarket = item">                              
                    <button @click="toShowItemInMarket()" class="material-icons text-blue-400 mr-2 mt-1">storefront</button>
                </td>
            </tr>
        </transition-group>
    </tbody>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'TableBody',
    data: () => ({
        addMarket: false,
        currency: '$',
    }),
    methods: {
        ...mapMutations(['showAddMarket', 'toShowItemInMarket']),
        deleteItem (ix) {
            this.marketList.splice(ix, 1)
        },
        putLanguage(){
            if(this.LANGUAGE == 'en-US') {
                this.currency = this.TRANSLATE.currency.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.currency = this.TRANSLATE.currency.PT
            }
             else if(this.LANGUAGE == 'es-ES') {
                this.currency = this.TRANSLATE.currency.ES
            }
             else if(this.LANGUAGE == 'ru') {
                this.currency = this.TRANSLATE.currency.RU
            }
             else if(this.LANGUAGE == 'ch') {
                this.currency = this.TRANSLATE.currency.CH
            }
             else if(this.LANGUAGE == 'ko') {
                this.currency = this.TRANSLATE.currency.KO
            }
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
        ...mapState(['LANGUAGE', 'TRANSLATE', 'marketList', 'addMarket']),
    }
}
</script>
