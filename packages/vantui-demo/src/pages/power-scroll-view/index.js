/* eslint-disable */
import { Tab, Tabs } from '@antmjs/vantui'
import { Component } from 'react'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage
        title="PowerScrollView 滚动列表"
        className="pages-power-scroll-view-index"
      >
        <Tabs active={0} animated>
          <Tab title="基础用法">
            <Demo1 />
          </Tab>

          <Tab title="自定义参数">
            <Demo2 />
          </Tab>

          <Tab title="配合搜索使用">
            <Demo3 />
          </Tab>
        </Tabs>
      </DemoPage>
    )
  }
}
