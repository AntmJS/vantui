/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage title="SwipeCell 滑动单元格" className="pages-swipe-cell-index">
        <DemoBlock title="基础用法 (不流畅待修复)" padding>
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
