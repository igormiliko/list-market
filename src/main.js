import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from './store/index'
import router from './router'


const app = createApp(App).use(router)

app.use(store)
app.mount('#app')

