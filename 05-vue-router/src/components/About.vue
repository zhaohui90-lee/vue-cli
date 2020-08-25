<template>
  <div>
    <h2>我是About</h2>
    <p>456789</p>
  </div>
</template>

<script>
  export default {
    name: "About",
    // 生命周期函数 组件被创建时
    created() {
      console.log('created');
    },
    destroyed() {
      console.log('destroyed');
    }
  }
</script>

<style scoped>

</style>
