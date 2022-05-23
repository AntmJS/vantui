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
import Demo7 from './demo7'
import Demo8 from './demo8'
import Demo9 from './demo9'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage title="Tab 标签页" className="pages-tab-index">
        <DemoBlock title="基础用法">
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="通过名称匹配">
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="横向滚动">
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="禁用标签">
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="样式风格">
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="点击事件">
          <Demo6 />
        </DemoBlock>

        <DemoBlock title="粘性布局">
          <Demo7 />
        </DemoBlock>

        <DemoBlock title="切换动画">
          <Demo8 />
        </DemoBlock>

        <DemoBlock title="滑动切换">
          <Demo9 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
