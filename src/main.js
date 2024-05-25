import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiPhotograph, MdPhotoalbumOutlined, BiFolder, BiBookmarkHeart, CoLocationPin, BiPeople, MdAddphotoalternateOutlined } from 'oh-vue-icons/icons'
import App from './App.vue'
import './index.css'

addIcons(HiPhotograph, MdPhotoalbumOutlined, BiFolder, BiBookmarkHeart, CoLocationPin, BiPeople, MdAddphotoalternateOutlined)

import PhotosView from './views/PhotosView.vue'

const routes = [
    { path: '/', redirect: '/photos' },
    { path: '/photos', component: PhotosView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App)
    .use(router)
    .component('v-icon', OhVueIcon)
    .mount('#app')
