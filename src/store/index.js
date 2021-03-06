import { createStore } from 'vuex'
import translateAPP from './modules/translate'
import APP from './modules/App'

const store = createStore({
  state: () => ({
    APP: APP,
    LANGUAGE: 'en-US',
    TRANSLATE: translateAPP,
    showItemInMarket: false,
    showLanguages: false,
    showRegister: false,
    showForgot: false,
    marketList: [{name: 'banana', price:'2.35'}],
    addMarket: false,
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