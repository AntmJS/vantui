import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import { Toast, Steps, Button, toast } from '@antmjs/vantui'

import icons from '@vant/icons'

import DemoBlock from '../../components/demo-block/index'
const steps = [
  {
    text: '步骤一',
    desc: '描述信息',
  },
  {
    text: '步骤二',
    desc: '描述信息',
  },
  {
    text: '步骤三',
    desc: '描述信息',
  },
  {
    text: '步骤四',
    desc: '描述信息',
  },
]

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    active: 1,
    steps,
    customIconSteps: steps.map((item, index) => ({
      ...item,
      inactiveIcon: icons.outline[index],
      activeIcon: icons.basic[index],
    })),
  }

  nextStep = () => {
    this.setState({
      active: (this.state.active % 4) + 1,
    })
  }

  onClick = (event) => {
    toast(`Index: ${event.detail}`)
  }

  render() {
    const { steps, active, customIconSteps } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <Steps
            steps={steps}
            active={active}
            onClickStep={this.onClick}
            className="demo-margin-bottom"
          ></Steps>
          <Button className="demo-margin-left" onClick={this.nextStep}>
            下一步
          </Button>
        </DemoBlock>
        <DemoBlock title="自定义样式">
          <Steps
            steps={steps}
            active={active}
            activeIcon="success"
            activeColor="#38f"
            inactiveIcon="arrow"
          ></Steps>
        </DemoBlock>
        <DemoBlock title="自定义图标">
          <Steps steps={customIconSteps} active={active}></Steps>
        </DemoBlock>
        <DemoBlock title="竖向步骤条">
          <Steps
            steps={steps}
            active={active}
            direction="vertical"
            activeColor="#ee0a24"
          ></Steps>
        </DemoBlock>
        <Toast id="van-toast"></Toast>
      </Block>
    )
  }
}
