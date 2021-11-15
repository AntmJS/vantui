import { Component } from 'react'

import { Toast, Button } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'

export default class Index extends Component {
  constructor() {
    super()
  }

  showToast = () => {
    Toast.show('提示内容')
  }

  showLongToast = () => {
    Toast.show('这是一条长文字提示，超过一定字数就会换行')
  }

  showLoadingToast = () => {
    Toast.loading({ message: '加载中...', forbidClick: true })
  }

  showCustomLoadingToast = () => {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
    })
  }

  showSuccessToast = () => {
    Toast.success('成功文案')
  }

  showFailToast = () => {
    Toast.fail('失败提示')
  }

  showCustomizedToast = () => {
    const text = (second) => `倒计时 ${second} 秒`
    Toast.loading({
      duration: 0,
      forbidClick: true,
      message: text(3),
    })

    let second = 3
    const timer = setInterval(() => {
      second--
      if (second) {
        Toast.loading({
          message: text(second),
        })
        // toast.setData({ message: text(second) })
      } else {
        clearInterval(timer)
        Toast.clear()
      }
    }, 1000)
  }

  render() {
    return (
      <DemoPage title="Toast 轻提示">
        <>
          <DemoBlock title="文字提示" padding>
            <Button
              type="primary"
              onClick={this.showToast}
              className="demo-margin-right"
            >
              文字提示
            </Button>
            <Button type="primary" onClick={this.showLongToast}>
              长文字提示
            </Button>
          </DemoBlock>
          <DemoBlock title="加载提示" padding>
            <Button
              type="primary"
              onClick={this.showLoadingToast}
              className="demo-margin-right"
            >
              加载提示
            </Button>
            <Button type="primary" onClick={this.showCustomLoadingToast}>
              自定义加载图标
            </Button>
          </DemoBlock>
          <DemoBlock title="成功/失败提示" padding>
            <Button
              type="info"
              onClick={this.showSuccessToast}
              className="demo-margin-right"
            >
              成功提示
            </Button>
            <Button type="danger" onClick={this.showFailToast}>
              失败提示
            </Button>
          </DemoBlock>
          <DemoBlock title="动态更新提示" padding>
            <Button type="primary" onClick={this.showCustomizedToast}>
              动态更新提示
            </Button>
          </DemoBlock>
          <Toast id="van-toast"></Toast>
        </>
      </DemoPage>
    )
  }
}
