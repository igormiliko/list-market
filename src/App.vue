<template>
  <div @pointermove="axlesToDrag" class="w-screen h-screen">  
    <Header class="absolute" />
      <div @click="toShowLanguagesFalse()" class="overflow-hidden">   
        <router-view></router-view>
      </div>
    <CoinBtn @pointerdown="startDrag = true" @pointerup="startDrag = false" :style="[drag]" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import Header from './components/layout/header.vue'
//import RegisterPage from './pages/registerPage.vue'
//import ForgotPassPage from './pages/forgotPassPage.vue'
//import LogIn from './pages/logIn.vue'
//import MainPage from './views/main-page.vue'
//import AddPage from './pages/add-page.vue'
import CoinBtn from './components/buttons/coin-btn.vue'

export default {
  name: 'App',
  components: {
    Header,
    //MainPage,
    //AddPage,
    //LogIn,
    //MainPage,
    //AddPage,
    //LogIn,
    CoinBtn,
    //RegisterPage,
    //ForgotPassPage,

  },
  data: () => ({
    screenX: '',
    screenY: '',
    startDrag: false,
  }),
  methods: {
    ...mapMutations(['toShowLanguagesFalse']),
    axlesToDrag(e){
      if(this.startDrag == true){
        console.log(e)
        this.screenX = e.clientX
        this.screenY = e.clientY
      }
    }
  },
  computed: {
    ...mapState(['toShowAddProductPage', 'showLogin']),
    drag(){
      if(this.startDrag == true){
        return {top: `${this.screenY - 25}px`, left: `${this.screenX - 25}px`}
      }
      else
      {
        return {top: `${this.screenY}px`, left: `${this.screenX}px`}
      }
    },
  },
}
</script>

<style src="./assets/tailwind.css"/>
