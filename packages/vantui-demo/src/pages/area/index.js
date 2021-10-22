import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Toast, Area, toast } from '@antmjs/vantui'

import { areaList } from '@vant/area-data'
import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    areaList: areaList,
    loading: false,
    value: 330302,
  }

  onChange = (event) => {
    const { values } = event.detail

    toast(values.map((item) => item.name).join('-'))
  }

  onConfirm = (event) => {
    console.log(event)
  }

  onCancel = (event) => {
    console.log(event)
  }

  render() {
    const { value, loading, areaList } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <Area
            value={value}
            loading={loading}
            areaList={areaList}
            onChange={this.onChange}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}
          ></Area>
        </DemoBlock>
        <DemoBlock title="选中省市县">
          <Area
            value={value}
            loading={loading}
            areaList={areaList}
            onChange={this.onChange}
            onConfirm={this.onConfirm}
          ></Area>
        </DemoBlock>
        <DemoBlock title="配置显示列">
          <Area
            title="标题"
            columnsNum={2}
            loading={loading}
            areaList={areaList}
            onChange={this.onChange}
            onConfirm={this.onConfirm}
          ></Area>
        </DemoBlock>
        <DemoBlock title="配置列占位提示文字">
          <Area
            title="标题"
            columnsNum={2}
            loading={loading}
            areaList={areaList}
            columnsPlaceholder={['请选择', '请选择', '请选择']}
            onChange={this.onChange}
            onConfirm={this.onConfirm}
          ></Area>
        </DemoBlock>
        <Toast id="van-toast"></Toast>
      </Block>
    )
  }
}
