import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Search } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    value: '',
  }

  onChange = (e) => {
    this.setState({
      value: e.detail,
    })
  }

  onSearch = () => {
    if (this.state.value) {
      Taro.showToast({
        title: '搜索：' + this.state.value,
        icon: 'none',
      })
    }
  }

  onClick = () => {
    if (this.state.value) {
      Taro.showToast({
        title: '搜索：' + this.state.value,
        icon: 'none',
      })
    }
  }

  onCancel = () => {
    Taro.showToast({
      title: '取消',
      icon: 'none',
    })
  }

  onClear = () => {
    Taro.showToast({
      title: '清空',
      icon: 'none',
    })
  }

  render() {
    const { value } = this.state
    return (
      <DemoPage title="Search 搜索">
        <Block>
          <DemoBlock title="基本用法">
            <Search
              defaultValue={value}
              placeholder="请输入搜索关键词"
              onSearch={this.onSearch}
            ></Search>
          </DemoBlock>
          <DemoBlock title="事件监听">
            <Search
              defaultValue={value}
              showAction
              placeholder="请输入搜索关键词"
              onSearch={this.onSearch}
              onCancel={this.onCancel}
              onClear={this.onClear}
            ></Search>
          </DemoBlock>
          <DemoBlock title="搜索框内容对齐">
            <Search
              defaultValue={value}
              inputAlign="center"
              placeholder="请输入搜索关键词"
            ></Search>
          </DemoBlock>
          <DemoBlock title="禁用搜索框">
            <Search
              disabled
              defaultValue={value}
              placeholder="请输入搜索关键词"
            ></Search>
          </DemoBlock>
          <DemoBlock title="自定义背景色">
            <Search
              defaultValue={value}
              shape="round"
              background="#4fc08d"
              placeholder="请输入搜索关键词"
            ></Search>
          </DemoBlock>
          <DemoBlock title="自定义按钮">
            <Search
              value={value}
              label="地址"
              shape="round"
              placeholder="请输入搜索关键词"
              onSearch={this.onSearch}
              onChange={this.onChange}
              renderAction={
                <Block>
                  <View onClick={this.onClick}>搜索</View>
                </Block>
              }
            ></Search>
          </DemoBlock>
        </Block>
      </DemoPage>
    )
  }
}
