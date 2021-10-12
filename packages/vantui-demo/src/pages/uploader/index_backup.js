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

@withWeapp({
  data: {
    fileList1: [],
    fileList2: [
      { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      { url: 'https://img.yzcdn.cn/vant/tree.jpg' },
    ],
    fileList3: [{ url: 'https://img.yzcdn.cn/vant/sand.jpg' }],
    fileList4: [],
    fileList5: [],
    fileList6: [],
    cloudPath: [],
    fileList7: [],
    fileList8: [
      {
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        status: 'uploading',
        message: '上传中',
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        status: 'failed',
        message: '上传失败',
      },
    ],
  },

  beforeRead(event) {
    const { file, callback = () => {} } = event.detail
    if (file.url.indexOf('jpeg') < 0) {
      Taro.showToast({ title: '请选择jpg图片上传', icon: 'none' })
      callback(false)
      return
    }
    callback(true)
  },

  afterRead(event) {
    const { file, name } = event.detail
    console.log(JSON.stringify(file, null, 2))
    const fileList = this.data[`fileList${name}`]

    this.setData({ [`fileList${name}`]: fileList.concat(file) })
  },

  oversize() {
    Taro.showToast({ title: '文件超出大小限制', icon: 'none' })
  },

  delete(event) {
    const { index, name } = event.detail
    const fileList = this.data[`fileList${name}`]
    fileList.splice(index, 1)
    this.setData({ [`fileList${name}`]: fileList })
  },

  clickPreview() {},

  uploadToCloud() {
    Taro.cloud.init()
    const { fileList6: fileList = [] } = this.data
    if (!fileList.length) {
      Taro.showToast({ title: '请选择图片', icon: 'none' })
    } else {
      const uploadTasks = fileList.map((file, index) =>
        this.uploadFilePromise(`my-photo${index}.png`, file),
      )
      Promise.all(uploadTasks)
        .then((data) => {
          Taro.showToast({ title: '上传成功', icon: 'none' })
          const fileList = data.map((item) => ({ url: item.fileID }))
          this.setData({ cloudPath: data, fileList6: fileList })
        })
        .catch((e) => {
          Taro.showToast({ title: '上传失败', icon: 'none' })
          console.log(e)
        })
    }
  },

  uploadFilePromise(fileName, chooseResult) {
    return Taro.cloud.uploadFile({
      cloudPath: fileName,
      filePath: chooseResult.path,
    })
  },
})
class _C extends React.Component {
  render() {
    const {
      fileList1,
      fileList7,
      fileList2,
      fileList8,
      fileList3,
      fileList4,
      fileList5,
      fileList6,
    } = this.data
    return (
      <Block>
        <DemoBlock title="基础用法" padding>
          <VanUploader
            name="1"
            fileList={fileList1}
            onAfterRead={this.afterRead}
            onDelete={this.delete}
            onClickPreview={this.clickPreview}
          ></VanUploader>
        </DemoBlock>
        <DemoBlock title="上传视频" padding>
          <VanUploader
            name="7"
            accept="video"
            fileList={fileList7}
            onAfterRead={this.afterRead}
            onDelete={this.delete}
          ></VanUploader>
        </DemoBlock>
        <DemoBlock title="文件预览" padding>
          <VanUploader
            name="2"
            fileList={fileList2}
            multiple
            onAfterRead={this.afterRead}
            onDelete={this.delete}
            onClickPreview={this.clickPreview}
          ></VanUploader>
        </DemoBlock>
        <DemoBlock title="隐藏上传按钮" padding>
          <VanUploader
            name="2"
            fileList={fileList2}
            multiple
            showUpload={false}
            onAfterRead={this.afterRead}
            onDelete={this.delete}
            onClickPreview={this.clickPreview}
          ></VanUploader>
        </DemoBlock>
        <DemoBlock title="上传状态" padding>
          <VanUploader
            name="8"
            fileList={fileList8}
            multiple
            maxCount={2}
            onAfterRead={this.afterRead}
            onDelete={this.delete}
            onClickPreview={this.clickPreview}
          ></VanUploader>
        </DemoBlock>
        <DemoBlock title="限制上传数量" padding>
          <VanUploader
            name="3"
            fileList={fileList3}
            multiple
            maxCount={2}
            onAfterRead={this.afterRead}
            onDelete={this.delete}
            onClickPreview={this.clickPreview}
          ></VanUploader>
        </DemoBlock>
        <DemoBlock title="自定义上传样式" padding>
          <VanUploader
            name="4"
            fileList={fileList4}
            maxCount={2}
            onAfterRead={this.afterRead}
            onDelete={this.delete}
            onClickPreview={this.clickPreview}
            useSlot={true}
          >
            <VanButton icon="photo" type="primary">
              上传图片
            </VanButton>
          </VanUploader>
        </DemoBlock>
        <DemoBlock title="上传前校验" padding>
          <VanUploader
            name="5"
            fileList={fileList5}
            onBeforeRead={this.beforeRead}
            onAfterRead={this.afterRead}
            onDelete={this.delete}
            onClickPreview={this.clickPreview}
            useBeforeRead={true}
          ></VanUploader>
        </DemoBlock>
        <DemoBlock title="云存储上传" padding>
          <VanUploader
            name="6"
            fileList={fileList6}
            onBeforeRead={this.beforeRead}
            onAfterRead={this.afterRead}
            onDelete={this.delete}
            onClickPreview={this.clickPreview}
            useBeforeRead={true}
          ></VanUploader>
          <View className="demo-margin-bottom">
            <VanButton type="primary" onClick={this.uploadToCloud}>
              上传至云存储
            </VanButton>
          </View>
        </DemoBlock>
      </Block>
    )
  }
}

export default _C
