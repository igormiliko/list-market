import {createStore} from 'vuex'
import translateAPP from './modules/translate'

const store = createStore({
  state: () => ({
    LANGUAGE: 'en-US',
    TRANSLATE: translateAPP,
    marketList: [{name: 'banana', price:'2.35'}],
    toShowAddProductPage: false
  }),
  mutations: {
    changeLang (state, lang) {
      state.LANGUAGE = lang
    },
    showProductPage(state) {
      state.toShowAddProductPage = !state.toShowAddProductPage
    }
  }
})

export default store