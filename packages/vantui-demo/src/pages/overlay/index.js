import { Component } from 'react'
import { View } from '@tarojs/components'
import { Overlay, Button } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    show: false,
    showEmbedded: false,
  }

  onClickShow = () => {
    this.setState({ show: true })
  }

  onClickHide = () => {
    this.setState({ show: false })
  }

  onClickShowEmbedded = () => {
    this.setState({ showEmbedded: true })
  }

  onClickHideEmbedded = () => {
    this.setState({ showEmbedded: false })
  }

  noop = () => {}

  render() {
    const { show, showEmbedded } = this.state
    return (
      <DemoPage title="Overlay 遮罩层">
        <>
          <DemoBlock title="基础用法" padding>
            <Button type="primary" onClick={this.onClickShow}>
              显示遮罩层
            </Button>
            <Overlay show={show} onClick={this.onClickHide}></Overlay>
          </DemoBlock>
          <DemoBlock title="嵌入内容" padding>
            <Button type="primary" onClick={this.onClickShowEmbedded}>
              嵌入内容
            </Button>
            <Overlay show={showEmbedded} onClick={this.onClickHideEmbedded}>
              <View className="wrapper">
                <View className="block" onClick={this.noop}></View>
              </View>
            </Overlay>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
