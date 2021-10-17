<template>
<div class="overflow-hidden">
  <Header class="absolute" />
    <MainPage v-show="!toShowAddProductPage" />
    <AddPage v-show="toShowAddProductPage"/>
</div>
</template>

<script>
import { mapState } from 'vuex'

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
  computed: {
    ...mapState(['toShowAddProductPage'])
  }
}
</script>

<style src="./assets/tailwind.css"/>
