/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage title="Layout 布局" className="pages-col-index">
        <DemoBlock title="基本用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="设置列元素间距" padding>
          <Demo2 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
