import { View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { useDidHide, useDidShow } from '@tarojs/taro'
import {
  Empty,
  Divider,
  Radio,
  RadioGroup,
  NoticeBar,
  Collapse,
} from '@antmjs/vantui'

import './index.less'

export default function Index() {
  const [state, setState] = useState({
    collapseActiveValues: [],
    radioActiveValue: '',
  })

  useEffect(function () {
    console.info('index page load.')
    return function () {
      console.info('index page unload.')
    }
  }, [])
  useDidShow(function () {
    console.info('index page show.')
  })
  useDidHide(function () {
    console.info('index page hide.')
  })

  const handleChangeCollapse = function (event: any) {
    setState((state) => {
      return {
        ...state,
        collapseActiveValues: event.defail,
      }
    })
  }

  const handleChangeRadio = function (event: any) {
    setState((state) => {
      return {
        ...state,
        radioActiveValue: event.defail,
      }
    })
  }

  return (
    <View className="pages-zx-index">
      <Empty
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="描述文字"
      />
      <Divider
        contentPosition="center"
        customStyle="color: #1989fa; border-color: #1989fa; font-size: 18px;"
      >
        文本
      </Divider>
      <NoticeBar scrollable text="技术是开发它的人的共同灵魂。" />
      <Collapse
        value={state.collapseActiveValues}
        onChange={handleChangeCollapse}
      >
        {/* <CollapseItem title="有赞微商城" name="1">
          提供多样店铺模板，快速搭建网上商城
        </CollapseItem>
        <CollapseItem title="有赞零售" name="2">
          网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
        </CollapseItem>
        <CollapseItem title="有赞美业" name="3" disabled>
          线上拓客，随时预约，贴心顺手的开单收银
        </CollapseItem> */}
        <View>1</View>
        <View>2</View>
        <View>3</View>
      </Collapse>
      <RadioGroup value={state.radioActiveValue}>
        <Radio name="1">单选框 1</Radio>
        <Radio name="2">单选框 2</Radio>
      </RadioGroup>
    </View>
  )
}
