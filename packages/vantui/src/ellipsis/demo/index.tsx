/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Ellipsis 文本省略" className="pages-ellipsis-index">
        <DemoBlock title="基本使用" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="隐藏操作按钮" padding>
          <Demo2 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
