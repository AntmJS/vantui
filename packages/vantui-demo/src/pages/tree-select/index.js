import { Component } from 'react'

import { TreeSelect, Image } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import config from './config.js'

import './index.scss'
const items = [
  {
    text: config.pro1Name,
    children: config.pro1,
  },
  {
    text: config.pro2Name,
    children: config.pro2,
  },
  {
    text: config.pro3Name,
    disabled: true,
    children: config.pro3,
  },
]

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    items,
    badgeItems: items.slice(0, 2).map((item, index) => {
      if (index === 0) {
        return { ...item, dot: true }
      }
      if (index === 1) {
        return { ...item, badge: 5 }
      }

      return item
    }),
    mainActiveIndex: 0,
    activeId: 0,
    mainActiveIndexMulti: 0,
    activeIdMulti: [],
  }

  onClickNav = ({ detail }) => {
    this.setState({
      mainActiveIndex: detail.index || 0,
    })
  }

  onClickItem = ({ detail }) => {
    const activeId = this.state.activeId === detail.id ? null : detail.id

    this.setState({ activeId })
  }

  onClickNavMulti = ({ detail }) => {
    this.setState({
      mainActiveIndexMulti: detail.index || 0,
    })
  }

  onClickItemMulti = ({ detail }) => {
    const { activeIdMulti } = this.state
    const idx = activeIdMulti.indexOf(detail.id)
    if (idx > -1) {
      activeIdMulti.splice(idx, 1)
    } else {
      activeIdMulti.push(detail.id)
    }

    this.setState({ activeIdMulti })
  }

  render() {
    const {
      items,
      mainActiveIndex,
      activeId,
      mainActiveIndexMulti,
      activeIdMulti,
      badgeItems,
    } = this.state
    return (
      <DemoPage title="TreeSelect 分类选择">
        <>
          <DemoBlock title="单选模式">
            <TreeSelect
              items={items}
              mainActiveIndex={mainActiveIndex}
              activeId={activeId}
              onClickItem={this.onClickItem}
              onClickNav={this.onClickNav}
            ></TreeSelect>
          </DemoBlock>
          <DemoBlock title="多选模式">
            <TreeSelect
              max="2"
              items={items}
              mainActiveIndex={mainActiveIndexMulti}
              activeId={activeIdMulti}
              onClickItem={this.onClickItemMulti}
              onClickNav={this.onClickNavMulti}
            ></TreeSelect>
          </DemoBlock>
          <DemoBlock title="自定义内容">
            <TreeSelect
              items={[
                {
                  text: '分组 1',
                },
                {
                  text: '分组 2',
                },
              ]}
              height="55vw"
              mainActiveIndex={mainActiveIndex}
              activeId={activeId}
              onClickItem={this.onClickItem}
              onClickNav={this.onClickNav}
              renderContent={
                <>
                  {mainActiveIndex === 0 ? (
                    <Image
                      src="https://img.yzcdn.cn/vant/apple-1.jpg"
                      width="100%"
                      height="100%"
                    ></Image>
                  ) : (
                    mainActiveIndex === 1 && (
                      <Image
                        src="https://img.yzcdn.cn/vant/apple-2.jpg"
                        width="100%"
                        height="100%"
                        slot="content"
                      ></Image>
                    )
                  )}
                </>
              }
            ></TreeSelect>
          </DemoBlock>
          <DemoBlock title="徽标提示">
            <TreeSelect
              items={badgeItems}
              mainActiveIndex={mainActiveIndex}
              activeId={activeId}
              onClickItem={this.onClickItem}
              onClickNav={this.onClickNav}
            ></TreeSelect>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
