/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Toast 轻提示" className="pages-toast-index">
        <DemoBlock title="文字提示" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="加载提示" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="成功/失败提示" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="动态更新提示" padding>
          <Demo4 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
