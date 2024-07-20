
import './assets/main.scss';

import { createApp } from 'vue';
import { createStore } from 'vuex'; // Import createStore from vuex
import App from './App.vue';
import router from './router';



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

const app = createApp(App);


app.use(router);
app.use(store); // Utilisez votre store

app.mount('#app');