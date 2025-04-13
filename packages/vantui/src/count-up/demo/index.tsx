/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="CountUp 数字滚动" className="pages-count-up-index">
        <DemoBlock title="基本用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="设置滚动相关参数" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="是否显示小数位" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="千分位分隔符" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="手动控制" padding>
          <Demo5 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
