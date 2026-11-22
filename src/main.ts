import './app/styles/index.css'
import '@fontsource-variable/onest'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './app/ui/App.vue'
import router from './app/router'
import { vuetify } from './app/plugins/vuetify'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.use(vuetify)

app.mount('#app')
