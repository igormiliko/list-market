import { createStore } from 'vuex'
import translateAPP from './modules/translate'

const store = createStore({
  state: () => ({
    LANGUAGE: 'en-US',
    TRANSLATE: translateAPP,
    showItemInMarket: false,
    showLanguages: false,
    showRegister: false,
    showForgot: false,
    marketList: [{name: 'banana', price:'2.35'}],
    addMarket: true,
  }),
  mutations: {
    changeLang (state, lang) {
      state.LANGUAGE = lang
    },
    showAddMarket(state){
      state.addMarket = !state.addMarket
    },
    toShowItemInMarket(state){
      state.showItemInMarket = !state.showItemInMarket
    },
    toShowLanguagesTrue(state){
      state.showLanguages = true
    },
    toShowLanguagesFalse(state){
      state.showLanguages = false
    },
  }
})

export default store