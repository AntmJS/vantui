// @ts-nocheck

import { JSX, ReactNode } from 'react'
import { render, unmountComponentAtNode } from '@tarojs/react'
import { document } from '@tarojs/runtime'
import Taro from '@tarojs/taro'

let id = 0
const renderNodes: Record<string, any[]> = {}
const timers: Record<string, Record<string, NodeJS.Timeout>> = {}

export function createDynamicNode<T extends Record<any, any>>({
  element,
  delay = 60,
  idPrefix = 'common', // 'dialog'、'toast'、'notify'
}: {
  element: (props: T) => JSX.Element | ReactNode
  delay?: number
  idPrefix: string
}) {
  if (!idPrefix) return console.error('createDynamicNode: idPrefix is unset')
  if (!renderNodes[idPrefix]) {
    renderNodes[idPrefix] = []
  }

  if (!timers[idPrefix]) {
    timers[idPrefix] = {}
  }

  const Com = element
  const view = document.createElement('View')
  id += 1
  view.id = `${idPrefix || ''}_element_${id}`
  const currentPages = Taro.getCurrentPages()
  const currentPage = currentPages[currentPages.length - 1] // 获取当前页面对象
  const path = currentPage.$taroPath

  const clearTimer = () => {
    const t = timers[idPrefix][view.id]
    if (t) {
      clearTimeout(t)
      delete timers[idPrefix][view.id]
    }
  }
  const destroy = () => {
    for (let i = 0; i < renderNodes[idPrefix]?.length; i++) {
      if (renderNodes[idPrefix] === view) {
        renderNodes[idPrefix]?.splice(i, 1)
        break
      }
    }
    clearTimer()
    try {
      unmountComponentAtNode(view)
      const pageElement = document.getElementById(path)
      pageElement?.removeChild(view)
    } catch (error) {}
  }

  const clear = () => {
    for (const key in timers) {
      if (key === idPrefix) {
        const m = timers[key]

        for (const k in m) {
          const t = m[k]
          clearTimeout(t)
        }
      }
    }

    renderNodes[idPrefix]?.map((view) => {
      try {
        unmountComponentAtNode(view)
        const pageElement = document.getElementById(path)
        pageElement?.removeChild(view)
      } catch (error) {}
    })

    delete renderNodes[idPrefix]
  }

  return {
    show: (props: T) => {
      if (delay) {
        clearTimer()
        timers[idPrefix][view.id] = setTimeout(() => {
          destroy()
        }, delay)
      }
      const isRenderFlag = renderNodes[idPrefix]?.filter((item) => {
        return item === view
      })?.length
      if (!!isRenderFlag) return
      render(<Com {...(props ?? {})} />, view)
      const pageElement = document.getElementById(path)
      pageElement?.appendChild(view)
      renderNodes[idPrefix].push(view)
    },
    hide: destroy,
    clear: clear,
  }
}
