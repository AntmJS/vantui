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
      <DemoPage
        title="WaterfallFlow 瀑布流"
        className="pages-waterfall-flow-index"
      >
        <DemoBlock title="基本案例" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="动态修改列数" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="##适用场景" padding>
          <Demo3 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
