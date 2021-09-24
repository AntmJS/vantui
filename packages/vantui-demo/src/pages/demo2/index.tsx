import { View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { useDidHide, useDidShow, navigateTo } from '@tarojs/taro'
import {
  Popup,
  Steps,
  Stepper,
  ActionSheet,
  IndexBar,
  IndexAnchor,
  Cell,
  Button,
  ShareSheet,
} from '@antmjs/vantui'

import './index.less'

export default function Index() {
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

  const [show, setShow] = useState(false)
  const [showActionSheet, setShowActionSheet] = useState(false)
  const [showShareSheet, setShowShareSheet] = useState(false)
  return (
    <View className="pages-index-index">
      <IndexBar indexList={['A', 'B', 'C', 'D', 'E', 'F', 'G']}>
        <IndexAnchor index="A" />
        <Cell title="文本" />
        <Cell title="文本" />
        <Cell title="文本" />
        <IndexAnchor index="B" />
        <Cell title="文本" />
        <Cell title="文本" />
        <Cell title="文本" />
        <IndexAnchor index="C" />
        <Cell title="文本" />
        <Cell title="文本" />
        <Cell title="文本" />
        <IndexAnchor index="D" />
        <Cell title="文本" />
        <Cell title="文本" />
        <Cell title="文本" />
        <IndexAnchor index="E" />
        <Cell title="文本" />
        <Cell title="文本" />
        <Cell title="文本" />
        <Cell title="文本" />
        <Cell title="文本" />
        <Cell title="文本" />
        <IndexAnchor index="F" />
        <Cell title="文本" />
        <Cell title="文本" />
        <Cell title="文本" />
        <IndexAnchor index="G" />
        <Cell title="文本" />
        <Cell title="文本" />
        <Cell title="文本" />
      </IndexBar>
      <Button block onClick={() => setShow(!show)}>
        点我popup
      </Button>
      <Button block onClick={() => setShowActionSheet(!showActionSheet)}>
        点我 actionSheet
      </Button>
      <Button block onClick={() => setShowShareSheet(!showActionSheet)}>
        点我shareSheet
      </Button>
      <ActionSheet
        show={showActionSheet}
        onClose={() => setShowActionSheet(false)}
        onCancel={() => setShowActionSheet(false)}
        cancelText="取消"
        actions={[
          {
            name: '选项',
          },
          {
            name: '选项',
          },
          {
            name: '选项',
            subname: '描述信息',
            openType: 'share',
          },
        ]}
      />
      <ShareSheet
        onClose={() => setShowShareSheet(false)}
        onCancel={() => setShowShareSheet(false)}
        show={showShareSheet}
        options={[
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          {
            name: '复制链接',
            icon: 'link',
            description: '描述信息',
          },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ]}
        title="立即分享给好友"
        description="描述信息"
      />
      <Stepper value={5} min={5} max={8} />
      <Steps
        active={2}
        steps={[
          {
            text: '步骤一',
            desc: '描述信息',
            inactiveIcon: 'location-o',
            activeIcon: 'success',
          },
          {
            text: '步骤二',
            desc: '描述信息',
            inactiveIcon: 'like-o',
            activeIcon: 'plus',
          },
          {
            text: '步骤三',
            desc: '描述信息',
            inactiveIcon: 'star-o',
            activeIcon: 'cross',
          },
          {
            text: '步骤四',
            desc: '描述信息',
            inactiveIcon: 'phone-o',
            activeIcon: 'fail',
          },
        ]}
      />
      <Popup show={show} position="bottom" onClose={() => setShow(false)}>
        <View>
          <View
            onClick={() => {
              navigateTo({ url: '/pages/index/index' })
            }}
          >
            不是设计开发不贷款分不开的
          </View>
          <View>不是设计开发不贷款分不开的</View>
          <View>不是设计开发不贷款分不开的</View>
          <View>不是设计开发不贷款分不开的</View>
          <View>不是设计开发不贷款分不开的</View>
          <View>不是设计开发不贷款分不开的</View>
        </View>
      </Popup>
    </View>
  )
}
