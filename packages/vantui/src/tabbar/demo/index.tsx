/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Tabbar 标签栏" className="pages-tabbar-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="通过名称匹配" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="显示徽标" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="自定义图标" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="自定义颜色" padding>
          <Demo5 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
