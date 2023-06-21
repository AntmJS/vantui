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
        title="DropdownMenu 下拉菜单"
        className="pages-dropdown-menu-index"
      >
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="自定义菜单内容" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="自定义选中状态颜色" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="向上展开" padding>
          <Demo4 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
