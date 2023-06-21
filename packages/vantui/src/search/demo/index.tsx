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

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Search 搜索" className="pages-search-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="事件监听" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="搜索框内容对齐" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="禁用搜索框" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="自定义背景色" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="自定义按钮" padding>
          <Demo6 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
