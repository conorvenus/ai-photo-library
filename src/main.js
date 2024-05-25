import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import './index.css'

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
    .mount('#app')
