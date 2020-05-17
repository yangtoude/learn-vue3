<template>
  <div class="tab">
    <div class="headers">
      <div
        v-for="(header, i) of headers"
        :key="i"
        @click="select(i)"
      >
        {{ header }}
      </div>
    </div>
    <div ref="contents" class="contents"><slot></slot></div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
export default {
  name: 'Tab',
  props: {
    headers: Array
  },
  setup () {
    const contents = ref(null)
    const state = reactive({
      index: 1
    })
    function select (i) {
      for (const child of contents.value.children) {
        child.style.display = 'none'
      }
      contents.value.children[i].style.display = ''
    }

    onMounted(() => {
      console.log(contents.value)
      select(0)
    })

    return {
      state,
      contents,
      select
    }
  }
}
</script>

<style lang="scss" scoped>
.headers {
  text-align: justify;
}

.headers > * {
  display: inline-block;
  border: 1px solid #000;
  padding: 5px;
  cursor: pointer;
}

.contents {
  width: 200px;
  height: 300px;
  border: 1px solid #000;
}
</style>
