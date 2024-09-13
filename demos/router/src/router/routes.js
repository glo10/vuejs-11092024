import HomeView from '@/views/HomeView.vue'
export const routes = [
    {
        // chemin (URL)
        path: '/',
        // nom de la route
        name: 'Home',
        // Composant à chargé lorsque la requête matche avec la route
        component: HomeView,
    },
    {
        path: '/actus',
        name: 'News',
        component: () => import('@/views/NewsView.vue'),
        /**
         * metadonnées qu'on peut rajouter pour gérer l'authentification
         * par exemple par l'intermédiaire de la clé isRequired
         */ 
        meta: {
            isRequiredAuth: true
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
        // before each vérification directement au niveau de la route avant d'entrer
        beforeEnter: (to, from) => {
            // to objet qui représente la route de destination finale
            // from la route par laquelle l'utilisateur provient
            // vérification d'un token dans le storage (stockage local du navigateur)
            if(!localStorage.getItem('token')) {
                return false // bloque (pas fameux, c'est mieux de rediriger)
            }
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue')
    }
]