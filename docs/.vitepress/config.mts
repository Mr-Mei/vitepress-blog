import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import { HeaderPlugin } from './plugins/headerPlugin'
import { useAutoSidebar } from './hooks/useAutoSidebar'

const { autoSidebar } = useAutoSidebar()
const fileAndStyles: Record<string, string> = {}

export default defineConfig({
  base: '/vitepress-blog',
  title: '岁月辗转，情怀如初',
  description: 'A VitePress Site',
  vite: {
    plugins: [
      pagefindPlugin({
        btnPlaceholder: '搜索',
        placeholder: '搜索文档',
        emptyText: '空空如也',
        heading: '共: {{searchResult}} 条结果',
        customSearchQuery(input) {
          return input
            .replace(/[\u4E00-\u9FA5]/g, ' $& ')
            .replace(/\s+/g, ' ')
            .trim()
        },
      }),
      HeaderPlugin(),
    ],
    ssr: {
      noExternal: ['naive-ui', 'date-fns', 'vueuc'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  },
  postRender(context) {
    const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
    const style = styleRegex.exec(context.content)?.[1]
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.content = context.content.replace(styleRegex, '')
    context.content = context.content.replace(vitepressPathRegex, '')
  },
  transformHtml(code, id) {
    const html = id.split('/').pop()
    if (!html) return
    const style = fileAndStyles[`/${html}`]
    if (style) {
      return code.replace(/<\/head>/, `${style}</head>`)
    }
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '随笔录', link: '/知识库/comment' },
      { text: '关于', link: '/知识库/about' },
      {
        text: '推荐',
        items: [
          {
            items: [
              { text: '网页精灵', link: '/常用/webPage' },
              { text: '工具精灵', link: '/常用/tools' },
            ],
          },
        ],
      },
    ],

    sidebar: autoSidebar(),

    socialLinks: [{ icon: 'github', link: 'https://github.com/Mr-Mei' }],
    outlineTitle: '文章目录',
  },
})
