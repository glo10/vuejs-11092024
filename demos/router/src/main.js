import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const app = createApp(App)
// Ajout du router
const router = createRouter({
    /**
     * mode de navigation, ici du web classique avec
     *  la fonction createWebHistory()
     * Autres modes
     *  createWebHashHistory() : navigation avec des ancres #
     *  createMemoryHistory() : pour les tests et SSR (Server Side Rendering)
     * */ 
    history: createWebHistory(),
    /**
     * Tableau d'objets contenant les infos sur les routes
     */
    routes: [
        {
            // chemin (URL)
            path: '/',
            // nom de la route
            name: 'Home',
            // Composant à chargé lorsque la requête matche avec la route
            component: HomeView 
        },
        {
            path: '/actus',
            name: 'News',
            component: () => import('@/views/NewsView.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('@/views/ContactView.vue')
        }
    ]
})
app.use(router)
app.mount('#app')
