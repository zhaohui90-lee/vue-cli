<template>
  <div>
    <h2>我是首页</h2>
    <p>123456</p>

    <router-link to="/home/news" tag="button" replace>新闻</router-link>
    <router-link to="/home/message" tag="button" replace>消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        path: '/home/news'
      }
    },
    beforeCreate() {
    },
    // 生命周期函数 组件被创建时
    created() {
      console.log('created');
    },
    destroyed() {
      console.log('destroyed');
    },
    // activated只有组件保持keep-alive时候才有效果
    activated() {
      console.log('activated');
      this.$router.push(this.path)
    },
    beforeRouteLeave(to, from, next) {
      console.log(this.$route.path)
      this.path = this.$route.path
      next()
    }
    // // 组件被挂载时
    // mounted() {
    //   console.log('mounted');
    // },
    // // 界面被更新
    // updated() {
    //   console.log('updated');
    // }
  }
</script>

<style scoped>

</style>
