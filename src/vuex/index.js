/**
 * Created by Administrator on 2017/9/26.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


import musicPayServer from './musicPayServer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    musicPayServer
  }
})
