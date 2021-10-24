<template>
    <div>
<<<<<<< HEAD
        <div v-if="!showCard" class="w-full h-full relative mt-12">
            <BannerAddProduct />
            <Table />
        </div>
        
        <div v-show="addMarket"
             class="absolute flex flex-wrap justify-center top-0 h-screen w-full bg-gray-900 bg-opacity-50">
            <CardAddProduct />
        </div>
        <div v-show="showItemInMarket"
             class="absolute flex flex-wrap justify-center top-0 h-screen w-full bg-gray-900 bg-opacity-50">
            <ShowItemInMarket />
        </div>
=======
        <div @mousemove="axlesToDrag" v-if="!showCard" class="w-full h-full relative mt-12">
            <BannerAddProduct />
            <Table />

        </div>
        
        <div v-if="addMarket"
             class="absolute flex flex-wrap justify-center top-0 h-screen w-full bg-gray-900 bg-opacity-50">
            <CardAddProduct />
        </div>
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
    </div>
</template>
<script>
import { mapState } from 'vuex'

//import Coin from '../components/buttons/coin-btn.vue'
import BannerAddProduct from '../components/banner/banner-add-product.vue'
<<<<<<< HEAD
import Table from '../components/table/mainTable/table.vue'
import CardAddProduct from '../components/card/addMarketCard.vue'
import ShowItemInMarket from '../components/card/showItemInMarket.vue'
=======
import Table from '../components/table/table.vue'
import CardAddProduct from '../components/card/addMarketCard.vue'
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a

export default {
    name: 'mainPage',
    components: {
       // Coin,
       BannerAddProduct,
       Table,
<<<<<<< HEAD
       CardAddProduct,
       ShowItemInMarket,
    },
    computed: {
        ...mapState(['addMarket', 'showItemInMarket'])
=======
       CardAddProduct
    },
    data(){
        return {
            
        }
    },
    methods: {

    },
    computed: {
        ...mapState(['addMarket'])
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
    }
  }
</script>
<style>
    .toRight-item {
    margin-bottom: 10px;
    }
    .toRight-enter-active, .toRight-leave-active {
    transition: all 1s;
    }
    .toRight-enter, .toRight-leave-to {
    opacity: 0;
    transform: translateY(30px);
    }
</style>