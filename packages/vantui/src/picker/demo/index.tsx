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
      <DemoPage title="Picker 选择器" className="pages-picker-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="默认选中项" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="展示顶部栏" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="多列联动" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="禁用选项" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="加载状态" padding>
          <Demo6 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
