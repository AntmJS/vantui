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

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Checkbox 复选框" className="pages-checkbox-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="禁用状态" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="自定义形状、颜色、大小" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="自定义图标" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="复选框组" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="水平排列、限制最大可选数" padding>
          <Demo6 />
        </DemoBlock>

        <DemoBlock title="搭配单元格组件使用" padding>
          <Demo7 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
