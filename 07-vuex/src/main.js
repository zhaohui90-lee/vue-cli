import Vue from 'vue'
import App from './App'
import store from "./store";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

// mutation中的方法必须是同步方法
