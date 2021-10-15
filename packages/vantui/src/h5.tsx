/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { initPxTransform } from '@tarojs/taro'
import { createReactApp } from '@tarojs/runtime'
import '@tarojs/components/dist/taro-components/taro-components.css'

class Index extends Component {
  render() {
    return <></>
  }
}

createReactApp(Index, React, ReactDom, {})
initPxTransform({
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
})

export * from './index'
