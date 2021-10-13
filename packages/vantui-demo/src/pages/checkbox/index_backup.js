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
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    checkboxLabel: true,
    checkboxSize: true,
    checkboxShape: true,
    list: ['a', 'b', 'c'],
    result: ['a', 'b'],
    result2: [],
    result3: [],
    result4: [],
    activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
    inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
  },

  onChange(event) {
    const { key } = event.currentTarget.dataset
    this.setData({ [key]: event.detail })
  },

  onClick(event) {
    const { value } = event.currentTarget.dataset
    this.setData({
      radio3: value,
    })
  },

  toggle(event) {
    const { index } = event.currentTarget.dataset
    const checkbox = this.selectComponent(`.checkboxes-${index}`)
    checkbox.toggle()
  },

  noop() {},
})
class _C extends React.Component {
  render() {
    const {
      checkbox1,
      checkboxShape,
      checkbox2,
      checkboxSize,
      checkbox3,
      activeIcon,
      inactiveIcon,
      checkboxLabel,
      result,
      list,
      result4,
      result2,
      result3,
    } = this.data
    return (
      <Block>
        <DemoBlock title="基本用法">
          <VanCheckbox
            value={checkbox1}
            data-key="checkbox1"
            customClass="demo-checkbox"
            onChange={this.onChange}
          >
            复选框
          </VanCheckbox>
        </DemoBlock>
        <DemoBlock title="禁用状态">
          <VanCheckbox disabled value={false} customClass="demo-checkbox">
            复选框
          </VanCheckbox>
          <VanCheckbox disabled value={true} customClass="demo-checkbox">
            复选框
          </VanCheckbox>
        </DemoBlock>
        <DemoBlock title="自定义形状">
          <VanCheckbox
            value={checkboxShape}
            data-key="checkboxShape"
            shape="square"
            customClass="demo-checkbox"
            onChange={this.onChange}
          >
            复选框
          </VanCheckbox>
        </DemoBlock>
        <DemoBlock title="自定义颜色">
          <VanCheckbox
            value={checkbox2}
            data-key="checkbox2"
            checkedColor="#07c160"
            customClass="demo-checkbox"
            onChange={this.onChange}
          >
            复选框
          </VanCheckbox>
        </DemoBlock>
        <DemoBlock title="自定义大小">
          <VanCheckbox
            iconSize="25px"
            value={checkboxSize}
            data-key="checkboxSize"
            customClass="demo-checkbox"
            onChange={this.onChange}
          >
            复选框
          </VanCheckbox>
        </DemoBlock>
        <DemoBlock title="自定义图标">
          <VanCheckbox
            useIconSlot
            value={checkbox3}
            data-key="checkbox3"
            customClass="demo-checkbox"
            onChange={this.onChange}
            renderIcon={
              <Block>
                <Image
                  className="icon"
                  mode="widthFix"
                  src={checkbox3 ? activeIcon : inactiveIcon}
                ></Image>
              </Block>
            }
          >
            自定义图标
          </VanCheckbox>
        </DemoBlock>
        <DemoBlock title="禁用文本点击">
          <VanCheckbox
            labelDisabled
            value={checkboxLabel}
            data-key="checkboxLabel"
            customClass="demo-checkbox"
            onChange={this.onChange}
          >
            复选框
          </VanCheckbox>
        </DemoBlock>
        <DemoBlock title="复选框组">
          <VanCheckboxGroup
            value={result}
            data-key="result"
            onChange={this.onChange}
          >
            {list.map((item, index) => {
              return (
                <VanCheckbox key={item} name={item} customClass="demo-checkbox">
                  {'复选框 ' + item}
                </VanCheckbox>
              )
            })}
          </VanCheckboxGroup>
        </DemoBlock>
        <DemoBlock title="水平排列">
          <VanCheckboxGroup
            direction="horizontal"
            value={result4}
            data-key="result4"
            onChange={this.onChange}
          >
            {list.map((item, index) => {
              return (
                <VanCheckbox key={item} name={item} customClass="demo-checkbox">
                  {'复选框 ' + item}
                </VanCheckbox>
              )
            })}
          </VanCheckboxGroup>
        </DemoBlock>
        <DemoBlock title="限制最大可选数">
          <VanCheckboxGroup
            value={result2}
            data-key="result2"
            max="2"
            onChange={this.onChange}
          >
            {list.map((item, index) => {
              return (
                <VanCheckbox key={item} name={item} customClass="demo-checkbox">
                  {'复选框 ' + item}
                </VanCheckbox>
              )
            })}
          </VanCheckboxGroup>
        </DemoBlock>
        <DemoBlock title="搭配单元格组件使用">
          <VanCheckboxGroup
            value={result3}
            data-key="result3"
            onChange={this.onChange}
          >
            <VanCellGroup>
              {list.map((item, index) => {
                return (
                  <VanCell
                    key={item}
                    title={'复选框 ' + item}
                    valueClass="value-class"
                    clickable
                    data-index={index}
                    onClick={this.toggle}
                  >
                    <VanCheckbox
                      onTap={this.noop}
                      className={'checkboxes-' + index}
                      name={item}
                    ></VanCheckbox>
                  </VanCell>
                )
              })}
            </VanCellGroup>
          </VanCheckboxGroup>
        </DemoBlock>
      </Block>
    )
  }
}

export default _C
