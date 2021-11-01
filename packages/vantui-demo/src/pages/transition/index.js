import { Component } from 'react'

import { Transition, Cell } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    show: false,
    name: 'fade',
    showCustom: false,
  }

  onClickFade = () => {
    this.trigger('fade')
  }

  onClickFadeUp = () => {
    this.trigger('fade-up')
  }

  onClickFadeDown = () => {
    this.trigger('fade-down')
  }

  onClickFadeLeft = () => {
    this.trigger('fade-left')
  }

  onClickFadeRight = () => {
    this.trigger('fade-right')
  }

  onClickSlideUp = () => {
    this.trigger('slide-up')
  }

  onClickSlideDown = () => {
    this.trigger('slide-down')
  }

  onClickSlideLeft = () => {
    this.trigger('slide-left')
  }

  onClickSlideRight = () => {
    this.trigger('slide-right')
  }

  trigger = (name) => {
    this.setState({ name, show: true })
    setTimeout(() => {
      this.setState({ show: false })
    }, 500)
  }

  onClickCustom = () => {
    this.setState({ showCustom: true })

    setTimeout(() => {
      this.setState({ showCustom: false })
    }, 1000)
  }

  onBeforeEnter = () => {
    console.log('before enter')
  }

  onEnter = () => {
    console.log('enter')
  }

  onAfterEnter = () => {
    console.log('after enter')
  }

  onBeforeLeave = () => {
    console.log('before leave')
  }

  onLeave = () => {
    console.log('leave')
  }

  onAfterLeave = () => {
    console.log('after leave')
  }

  render() {
    const { show, name, showCustom } = this.state
    return (
      <DemoPage title="Transition 动画">
        <DemoBlock title="基础用法" padding>
          <Cell title="Fade" onClick={this.onClickFade} isLink></Cell>
          <Cell title="Fade Up" onClick={this.onClickFadeUp} isLink></Cell>
          <Cell title="Fade Down" onClick={this.onClickFadeDown} isLink></Cell>
          <Cell title="Fade Left" onClick={this.onClickFadeLeft} isLink></Cell>
          <Cell
            title="Fade Right"
            onClick={this.onClickFadeRight}
            isLink
          ></Cell>
          <Cell title="Slide Up" onClick={this.onClickSlideUp} isLink></Cell>
          <Cell
            title="Slide Down"
            onClick={this.onClickSlideDown}
            isLink
          ></Cell>
          <Cell
            title="Slide Left"
            onClick={this.onClickSlideLeft}
            isLink
          ></Cell>
          <Cell
            title="Slide Right"
            onClick={this.onClickSlideRight}
            isLink
          ></Cell>
          <Cell title="Custom" onClick={this.onClickCustom} isLink></Cell>
          <Transition show={show} name={name} className="block"></Transition>
          <Transition
            show={showCustom}
            name=""
            duration={{
              enter: 300,
              leave: 1000,
            }}
            className="block"
            enterClass="van-enter-class"
            enterActiveClass="van-enter-active-class"
            leaveActiveClass="van-leave-active-class"
            leaveToClass="van-leave-to-class"
            onBeforeEnter={this.onBeforeEnter}
            onEnter={this.onEnter}
            onAfterEnter={this.onAfterEnter}
            onBeforeLeave={this.onBeforeLeave}
            onLeave={this.onLeave}
            onAfterLeave={this.onAfterLeave}
          ></Transition>
        </DemoBlock>
      </DemoPage>
    )
  }
}
