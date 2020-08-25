<template>
  <div id="app">
    <!--  router-link: 该标签是一个vue-router中已经内置的组件 它会被渲染成一个<a>标签  -->
    <!--  tag标签 自定义渲染标签  -->
    <!--  replace 改变由history.pushState改成history.replaceState  -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>
    <router-link :to="{path: '/profile', query: {name: 'zhangsan', age: 18, height: 1.88}}" tag="button" replace>
      档案
    </router-link>
    <!--    <button @click="homeClick">首页首页</button>-->
    <!--    <button @click="aboutClick">关于关于</button>-->
    <!--    <button @click="userClick">用户</button>-->
    <!--    <button @click="profileClick">档案</button>-->
    <!--  类似于占位 该标签会根据当前的路径 动态渲染出不同的组件  -->
    <!--  网页的其他内容 比如顶部的标题/导航 或者底部的一些版权信息等会和<router-view>处于一个等级  -->
    <!--  在路由切换时 切换的是<router-view>挂载的组件 其他内容不会发生改变  -->
    <!--    <router-view></router-view>-->
    <!--  exclude表示keep-alive排除相应的组件 -->
    <keep-alive exclude="About">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'zhangsan'
      }
    },
    methods: {
      homeClick() {
        // this.$router.push('home')
        this.$router.replace('/home')
      },
      aboutClick() {
        // this.$router.push('about')
        this.$router.replace('/about')
      },
      userClick() {
        this.$router.replace('/user/' + this.userId)
      },
      profileClick() {
        this.$router.replace({
          path: '/profile',
          query: {
            name: 'zhangsan',
            age: 18,
            height: 1.88
          }
        })
      }
    }
  }
</script>

<style>
  .router-link-active {
    color: #f00000;
  }

  .active {
    color: #f00;
  }
</style>
