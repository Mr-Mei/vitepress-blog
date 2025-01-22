import { nextTick } from 'vue'

export async function useOutline(layoutsData: any[]) {
  // 等待 DOM 渲染完成后生成目录
  await nextTick(() => {
    generateOutline(layoutsData) // 动态生成目录
  })

  /**
   * 动态生成目录
   */
  function generateOutline(layoutsData: any[]) {
    // 获取当前结构中目录容器元素（原来的 VPDocAsideOutline）
    const originalOutlineElement = document.querySelector('.VPDocAsideOutline')

    if (!originalOutlineElement) return

    // 如果已经存在一个新的 VPDocAsideOutline（我们新建的）
    let newOutlineElement = document.querySelector('.VPDocAsideOutline.newOutline') as any

    if (!newOutlineElement) {
      // 如果没有新目录容器，我们就创建一个与原来结构相同的目录结构
      newOutlineElement = originalOutlineElement.cloneNode(true) as HTMLElement

      // 给新结构一个类名，标识它为新的目录容器
      newOutlineElement.classList.add('newOutline')

      // 在新的目录元素中删除任何现有的子目录项
      const newUlElement = newOutlineElement.querySelector('ul')
      if (newUlElement) {
        newUlElement.innerHTML = ''
      }

      // 获取父容器以插入新目录
      const parentElement = originalOutlineElement.parentElement
      if (parentElement) {
        parentElement.insertBefore(newOutlineElement, originalOutlineElement.nextSibling)
      }
    }

    // 获取新的 ul 元素
    const ulElement = newOutlineElement.querySelector('ul')

    // 在新 ul 中添加目录项
    if (ulElement) {
      layoutsData.forEach((layout, index) => {
        const id = `_layout-${index + 1}-${layout.name.replace(/\s+/g, '-')}` // 根据标题生成 ID
        const text = `${index + 1}. ${layout.name}` // 标题内容
        const li = document.createElement('li')
        const anchor = document.createElement('a')

        // 设置链接和内容
        anchor.href = `#${id}`
        anchor.className = 'outline-link' // 新目录项添加相同样式类
        anchor.title = text
        anchor.textContent = text

        // 直接设置样式
        setAnchorStyle(anchor)

        li.appendChild(anchor)
        ulElement.appendChild(li) // 将目录项添加到新目录中
      })
    }

    // 使新目录显示
    newOutlineElement.style.display = 'block'
  }

  // 设置样式函数
  function setAnchorStyle(anchor: HTMLAnchorElement) {
    // 直接通过 JS 设置样式
    anchor.style.display = 'block'
    anchor.style.lineHeight = '32px'
    anchor.style.fontSize = '14px'
    anchor.style.fontWeight = '400'
    anchor.style.color = 'var(--vp-c-text-2)'
    anchor.style.whiteSpace = 'nowrap'
    anchor.style.overflow = 'hidden'
    anchor.style.textOverflow = 'ellipsis'
    anchor.style.transition = 'color 0.5s'
  }
}
