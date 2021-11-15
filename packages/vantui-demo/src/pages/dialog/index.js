import { Component } from 'react'

import { Image, Dialog, Cell } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'
const message = '代码是写出来给人看的，附带能在机器上运行'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    show: false,
  }

  showCustomDialog = () => {
    this.setState({ show: true })
  }

  getUserInfo = (event) => {
    console.log(event.detail)
  }

  onClickThemeAlert = () => {
    Dialog.alert({
      title: '标题',
      theme: 'round-button',
      message,
    })
  }

  onClickThemeAlert2 = () => {
    Dialog.alert({
      theme: 'round-button',
      message,
    })
  }

  onClickAlert = () => {
    Dialog.alert({
      title: '标题',
      message,
    })
  }

  onClickAlert2 = () => {
    Dialog.alert({
      message,
    })
  }

  onClickConfirm = () => {
    Dialog.confirm({
      title: '标题',
      message,
    })
  }

  onClickAsyncClose = () => {
    const beforeClose = (action) =>
      new Promise((resolve) => {
        setTimeout(() => {
          if (action === 'confirm') {
            resolve(true)
          } else {
            // 拦截取消操作
            resolve(false)
          }
        }, 1000)
      })

    Dialog.confirm({
      title: '标题',
      message,
      beforeClose,
    }).catch((e) => {
      console.log(e)
    })
  }

  onClose = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    const { show } = this.state
    return (
      <DemoPage title="Dialog 弹出框">
        <>
          <DemoBlock card title="提示弹窗" padding>
            <Cell title="提示弹窗" onClick={this.onClickAlert} isLink></Cell>
            <Cell
              title="提示弹窗（无标题）"
              onClick={this.onClickAlert2}
              isLink
            ></Cell>
            <Cell title="确认弹窗" onClick={this.onClickConfirm} isLink></Cell>
          </DemoBlock>
          <DemoBlock card title="圆角按钮样式" padding>
            <Cell
              title="提示弹窗"
              onClick={this.onClickThemeAlert}
              isLink
            ></Cell>
            <Cell
              title="提示弹窗（无标题）"
              onClick={this.onClickThemeAlert2}
              isLink
            ></Cell>
          </DemoBlock>
          <DemoBlock card title="异步关闭" padding>
            <Cell title="异步关闭" onClick={this.onClickAsyncClose}></Cell>
          </DemoBlock>
          <DemoBlock card title="组件调用" padding>
            <Cell title="组件调用" onClick={this.showCustomDialog}></Cell>
          </DemoBlock>
          <Dialog
            title="标题"
            show={show}
            showCancelButton
            onClose={this.onClose}
            confirmButtonOpenType="getUserInfo"
            onGetuserinfo={this.getUserInfo}
          >
            <Image
              className="demo-image"
              height="240px"
              src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
            ></Image>
          </Dialog>
          <Dialog id="van-dialog"></Dialog>
        </>
      </DemoPage>
    )
  }
}
