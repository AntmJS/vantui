import { Component } from 'react'
import { View } from '@tarojs/components'
import { SwipeCell, Notify, Dialog, CellGroup, Cell } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  onClose = (event) => {
    const { position, instance } = event.detail
    switch (position) {
      case 'left':
      case 'cell':
        instance.close()
        break
      case 'right':
        Dialog.confirm({
          message: '确定删除吗？',
        }).then(() => {
          instance.close()
        })
        break
    }
  }
  onOpen = (event) => {
    const { position, name } = event.detail
    switch (position) {
      case 'left':
        Notify.show({
          type: 'primary',
          message: `${name}${position}部分展示open事件被触发`,
        })
        break
      case 'right':
        Notify.show({
          type: 'primary',
          message: `${name}${position}部分展示open事件被触发`,
        })
        break
    }
  }

  render() {
    return (
      <DemoPage title="SwipeCell 滑动单元格">
        <>
          <DemoBlock title="基础用法">
            <SwipeCell
              rightWidth={65}
              leftWidth={0}
              renderLeft={
                <>
                  <View className="van-swipe-cell__left_">选择</View>
                </>
              }
              renderRight={
                <>
                  <View className="van-swipe-cell__right_">删除</View>
                </>
              }
            >
              <CellGroup>
                <Cell title="单元格" value="内容"></Cell>
              </CellGroup>
            </SwipeCell>
          </DemoBlock>
          <DemoBlock title="异步关闭">
            <SwipeCell
              id="swipe-cell"
              rightWidth={65}
              leftWidth={65}
              asyncClose
              onClose={this.onClose}
              renderLeft={
                <>
                  <View className="van-swipe-cell__left_">选择</View>
                </>
              }
              renderRight={
                <>
                  <View className="van-swipe-cell__right_">删除</View>
                </>
              }
            >
              <CellGroup>
                <Cell title="单元格" value="内容"></Cell>
              </CellGroup>
            </SwipeCell>
          </DemoBlock>
          <DemoBlock title="主动打开">
            <SwipeCell
              id="swipe-cell2"
              rightWidth={65}
              leftWidth={65}
              name="示例"
              onOpen={this.onOpen}
              renderLeft={
                <>
                  <View className="van-swipe-cell__left_">选择</View>
                </>
              }
              renderRight={
                <>
                  <View className="van-swipe-cell__right_">删除</View>
                </>
              }
            >
              <CellGroup>
                <Cell title="单元格" value="内容"></Cell>
              </CellGroup>
            </SwipeCell>
          </DemoBlock>
          <Dialog id="van-dialog"></Dialog>
          <Notify id="van-notify"></Notify>
        </>
      </DemoPage>
    )
  }
}
