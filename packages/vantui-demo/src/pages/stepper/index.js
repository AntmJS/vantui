import { Component } from 'react'

import { Toast, Stepper, Cell } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    value: 1,
  }

  onChange = (event) => {
    Toast.loading({
      forbidClick: true,
    })

    setTimeout(() => {
      Toast.clear()
      this.setState({ value: event.detail })
    }, 500)
  }

  render() {
    const { value } = this.state
    return (
      <DemoPage title="Stepper 步进器">
        <>
          <Cell center title="基础用法">
            <Stepper value={1}></Stepper>
          </Cell>
          <Cell center title="步长设置">
            <Stepper value={1} step="2"></Stepper>
          </Cell>
          <Cell center title="限制输入范围">
            <Stepper value={1} min="5" max="8"></Stepper>
          </Cell>
          <Cell center title="限制输入整数">
            <Stepper value={1} integer></Stepper>
          </Cell>
          <Cell center title="禁用状态">
            <Stepper value={1} disabled></Stepper>
          </Cell>
          <Cell center title="禁用长按">
            <Stepper value={1} longPress={false}></Stepper>
          </Cell>
          <Cell center title="固定小数位数">
            <Stepper value={1} step="0.2" decimalLength={1}></Stepper>
          </Cell>
          <Cell center title="异步变更">
            <Stepper
              value={value}
              asyncChange
              onChange={this.onChange}
            ></Stepper>
          </Cell>
          <Cell center title="自定义大小">
            <Stepper value={1} inputWidth="40px" buttonSize="32px"></Stepper>
          </Cell>
          <Cell center title="圆角风格">
            <Stepper value={1} theme="round" buttonSize="22px"></Stepper>
          </Cell>
          <Toast id="van-toast"></Toast>
        </>
      </DemoPage>
    )
  }
}
