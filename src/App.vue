<template>
<div class="overflow-hidden">
  <Header class="absolute"/>
  <MainPage />
</div>
</template>

<script>
import Header from './components/layout/header.vue'
import MainPage from './pages/main-page.vue'

export default {
  name: 'App',
  components: {
    Header,
    MainPage
  },
}
</script>

<style src="./assets/tailwind.css"/>
