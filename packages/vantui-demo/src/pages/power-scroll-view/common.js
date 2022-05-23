/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
export const mockRequest = async (_startIndex, isRefresh, name) => {
  const sleep = (t) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, t)
    })
  const TOTAL = 100
  let startIndex = _startIndex
  if (isRefresh) {
    startIndex = 0
  }
  if (startIndex >= TOTAL) {
    return []
  }
  console.log(`${name}:请求~`, 'isRefresh:', isRefresh)
  await sleep(1200)
  let list = []
  for (let i = 0; i < 20; i++) {
    list.push(`${name}:`)
  }
  return list
}
export const ScrollContainer = (props) => {
  const { header, footer, children, className, ...rest } = props
  return (
    <View className={`scroll-container ${className || ''}`} {...rest}>
      {header && <View className="scroll-container-header">{header}</View>}
      <View className="scroll-container-content">{children}</View>
      {footer && <View className="scroll-container-footer">{footer}</View>}
    </View>
  )
}
