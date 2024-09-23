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
        title="DatetimePicker 时间选择"
        className="pages-datetime-picker-index"
      >
        <DemoBlock title="选择完整时间" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="不同类型" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="选项过滤器" padding>
          <Demo3 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
