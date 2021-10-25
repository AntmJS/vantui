import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Switch, Dialog, dialog } from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    checked: true,
    checked2: true,
  }

  onChange = ({ detail }) => {
    this.setState({ checked: detail })
  }

  onChange2 = ({ detail }) => {
    dialog
      .confirm({
        title: '提示',
        message: '是否切换开关？',
      })
      .then((res) => {
        this.setState({ checked2: detail })
      })
  }

  render() {
    const { checked, checked2 } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法" padding>
          <Switch checked={checked} onChange={this.onChange}></Switch>
        </DemoBlock>
        <DemoBlock title="禁用状态" padding>
          <Switch checked={checked} disabled onChange={this.onChange}></Switch>
        </DemoBlock>
        <DemoBlock title="加载状态" padding>
          <Switch checked={checked} loading onChange={this.onChange}></Switch>
        </DemoBlock>
        <DemoBlock title="自定义大小" padding>
          <Switch
            checked={checked}
            size="24px"
            onChange={this.onChange}
          ></Switch>
        </DemoBlock>
        <DemoBlock title="自定义颜色" padding>
          <Switch
            checked={checked}
            activeColor="#07c160"
            inactiveColor="#ee0a24"
            onChange={this.onChange}
          ></Switch>
        </DemoBlock>
        <DemoBlock title="异步控制" padding>
          <Switch
            checked={checked2}
            size="36px"
            onChange={this.onChange2}
          ></Switch>
        </DemoBlock>
        <Dialog id="van-dialog"></Dialog>
      </Block>
    )
  }
}
