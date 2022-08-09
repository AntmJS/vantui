import { usePageNotFound, navigateTo } from '@tarojs/taro'
import './app.less'

export default function App(props: any) {
  usePageNotFound(() => {
    navigateTo({
      url: '/pages/dashboard/index',
    })
  })
  return (
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    props.children
  )
}
