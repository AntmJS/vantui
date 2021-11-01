import { Component } from 'react'

import { Popup, Cell } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    show: {
      basic: false,
      top: false,
      bottom: false,
      left: false,
      right: false,
      round: false,
      closeIcon: false,
      customCloseIcon: false,
      customIconPosition: false,
    },
  }

  toggle = (type, show) => {
    this.setState({
      show: {
        ...this.state.show,
        [type]: show,
      },
    })
  }

  showBasic = () => {
    this.toggle('basic', true)
  }

  hideBasic = () => {
    this.toggle('basic', false)
  }

  showTop = () => {
    this.toggle('top', true)
  }

  hideTop = () => {
    this.toggle('top', false)
  }

  showLeft = () => {
    this.toggle('left', true)
  }

  hideLeft = () => {
    this.toggle('left', false)
  }

  showRight = () => {
    this.toggle('right', true)
  }

  hideRight = () => {
    this.toggle('right', false)
  }

  showBottom = () => {
    this.toggle('bottom', true)
  }

  hideBottom = () => {
    this.toggle('bottom', false)
  }

  showRound = () => {
    this.toggle('round', true)
  }

  hideRound = () => {
    this.toggle('round', false)
  }

  showCloseIcon = () => {
    this.toggle('closeIcon', true)
  }

  hideCloseIcon = () => {
    this.toggle('closeIcon', false)
  }

  showCustomCloseIcon = () => {
    this.toggle('customCloseIcon', true)
  }

  hideCustomCloseIcon = () => {
    this.toggle('customCloseIcon', false)
  }

  showCustomIconPosition = () => {
    this.toggle('customIconPosition', true)
  }

  hideCustomIconPosition = () => {
    this.toggle('customIconPosition', false)
  }

  render() {
    const { show } = this.state
    return (
      <DemoPage title="Popup 弹出层">
        <>
          <DemoBlock title="基础用法">
            <Cell title="展示弹出层" isLink onClick={this.showBasic}></Cell>
            <Popup
              show={show.basic}
              style="padding: 30px 50px"
              onClose={this.hideBasic}
            >
              内容
            </Popup>
          </DemoBlock>
          <DemoBlock title="弹出位置">
            <Cell title="顶部弹出" isLink onClick={this.showTop}></Cell>
            <Cell title="底部弹出" isLink onClick={this.showBottom}></Cell>
            <Cell title="左侧弹出" isLink onClick={this.showLeft}></Cell>
            <Cell title="右侧弹出" isLink onClick={this.showRight}></Cell>
            <Popup
              show={show.top}
              position="top"
              style="height: 20%"
              onClose={this.hideTop}
            ></Popup>
            <Popup
              show={show.bottom}
              position="bottom"
              style="height: 20%"
              onClose={this.hideBottom}
            ></Popup>
            <Popup
              show={show.left}
              position="left"
              style="width: 20%; height: 100%"
              onClose={this.hideLeft}
            ></Popup>
            <Popup
              show={show.right}
              position="right"
              style="width: 20%; height: 100%"
              onClose={this.hideRight}
            ></Popup>
          </DemoBlock>
          <DemoBlock title="关闭图标">
            <Cell title="关闭图标" isLink onClick={this.showCloseIcon}></Cell>
            <Cell
              title="自定义图标"
              isLink
              onClick={this.showCustomCloseIcon}
            ></Cell>
            <Cell
              title="图标位置"
              isLink
              onClick={this.showCustomIconPosition}
            ></Cell>
            <Popup
              show={show.closeIcon}
              closeable
              position="bottom"
              style="height: 20%"
              onClose={this.hideCloseIcon}
            ></Popup>
            <Popup
              show={show.customCloseIcon}
              closeable
              closeIcon="close"
              position="bottom"
              style="height: 20%"
              onClose={this.hideCustomCloseIcon}
            ></Popup>
            <Popup
              show={show.customIconPosition}
              closeable
              closeIconPosition="top-left"
              position="bottom"
              style="height: 20%"
              onClose={this.hideCustomIconPosition}
            ></Popup>
          </DemoBlock>
          <DemoBlock title="圆角弹窗">
            <Cell title="圆角弹窗" isLink onClick={this.showRound}></Cell>
            <Popup
              show={show.round}
              round
              position="bottom"
              style="height: 20%"
              onClose={this.hideRound}
            ></Popup>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
