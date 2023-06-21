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
      <DemoPage title="Image 图片" className="pages-image-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="填充模式" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="圆形图片" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="图片懒加载" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="加载中提示" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="加载失败提示" padding>
          <Demo6 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
