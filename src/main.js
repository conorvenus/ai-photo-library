import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiPhotograph } from 'oh-vue-icons/icons'
import App from './App.vue'
import './index.css'

addIcons(HiPhotograph)

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App)
    .use(router)
    .component('v-icon', OhVueIcon)
    .mount('#app')
