import Vue from 'vue';
import Vuex from 'vuex';

import robotModules from './modules/robots';
import userModules from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-state-foo',
  },
  modules: {
    robots: robotModules,
    users: userModules,
  },
  getters: {
    foo(state) {
      return `root-getter/${state.foo}`;
    },
  },
});
