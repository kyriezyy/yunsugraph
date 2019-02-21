import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    graph: null,
  },
  mutations: {
    updateGraph(state, graph) {
      state.graph = graph;
    },
  },
});

export default store
;
