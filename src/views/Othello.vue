// MVVM的综合例子
// Othello--MVVM中的View、VM和Model

// viewModel通过代理和model交互

// view层
<template>
  <template
    class="cell"
    v-for="(cell, pos) of state.game.patterns[state.game.patterns.length - 1].pattern"
  >
  <br
    v-if="pos !== 0 && pos % 10 === 0"
    :key="pos"
  >
  <div
    class="cell"
    :key="pos"
    @click="move(pos)"
  >
    <div
      v-if="cell === 1"
      class="disc black"
    >
    </div>
    <div
      v-if="cell === 2"
      class="disc white"
    >
    </div>
  </div>
  </template>
  <div>{{ state.x }}</div>
</template>

<script>
import { reactive } from 'vue'

const game = new window.Othello.OthelloGame() // model层

// viewModel层
export default {
  name: 'Othello',
  setup () {
    const state = reactive({
      game,
      x: 1
    })
    // viewModel通过代理方法和model交互
    function move (pos) {
      game.makeMove(Math.floor(pos / 10), pos % 10)
      state.x += 1
    }
    return {
      state,
      move
    }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  width: 30px;
  height: 30px;
  background-color: darkgreen;
  display: inline-block;
  border: 1px solid #fff;
  vertical-align: bottom;
}

.disc {
  width: 26px;
  height: 26px;
  border-radius: 13px;
  margin: 2px;
}

.white {
  background-color: #fff;
}

.black {
  background-color: #000;
}
</style>
