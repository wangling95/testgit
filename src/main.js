import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import router from './router'
import {store} from './store/index'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,//引用router
  store,
  // template: '<App/>',
  render: h =>  h(App), // 为了使用compiler（模板）模式
  components: { App }
})
