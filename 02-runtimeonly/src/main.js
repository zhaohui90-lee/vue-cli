import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// runtime-only
// .vue文件中的template是由谁处理的？
// 是由vue-template-compiler处理的
// render --> virtual-DOM ---> UI
