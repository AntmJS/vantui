/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="TreeSelect 分类选择" className="pages-tree-select-index">
        <DemoBlock title="单选模式" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="多选模式" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="自定义内容" padding>
          <Demo3 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
