import Taro from '@tarojs/taro'
import { render, unmountComponentAtNode } from '@tarojs/react'
import { document } from '@tarojs/runtime'

export type ExtraNode = {
  renderNode?: (node: JSX.Element | React.ReactNode) => void
  removeNode?: () => void
}

export function createExtraNode(): ExtraNode {
  const view: any[] = [] // 支持单个内容的更新，如toast插入后，新元素覆盖，旧元素延时移除

  const renderNode = (node: JSX.Element | React.ReactNode) => {
    if (view[0]) {
      setTimeout(() => {
        removeNode()
      }, 10 * 16.66)
    }
    const currentPages = Taro.getCurrentPages()
    const currentPage = currentPages.length
      ? currentPages[currentPages.length - 1]
      : null
    if (currentPage) {
      const currentView = document.createElement('view')
      const path = currentPage['$taroPath']
      const pageElement = document.getElementById(path)
      render(node, currentView)
      view.push(currentView)
      pageElement?.appendChild(currentView)
    }
  }

  const removeNode = () => {
    const currentPages = Taro.getCurrentPages()
    const currentPage = currentPages.length
      ? currentPages[currentPages.length - 1]
      : null
    const rView = view[0]
    if (currentPage && rView) {
      const rView = view[0]
      view.splice(0, 1)
      const path = currentPage['$taroPath']
      const pageElement = document.getElementById(path)
      try {
        pageElement?.removeChild?.(rView)
      } catch (err) {
        console.info(`@antmjs/vantui: 
        Does not support the execution of a purely imperative component cleanup method when the component is destroyed`)
      }
      unmountComponentAtNode(rView)
    }
  }

  return {
    renderNode,
    removeNode,
  }
}
