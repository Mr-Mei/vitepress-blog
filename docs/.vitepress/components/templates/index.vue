<template>
  <div>
    <div v-for="(item, index) in templatesData" :key="index">
      <h2>{{ index + 1 }}. {{ item.name }}</h2>
      <component :is="item.Component" />
      <details v-if="item.Source">
        <summary>查看源码</summary>
        <component :is="item.Source" />
      </details>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTemplates } from '../../hooks/useTemplates.ts'
import { ref, onMounted } from 'vue'

const templatesData = ref([] as any[])
onMounted(async () => {
  const { getTemplates } = useTemplates()
  templatesData.value = await getTemplates() // 设置数据
})
</script>
