import { generateSidebar } from 'vitepress-sidebar'

export const useAutoSidebar = () => {
  // 定义过滤条件
  const filterConfig = [
    { text: '随笔录', link: '/知识库/comment' },
    { text: '关于我', link: '/知识库/about' },
    { text: 'api examples', link: '/知识库/api-examples' },
    { text: 'markdown examples', link: '/知识库/markdown-examples' },
  ]

  // 判断某项是否需要过滤
  const shouldFilterItem = (item: any) => {
    return filterConfig.some((filter) => filter.text === item.text && filter.link === item.link)
  }

  // 自动生成侧边栏
  const autoSidebar = () => {
    const result: any = generateSidebar({
      documentRootPath: '/docs',
      collapseDepth: 2,
      useTitleFromFrontmatter: true,
      sortMenusByFrontmatterDate: true,
      sortMenusOrderByDescending: true,
    })

    // 遍历过滤掉符合过滤条件的项
    return result.map((group: any) => ({
      ...group,
      items: group.items.filter((item: any) => !shouldFilterItem(item)),
    }))
  }

  return {
    autoSidebar,
  }
}
