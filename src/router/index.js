import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css';
import welcome from '../components/welcome.vue'
import aboutMe from '../components/aboutMe.vue'
import service from '../components/service.vue'
import projet from '../components/projet.vue'
import contact from '../components/contact.vue'
import privacyPolicy from '../components/privacyPolicy.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: welcome, 
    },

    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: aboutMe
    },
    
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/projet',
      name: 'projet',
      component: projet
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/privacyPolicy',
      name: 'privacyPolicy',
      component: privacyPolicy
    }
  ]
});


export default router
