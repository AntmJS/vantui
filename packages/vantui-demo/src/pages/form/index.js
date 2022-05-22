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
      <DemoPage title="Form 表单" className="pages-form-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="异步处理和自定义校验" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="自定义组件" padding>
          <Demo3 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
