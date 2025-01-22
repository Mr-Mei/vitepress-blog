<template>
  <div>
    <div v-for="(item, index) in templatesData" :key="index">
      <!-- 添加 id 和手动插入锚点 -->
      <h2 :id="'_layout-' + (index + 1) + '-' + item.name.replace(/\s+/g, '-')">
        <strong>{{ index + 1 }}. {{ item.name }}</strong>
        <!-- 用于生成跳转链接 -->
        <a
          :href="'#_layout-' + (index + 1) + '-' + item.name.replace(/\s+/g, '-')"
          class="header-anchor"
          aria-label="'Permalink to ' + layout.name"
        >
          ​
        </a>
      </h2>
      <component :is="item.Component" />
      <details v-if="item.Source">
        <summary>查看源码</summary>
        <component :is="item.Source" />
      </details>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useTemplates } from '../../hooks/useTemplates.ts'
import { useOutline } from '../../hooks/useOutline.ts'

const templatesData = ref([] as any[])

onMounted(async () => {
  const { getTemplates } = useTemplates()
  templatesData.value = await getTemplates() // 设置数据

  // 调用 useOutline hook 来处理目录生成
  useOutline(templatesData.value)
})

// 在组件卸载前清理新的目录元素
onBeforeUnmount(() => {
  const newOutlineElement = document.querySelector('.VPDocAsideOutline.newOutline')
  if (newOutlineElement) {
    // 删除新插入的目录元素
    newOutlineElement.remove()
  }
})
</script>
