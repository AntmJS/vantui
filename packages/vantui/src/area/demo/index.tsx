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
      <DemoPage title="Area 省市区选择" className="pages-area-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="选中省市区" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="配置显示列" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="配置列占位提示文字" padding>
          <Demo4 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
