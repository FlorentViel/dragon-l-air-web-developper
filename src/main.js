import '@/assets/styles/main.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router';
import siteMetrics from './plugins/site-metrics';

// Configuration Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';

// Ajout des icônes à la bibliothèque
library.add(faArrowLeft, faArrowRight, faArrowDown);

const app = createApp(App);

// Enregistrement global du composant Font Awesome
app.component('font-awesome-icon', FontAwesomeIcon);

// Créez votre store
const store = createStore({
    state: {
      isNext: false
    },
    mutations: {
      setIsNext(state, value) {
        state.isNext = value;
      }
    }
})

app.use(router);
app.use(store);
app.use(siteMetrics, router);

app.mount('#app');