<template>
    <thead class="w-full bg-blue-400 text-white">
        <tr class="h-12">
            <th></th>
            <th class="w-1/2 border-none">{{productCol}}</th>
            <th class="w-1/2 border-none">{{priceCol}}</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'tableHead',
    data: () => ({
        productCol: 'Product',
        priceCol: 'Price',
    }),
    watch: {
        LANGUAGE(){
            if(this.LANGUAGE == 'en-US') {
                this.productCol = this.TRANSLATE.table.productCol.EN
                this.priceCol = this.TRANSLATE.table.priceCol.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.productCol = this.TRANSLATE.table.productCol.PT
                this.priceCol = this.TRANSLATE.table.priceCol.PT
            }
             else if(this.LANGUAGE == 'es-ES') {
                this.productCol = this.TRANSLATE.table.productCol.ES
                this.priceCol = this.TRANSLATE.table.priceCol.ES
            }
             else if(this.LANGUAGE == 'ru') {
                this.productCol = this.TRANSLATE.table.productCol.RU
                this.priceCol = this.TRANSLATE.table.priceCol.RU
            }
             else if(this.LANGUAGE == 'ch') {
                this.productCol = this.TRANSLATE.table.productCol.CH
                this.priceCol = this.TRANSLATE.table.priceCol.CH
            }
             else if(this.LANGUAGE == 'ko') {
                this.productCol = this.TRANSLATE.table.productCol.KO
                this.priceCol = this.TRANSLATE.table.priceCol.KO
            }
        }
    },
    computed: {
        ...mapState(['LANGUAGE', 'TRANSLATE']),
    }
}
</script>
