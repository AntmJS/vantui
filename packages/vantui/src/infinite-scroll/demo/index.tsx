/* eslint-disable */
import { Tab, Tabs } from '@antmjs/vantui'
import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage
        title="InfiniteScroll 无限滚动"
        className="pages-infinite-scroll-index"
      >
        <Tabs
          active={this.state.active}
          onChange={(e) => this.setState({ active: e.detail.index })}
          sticky={true}
        >
          <Tab title="基本使用" />

          <Tab title="虚拟列表" />

          <Tab title="请求异常" />
        </Tabs>

        {this.state.active === 0 ? <Demo1 /> : ''}

        {this.state.active === 1 ? <Demo2 /> : ''}

        {this.state.active === 2 ? <Demo3 /> : ''}
      </DemoPage>
    )
  }
}
