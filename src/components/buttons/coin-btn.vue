<template>
<<<<<<< HEAD
    <button id="coin-spin" class="absolute bottom-2 text-white w-16 h-16 ml-2 bg-yellow-400 rounded-full text-3xl cursor-pointer hover:w-20 hover:h-20 border-r-4 border-b-2 border-t border-yellow-500">
        {{currency}}
    </button> 
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Coin',
    data: () => ({
        currency: '$'
    }),
    watch:{
        LANGUAGE() {
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
    computed: {
        ...mapState(['LANGUAGE', 'TRANSLATE'])
    }
}
</script>
<style>
#coin-spin{
    transition: transform 0.8s;
	transform-style: preserve-3d;
}

#coin-spin:hover {
   transform: rotateY(180deg)
=======
    <button id="coin-spin" class="text-white w-16 h-16 ml-2 bg-yellow-400 rounded-full text-3xl cursor-pointer hover:w-20 hover:h-20 border-r-4 border-b-2 border-t border-yellow-500">
    {{currency}}
    </button> 
</template>
<script>
export default {
    name: 'Coin'
}
</script>
<style>
#coin-spin:hover {
    animation: spin 4s infinite;
}

@keyframes spin {
    0%{transform: rotateY(0deg);}
    25%{transform: rotateY(180deg);}
    50%{transform: rotateY(0deg);}
    75%{transform: rotateY(0deg);}
    100%{transform: rotateY(360deg);}
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
}
</style>