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
      <DemoPage title="Cascader 级联选择" className="pages-cascader-index">
        <DemoBlock title="基本用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="自定义属性名称" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="使用完整的地区数据" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="动态加载" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="部分数据动态加载" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="自动转换" padding>
          <Demo6 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
