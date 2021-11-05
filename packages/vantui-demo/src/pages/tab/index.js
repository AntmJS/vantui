import { Component } from 'react'
import { showToast } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Tabs, Tab, Icon } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    tabs2: [1, 2],
    tabs3: [1, 2, 3, 5, 6],
    tabs4: [1, 2, 3, 4],
    tabs6: [1, 2, 3, 4, 5, 6],
    tabsWithName: [
      { name: 'a', index: 1 },
      { name: 'b', index: 2 },
      { name: 'c', index: 3 },
    ],
  }

  onClickDisabled = (event) => {
    showToast({
      title: `标签 ${event.detail.index + 1} 已被禁用`,
      icon: 'none',
    })
  }

  onChange = (event) => {
    showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none',
    })
  }

  onClickNavRight = () => {
    showToast({
      title: '点击 right nav',
      icon: 'none',
    })
  }

  onClick = (event) => {
    showToast({
      title: `点击标签 ${event.detail.index + 1}`,
      icon: 'none',
    })
  }

  render() {
    const { tabs4, tabsWithName, tabs6, tabs3, tabs2 } = this.state
    return (
      <DemoPage title="Tab 标签页">
        <View className="tab-page">
          <DemoBlock title="基础用法">
            <Tabs active={1} onChange={this.onChange}>
              {tabs4.map((item, index) => {
                return (
                  <Tab key={index} title={'标签 ' + item}>
                    <View className="content">{'内容' + item}</View>
                  </Tab>
                )
              })}
            </Tabs>
          </DemoBlock>
          <DemoBlock title="通过名称匹配">
            <Tabs active="b">
              {tabsWithName.map((item, index) => {
                return (
                  <Tab key={index} name={item.name} title={'标签 ' + index}>
                    <View className="content">{'内容' + item.index}</View>
                  </Tab>
                )
              })}
            </Tabs>
          </DemoBlock>
          <DemoBlock title="横向滚动">
            <Tabs>
              {tabs6.map((item, index) => {
                return (
                  <Tab key={index} title={'标签 ' + item}>
                    <View className="content">{'内容' + item}</View>
                  </Tab>
                )
              })}
            </Tabs>
          </DemoBlock>
          <DemoBlock title="禁用标签">
            <Tabs onDisabled={this.onClickDisabled}>
              {tabs3.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    disabled={index === 1}
                    title={'标签 ' + item}
                  >
                    <View className="content">{'内容' + item}</View>
                  </Tab>
                )
              })}
            </Tabs>
          </DemoBlock>
          <DemoBlock title="样式风格">
            <Tabs type="card" tabClass="special-tab">
              {tabs3.map((item, index) => {
                return (
                  <Tab key={index} title={'标签 ' + item}>
                    <View className="content-2">{'内容' + item}</View>
                  </Tab>
                )
              })}
            </Tabs>
          </DemoBlock>
          <DemoBlock title="点击事件">
            <Tabs onClick={this.onClick}>
              {tabs2.map((item, index) => {
                return (
                  <Tab key={index} title={'标签 ' + item}>
                    <View className="content">{'内容' + item}</View>
                  </Tab>
                )
              })}
            </Tabs>
          </DemoBlock>
          <DemoBlock title="粘性布局">
            <Tabs sticky>
              {tabs4.map((item, index) => {
                return (
                  <Tab key={index} title={'标签 ' + item}>
                    <View className="content">{'内容' + item}</View>
                  </Tab>
                )
              })}
            </Tabs>
          </DemoBlock>
          <DemoBlock title="切换动画">
            <Tabs animated>
              {tabs4.map((item, index) => {
                return (
                  <Tab key={index} title={'标签 ' + item}>
                    <View className="content">{'内容' + item}</View>
                  </Tab>
                )
              })}
            </Tabs>
          </DemoBlock>
          <DemoBlock title="滑动切换">
            <Tabs swipeable>
              {tabs4.map((item, index) => {
                return (
                  <Tab key={index} title={'标签 ' + item}>
                    <View className="content">{'内容' + item}</View>
                  </Tab>
                )
              })}
            </Tabs>
          </DemoBlock>
          <DemoBlock title="自定义标题">
            <Tabs
              active={1}
              onChange={this.onChange}
              tabClass="special-tab"
              tabActiveClass="special-tab-active"
              renderNavRight={
                <>
                  <Icon
                    name="search"
                    className="right-nav"
                    onClick={this.onClickNavRight}
                  ></Icon>
                </>
              }
            >
              {tabs4.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    title={'标签 ' + item}
                    dot={index === 1}
                    info={index === 2 ? 99 : null}
                  >
                    <View className="content">{'内容' + item}</View>
                  </Tab>
                )
              })}
            </Tabs>
          </DemoBlock>
        </View>
      </DemoPage>
    )
  }
}
