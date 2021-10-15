import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Circle, Button } from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'
const format = (rate) => Math.min(Math.max(rate, 0), 100)

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    value: 25,
    gradientColor: {
      '0%': '#ffd01e',
      '100%': '#ee0a24',
    },
  }

  run = (e) => {
    const step = parseFloat(e.event.step)
    this.setState({
      value: format(this.state.value + step),
    })
  }

  render() {
    const { value, gradientColor } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <Circle type="2d" value={value} text={value + '%'}></Circle>
        </DemoBlock>
        <DemoBlock title="样式定制">
          <Circle value={value} strokeWidth={6} text="宽度定制"></Circle>
          <Circle
            value={value}
            layerColor="#eee"
            color="#ee0a24"
            text="颜色定制"
          ></Circle>
          <Circle value={value} color={gradientColor} text="渐变色"></Circle>
          <Circle
            value={value}
            color="#07c160"
            clockwise={false}
            text="逆时针"
          ></Circle>
          <Circle value={value} size="120" text="大小定制"></Circle>
        </DemoBlock>
        <Button
          type="primary"
          size="small"
          data-step="10"
          onClick={(e) => {
            this.run({ ...e, step: '10' })
          }}
        >
          增加
        </Button>
        <Button
          type="danger"
          size="small"
          data-step="-10"
          onClick={(e) => {
            this.run({ ...e, step: '-10' })
          }}
        >
          减少
        </Button>
      </Block>
    )
  }
}
