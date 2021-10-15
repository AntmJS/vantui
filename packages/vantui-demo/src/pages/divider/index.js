import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Divider } from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <Block>
        <DemoBlock className="white" title="基础用法" padding>
          <divider></divider>
        </DemoBlock>
        <DemoBlock className="white" title="内容位置" padding>
          <divider contentPosition="center">文本</divider>
          <divider contentPosition="left">文本</divider>
          <divider contentPosition="right">文本</divider>
        </DemoBlock>
        <DemoBlock className="white" title="虚线" padding>
          <divider dashed></divider>
        </DemoBlock>
        <DemoBlock className="white" title="自定义样式" padding>
          <divider
            contentPosition="center"
            style="color: #1989fa;border-color: #1989fa;font-size: 18px;"
          >
            文本
          </divider>
        </DemoBlock>
      </Block>
    )
  }
}
