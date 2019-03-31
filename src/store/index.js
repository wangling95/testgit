import vuex from 'vuex'
import Vue from 'vue'
import test1 from './modules/test1'


Vue.use(vuex);
var store = new vuex.Store({
  modules: {
    test1: test1
  }
})

export {store}