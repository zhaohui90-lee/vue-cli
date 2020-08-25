export default {
  addCount(state) {
    state.counter++
  },
  incrementCount(state, payload) {
    console.log(payload);
    state.counter += payload.count
  },
  updateInfo(state) {
    state.info.name = 'zhangsan'
  }
}
