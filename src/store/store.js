import Vue from 'vue';
import Vuex from 'vuex';

import services from './modules/services';
import rooms from './modules/rooms';


Vue.use(Vuex);

export const store = new Vuex.Store({
  modules :{
    rooms,
    services
  }
})