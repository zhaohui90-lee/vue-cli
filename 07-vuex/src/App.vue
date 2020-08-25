<template>
  <div id="app">
    <button @click="incrementCount(5)">+5</button>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{getCounterSquare}}</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="update">修改</button>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdate">异步修改名字</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    incrementCount(count) {
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    // update() {
    //   this.$store.dispatch('aUpdateInfo', {
    //     message: '我是携带的信息',
    //     success: () => {
    //       console.log('回调成功了');
    //     }
    //   })
    // }
    update() {
      this.$store
        .dispatch('aUpdateInfo', '我是携带的信息')
        .then(res => {
          console.log('里面已经完成了回调');
          console.log(res);
        })
    },
    updateName() {
      this.$store.commit('updateName', 'lisi')
    },
    asyncUpdate() {
      this.$store.dispatch('aUpdateName')
    }
  },
  computed: {
    getCounterSquare() {
      return this.$store.state.counter * this.$store.state.counter
    }
  }
}
</script>

<style>

</style>
