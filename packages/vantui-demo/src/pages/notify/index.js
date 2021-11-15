import { Component } from 'react'
import { View } from '@tarojs/components'
import { Notify, Button } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  showNotify = () => {
    Notify.show('通知内容')
  }

  showCustomColor = () => {
    Notify.show({
      message: '自定义颜色',
      color: '#ad0000',
      background: '#ffe1e1',
    })

    // Notify.clear()
  }

  showCustomDuration = () => {
    Notify.show({
      duration: 1000,
      message: '自定义时长',
    })
  }

  showNotifyByType = (event) => {
    const { type } = event.currentTarget.dataset
    Notify.show({
      type,
      message: '通知内容',
    })
  }

  showSafe = () => {
    Notify.show({
      message: '通知内容',
      safeAreaInsetTop: true,
    })
  }

  render() {
    return (
      <DemoPage title="Notify 消息通知">
        <>
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
        </>
      </DemoPage>
    )
  }
}
