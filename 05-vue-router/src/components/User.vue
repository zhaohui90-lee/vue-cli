<template>
  <div>
    <h2>我是用户界面</h2>
    <span>用户具体信息</span>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
    <h2>{{$route.params}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        // $route获取处于活跃状态的路由
        return this.$route.params.userId
      }
    },
    methods: {
      btnClick() {
        // 所有的组件都继承自Vue类的原型
        console.log(this.$router);
        console.log(this.$route);

        console.log(this.$test);
      }
    }
  }
</script>

<style scoped>
  h2 {
    font-family: 黑体;
  }
</style>
