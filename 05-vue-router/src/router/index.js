import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const home = () => import('../components/Home')
const news = () => import('../components/HomeNews')
const message = () => import('../components/HomeMessage')
const about = () => import('../components/About')
const user = () => import('../components/User')
const profile = () => import('../components/Profile')


const router = new Router({
  routes: [
    {
      // 默认路径
      path: '',
      // 重定向
      redirect: '/home'
    },
    {
      path: '/home',
      // ES6中的路由懒加载
      component: home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: news
        },
        {
          path: 'message',
          component: message
        }
      ]
    },
    {
      path: '/about',
      component: about,
      meta: {
        title: '关于'
      },
      // 路由独享守卫
      beforeEnter(to, from, next) {
        console.log('about beforeEnter')
        next()
      }
    },
    {
      path: '/user/:userId',
      component: user,
      meta: {
        title: '用户'
      },
    },
    {
      path: '/profile',
      component: profile,
      meta: {
        title: '档案'
      },
    }
  ],
  // 默认的hash模式改成history模式
  mode: 'history',
  // 统一修改激活状态的router-link
  linkActiveClass: 'active'
})

// 前置守卫(guard) 全局守卫
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  // meta 元数据 --- 描述数据的数据
  // console.log(to);
  document.title = to.matched[0].meta.title
  next()
})
// 后置钩子(hook)
router.afterEach((to, from) => {
})

export default router;
