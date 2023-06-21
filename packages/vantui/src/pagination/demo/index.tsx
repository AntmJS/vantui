/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Pagination 分页" className="pages-pagination-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="简单模式" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="显示省略号" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="自定义按钮" padding>
          <Demo4 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
