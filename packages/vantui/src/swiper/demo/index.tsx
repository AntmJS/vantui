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

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Swiper 轮播" className="pages-swiper-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="动态加载" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="自定义宽度" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="自定义分页指示器" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="垂直方向" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="水平居中展示" padding>
          <Demo6 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
