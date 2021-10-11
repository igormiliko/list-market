import {createStore} from 'vuex'
import translateAPP from './modules/translate'

const store = createStore({
  state: () => ({
    LANGUAGE: 'en-US',
    TRANSLATE: translateAPP,
    marketList: [{name: 'banana', price:'2.35'}],
    toShowAddProductPage: false,
    addMarket: true,
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
    }
  }
})

export default store