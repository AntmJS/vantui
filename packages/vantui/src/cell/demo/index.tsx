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
      <DemoPage title="Cell 单元格" className="pages-cell-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="卡片风格" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="单元格大小" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="展示图标" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="展示箭头" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="页面跳转" padding>
          <Demo6 />
        </DemoBlock>

        <DemoBlock title="分组标题" padding>
          <Demo7 />
        </DemoBlock>

        <DemoBlock title="自定义渲染内容" padding>
          <Demo8 />
        </DemoBlock>

        <DemoBlock title="垂直居中" padding>
          <Demo9 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
