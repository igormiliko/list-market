import { createStore } from 'vuex'
import translateAPP from './modules/translate'

const store = createStore({
  state: () => ({
    LANGUAGE: 'en-US',
    TRANSLATE: translateAPP,
    marketList: [{name: 'banana', price:'2.35'}, {name: 'maçã', price:'2.35'}],
    toShowAddProductPage: false,
    addMarket: false,
    showItemInMarket: false
  }),
  mutations: {
    changeLang (state, lang) {
      state.LANGUAGE = lang
    },
    alternatePage(state) {
      state.toShowAddProductPage = !state.toShowAddProductPage
    },
    showAddMarket(state){
      state.addMarket = !state.addMarket
    },
    toShowItemInMarket(state){
      state.showItemInMarket = !state.showItemInMarket
    }
  }
})

export default store