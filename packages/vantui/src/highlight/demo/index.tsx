/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'

export default class Index extends Component {
  render() {
    return (
      <DemoPage title="Highlight 高亮文本" className="pages-count-up-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="多字符匹配" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="设置高亮标签类名" padding>
          <Demo3 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
