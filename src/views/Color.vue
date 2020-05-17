// Color--MVVM中的View和VM，无Model
// View只和viewModel交互

<template>
  <div class="home">
    <div class="box" :style="{ backgroundColor: state.bgColor }"></div>
    <input type="range" v-model="state.r">
    <input type="range" v-model="state.g">
    <input type="range" v-model="state.b">
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, computed } from 'vue'

export default {
  name: 'Color',
  setup () {
    const state = reactive({
      r: 0,
      g: 0,
      b: 0,
      bgColor: computed(() => `rgb(${state.r}, ${state.g}, ${state.b})`)
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
}
input[type="range"] {
  display: block;
}
</style>
