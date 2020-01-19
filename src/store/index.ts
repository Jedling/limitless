import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    toggleLogin(state, value) {
      state.loggedIn = value;
    }
  },
  actions: {
    //action kallar mutations genom d
    async checkIfLoggedIn(context) {
      let loggedIn = await axios({
        method: 'get',
        url: '/api/login'
      })
      if (loggedIn.data._id){
        context.commit('toggleLogin', true)
      } else {
        context.commit('toggleLogin', false)
      }
    }
  },
  modules: {}
});
