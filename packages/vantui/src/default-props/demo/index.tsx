/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="default-props 默认参数设置" className="pages-col-index">
        <DemoBlock title="基本用法" padding>
          <Demo1 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
