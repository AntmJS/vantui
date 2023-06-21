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
      <DemoPage title="Empty 空状态" className="pages-empty-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="图片类型" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="自定义图片" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="底部内容" padding>
          <Demo4 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
