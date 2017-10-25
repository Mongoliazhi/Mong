/**
 * Created by Administrator on 2017/10/25.
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    playing: false,
    playList: [],
  },
  mutations: {
    play (state) {
      state.playing = true
    },
    pause (state) {
      state.playing = false
    },
  },
  getters: {

  },
  actions:{
    add (context) {
      context.commit('add')
    },
    abb (context) {
      context.commit('abb')
    }
  }
})

export default store
