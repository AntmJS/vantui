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
      <DemoPage title="SwipeCell 滑动单元格" className="pages-swipe-cell-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="异步关闭" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="主动打开" padding>
          <Demo3 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
