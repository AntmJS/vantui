/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage title="NoticeBar 通知栏" className="pages-notice-bar-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="滚动播放" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="多行展示" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="通知栏模式" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="自定义样式" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="自定义滚动速率" padding>
          <Demo6 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
