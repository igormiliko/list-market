<template>
    <div @mousemove="axlesToDrag" v-if="!showCard" class="w-full h-full relative mt-12" key="table">
        <BannerAddProduct />
        <Table />
    </div>
</template>
<script>
//import Coin from '../components/buttons/coin-btn.vue'
import BannerAddProduct from '../components/banner/banner-add-product.vue'
import Table from '../components/table/table.vue'

export default {
    name: 'mainPage',
    components: {
       // Coin,
       BannerAddProduct,
       Table
    },
    data(){
        return {
            showTotal: false,
            totalOfBestPrice: 0,
            totalTXT: '',
            screenX: '',
            screenY: '',
            axelsXY: '',
            startDrag: false,
        }
    },
    methods: {
        startToDrag(){
            this.startDrag = true
        },
          stopToDrag(){
            this.startDrag = false
        },
        axlesToDrag(e){
        if(this.startDrag == true){
            //console.log(e)
            this.screenX = e.screenX
            this.screenY = e.screenY
        }
    }
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