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
      <DemoPage
        title="GoodsAction 商品导航"
        className="pages-goods-action-index"
      >
        <DemoBlock title="基础用法">
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="提示信息">
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="自定义按钮颜色">
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="朴素按钮">
          <Demo4 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
