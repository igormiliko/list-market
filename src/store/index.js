import { createStore } from 'vuex'
import translateAPP from './modules/translate'

const store = createStore({
  state: () => ({
    LANGUAGE: 'en-US',
    TRANSLATE: translateAPP,
    marketList: [{name: 'banana', price:'2.35'}, {name: 'maçã', price:'2.35'}],
    addMarket: false,
    showItemInMarket: false,
    showLanguages: false,
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

  }
})

export default store