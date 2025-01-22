/**
 * 动态生成模板目录下的内容
 */

import { defineAsyncComponent, markRaw } from 'vue'

// Glob import Vue components
const componentModules = (import.meta as any).glob(
  '../../.vitepress/components/templates/**/*Demo.vue'
)

const markdownModules = (import.meta as any).glob('../../.vitepress/components/templates/**/*.md')

export const useTemplates = () => {
  const getTemplates = async () => {
    const templates = [] as any[]

    for (const [path, importFn] of Object.entries(componentModules) as any) {
      const Component = defineAsyncComponent(importFn)
      const module = await importFn()
      const componentName = module.default?.name

      if (componentName) {
        // Match the associated Markdown file
        const markdownPath = path.replace(/\.vue$/, 'Source.md')
        const Source: any = markdownModules[markdownPath]
          ? defineAsyncComponent(markdownModules[markdownPath])
          : null

        templates.push({
          name: componentName,
          Component: Component ? markRaw(Component) : null,
          Source: Source ? markRaw(Source) : null,
        })
      }
    }

    return templates
  }

  return { getTemplates }
}
