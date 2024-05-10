<template>
  <div class="container">
    <div id="cesiumMap" v-if="status.value=='3d'"></div>
    <div id="osMap" v-else-if="status.value=='2d'"></div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, onUnmounted, watch } from 'vue'

// 定义变量
const status = ref("2d")
const viewer = ref(null)
const ol = ref(null)
// 使用 toRefs 解构响应式对象
const { count } = toRefs(state)

// 定义生命周期钩子
onMounted(() => {
  console.log('组件挂载完成')
})

onUnmounted(() => {
  console.log('组件卸载完成')
})

// 定义方法
const increment = () => {
  state.count++
}

// 定义计算属性
const doubleCount = computed(() => {
  return state.count * 2
})

// 定义监听器
watch(() => state.count, (newCount, oldCount) => {
  console.log(`count 从 oldCount 变为 newCount`)
})

// 暴露变量和方法
defineExpose({
  message,
  increment
})

</script>

<style scoped>
/* 你的样式代码 */
</style>