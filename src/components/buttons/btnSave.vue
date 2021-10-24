<template>
    <button class="w-28 sm:w-60 md:w-72 lg:w-52 h-8 border rounded-md border-green-400 text-center text-green-400 hover:bg-green-400 hover:text-white">
        {{saveBtn}}
    </button>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'BtnSave',
    data: () => ({
        saveBtn: 'Save'
    }),
    methods: {
        putLanguage() {
                if(this.LANGUAGE == 'en-US') {
                    this.saveBtn = this.TRANSLATE.saveBtn.EN
                }
                else if(this.LANGUAGE == 'pt-BR') {
                    this.saveBtn = this.TRANSLATE.saveBtn.PT
                }
                else if(this.LANGUAGE == 'es-ES') {
                    this.saveBtn = this.TRANSLATE.saveBtn.ES
                }
                else if(this.LANGUAGE == 'ru') {
                    this.saveBtn = this.TRANSLATE.saveBtn.RU
                }
                else if(this.LANGUAGE == 'ch') {
                    this.saveBtn = this.TRANSLATE.saveBtn.CH
                }
                else if(this.LANGUAGE == 'ko') {
                    this.saveBtn = this.TRANSLATE.saveBtn.KO
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
        ...mapState(['LANGUAGE', 'TRANSLATE'])
    }
}
</script>
