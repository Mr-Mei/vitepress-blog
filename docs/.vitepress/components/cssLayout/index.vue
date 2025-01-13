<template>
  <div>
    <div v-for="(layout, index) in layoutsData" :key="index">
      <h2>{{ index + 1 }}. {{ layout.name }}</h2>
      <component :is="layout.Component" />
      <details v-if="layout.Source">
        <summary>查看源码</summary>
        <component :is="layout.Source" />
      </details>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLayouts } from '../../hooks/useLayouts.ts'
import { ref, onMounted } from 'vue'

const layoutsData = ref([] as any[])
onMounted(async () => {
  const { getLayouts } = useLayouts()
  layoutsData.value = await getLayouts() // 设置数据
})
</script>
