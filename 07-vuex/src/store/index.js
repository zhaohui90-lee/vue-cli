import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations"
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

// 1.挂载vuex
Vue.use(Vuex)

// 2.创建对象
const state = {
  counter: 100,
  info: {name: 'kobe', age: 40}
}

const store = new Vuex.Store({
  state,
  // 参数被称之为mutations的载荷 payload
  // payload可以是一个参数 可以是一个对象
  mutations,
  actions,
  getters,
  // Vue使用单一状态树 多vuex模块建议放入module中划分管理
  modules: {
    a: moduleA
  }
})


// 3.导出对象
export default store
