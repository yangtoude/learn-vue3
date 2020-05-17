// MVVM中的View
// 只有View，和viewModel及Model都无交互

<template>
  <div class="home">
    <h1>Tab</h1>
    <tab :headers="['tab1', 'tab2', 'tab3']">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </tab>
  </div>
</template>

<script>
// @ is an alias to /src
import Tab from '@/components/tab'

export default {
  name: 'UseTab',
  components: {
    Tab
  }
}
</script>

<style lang="scss" scoped>
</style>
