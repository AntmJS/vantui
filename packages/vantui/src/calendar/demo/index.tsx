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
import Demo9 from './demo9'
import Demo10 from './demo10'
import Demo11 from './demo11'
import Demo12 from './demo12'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Calendar 日历" className="pages-calendar-index">
        <DemoBlock title="选择单个日期" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="选择多个日期" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="选择日期区间" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="快捷选择" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="自定义颜色" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="自定义日期范围" padding>
          <Demo6 />
        </DemoBlock>

        <DemoBlock title="自定义按钮文字" padding>
          <Demo7 />
        </DemoBlock>

        <DemoBlock title="自定义日期文案" padding>
          <Demo8 />
        </DemoBlock>

        <DemoBlock title="自定义弹出位置" padding>
          <Demo9 />
        </DemoBlock>

        <DemoBlock title="日期区间最大范围" padding>
          <Demo10 />
        </DemoBlock>

        <DemoBlock title="自定义周起始日" padding>
          <Demo11 />
        </DemoBlock>

        <DemoBlock title="平铺展示" padding>
          <Demo12 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
