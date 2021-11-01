import { Component } from 'react'
import { showToast } from '@tarojs/taro'

import { NavBar, Icon } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  onClickLeft = () => {
    showToast({ title: '点击返回', icon: 'none' })
  }

  onClickRight = () => {
    showToast({ title: '点击按钮', icon: 'none' })
  }

  render() {
    return (
      <DemoPage title="NavBar 导航栏">
        <>
          <DemoBlock title="基础用法">
            <NavBar
              title="标题"
              rightText="按钮"
              leftArrow
              onClickLeft={this.onClickLeft}
              onClickRight={this.onClickRight}
            ></NavBar>
          </DemoBlock>
          <DemoBlock title="高级用法">
            <NavBar
              title="标题"
              leftText="返回"
              leftArrow
              renderRight={
                <>
                  <Icon name="search" className="icon" size="36"></Icon>
                </>
              }
            ></NavBar>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
