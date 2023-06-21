/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Slider 滑块" className="pages-slider-index">
        <DemoBlock title="基本用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="双滑块" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="指定选择范围" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="禁用" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="指定步长" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="自定义样式" padding>
          <Demo6 />
        </DemoBlock>

        <DemoBlock title="自定义按钮" padding>
          <Demo7 />
        </DemoBlock>

        <DemoBlock title="垂直方向" padding>
          <Demo8 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
