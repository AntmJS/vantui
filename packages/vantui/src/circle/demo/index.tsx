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
      <DemoPage title="Circle 环形进度条" className="pages-circle-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="样式定制" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="逆时针方向" padding>
          <Demo3 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
