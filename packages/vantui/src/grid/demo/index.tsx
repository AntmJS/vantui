/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Grid 宫格" className="pages-grid-index">
        <DemoBlock title="基本用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="自定义列数" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="自定义内容" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="正方形格子" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="格子间距" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="内容横排" padding>
          <Demo6 />
        </DemoBlock>

        <DemoBlock title="页面跳转" padding>
          <Demo7 />
        </DemoBlock>

        <DemoBlock title="提示信息" padding>
          <Demo8 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
