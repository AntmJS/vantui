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

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Button 按钮" className="pages-button-index">
        <DemoBlock title="按钮类型" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="朴素按钮" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="细边框" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="禁用状态" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="加载状态" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="按钮形状" padding>
          <Demo6 />
        </DemoBlock>

        <DemoBlock title="图标按钮" padding>
          <Demo7 />
        </DemoBlock>

        <DemoBlock title="按钮尺寸" padding>
          <Demo8 />
        </DemoBlock>

        <DemoBlock title="块级元素" padding>
          <Demo9 />
        </DemoBlock>

        <DemoBlock title="自定义颜色" padding>
          <Demo10 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
