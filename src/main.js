// main.js
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify için
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Stil ve ikon
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import store from './store';


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
 .use(router)
 .use(store)
  .use(vuetify)
  .mount('#app')

