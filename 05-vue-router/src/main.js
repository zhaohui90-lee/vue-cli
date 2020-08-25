import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

console.log(router);

// 前端渲染 后端渲染
// 后端渲染 jsp/php 从后端获取数据 组装数据 然后动态放在页面上
// 后端路由：后端处理URL和页面之间的映射关系

// 前后端分离 后端只提供数据 不负责任何阶段的内容
// $.ajax(url: api接口 success: function) 获取到的数据由js负责解析渲染

// 单页面复用阶段(SPA) 特点是在前后端分离的基础上加了一层前端路由
// 整个网页只有一个html页面 --- 单页面复应用
// 前端路由： 统一加载静态资源，通过前端路由（映射关系）抽取所需页面需要的资源 减少对后端服务器访问的压力

// location.hash = 'xxx' 改变路由的hash值
// HTML5的history模式：pushState  栈结构
// HTML5的history模式：pushReplace  不能back
// HTML5的history模式：go 前进后退  back 后退一步 forward向前一步

// 打包以后的dist文件夹中的js app.xxx --->业务代码 manifest.xxx ---> 底层支撑代码 vendor.xxx ---> 第三方代码

// 懒加载：用到时 再加载 ；当打包构建应用时 js包会变得非常大 影响页面加载
// 如果我们能把不通路由对应的组件分割成不同的代码块 然后当路由被访问的时候才加载对应组件 这样就更加高效

// 懒加载的方式：
// 方式一：结合Vue的异步组件和Webpack的代码分析
// const home = resolve => { require.ensure(['../components/Home.vue'],
//                            () => { resolve(require('../components/Home.vue')) })}
// 方式二： AMD写法
// const About = resolve = require(['../components/About.vue'], resolve);
// 方式三：在ES6中 我们可以更加简单的写法来组织Vue异步组件和Webpack的代码分割
// const Home = () => import('../components/Home.vue')

// 路由的嵌套
//children: [
//         {
//           path: '',
//           redirect: 'news'
//         },
//         {
//           path: 'news',
//           component: () => import('../components/HomeNews')
//         },
//         {
//           path: 'message',
//           component: () => import('../components/HomeMessage')
//         }
//       ]

/**
 * 路由参数的传递 参数传递的方式
 *
 * 1.params的类型
 *  配置路由格式：/router/:id
 *  传递的方式：在path后面跟上对应的值
 *  传递后形成的路径：/router/123,/router/abc
 *
 *  2.query的类型
 *  配置路由格式：/router 也就是普通配置
 *  传递的方式：对象中使用query的key作为传递方式
 *  传递后形成的路径：/router?id=123,/router?id=abc
 *
 *  URL 统一资源定位符 URI 统一资源定位符
 *    [协议类型]://[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]
 *    protocol://host:port/path?query#fragmant
 */

// Object.defineProperty(Vue.prototype, '$test', {
//   get() {
//     return 'hahah'
//   }
// })
//

// 导航守卫
// 生命周期函数 created mounted updated
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  console.log(to);
  document.title = to.matched[0].meta.title
  next()
})
// 导航守卫补充
// beforeEach afterEach 全局守卫
// 路由独享守卫
// 组件内守卫

// 完整的导航解析流程
// 1.导航被触发。
// 2.在失活的组件里调用 beforeRouteLeave 守卫。
// 3.调用全局的 beforeEach 守卫。
// 4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
// 5.在路由配置里调用 beforeEnter。
// 6.解析异步路由组件。
// 7.在被激活的组件里调用 beforeRouteEnter。
// 8.调用全局的 beforeResolve 守卫 (2.5+)。
// 9.导航被确认。
// 10.调用全局的 afterEach 钩子。
// 11.触发 DOM 更新。
// 12.调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

// keep-alive 保存组件内状态 Vue内置的一个组件 可以是被包好的组件保留状态 避免重新渲染


