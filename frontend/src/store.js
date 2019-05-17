import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

// Util plugin
import util from "@/plugins/util.js";
Vue.use(util);

// Necessary to let Vuex access util functions
let _app = new Vue();

export default new Vuex.Store({
  state: {
    THEME: "light"
  },
  getters: {
    IS_DARK_THEME: state => _app.$util.themeToDarkBoolean(state.THEME),
    THEME_VAL: (_, getters) => _app.$util.darkBooleanToTheme(getters.IS_DARK_THEME)
  },
  mutations: {
    SET_THEME: (state, payload) => (state.THEME = payload)
  },
  actions: {
    SET_THEME: ({ commit }, payload) => {
      commit("SET_THEME", payload);
    },
    SYNC_SET: () => {},
    SYNC_GET: () => {},
  }
});
