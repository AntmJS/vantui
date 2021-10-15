import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import { CollapseItem, Collapse, Toast, Icon, toast } from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    active1: [0],
    active2: 0,
    active3: [],
    active4: [],
    title1: '有赞微商城',
    title2: '有赞零售',
    title3: '有赞美业',
    content1: '提供多样店铺模板，快速搭建网上商城',
    content2:
      '网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失',
    content3: '线上拓客，随时预约，贴心顺手的开单收银',
  }

  onChange = (event, name) => {
    // console.log('event: ', event)
    // console.log(event.target['data-key'])
    // const { key } = event.currentTarget.dataset
    this.setState({
      [name]: event.detail,
    })
  }

  onOpen = (event) => {
    toast(`展开: ${event.detail}`)
  }

  onClose = (event) => {
    toast(`关闭: ${event.detail}`)
  }

  render() {
    const {
      active1,
      title1,
      content1,
      title2,
      content2,
      title3,
      content3,
      active2,
      active3,
      active4,
    } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <Collapse
            value={active1}
            data-key="active1"
            onChange={(event) => {
              this.onChange(event, 'active1')
            }}
          >
            <CollapseItem title={title1}>{content1}</CollapseItem>
            <CollapseItem title={title2}>{content2}</CollapseItem>
            <CollapseItem title={title3} disabled>
              {content3}
            </CollapseItem>
          </Collapse>
        </DemoBlock>
        <DemoBlock title="手风琴">
          <Collapse
            value={active2}
            data-key="active2"
            accordion
            onChange={(event) => {
              this.onChange(event, 'active2')
            }}
          >
            <CollapseItem title={title1}>{content1}</CollapseItem>
            <CollapseItem title={title2}>{content2}</CollapseItem>
            <CollapseItem title={title3}>{content3}</CollapseItem>
          </Collapse>
        </DemoBlock>
        <DemoBlock title="事件监听">
          <Collapse
            value={active3}
            data-key="active3"
            onChange={(event) => {
              this.onChange(event, 'active3')
            }}
            onOpen={(event) => {
              this.onOpen(event, 'active3')
            }}
            onClose={(event) => {
              this.onClose(event, 'active3')
            }}
          >
            <CollapseItem title={title1}>{content1}</CollapseItem>
            <CollapseItem title={title2}>{content2}</CollapseItem>
            <CollapseItem title={title3}>{content3}</CollapseItem>
          </Collapse>
        </DemoBlock>
        <DemoBlock title="自定义标题内容">
          <Collapse
            value={active4}
            data-key="active4"
            onChange={(event) => {
              this.onChange(event, 'active4')
            }}
          >
            <CollapseItem
              renderTitle={
                <Block>
                  <View>
                    {title1}
                    <Icon
                      name="question-o"
                      className="van-icon-question"
                    ></Icon>
                  </View>
                </Block>
              }
            >
              {content1}
            </CollapseItem>
            <CollapseItem title={title2} value="内容" icon="shop-o">
              {content2}
            </CollapseItem>
          </Collapse>
        </DemoBlock>
        <Toast id="van-toast"></Toast>
      </Block>
    )
  }
}
