// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNext: true,
  },
  mutations: {
    setIsNext(state, value) {
      state.isNext = value;
    },
  },
});