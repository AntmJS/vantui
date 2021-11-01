import { Component } from 'react'
import { View } from '@tarojs/components'
import { Tabs, Tab, Icon, Col } from '@antmjs/vantui'

import icons from '@vant/icons'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    icons,
    active: 0,
    demoIcon: 'chat-o',
    demoImage: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
  }

  onSwitch = (event) => {
    this.setState({
      active: event.detail.index,
    })
  }

  render() {
    const { active, demoIcon, demoImage, icons } = this.state
    return (
      <DemoPage title="Icon 图标">
        <Tabs active={active} color="#1989fa" onChange={this.onSwitch}>
          <Tab title="用法示例" className="demo-tab-pane">
            <DemoBlock title="基础用法">
              <Col className="col" span="6">
                <Icon name={demoIcon} size="32px" className="icon"></Icon>
              </Col>
              <Col className="col" span="6">
                <Icon name={demoImage} size="32px" className="icon"></Icon>
              </Col>
            </DemoBlock>
            <DemoBlock title="提示信息">
              <Col className="col" span="6">
                <Icon name={demoIcon} size="32px" className="icon" dot></Icon>
              </Col>
              <Col className="col" span="6">
                <Icon
                  name={demoIcon}
                  size="32px"
                  className="icon"
                  info="9"
                ></Icon>
              </Col>
              <Col className="col" span="6">
                <Icon
                  name={demoIcon}
                  size="32px"
                  className="icon"
                  info="99+"
                ></Icon>
              </Col>
            </DemoBlock>
            <DemoBlock title="图标颜色">
              <Col className="col" span="6">
                <Icon
                  name={demoIcon}
                  size="32px"
                  className="icon"
                  color="#1989fa"
                ></Icon>
              </Col>
              <Col className="col" span="6">
                <Icon
                  name={demoIcon}
                  size="32px"
                  className="icon"
                  color="#07c160"
                ></Icon>
              </Col>
            </DemoBlock>
            <DemoBlock title="图标大小">
              <Col className="col" span="6">
                <Icon name={demoIcon} size="40" className="icon"></Icon>
              </Col>
              <Col className="col" span="6">
                <Icon name={demoIcon} size="3rem" className="icon"></Icon>
              </Col>
            </DemoBlock>
          </Tab>
          <Tab title="基础图标" className="demo-tab-pane">
            {icons.basic.map((item) => {
              return (
                <Col key={item.index} className="col" span="6">
                  <Icon name={item} size="32px" className="icon"></Icon>
                  <View className="text">{item}</View>
                </Col>
              )
            })}
          </Tab>
          <Tab title="线框风格" className="demo-tab-pane">
            {icons.outline.map((item) => {
              return (
                <Col key={item.index} className="col" span="6">
                  <Icon name={item} size="32px" className="icon"></Icon>
                  <View className="text">{item}</View>
                </Col>
              )
            })}
          </Tab>
          <Tab title="实底风格" className="demo-tab-pane">
            {icons.filled.map((item) => {
              return (
                <Col key={item.index} className="col" span="6">
                  <Icon name={item} size="32px" className="icon"></Icon>
                  <View className="text">{item}</View>
                </Col>
              )
            })}
          </Tab>
        </Tabs>
      </DemoPage>
    )
  }
}
