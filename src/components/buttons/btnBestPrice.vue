<template>
    <div>
        <div class="flex justify-center w-full py-4">
            <button @click="debug" class="h-12 px-4 border rounded-md border-green-400 text-center text-green-400 hover:bg-green-400 hover:text-white">
                {{bestPriceTXT}}</button>
        </div>
          
        <!--<div class="flex text-yellow-400 text-2xl justify-center w-full py-4">
        {{bestPriceItem.name}} | {{currency}}{{bestPriceItem.price}}
        </div>-->
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'BtnBestPriceBtn',
    data: () => ({
        bestPriceTXT: 'Best price',
    }),
    methods: {
        debug(){
            console.log(this.TRANSLATE.bestPriceTXT.EN)
        }
    },
    watch: {
        LANGUAGE() {
            if(this.LANGUAGE == 'en-US') {
                this.bestPriceTXT = this.TRANSLATE.bestPriceTXT.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.bestPriceTXT = this.TRANSLATE.bestPriceTXT.PT
            }
            else if(this.LANGUAGE == 'es-ES') {
                this.bestPriceTXT = this.TRANSLATE.bestPriceTXT.ES
            }
            else if(this.LANGUAGE == 'ru') {
                this.bestPriceTXT = this.TRANSLATE.bestPriceTXT.RU
            }
            else if(this.LANGUAGE == 'ch') {
                this.bestPriceTXT = this.TRANSLATE.bestPriceTXT.CH
            }
            else if(this.LANGUAGE == 'ko') {
                this.bestPriceTXT = this.TRANSLATE.bestPriceTXT.KO
            }
        }
    },
    computation: {
        ...mapState(['LANGUAGE', 'TRANSLATE'])
    }
}
</script>
