import { Component } from 'react'
import { View } from '@tarojs/components'
import { CollapseItem, Collapse, Toast, Icon } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
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

  onChange = (event) => {
    const { key } = event.currentTarget.dataset
    this.setState({
      [key]: event.detail,
    })
  }

  onOpen = (event) => {
    Toast.show(`展开: ${event.detail}`)
  }

  onClose = (event) => {
    Toast.show(`关闭: ${event.detail}`)
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
      <DemoPage title="Collapse 折叠面板">
        <>
          <DemoBlock title="基础用法">
            <Collapse
              value={active1}
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active1' },
                  },
                  target: {
                    dataset: { key: 'active1' },
                  },
                })
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
              accordion
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active2' },
                  },
                  target: {
                    dataset: { key: 'active2' },
                  },
                })
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
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active3' },
                  },
                  target: {
                    dataset: { key: 'active3' },
                  },
                })
              }}
              onOpen={(e) => {
                this.onOpen({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active3' },
                  },
                  target: {
                    dataset: { key: 'active3' },
                  },
                })
              }}
              onClose={(e) => {
                this.onClose({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active3' },
                  },
                  target: {
                    dataset: { key: 'active3' },
                  },
                })
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
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active4' },
                  },
                  target: {
                    dataset: { key: 'active4' },
                  },
                })
              }}
            >
              <CollapseItem
                renderTitle={
                  <>
                    <View>
                      {title1}
                      <Icon
                        name="question-o"
                        className="van-icon-question"
                      ></Icon>
                    </View>
                  </>
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
        </>
      </DemoPage>
    )
  }
}
