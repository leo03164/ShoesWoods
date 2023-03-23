import { createApp } from 'vue'
import './reset.css'
import App from './App.vue'

// Load Vuetify
import vuetify from './plugins/vuetify'

// Pinia
import { createPinia } from 'pinia'

// Vue Router
import router from './router/router'

// Create Vue Instance
const app = createApp(App)

app.use(vuetify)

const pinia = createPinia()
app.use(pinia)

app.use(router)

app.mount('#app')
