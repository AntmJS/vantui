import Taro from '@tarojs/taro'
import { render, unmountComponentAtNode } from '@tarojs/react'
import { document } from '@tarojs/runtime'

// 目前仅支持全局插入的元素时唯一的

let view = null

export const renderNode = (node: JSX.Element) => {
  const currentPages = Taro.getCurrentPages()
  const currentPage = currentPages[currentPages.length - 1]
  if (currentPage) {
    view = document.createElement('view')
    const path = currentPage['$taroPath']
    const pageElement = document.getElementById(path)
    render(node, view)
    pageElement?.appendChild(view)
  }
}

export const removeNode = () => {
  const currentPages = Taro.getCurrentPages()
  const currentPage = currentPages[currentPages.length - 1]
  if (currentPage && view) {
    const path = currentPage['$taroPath']
    const pageElement = document.getElementById(path)
    pageElement?.removeChild(view)
    unmountComponentAtNode(view)
  }
}
