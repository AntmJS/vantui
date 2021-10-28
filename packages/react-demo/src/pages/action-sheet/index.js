import { Component } from 'react'
import { View } from '@tarojs/components'
import { Button, ActionSheet } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    action1: [
      { name: '选项' },
      { name: '选项' },
      { name: '选项', subname: '描述信息' },
    ],
    action2: [
      { name: '着色选项', color: '#ee0a24' },
      { loading: true },
      { name: '禁用选项', disabled: true },
    ],
    action6: [
      { name: '获取用户信息', color: '#07c160', openType: 'getUserInfo' },
    ],
  }

  toggle = (type) => {
    this.setState({
      [type]: !this.state[type],
    })
  }

  toggleActionSheet1 = () => {
    this.toggle('show1')
  }

  toggleActionSheet2 = () => {
    this.toggle('show2')
  }

  toggleActionSheet3 = () => {
    this.toggle('show3')
  }

  toggleActionSheet4 = () => {
    this.toggle('show4')
  }

  toggleActionSheet5 = () => {
    this.toggle('show5')
  }

  toggleActionSheet6 = () => {
    this.toggle('show6')
  }

  onGetUserInfo = (e) => {
    console.log(e.detail)
  }

  render() {
    const {
      show1,
      action1,
      show2,
      action2,
      show3,
      show4,
      show5,
      show6,
      action6,
    } = this.state
    return (
      <DemoPage title="ActionSheet 动作面板">
        <>
          <DemoBlock title="基础用法" padding>
            <Button type="primary" onClick={this.toggleActionSheet1}>
              弹出菜单
            </Button>
            <ActionSheet
              show={show1}
              actions={action1}
              onClose={this.toggleActionSheet1}
            ></ActionSheet>
          </DemoBlock>
          <DemoBlock title="选项状态" padding>
            <Button type="primary" onClick={this.toggleActionSheet2}>
              弹出菜单
            </Button>
            <ActionSheet
              show={show2}
              actions={action2}
              onClose={this.toggleActionSheet2}
            ></ActionSheet>
          </DemoBlock>
          <DemoBlock title="展示取消按钮" padding>
            <Button type="primary" onClick={this.toggleActionSheet3}>
              弹出菜单
            </Button>
            <ActionSheet
              show={show3}
              actions={action1}
              cancelText="取消"
              onClose={this.toggleActionSheet3}
            ></ActionSheet>
          </DemoBlock>
          <DemoBlock title="展示描述信息" padding>
            <Button type="primary" onClick={this.toggleActionSheet4}>
              弹出菜单
            </Button>
            <ActionSheet
              show={show4}
              actions={action1}
              description="这是一段描述信息"
              onClose={this.toggleActionSheet4}
            ></ActionSheet>
          </DemoBlock>
          <DemoBlock title="展示标题栏" padding>
            <Button type="primary" onClick={this.toggleActionSheet5}>
              弹出菜单
            </Button>
            <ActionSheet
              show={show5}
              title="标题"
              onClose={this.toggleActionSheet5}
            >
              <View className="content">内容</View>
            </ActionSheet>
          </DemoBlock>
          <DemoBlock title="微信开放能力" padding>
            <Button type="primary" onClick={this.toggleActionSheet6}>
              弹出菜单
            </Button>
            <ActionSheet
              show={show6}
              title="标题"
              onClose={this.toggleActionSheet6}
              actions={action6}
              onGetuserinfo={this.onGetUserInfo}
            ></ActionSheet>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
