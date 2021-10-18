<template>
    <thead class="w-full bg-blue-400 text-white">
        <tr class="h-12">
            <th></th>
            <th class="w-1/2 border-none">{{marketCol}}</th>
            <th class="w-1/2 border-none">{{priceCol}}</th>
            <th></th>
        </tr>
    </thead>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'TableHeadMarket',
    data: () => ({
        marketCol: 'Market',
        priceCol: 'Price',
    }),
     watch: {
        LANGUAGE() {
            if(this.LANGUAGE == 'en-US') {
                this.priceCol = this.TRANSLATE.table.priceCol.EN
                this.marketCol = this.TRANSLATE.table.marketCol.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.priceCol = this.TRANSLATE.table.priceCol.PT
                this.marketCol = this.TRANSLATE.table.marketCol.PT
            }
            else if(this.LANGUAGE == 'es-ES') {
                this.priceCol = this.TRANSLATE.table.priceCol.ES
                this.marketCol = this.TRANSLATE.table.marketCol.ES
            }
            else if(this.LANGUAGE == 'ru') {
                this.priceCol = this.TRANSLATE.table.priceCol.RU
                this.marketCol = this.TRANSLATE.table.marketCol.RU
            }
            else if(this.LANGUAGE == 'ch') {
                this.priceCol = this.TRANSLATE.table.priceCol.CH
                this.marketCol = this.TRANSLATE.table.marketCol.CH
            }
            else if(this.LANGUAGE == 'ko') {
                this.priceCol = this.TRANSLATE.table.priceCol.KO
                this.marketCol = this.TRANSLATE.table.marketCol.KO
            }
        }
    },
    computed: {
        ...mapState(['TRANSLATE','LANGUAGE'])
    }
}
</script>