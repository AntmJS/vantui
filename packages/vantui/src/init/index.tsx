/* eslint-disable @typescript-eslint/ban-ts-comment */
// 给react-h5用来初始化的
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { initPxTransform } from '@tarojs/taro'
import { createReactApp } from '@tarojs/runtime'

class Index extends Component {
  render() {
    return <></>
  }
}
function init() {
  createReactApp(Index, React, ReactDom, {})
  // initPxTransform的入参会根据@antmjs/plugin-vantui而更新，所以改动这里需看下插件的逻辑
  initPxTransform({
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2,
    },
  })
}
export { init }
export default init
