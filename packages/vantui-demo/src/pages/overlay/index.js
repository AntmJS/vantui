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
      <DemoPage title="Overlay 遮罩层" className="pages-overlay-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="嵌入内容" padding>
          <Demo2 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
