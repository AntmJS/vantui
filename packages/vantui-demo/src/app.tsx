import { usePageNotFound, navigateTo } from '@tarojs/taro'
import { useEffect } from 'react'
import './app.less'

export default function App(props: any) {
  usePageNotFound(() => {
    navigateTo({
      url: '/pages/dashboard/index',
    })
  })

  useEffect(() => {
    // 解决文档展示时图片被拖拽
    if (process.env.TARO_ENV === 'h5') {
      setTimeout(() => {
        const imgs = document.getElementsByTagName('img') || []
        for (let i = 0; i < imgs.length; i++) {
          const img = imgs[i]
          img?.addEventListener('mousedown', function (e) {
            e.preventDefault()
          })
        }
      }, 2000)
    }
  }, [props.children])

  return (
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    props.children
  )
}
