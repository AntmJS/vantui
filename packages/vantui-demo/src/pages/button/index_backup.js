import { Block, View } from '@tarojs/components'
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

@withWeapp({ data: {} })
class _C extends React.Component {
  render() {
    return (
      <Block>
        <DemoBlock title="按钮类型" padding>
          <View className="row">
            <VanButton className="demo-margin-right">默认按钮</VanButton>
            <VanButton type="primary" className="demo-margin-right">
              主要按钮
            </VanButton>
            <VanButton type="info" className="demo-margin-right">
              信息按钮
            </VanButton>
          </View>
          <VanButton type="danger" className="demo-margin-right">
            危险按钮
          </VanButton>
          <VanButton type="warning">警告按钮</VanButton>
        </DemoBlock>
        <DemoBlock title="朴素按钮" padding>
          <VanButton type="primary" plain className="demo-margin-right">
            朴素按钮
          </VanButton>
          <VanButton type="info" plain>
            朴素按钮
          </VanButton>
        </DemoBlock>
        <DemoBlock title="细边框" padding>
          <VanButton
            type="primary"
            plain
            hairline
            className="demo-margin-right"
          >
            细边框按钮
          </VanButton>
          <VanButton type="info" plain hairline>
            细边框按钮
          </VanButton>
        </DemoBlock>
        <DemoBlock title="禁用状态" padding>
          <VanButton type="primary" disabled className="demo-margin-right">
            禁用状态
          </VanButton>
          <VanButton type="info" disabled>
            禁用状态
          </VanButton>
        </DemoBlock>
        <DemoBlock title="加载状态" padding>
          <VanButton
            loading
            type="primary"
            className="demo-margin-right"
          ></VanButton>
          <VanButton
            loading
            type="primary"
            loadingType="spinner"
            className="demo-margin-right"
          ></VanButton>
          <VanButton loading type="info" loadingText="加载中..."></VanButton>
        </DemoBlock>
        <DemoBlock title="按钮形状" padding>
          <VanButton type="primary" square className="demo-margin-right">
            方形按钮
          </VanButton>
          <VanButton type="info" round>
            圆形按钮
          </VanButton>
        </DemoBlock>
        <DemoBlock title="图标按钮" padding>
          <VanButton
            type="primary"
            icon="star-o"
            className="demo-margin-right"
          ></VanButton>
          <VanButton type="primary" icon="star-o" className="demo-margin-right">
            按钮
          </VanButton>
          <VanButton
            plain
            type="primary"
            icon="https://img.yzcdn.cn/vant/logo.png"
          >
            按钮
          </VanButton>
        </DemoBlock>
        <DemoBlock title="按钮尺寸" padding>
          <VanButton
            type="primary"
            size="large"
            block
            customClass="demo-margin-bottom"
          >
            大号按钮
          </VanButton>
          <VanButton type="primary" className="demo-margin-right">
            普通按钮
          </VanButton>
          <VanButton type="primary" size="small" className="demo-margin-right">
            小型按钮
          </VanButton>
          <VanButton type="primary" size="mini">
            迷你按钮
          </VanButton>
        </DemoBlock>
        <DemoBlock title="块级元素" padding>
          <VanButton type="primary" customClass="demo-margin-bottom">
            普通按钮
          </VanButton>
          <VanButton type="primary" block>
            块级元素
          </VanButton>
        </DemoBlock>
        <DemoBlock title="自定义颜色" padding>
          <VanButton color="#7232dd" className="demo-margin-right">
            单色按钮
          </VanButton>
          <VanButton color="#7232dd" className="demo-margin-right" plain>
            单色按钮
          </VanButton>
          <VanButton color="linear-gradient(to right, #4bb0ff, #6149f6)">
            渐变色按钮
          </VanButton>
        </DemoBlock>
      </Block>
    )
  }
}

export default _C
