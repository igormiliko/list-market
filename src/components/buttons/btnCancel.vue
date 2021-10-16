<template>
    <button @click="alternatePage" type="reset" class="w-1/3 h-8 border rounded-md border-red-400 text-center text-red-400 hover:bg-red-400 hover:text-white" >
        {{cancelBtn}}
    </button>
    
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'BtnCancel',
    data: () => ({
        cancelBtn: 'Cancel'
    }),
    watch: {
        LANGUAGE() {
                if(this.LANGUAGE == 'en-US') {
                    this.cancelBtn = this.TRANSLATE.cancelBtn.EN
                }
                else if(this.LANGUAGE == 'pt-BR') {
                    this.cancelBtn = this.TRANSLATE.cancelBtn.PT
                }
                else if(this.LANGUAGE == 'es-ES') {
                    this.cancelBtn = this.TRANSLATE.cancelBtn.ES
                }
                else if(this.LANGUAGE == 'ru') {
                    this.cancelBtn = this.TRANSLATE.cancelBtn.RU
                }
                else if(this.LANGUAGE == 'ch') {
                    this.cancelBtn = this.TRANSLATE.cancelBtn.CH
                }
                else if(this.LANGUAGE == 'ko') {
                    this.cancelBtn = this.TRANSLATE.cancelBtn.KO
                }
            }
    },
    computed: {
        ...mapState(['LANGUAGE', 'TRANSLATE'])
    }
}
</script>
