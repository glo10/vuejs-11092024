import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
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
    routes // routes : routes factorisé en routes
})

/**
 * Gestion des droits au niveau du router 
 * (possibilité de faire une opération similaire
 * avec beforeEnter au niveau de la définition de la route)
 */
router.beforeEach((to, from, next) => {
    if (to.path !== '/' && to.meta.isRequiredAuth && !sessionStorage.getItem('token')) {
      next({ name: 'login' })
    } else {
      next()
    }
  })

export default router