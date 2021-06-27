import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
//modules imports
import storyline from './storyline'
import score from './score'



export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    storyline,score
  },
});
