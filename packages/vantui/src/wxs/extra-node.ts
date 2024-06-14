import Taro from '@tarojs/taro'
import { render, unmountComponentAtNode } from '@tarojs/react'
import { document } from '@tarojs/runtime'

export type ExtraNode = {
  renderNode?: (node: JSX.Element | React.ReactNode) => void
  removeNode?: () => void
}

/** @example */
// let extraNode: IExtraNode  = {}
// if (Object.key(extraNode).length) {
//   extraNode = createExtraNode()
// }
// export default extraNode
export function createExtraNode(): ExtraNode {
  let view = null

  const renderNode = (node: JSX.Element | React.ReactNode) => {
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

  const removeNode = () => {
    const currentPages = Taro.getCurrentPages()
    const currentPage = currentPages[currentPages.length - 1]
    if (currentPage && view) {
      const path = currentPage['$taroPath']
      const pageElement = document.getElementById(path)
      pageElement?.removeChild(view)
      unmountComponentAtNode(view)
      view = null
    }
  }

  return {
    renderNode,
    removeNode,
  }
}
