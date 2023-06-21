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
import Demo9 from './demo9'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Radio 单选框" className="pages-radio-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="水平排列" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="禁用状态" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="自定义形状" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="自定义颜色" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="自定义大小" padding>
          <Demo6 />
        </DemoBlock>

        <DemoBlock title="自定义图标" padding>
          <Demo7 />
        </DemoBlock>

        <DemoBlock title="禁用文本点击" padding>
          <Demo8 />
        </DemoBlock>

        <DemoBlock title="与 Cell 组件一起使用" padding>
          <Demo9 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
