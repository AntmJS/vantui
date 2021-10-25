import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import {
  Toast,
  GoodsActionButton,
  GoodsActionIcon,
  GoodsAction,
  toast,
} from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  onClickIcon = () => {
    toast('点击图标')
  }

  onClickButton = () => {
    toast('点击按钮')
  }

  render() {
    return (
      <Block>
        <DemoBlock title="基础用法">
          <GoodsAction
            className="goods-action-position"
            safeAreaInsetBottom={false}
          >
            <GoodsActionIcon
              icon="chat-o"
              text="客服"
              openType="contact"
            ></GoodsActionIcon>
            <GoodsActionIcon
              icon="cart-o"
              text="购物车"
              onClick={this.onClickIcon}
            ></GoodsActionIcon>
            <GoodsActionButton
              text="加入购物车"
              type="warning"
              onClick={this.onClickButton}
            ></GoodsActionButton>
            <GoodsActionButton
              text="立即购买"
              onClick={this.onClickButton}
            ></GoodsActionButton>
          </GoodsAction>
        </DemoBlock>
        <DemoBlock title="提示信息">
          <GoodsAction
            className="goods-action-position"
            safeAreaInsetBottom={false}
          >
            <GoodsActionIcon icon="chat-o" text="客服" dot></GoodsActionIcon>
            <GoodsActionIcon
              icon="cart-o"
              text="购物车"
              info="5"
            ></GoodsActionIcon>
            <GoodsActionIcon icon="shop-o" text="店铺"></GoodsActionIcon>
            <GoodsActionButton
              text="加入购物车"
              type="warning"
            ></GoodsActionButton>
            <GoodsActionButton text="立即购买"></GoodsActionButton>
          </GoodsAction>
        </DemoBlock>
        <DemoBlock title="自定义按钮颜色">
          <GoodsAction
            className="goods-action-position"
            safeAreaInsetBottom={false}
          >
            <GoodsActionIcon icon="chat-o" text="客服"></GoodsActionIcon>
            <GoodsActionIcon icon="shop-o" text="店铺"></GoodsActionIcon>
            <GoodsActionButton
              color="#be99ff"
              type="warning"
              text="加入购物车"
            ></GoodsActionButton>
            <GoodsActionButton
              color="#7232dd"
              text="立即购买"
            ></GoodsActionButton>
          </GoodsAction>
        </DemoBlock>
        <DemoBlock title="朴素按钮">
          <GoodsAction
            className="goods-action-position"
            safeAreaInsetBottom={false}
          >
            <GoodsActionIcon icon="chat-o" text="客服"></GoodsActionIcon>
            <GoodsActionIcon icon="shop-o" text="店铺"></GoodsActionIcon>
            <GoodsActionButton
              color="#7232dd"
              text="加入购物车"
              type="warning"
            ></GoodsActionButton>
            <GoodsActionButton
              plain
              color="#7232dd"
              text="立即购买"
            ></GoodsActionButton>
          </GoodsAction>
        </DemoBlock>
        <Toast id="van-toast"></Toast>
      </Block>
    )
  }
}
