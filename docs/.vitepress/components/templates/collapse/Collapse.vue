<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Array, String],
    default: () => [],
  },
  accordion: {
    type: Boolean,
    default: false, // 默认为非互斥模式
  },
})

// 声明 emits
const emit = defineEmits(['update:modelValue'])

// 初始化活动项
const activeKeys = ref(Array.isArray(props.modelValue) ? [...props.modelValue] : [props.modelValue])

// 更新活动状态
const toggle = (key: string) => {
  if (props.accordion) {
    // 互斥模式：如果已经展开则关闭，否则只允许一个展开
    activeKeys.value = activeKeys.value.includes(key) ? [] : [key]
  } else {
    // 自由模式：多项可以同时展开
    if (activeKeys.value.includes(key)) {
      activeKeys.value = activeKeys.value.filter((k) => k !== key)
    } else {
      activeKeys.value.push(key)
    }
  }

  // 触发 update:modelValue 事件，通知父组件状态变化
  emit('update:modelValue', props.accordion ? activeKeys.value[0] : [...activeKeys.value])
}

// 监听 props.modelValue 的变化，保持同步
watch(
  () => props.modelValue,
  (newValue) => {
    activeKeys.value = Array.isArray(newValue) ? [...newValue] : [newValue]
  },
  { immediate: true }
)

// 提供上下文给子组件
provide('collapseContext', { activeKeys, toggle })
</script>

<style scoped>
.collapse {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}
</style>
