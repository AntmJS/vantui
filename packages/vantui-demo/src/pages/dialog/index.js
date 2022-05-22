/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage title="Dialog 弹出框" className="pages-dialog-index">
        <DemoBlock title="提示弹窗" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="圆角按钮风格" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="异步关闭" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="组件调用" padding>
          <Demo4 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
