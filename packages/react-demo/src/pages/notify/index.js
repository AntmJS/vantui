import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Notify, Button, notify } from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.less'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  showNotify = () => {
    notify('通知内容')
  }

  showCustomColor = () => {
    notify({
      message: '自定义颜色',
      color: '#ad0000',
      background: '#ffe1e1',
    })

    // notify.clear()
  }

  showCustomDuration = () => {
    notify({
      duration: 1000,
      message: '自定义时长',
    })
  }

  showNotifyByType = (event) => {
    const { type } = event.currentTarget.dataset
    notify({
      type,
      message: '通知内容',
    })
  }

  showSafe = () => {
    notify({
      message: '通知内容',
      safeAreaInsetTop: true,
    })
  }

  render() {
    return (
      <Block>
        <DemoBlock padding title="基础用法">
          <Button type="danger" onClick={this.showNotify}>
            基础用法
          </Button>
        </DemoBlock>
        <DemoBlock padding title="通知类型">
          <View className="demo-margin-bottom">
            <Button
              className="demo-margin-right"
              type="info"
              onClick={(e) => {
                this.showNotifyByType({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'primary' },
                  },
                  target: {
                    dataset: { type: 'primary' },
                  },
                })
              }}
            >
              主要通知
            </Button>
            <Button
              className="demo-margin-right"
              type="primary"
              onClick={(e) => {
                this.showNotifyByType({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'success' },
                  },
                  target: {
                    dataset: { type: 'success' },
                  },
                })
              }}
            >
              成功通知
            </Button>
          </View>
          <View className="demo-margin-bottom">
            <Button
              className="demo-margin-right"
              type="danger"
              onClick={(e) => {
                this.showNotifyByType({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'danger' },
                  },
                  target: {
                    dataset: { type: 'danger' },
                  },
                })
              }}
            >
              危险通知
            </Button>
            <Button
              type="warning"
              onClick={(e) => {
                this.showNotifyByType({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'warning' },
                  },
                  target: {
                    dataset: { type: 'warning' },
                  },
                })
              }}
            >
              警告通知
            </Button>
          </View>
        </DemoBlock>
        <DemoBlock padding title="自定义通知">
          <Button
            type="primary"
            className="demo-margin-right"
            onClick={this.showCustomColor}
          >
            自定义颜色
          </Button>
          <Button type="primary" onClick={this.showCustomDuration}>
            自定义时长
          </Button>
        </DemoBlock>
        <DemoBlock padding title="插入状态栏高度">
          <Button
            type="primary"
            className="demo-margin-right"
            onClick={this.showSafe}
          >
            插入状态栏高度
          </Button>
        </DemoBlock>
        <Notify id="van-notify"></Notify>
      </Block>
    )
  }
}
