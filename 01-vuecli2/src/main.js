// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    // createElement('标签', {标签的属性}, ['标签的内容'])
    // return createElement('h2',
    //   {class: 'box'},
    //   ['hello-world', createElement('button', ['按钮111'])])

    // 2.传入组件
    return createElement(App)
  }})

// runtime-compiler
// components ---> ast(抽象语法树) ---> render ---> virtual-DOM ---> UI
