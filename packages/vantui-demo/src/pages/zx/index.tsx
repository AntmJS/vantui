import { Button, View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { useDidHide, useDidShow } from '@tarojs/taro'
import {
  Empty,
  Divider,
  Radio,
  RadioGroup,
  NoticeBar,
  Checkbox,
  CheckboxGroup,
  Switch,
  Uploader,
  Collapse,
  CollapseItem,
  Circle,
  Toast,
  Notify,
} from '@antmjs/vantui'

import './index.less'

export default function Index() {
  const [state, setState] = useState({
    collapseActiveValues: [],
    radioActiveValue: '1',
    singleCheckValue: true,
    multiCheckValue: [],
    switchChecked: true,
    fileList: [
      {
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        deletable: false,
      },
    ],
    circleValue: 20,
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
    console.log('改变: ', event)
    setState((state) => {
      return {
        ...state,
        collapseActiveValues: event.detail,
      }
    })
  }

  const handleOpenCollapse = function (event: any) {
    console.log(`打开: `, event)
    // Toast.show('测试')
    Toast.loading({
      duration: 1000,
      forbidClick: true,
      message: '倒计时 3 秒',
      selector: '#van-toast',
      position: 'bottom',
    })
    // setTimeout(() => {
    //   Toast.clear({
    //     onClose() {
    //       console.log('loading关闭')
    //     },
    //   })
    // }, 3000)
    Notify.show({
      message: '自定义节点选择器',
      duration: 1000,
      selector: '#custom-selector',
      onClick() {
        console.log('1: click')
      },
      onOpened() {
        console.log('1: opened')
      },
      onClose() {
        console.log('1: close')
      },
    })
  }
  const handleCloseCollapse = function (event: any) {
    console.log(`关闭: `, event)
  }

  const handleChangeRadio = function (event: any) {
    setState((state) => {
      return {
        ...state,
        radioActiveValue: event.detail,
      }
    })
  }

  const handleChangeSingleCheckValue = function (event: any) {
    setState((state) => {
      return {
        ...state,
        singleCheckValue: event.detail,
      }
    })
  }

  const handleMultiCheckValue = function (event: any) {
    setState((state) => {
      return {
        ...state,
        multiCheckValue: event.detail,
      }
    })
  }

  const handleSwitchChecked = function (event: any) {
    setState((state) => {
      return {
        ...state,
        switchChecked: event.detail,
      }
    })
  }

  const handleAddCircleValue = function () {
    setState((state) => {
      return {
        ...state,
        circleValue: state.circleValue + 10,
      }
    })
  }

  return (
    <View className="pages-zx-index">
      <Empty image="network" description="描述文字" />
      <Divider
        dashed
        contentPosition="center"
        style="color: #1989fa; border-color: #1989fa; font-size: 18px;"
      >
        文本
      </Divider>
      <Uploader fileList={state.fileList} deletable={true} />
      <NoticeBar
        scrollable
        text="技术是开发它的人的共同灵魂。"
        mode="closeable"
      />
      <Circle
        value={state.circleValue}
        size={100}
        strokeWidth={8}
        text="颜色定制"
        color="#00ffff"
      />
      <Button onClick={handleAddCircleValue}>增加</Button>
      <Toast id="van-toast" />
      <Notify
        id="custom-selector"
        onClick={() => {
          console.log('2: click')
        }}
        onOpened={() => {
          console.log('2: opened')
        }}
        onClose={() => {
          console.log('2: close')
        }}
      />
      <Collapse
        value={state.collapseActiveValues}
        onChange={handleChangeCollapse}
        onOpen={handleOpenCollapse}
        onClose={handleCloseCollapse}
      >
        <CollapseItem title="有赞微商城" name="1">
          提供多样店铺模板，快速搭建网上商城
        </CollapseItem>
        <CollapseItem title="有赞零售" name="2">
          网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
        </CollapseItem>
        <CollapseItem title="有赞美业" name="3" disabled>
          线上拓客，随时预约，贴心顺手的开单收银
        </CollapseItem>
      </Collapse>
      <RadioGroup value={state.radioActiveValue} onChange={handleChangeRadio}>
        <Radio name="1" shape="square">
          单选框 1
        </Radio>
        <Radio name="2">单选框 2</Radio>
      </RadioGroup>
      <Checkbox
        value={state.singleCheckValue}
        onChange={handleChangeSingleCheckValue}
      >
        复选框（单）
      </Checkbox>
      <CheckboxGroup
        value={state.multiCheckValue}
        onChange={handleMultiCheckValue}
      >
        <Checkbox name="1" checkedColor="#07c160">
          复选框（多）1
        </Checkbox>
        <Checkbox name="2">复选框（多）2</Checkbox>
        <Checkbox name="3">复选框（多）3</Checkbox>
      </CheckboxGroup>
      <Switch checked={state.switchChecked} onChange={handleSwitchChecked} />
    </View>
  )
}
