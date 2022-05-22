/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage
        title="DatetimePicker 时间选择"
        className="pages-datetime-picker-index"
      >
        <DemoBlock title="选择完整时间" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="选择日期（年月日）" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="选择日期（年月）" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="选择时间" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="选项过滤器" padding>
          <Demo5 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
