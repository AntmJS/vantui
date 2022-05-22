/* eslint-disable */
import { Tab, Tabs } from '@antmjs/vantui'
import { Component } from 'react'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage title="Icon 图标" className="pages-icon-index">
        <Tabs active={0} animated>
          <Tab title="基础用法">
            <Demo1 />
          </Tab>

          <Tab title="基础图标">
            <Demo2 />
          </Tab>

          <Tab title="线框图标">
            <Demo3 />
          </Tab>

          <Tab title="实心图标">
            <Demo4 />
          </Tab>
        </Tabs>
      </DemoPage>
    )
  }
}
