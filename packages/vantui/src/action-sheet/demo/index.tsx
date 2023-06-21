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
      <DemoPage
        title="ActionSheet 动作面板"
        className="pages-action-sheet-index"
      >
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="选项状态" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="展示取消按钮" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="展示描述信息" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="展示标题栏" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="微信开放能力" padding>
          <Demo6 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
