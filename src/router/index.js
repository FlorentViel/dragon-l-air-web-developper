import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css';
import welcome from '../views/welcome.vue'
import aboutMe from '../views/aboutMe.vue'
import service from '../views/service.vue'
import projet from '../views/projet.vue'
import contact from '../views/contact.vue'
import privacyPolicy from '../views/privacyPolicy.vue'
import PrivacyPolicy from '@/views/privacyPolicy.vue'
import ServiceDetail from '@/views/service_detail.vue'


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
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/service/:id',
      name: 'ServiceDetail',
      component: ServiceDetail,
      props: true
    }
  ]
});


export default router
