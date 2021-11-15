import { Component } from 'react'

import { ShareSheet, Toast, Cell } from '@antmjs/vantui'
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
      withDesc: false,
      multiLine: false,
      customIcon: false,
    },
    options: [
      { name: '微信', icon: 'wechat', openType: 'share' },
      { name: '朋友圈', icon: 'wechat-moments' },
      { name: 'QQ', icon: 'qq' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
      { name: '小程序码', icon: 'weapp-qrcode' },
    ],

    multiLineOptions: [
      [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    ],

    customIconOptions: [
      {
        name: '名称',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
      },
      {
        name: '名称',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
      },
      {
        name: '名称',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
      },
    ],

    optionsWithDesc: [
      { name: '微信', icon: 'wechat' },
      { name: '微博', icon: 'weibo' },
      {
        name: '复制链接',
        icon: 'link',
        description: '描述信息',
      },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ],
  }

  onShowShareSheet = (event) => {
    this.setState({
      show: {
        ...this.state.show,
        [event.target.dataset.type]: true,
      },
    })
  }

  onClose = () => {
    this.setState({
      show: {
        basic: false,
        withDesc: false,
        multiLine: false,
        customIcon: false,
      },
    })
  }

  onSelect = (event) => {
    Toast.show(event.detail.name)
    this.onClose()
  }

  render() {
    const {
      show,
      options,
      multiLineOptions,
      customIconOptions,
      optionsWithDesc,
    } = this.state
    return (
      <DemoPage title="ShareSheet 分享面板">
        <>
          <DemoBlock card title="基础用法">
            <Cell
              isLink
              title="显示分享面板"
              onClick={(e) => {
                this.onShowShareSheet({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'basic' },
                  },
                  target: {
                    dataset: { type: 'basic' },
                  },
                })
              }}
            ></Cell>
            <ShareSheet
              show={show.basic}
              title="立即分享给好友"
              options={options}
              onClose={this.onClose}
              onSelect={this.onSelect}
            ></ShareSheet>
          </DemoBlock>
          <DemoBlock card title="展示多行选项">
            <Cell
              isLink
              title="显示分享面板"
              onClick={(e) => {
                this.onShowShareSheet({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'multiLine' },
                  },
                  target: {
                    dataset: { type: 'multiLine' },
                  },
                })
              }}
            ></Cell>
            <ShareSheet
              show={show.multiLine}
              title="立即分享给好友"
              options={multiLineOptions}
              onClose={this.onClose}
              onSelect={this.onSelect}
            ></ShareSheet>
          </DemoBlock>
          <DemoBlock card title="自定义图标">
            <Cell
              isLink
              title="显示分享面板"
              onClick={(e) => {
                this.onShowShareSheet({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'customIcon' },
                  },
                  target: {
                    dataset: { type: 'customIcon' },
                  },
                })
              }}
            ></Cell>
            <ShareSheet
              show={show.customIcon}
              options={customIconOptions}
              onClose={this.onClose}
              onSelect={this.onSelect}
            ></ShareSheet>
          </DemoBlock>
          <DemoBlock card title="展示描述信息">
            <Cell
              isLink
              title="显示分享面板"
              onClick={(e) => {
                this.onShowShareSheet({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'withDesc' },
                  },
                  target: {
                    dataset: { type: 'withDesc' },
                  },
                })
              }}
            ></Cell>
            <ShareSheet
              show={show.withDesc}
              title="立即分享给好友"
              options={optionsWithDesc}
              description="描述信息"
              onClose={this.onClose}
              onSelect={this.onSelect}
            ></ShareSheet>
          </DemoBlock>
          <Toast id="van-toast"></Toast>
        </>
      </DemoPage>
    )
  }
}
