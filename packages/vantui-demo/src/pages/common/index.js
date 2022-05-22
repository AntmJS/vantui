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
      <DemoPage title="Style 内置样式" className="pages-common-index">
        <DemoBlock title="文字省略" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="1px 边框" padding>
          <Demo2 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
