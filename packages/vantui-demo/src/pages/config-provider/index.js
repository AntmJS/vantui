/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import Demo1 from './demo1'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage
        title="ConfigProvider 全局配置"
        className="pages-config-provider-index"
      >
        <DemoBlock title="通过 ConfigProvider 覆盖" padding>
          <Demo1 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
