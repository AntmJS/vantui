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
  Area,
  Dialog,
  TreeSelect,
} from '@antmjs/vantui'

const areaList = {
  province_list: {
    110000: '北京市',
    120000: '天津市',
  },
  city_list: {
    110100: '北京市',
    120100: '天津市',
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
  },
}

const treeSelectData = [
  {
    // 导航名称
    text: '所有城市',
    // 导航名称右上角徽标，1.5.0 版本开始支持
    badge: 3,
    // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
    dot: true,
    // 禁用选项
    disabled: false,
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '温州',
        // id，作为匹配选中状态的标识
        id: 1,
        // 禁用选项
        disabled: false,
      },
      {
        text: '杭州',
        id: 2,
      },
    ],
  },
  {
    // 导航名称
    text: '河南',
    // 导航名称右上角徽标，1.5.0 版本开始支持
    badge: 3,
    // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
    dot: true,
    // 禁用选项
    disabled: false,
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '信阳',
        // id，作为匹配选中状态的标识
        id: 100,
        // 禁用选项
        disabled: false,
      },
      {
        text: '郑州',
        id: 102,
      },
    ],
  },
]
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
  const [showDialog, setShowDialog] = useState(false)
  const [mainActiveIndex, setMainActiveIndex] = useState(0)
  const [activeId, setActiveId] = useState<any>(2)

  const [value] = useState('110101')

  function onClickNav({ detail = {} }: any) {
    console.log('onClickNavdetail', detail)
    setMainActiveIndex(detail.index || 0)
  }

  function onClickItem({
    detail,
  }: {
    detail: {
      text: string
      id: string | number
      disabled?: boolean | undefined
    }
  }) {
    const _activeId = activeId === detail.id ? null : detail.id
    setActiveId(_activeId)
  }
  function changeHandle(params: any) {
    console.log(params)
    // setValue(params.values)
  }

  function dialogFn() {
    Dialog.alert({
      selector: 'name',
      title: '标题',
      message: '代码是写出来给人看的，附带能在机器上运行',
      theme: 'round-button',
    }).then(() => {
      // on close
      console.log('on close')
    })
  }

  const beforeClose = (action: string): Promise<boolean> =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (action === 'confirm') {
          resolve(true)
        } else {
          // 拦截取消操作
          resolve(false)
        }
      }, 1000)
    })
  function asyncConfirm() {
    Dialog.confirm({
      selector: 'name',
      title: '标题',
      message: '代码是写出来给人看的，asyncConfirm附带能在机器上运行',
      beforeClose,
    }).catch(() => {
      console.log('asyncConfirm  on close')
    })
  }

  function dialogConfirm() {
    Dialog.confirm({
      selector: 'name',
      title: '标题',
      message: '代码是写出来给人看的，附带能在机器上运行',
    })
      .then(() => {
        // on close
        console.log('on Confirm')
      })
      .catch(() => {
        console.log('on close')
      })
  }
  return (
    <View className="pages-index-index">
      <Button block onClick={() => setShow(!show)}>
        点我popup
      </Button>
      <Button block onClick={() => setShowActionSheet(!showActionSheet)}>
        点我 actionSheet
      </Button>
      <Button block onClick={() => setShowShareSheet(!showActionSheet)}>
        点我shareSheet
      </Button>
      <Stepper value={5} />
      <Button block onClick={() => setShowDialog(!showActionSheet)}>
        点我dialog
      </Button>
      <Button block onClick={dialogFn}>
        点我dialogCancel
      </Button>
      <Button block onClick={dialogConfirm}>
        点我dialogConfirm
      </Button>
      <Button block onClick={asyncConfirm}>
        点我asyncConfirm
      </Button>

      <TreeSelect
        items={treeSelectData}
        mainActiveIndex={mainActiveIndex}
        activeId={activeId}
        onClickNav={onClickNav}
        onClickItem={onClickItem}
      />
      <Dialog
        id="name46"
        title="标题"
        show={showDialog}
        showCancelButton
        message="hahhahahahahahahaah电视电话说得好"
        // confirm-button-open-type="getUserInfo"
        onClose={() => setShowDialog(!showDialog)}
      ></Dialog>
      <Dialog id="name"></Dialog>
      <Area
        areaList={areaList}
        value={value}
        onChange={changeHandle}
        columnsPlaceholder={['请选择', '请选择', '请选择']}
        title="标题"
      />
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
    </View>
  )
}
