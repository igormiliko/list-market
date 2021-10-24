<<<<<<< HEAD
import { createStore } from 'vuex'
=======
import {createStore} from 'vuex'
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
import translateAPP from './modules/translate'

const store = createStore({
  state: () => ({
    LANGUAGE: 'en-US',
    TRANSLATE: translateAPP,
<<<<<<< HEAD
    marketList: [{name: 'banana', price:'2.35'}, {name: 'maçã', price:'2.35'}],
    toShowAddProductPage: false,
    addMarket: false,
    showItemInMarket: false,
    showLanguages: false,
    showLogin: false,
    showRegister: false,
    showForgot: false,
=======
    marketList: [{name: 'banana', price:'2.35'}],
    toShowAddProductPage: false,
    addMarket: true,
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
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
<<<<<<< HEAD
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
    toShowLogin(state){
      state.showLogin = !state.showLogin
    },
=======
    }
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
  }
})

export default store