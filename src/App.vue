<template>
<div class="overflow-hidden">
  <Header class="absolute" />
    <MainPage @click="toShowLanguagesFalse()" v-show="!toShowAddProductPage" />
    <AddPage @click="toShowLanguagesFalse()" v-show="toShowAddProductPage"/>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import Header from './components/layout/header.vue'
import MainPage from './pages/main-page.vue'
import AddPage from './pages/add-page.vue'

export default {
  name: 'App',
  components: {
    Header,
    MainPage,
    AddPage
  },
  methods: {
    ...mapMutations(['toShowLanguagesFalse'])
  },
  computed: {
    ...mapState(['toShowAddProductPage'])
  }
}
</script>

<style src="./assets/tailwind.css"/>
