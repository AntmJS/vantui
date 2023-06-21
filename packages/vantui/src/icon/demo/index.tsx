/* eslint-disable */
import { Tab, Tabs } from '@antmjs/vantui'
import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
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
      <DemoPage title="Icon 图标" className="pages-icon-index">
        <Tabs
          active={this.state.active}
          onChange={(e) => this.setState({ active: e.detail.index })}
          sticky={true}
        >
          <Tab title="基础用法" />

          <Tab title="基础图标" />

          <Tab title="线框图标" />

          <Tab title="实心图标" />
        </Tabs>

        {this.state.active === 0 ? <Demo1 /> : ''}

        {this.state.active === 1 ? <Demo2 /> : ''}

        {this.state.active === 2 ? <Demo3 /> : ''}

        {this.state.active === 3 ? <Demo4 /> : ''}
      </DemoPage>
    )
  }
}
