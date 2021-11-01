import { Component } from 'react'
import { View } from '@tarojs/components'
import { Tag, Card, Button } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    imageURL:
      'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
  }

  render() {
    const { imageURL } = this.state
    return (
      <DemoPage title="Card 商品卡片">
        <View className="container">
          <DemoBlock title="基础用法">
            <Card
              num="2"
              price="2.00"
              desc="描述信息"
              title="2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男"
              thumb={imageURL}
            ></Card>
          </DemoBlock>
          <DemoBlock title="高级用法">
            <Card
              num="2"
              tag="标签"
              price="2.00"
              originPrice="10.00"
              desc="描述信息"
              title="2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男"
              thumb={imageURL}
              renderTags={
                <>
                  <View>
                    <Tag plain type="danger" className="tag">
                      标签1
                    </Tag>
                    <Tag plain type="danger">
                      标签2
                    </Tag>
                  </View>
                </>
              }
              renderFooter={
                <>
                  <View className="van-card__footer">
                    <Button size="mini" round className="button">
                      按钮
                    </Button>
                    <Button size="mini" round>
                      按钮
                    </Button>
                  </View>
                </>
              }
            ></Card>
          </DemoBlock>
        </View>
      </DemoPage>
    )
  }
}
