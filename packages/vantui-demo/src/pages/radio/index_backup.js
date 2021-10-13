import { Block, Image } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import Page from '../../common/page.js'

import VanConfigProvider from '../../dist/config-provider/index'
import VanShareSheet from '../../dist/share-sheet/index'
import VanCalendar from '../../dist/calendar/index'
import VanSkeleton from '../../dist/skeleton/index'
import VanDropdownItem from '../../dist/dropdown-item/index'
import VanDropdownMenu from '../../dist/dropdown-menu/index'
import VanGridItem from '../../dist/grid-item/index'
import VanGrid from '../../dist/grid/index'
import VanIndexAnchor from '../../dist/index-anchor/index'
import VanIndexBar from '../../dist/index-bar/index'
import VanCircle from '../../dist/circle/index'
import VanOverlay from '../../dist/overlay/index'
import VanPicker from '../../dist/picker/index'
import VanCollapseItem from '../../dist/collapse-item/index'
import VanCollapse from '../../dist/collapse/index'
import VanRate from '../../dist/rate/index'
import VanDatetimePicker from '../../dist/datetime-picker/index'
import VanTreeSelect from '../../dist/tree-select/index'
import VanTransition from '../../dist/transition/index'
import VanToast from '../../dist/toast/index'
import VanTag from '../../dist/tag/index'
import VanTabbarItem from '../../dist/tabbar-item/index'
import VanTabbar from '../../dist/tabbar/index'
import VanTabs from '../../dist/tabs/index'
import VanTab from '../../dist/tab/index'
import VanSwitch from '../../dist/switch/index'
import VanUploader from '../../dist/uploader/index'
import VanSwipeCell from '../../dist/swipe-cell/index'
import VanSubmitBar from '../../dist/submit-bar/index'
import VanSticky from '../../dist/sticky/index'
import VanSteps from '../../dist/steps/index'
import VanStepper from '../../dist/stepper/index'
import VanSlider from '../../dist/slider/index'
import VanSidebarItem from '../../dist/sidebar-item/index'
import VanSidebar from '../../dist/sidebar/index'
import VanSearch from '../../dist/search/index'
import VanRow from '../../dist/row/index'
import VanRadioGroup from '../../dist/radio-group/index'
import VanRadio from '../../dist/radio/index'
import VanProgress from '../../dist/progress/index'
import VanPopup from '../../dist/popup/index'
import VanPanel from '../../dist/panel/index'
import VanNotify from '../../dist/notify/index'
import VanNoticeBar from '../../dist/notice-bar/index'
import VanNavBar from '../../dist/nav-bar/index'
import VanLoading from '../../dist/loading/index'
import VanImage from '../../dist/image/index'
import VanIcon from '../../dist/icon/index'
import VanGoodsActionButton from '../../dist/goods-action-button/index'
import VanGoodsActionIcon from '../../dist/goods-action-icon/index'
import VanGoodsAction from '../../dist/goods-action/index'
import VanField from '../../dist/field/index'
import VanEmpty from '../../dist/empty/index'
import VanDivider from '../../dist/divider/index'
import VanDialog from '../../dist/dialog/index'
import VanCountDown from '../../dist/count-down/index'
import VanCol from '../../dist/col/index'
import VanCheckboxGroup from '../../dist/checkbox-group/index'
import VanCheckbox from '../../dist/checkbox/index'
import VanCellGroup from '../../dist/cell-group/index'
import VanCell from '../../dist/cell/index'
import VanCard from '../../dist/card/index'
import VanButton from '../../dist/button/index'
import VanArea from '../../dist/area/index'
import VanActionSheet from '../../dist/action-sheet/index'
import DemoBlock from '../../components/demo-block/index'
import './index.scss'

@withWeapp({
  data: {
    radio1: '1',
    radio2: '2',
    radio3: '1',
    radio4: '1',
    radio5: '1',
    radioSize: '1',
    radioLabel: '1',
    radioShape: '1',
    icon: {
      normal:
        'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
      active:
        'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png',
    },
  },

  onChange(event) {
    const { key } = event.currentTarget.dataset
    this.setData({ [key]: event.detail })
  },

  onClick(event) {
    const { name } = event.currentTarget.dataset
    this.setData({
      radio5: name,
    })
  },
})
class _C extends React.Component {
  render() {
    const {
      radio1,
      radio2,
      radioShape,
      radio3,
      radioSize,
      radio4,
      icon,
      radioLabel,
      radio5,
    } = this.data
    return (
      <Block>
        <DemoBlock title="基本用法" padding>
          <VanRadioGroup
            value={radio1}
            data-key="radio1"
            onChange={this.onChange}
          >
            <VanRadio name="1" customClass="demo-radio">
              单选框 1
            </VanRadio>
            <VanRadio name="2">单选框 2</VanRadio>
          </VanRadioGroup>
        </DemoBlock>
        <DemoBlock title="水平排列" padding>
          <VanRadioGroup
            value={radio1}
            data-key="radio1"
            onChange={this.onChange}
            direction="horizontal"
          >
            <VanRadio name="1">单选框 1</VanRadio>
            <VanRadio name="2">单选框 2</VanRadio>
          </VanRadioGroup>
        </DemoBlock>
        <DemoBlock title="禁用状态" padding>
          <VanRadioGroup
            disabled
            value={radio2}
            data-key="radio2"
            onChange={this.onChange}
          >
            <VanRadio name="1" customClass="demo-radio">
              单选框 1
            </VanRadio>
            <VanRadio name="2">单选框 2</VanRadio>
          </VanRadioGroup>
        </DemoBlock>
        <DemoBlock title="自定义形状" padding>
          <VanRadioGroup
            value={radioShape}
            data-key="radioShape"
            onChange={this.onChange}
          >
            <VanRadio name="1" shape="square" customClass="demo-radio">
              单选框
            </VanRadio>
            <VanRadio name="2" shape="square">
              单选框
            </VanRadio>
          </VanRadioGroup>
        </DemoBlock>
        <DemoBlock title="自定义颜色" padding>
          <VanRadioGroup
            value={radio3}
            data-key="radio3"
            onChange={this.onChange}
          >
            <VanRadio name="1" customClass="demo-radio" checkedColor="#07c160">
              单选框
            </VanRadio>
            <VanRadio name="2" checkedColor="#07c160">
              单选框
            </VanRadio>
          </VanRadioGroup>
        </DemoBlock>
        <DemoBlock title="自定义大小" padding>
          <VanRadioGroup
            value={radioSize}
            data-key="radioSize"
            onChange={this.onChange}
          >
            <VanRadio name="1" iconSize="24px" customClass="demo-radio">
              单选框
            </VanRadio>
            <VanRadio name="2" iconSize="24px">
              单选框
            </VanRadio>
          </VanRadioGroup>
        </DemoBlock>
        <DemoBlock title="自定义图标" padding>
          <VanRadioGroup
            value={radio4}
            data-key="radio4"
            onChange={this.onChange}
          >
            <VanRadio
              useIconSlot
              name="1"
              renderIcon={
                <Block>
                  <Image
                    src={radio4 === '1' ? icon.active : icon.normal}
                    className="icon"
                    mode="widthFix"
                  ></Image>
                </Block>
              }
            >
              自定义图标
            </VanRadio>
            <VanRadio
              useIconSlot
              name="2"
              renderIcon={
                <Block>
                  <Image
                    src={radio4 === '2' ? icon.active : icon.normal}
                    className="icon"
                    mode="widthFix"
                  ></Image>
                </Block>
              }
            >
              自定义图标
            </VanRadio>
          </VanRadioGroup>
        </DemoBlock>
        <DemoBlock title="禁用文本点击" padding>
          <VanRadioGroup
            value={radioLabel}
            data-key="radioLabel"
            onChange={this.onChange}
          >
            <VanRadio labelDisabled name="1" customClass="demo-radio">
              单选框 1
            </VanRadio>
            <VanRadio labelDisabled name="2">
              单选框 2
            </VanRadio>
          </VanRadioGroup>
        </DemoBlock>
        <DemoBlock title="与 Cell 组件一起使用">
          <VanRadioGroup value={radio5}>
            <VanCellGroup>
              <VanCell
                title="单选框 1"
                clickable
                data-name="1"
                onClick={this.onClick}
                renderRighticon={
                  <Block>
                    <VanRadio name="1"></VanRadio>
                  </Block>
                }
              ></VanCell>
              <VanCell
                title="单选框 2"
                clickable
                data-name="2"
                onClick={this.onClick}
                renderRighticon={
                  <Block>
                    <VanRadio name="2"></VanRadio>
                  </Block>
                }
              ></VanCell>
            </VanCellGroup>
          </VanRadioGroup>
        </DemoBlock>
      </Block>
    )
  }
}

export default _C
