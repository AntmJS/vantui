import { Component } from 'react'

import { Tabs, Tab, Empty, Button } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    activeTab: 0,
  }

  onChange = (event) => {
    this.setState({
      activeTab: event.detail ? event.detail.name : '',
    })
  }

  render() {
    const { activeTab } = this.state
    return (
      <DemoPage title="Empty 空状态">
        <>
          <DemoBlock title="基础用法" padding>
            <Empty description="描述文字"></Empty>
          </DemoBlock>
          <DemoBlock title="图片类型">
            <Tabs active={activeTab} onChange={this.onChange}>
              <Tab title="通用错误">
                <Empty image="error" description="描述文字"></Empty>
              </Tab>
              <Tab title="网络错误">
                <Empty image="network" description="描述文字"></Empty>
              </Tab>
              <Tab title="搜索提示">
                <Empty image="search" description="描述文字"></Empty>
              </Tab>
            </Tabs>
          </DemoBlock>
          <DemoBlock title="自定义图片" padding>
            <Empty
              className="custom-image"
              image="https://img.yzcdn.cn/vant/custom-empty-image.png"
              description="描述文字"
            ></Empty>
          </DemoBlock>
          <DemoBlock title="底部内容" padding>
            <Empty description="描述文字">
              <Button round type="danger" className="bottom-button">
                按钮
              </Button>
            </Empty>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
