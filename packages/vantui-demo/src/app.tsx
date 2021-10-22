import { useDidShow, useDidHide } from '@tarojs/taro'
import React, { useEffect } from 'react'
import './app.less'
interface IProps {
  children: React.ReactNode
}

export default function App(props: IProps) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    console.log('app launch')
    return function () {
      // 这个暂时不确定会不会触发
      console.log('app unlaunch')
    }
  }, [])

  // 对应 onShow
  useDidShow(() => {
    console.log('app show')
  })

  // 对应 onHide
  useDidHide(() => {
    console.log('app hide')
  })

  return (
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    <>
      {/* props.children 是将要被渲染的页面 */}
      {props.children}
    </>
  )
}
