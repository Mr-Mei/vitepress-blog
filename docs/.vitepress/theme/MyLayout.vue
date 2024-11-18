<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRoute, useData, inBrowser } from 'vitepress'
import { watch, nextTick, onMounted } from 'vue'
import Giscus from '@giscus/vue'
const { Layout } = DefaultTheme
const { page, isDark } = useData()
const route = useRoute()

onMounted(() => {
  hideSpecificSidebarItem()
})

watch(isDark, (dark) => {
  if (!inBrowser) return

  const iframe = document.querySelector('giscus-widget')?.shadowRoot?.querySelector('iframe')

  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? 'dark' : 'light' } } },
    'https://giscus.app'
  )
})

watch(
  () => route.path,
  (_, oldPath) => {
    if (oldPath === '/') {
      nextTick(() => {
        hideSpecificSidebarItem()
      })
    }
  }
)

// 隐藏pages
function hideSpecificSidebarItem() {
  const sidebarItems = document.querySelectorAll(
    '#VPSidebarNav > .group'
  ) as NodeListOf<HTMLElement>
  sidebarItems.forEach((item, index) => {
    const textContent = item.querySelector('.text')?.textContent?.trim()
    if (textContent === 'pages') {
      item.style.display = 'none'
      sidebarItems[index + 1].style.borderTop = 'none'
    }
  })
}
</script>

<template>
  <Layout>
    <template #doc-after>
      <div style="margin-top: 24px">
        <Giscus
          :key="page.filePath"
          repo="lee-holden/vitepress-blog-template"
          repo-id="R_kgDONRAkeA"
          category="Announcements"
          category-id="IC_kwDONRAkeM4CkXRA"
          mapping="title"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="top"
          lang="zh-CN"
          :theme="isDark ? 'dark' : 'light'"
          crossorigin="anonymous"
        />
      </div>
    </template>
  </Layout>
</template>

<style scoped lang="scss"></style>
