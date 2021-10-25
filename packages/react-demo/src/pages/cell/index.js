import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Tag, Icon, CellGroup, Cell } from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <Block>
        <DemoBlock title="基础用法">
          <CellGroup>
            <Cell title="单元格" value="内容"></Cell>
            <Cell
              title="单元格"
              value="内容"
              label="描述信息"
              border={false}
            ></Cell>
          </CellGroup>
        </DemoBlock>
        <DemoBlock title="卡片风格">
          <CellGroup inset>
            <Cell title="单元格" value="内容"></Cell>
            <Cell title="单元格" value="内容" label="描述信息"></Cell>
          </CellGroup>
        </DemoBlock>
        <DemoBlock title="单元格大小">
          <CellGroup>
            <Cell title="单元格" value="内容" size="large"></Cell>
            <Cell
              title="单元格"
              value="内容"
              size="large"
              border={false}
              renderLabel={
                <Block>
                  <View>描述信息</View>
                </Block>
              }
            ></Cell>
          </CellGroup>
        </DemoBlock>
        <DemoBlock title="展示图标">
          <Cell
            title="单元格"
            value="内容"
            icon="location-o"
            border={false}
          ></Cell>
        </DemoBlock>
        <DemoBlock title="展示箭头">
          <Cell title="单元格" isLink></Cell>
          <Cell title="单元格" value="内容" isLink></Cell>
          <Cell
            title="单元格"
            isLink
            arrowDirection="down"
            value="内容"
            border={false}
          ></Cell>
        </DemoBlock>
        <DemoBlock title="页面跳转">
          <Cell title="单元格" isLink url="/pages/dashboard/index"></Cell>
          <Cell
            title="单元格"
            isLink
            url="/pages/dashboard/index"
            linkType="redirectTo"
          ></Cell>
        </DemoBlock>
        <DemoBlock title="分组标题">
          <CellGroup title="分组 1">
            <Cell title="单元格" value="内容"></Cell>
          </CellGroup>
          <CellGroup title="分组 2">
            <Cell title="单元格" value="内容"></Cell>
          </CellGroup>
        </DemoBlock>
        <DemoBlock title="使用插槽">
          <Cell
            value="内容"
            icon="shop-o"
            isLink
            renderTitle={
              <Block>
                <View>
                  <View className="title">单元格</View>
                  <Tag type="danger">标签</Tag>
                </View>
              </Block>
            }
          ></Cell>
          <Cell
            title="单元格"
            border={false}
            renderRightIcon={
              <Block>
                <Icon name="search"></Icon>
              </Block>
            }
          ></Cell>
        </DemoBlock>
        <DemoBlock title="垂直居中">
          <Cell center title="单元格" value="内容" label="描述信息"></Cell>
        </DemoBlock>
      </Block>
    )
  }
}
