import Vue from 'vue';
import Vuex from 'vuex';

import robotModules from './modules/robots';
import userModules from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: robotModules,
    users: userModules,
  },
});
