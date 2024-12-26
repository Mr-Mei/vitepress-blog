<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRoute, useData, inBrowser } from 'vitepress'
import { watch, nextTick, onMounted, ref } from 'vue'
import Giscus from '@giscus/vue'
import Loading from '../components/Loading.vue'
const loading = ref(true)
const { Layout } = DefaultTheme
const { page, isDark } = useData()
const route = useRoute()

onMounted(() => {
  hideLoading()
  // hideSpecificSidebarItem()
})

// 隐藏loading
const hideLoading = () => {
  loading.value = false
}

watch(isDark, (dark) => {
  if (!inBrowser) return
  const iframe = document.querySelector('giscus-widget')?.shadowRoot?.querySelector('iframe')
  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? 'dark' : 'light' } } },
    'https://giscus.app'
  )
})

// watch(
//   () => route.path,
//   (_, oldPath) => {
//     if (oldPath === '/') {
//       nextTick(() => {
//         hideSpecificSidebarItem()
//       })
//     }
//   }
// )

// // 隐藏pages
// function hideSpecificSidebarItem() {
//   const sidebarItems = document.querySelectorAll(
//     '#VPSidebarNav > .group'
//   ) as NodeListOf<HTMLElement>
//   sidebarItems.forEach((item, index) => {
//     const textContent = item.querySelector('.text')?.textContent?.trim()
//     if (textContent === 'pages') {
//       item.style.display = 'none'
//       sidebarItems[index + 1].style.borderTop = 'none'
//     }
//   })
// }
</script>

<template>
  <Loading v-show="loading" />
  <Layout v-show="!loading">
    <template #layout-bottom>
      <div class="bottom">
        <div>
          本站总访问量
          <span id="busuanzi_value_site_pv" class="font-bold">--</span> 次 本站访客数
          <span id="busuanzi_value_site_uv" class="font-bold">--</span> 人次
        </div>
        <p>© 2024-2025 文艺小书生</p>
      </div>
    </template>
    <template #doc-after>
      <div style="margin-top: 24px">
        <Giscus
          :key="page.filePath"
          repo="Mr-Mei/vitepress-blog"
          repo-id="R_kgDONh_0-g"
          category="Announcements"
          category-id="DIC_kwDONh_0-s4ClhnV"
          mapping="pathname"
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

<style lang="scss" scoped>
.bottom {
  margin-left: 5%;
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--border-color-1);
  text-align: center;

  p {
    margin-top: 5px;
  }
}
</style>
