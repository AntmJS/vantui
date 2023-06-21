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
      <DemoPage title="Loading 加载" className="pages-loading-index">
        <DemoBlock title="加载类型" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="自定义颜色" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="加载文案" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="垂直排列" padding>
          <Demo4 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
