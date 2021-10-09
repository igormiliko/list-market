<template>
  <header class="absolute w-full h-12 bg-blue-600 border-b text-white shadow-xl">
      <nav class="flex flex-row justify-around pt-2 shadow-lg">
        <div>
          <div class="material-icons">shopping_cart</div>
          <span class="material-icons text-blue-600">
            arrow_drop_down
          </span>           
        </div>
          <div class="text-2xl text-yellow-400">{{ titleApp }}</div>
        <div>
          <button @click="showLanguages = !showLanguages" class="material-icons">translate</button>  
          <span @click="showLanguages = !showLanguages" class="material-icons cursor-pointer text-white">
            arrow_drop_down
          </span>           
        </div>
      </nav>
        <div v-show="showLanguages">
          <div @click="showLanguages = false" class="absolute z-40 w-32 shadow-xl border-r-4 border-b-4 border-gray-100 text-center bg-gray-50 text-blue-400 rounded-md float-right right-0 md:right-28 lg:right-32 top-12">
            <ul>
              <li @click="toEnglish" class="hover:bg-gray-100 py-2 px-4 pt-2 rounded-t-md cursor-pointer">ENG</li>
              <li @click="toPortuguese" class="hover:bg-gray-100 py-2 px-4 cursor-pointer border-t border-gray-200">PT-BR</li>
              <li @click="toSpanish" class="hover:bg-gray-100 py-2 px-4 cursor-pointer border-t border-gray-200">ESP</li>
              <li @click="toChinese" class="hover:bg-gray-100 py-2 px-4 cursor-pointer border-t border-gray-200">中国</li>
              <li @click="toRussian" class="hover:bg-gray-100 py-2 px-4 cursor-pointer border-t border-b border-gray-200">Pусский</li>
              <li @click="toKorean" class="hover:bg-gray-100 py-2 px-4 pb-2 rounded-b-md cursor-pointer">한국어</li>
            </ul>
          </div>
        </div>
  </header>
</template>
<script>
import translate from '../../assets/TRNSLT-APP/translate.js'

export default {
    name: 'header',
    data(){
        return {
            showLanguages: false,
            titleApp: 'Market List',
            translate: translate
        }
    },

    methods: {
      debug() {
        console.log(translate.LANGUAGE)
      },

      toEnglish(){
        translate.LANGUAGE = 'english'
        translate.LANGUAGE == 'english' ? this.titleApp = translate.titleApp.EN : 1
      },
      toPortuguese(){
        translate.LANGUAGE = 'portuguese'
        translate.LANGUAGE == 'portuguese' ? this.titleApp = translate.titleApp.PT : 1
      },
      toRussian(){
        translate.LANGUAGE = 'russian'
        translate.LANGUAGE == 'russian' ? this.titleApp = translate.titleApp.RU : 1
      },
      toSpanish(){
        translate.LANGUAGE = 'spanish'
        translate.LANGUAGE == 'spanish' ? this.titleApp = translate.titleApp.ES : 1
      },
      toKorean(){
        translate.LANGUAGE = 'korean'
        translate.LANGUAGE == 'korean' ? this.titleApp = translate.titleApp.KO : 1
      },
      toChinese(){
        translate.LANGUAGE = 'chinese'
        translate.LANGUAGE == 'chinese' ? this.titleApp = translate.titleApp.CH : 1
      }
    },
}
</script>