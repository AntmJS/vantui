import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { GridItem, Grid, Image } from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    array3: [0, 1, 2],
    array4: [0, 1, 2, 3],
    array6: [0, 1, 2, 3, 4, 5],
    array8: [0, 1, 2, 3, 4, 5, 6, 7],
  }

  render() {
    const { array4, array6, array3, array8 } = this.state
    return (
      <Block>
        <DemoBlock title="基本用法">
          <Grid>
            {array4.map((item, index) => {
              return <GridItem icon="photo-o" text="文字" key={item}></GridItem>
            })}
          </Grid>
        </DemoBlock>
        <DemoBlock title="自定义列数">
          <Grid columnNum="3">
            {array6.map((item, index) => {
              return <GridItem icon="photo-o" text="文字" key={item}></GridItem>
            })}
          </Grid>
        </DemoBlock>
        <DemoBlock title="自定义内容">
          <Grid columnNum="3" border={false}>
            {array3.map((item, index) => {
              return (
                <GridItem key={index}>
                  <Image
                    style="width: 100%; height: 90px;"
                    src={
                      'https://img.yzcdn.cn/vant/apple-' + (index + 1) + '.jpg'
                    }
                  ></Image>
                </GridItem>
              )
            })}
          </Grid>
        </DemoBlock>
        <DemoBlock title="正方形格子">
          <Grid square>
            {array8.map((item, index) => {
              return <GridItem icon="photo-o" text="文字" key={item}></GridItem>
            })}
          </Grid>
        </DemoBlock>
        <DemoBlock title="格子间距">
          <Grid gutter={10}>
            {array8.map((item, index) => {
              return <GridItem icon="photo-o" text="文字" key={item}></GridItem>
            })}
          </Grid>
        </DemoBlock>
        <DemoBlock title="内容横排">
          <Grid direction="horizontal" columnNum="3">
            {array3.map((item, index) => {
              return <GridItem icon="photo-o" text="文字" key={item}></GridItem>
            })}
          </Grid>
        </DemoBlock>
        <DemoBlock title="页面跳转">
          <Grid clickable columnNum="2">
            <GridItem
              icon="home-o"
              linkType="navigateTo"
              url="/pages/dashboard/index"
              text="Navigate 跳转"
            ></GridItem>
            <GridItem
              icon="search"
              linkType="reLaunch"
              url="/pages/dashboard/index"
              text="ReLaunch 跳转"
            ></GridItem>
          </Grid>
        </DemoBlock>
        <DemoBlock title="徽标提示">
          <Grid columnNum="2">
            <GridItem icon="home-o" text="文字" dot></GridItem>
            <GridItem icon="search" text="文字" badge="99+"></GridItem>
          </Grid>
        </DemoBlock>
      </Block>
    )
  }
}
