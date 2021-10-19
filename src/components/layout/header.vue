<template>
  <header class="absolute w-full h-12 bg-blue-600 border-b text-white shadow-xl">
      <nav class="flex flex-row justify-around pt-2 shadow-lg">
        <div>
          <div @click="debug" class="material-icons cursor-pointer">shopping_cart</div>
          <span class="material-icons text-blue-600">
            arrow_drop_down
          </span>           
        </div>
          <div class="text-2xl text-yellow-400">{{ titleApp }}</div>
        <div>
          <button @click="toShowLanguagesTrue()" class="material-icons">translate</button>  
          <span @click="toShowLanguagesTrue()" class="material-icons cursor-pointer text-white">
            arrow_drop_down
          </span>           
        </div>
      </nav>
        <div v-show="showLanguages">
          <div @click="toShowLanguagesFalse()"  class="absolute z-40 w-32 shadow-xl border-r-4 border-b-4 border-gray-100 text-center bg-gray-50 text-blue-400 rounded-md float-right right-0 md:right-28 lg:right-32 top-12">
            <ul>
              <li @click="changeLang('en-US')" class="hover:bg-gray-100 py-2 px-4 pt-2 rounded-t-md cursor-pointer">ENG</li>
              <li @click="changeLang('pt-BR')" class="hover:bg-gray-100 py-2 px-4 cursor-pointer border-t border-gray-200">PT-BR</li>
              <li @click="changeLang('es-ES')" class="hover:bg-gray-100 py-2 px-4 cursor-pointer border-t border-gray-200">ESP</li>
              <li @click="changeLang('ch')" class="hover:bg-gray-100 py-2 px-4 cursor-pointer border-t border-gray-200">中国</li>
              <li @click="changeLang('ru')" class="hover:bg-gray-100 py-2 px-4 cursor-pointer border-t border-b border-gray-200">Pусский</li>
              <li @click="changeLang('ko')" class="hover:bg-gray-100 py-2 px-4 pb-2 rounded-b-md cursor-pointer">한국어</li>
            </ul>
          </div>
        </div>
  </header>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'header',
    data(){
        return {
            titleApp: 'Market List',
        }
    },

    methods: {
       ...mapMutations(['changeLang', 'toShowLanguagesTrue', 'toShowLanguagesFalse']),
      debug() {
        this.toShowLanguages()
      },
    },

    watch:{
      LANGUAGE(){
        this.LANGUAGE == 'en-US' ? this.titleApp = this.TRANSLATE.titleApp.EN :
        this.LANGUAGE == 'pt-BR' ? this.titleApp = this.TRANSLATE.titleApp.PT : 
        this.LANGUAGE == 'es-ES' ? this.titleApp = this.TRANSLATE.titleApp.ES : 
        this.LANGUAGE == 'ru' ? this.titleApp = this.TRANSLATE.titleApp.RU : 
        this.LANGUAGE == 'ch' ? this.titleApp = this.TRANSLATE.titleApp.CH : 
        this.LANGUAGE == 'ko' ? this.titleApp = this.TRANSLATE.titleApp.KO :
        this.titleApp = this.TRANSLATE.titleApp.EN 
      }
    },

    computed: {
      ...mapState(['LANGUAGE', 'TRANSLATE', 'addMarket', 'showLanguages'])
    }
}
</script>