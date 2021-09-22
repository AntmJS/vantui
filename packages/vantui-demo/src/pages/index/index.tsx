import { View } from '@tarojs/components'
import { useEffect, useState, useRef } from 'react'
import { useDidHide, useDidShow } from '@tarojs/taro'
import {
  Progress,
  Sticky,
  Icon,
  NavBar,
  Button,
  Tabs,
  Tab,
  Image,
  Row,
  Col,
  Loading,
  Rate,
  Search,
  Skeleton,
  Tag,
  CountDown,
  Tabbar,
  TabbarItem,
  Notify,
  Grid,
  GridItem,
  DropdownMenu,
  DropdownItem,
} from '@antmjs/vantui'

import './index.less'

const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
]
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
]

export default function Index() {
  const [rate, setRate] = useState(2.5)
  const NotifyInstance = useRef<any>(null)
  const [serachValue] = useState('ff')
  const value1 = 0
  const value2 = 'a'
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
  const NotifyShow = function () {
    NotifyInstance.current.show({
      message: '消息通知',
      top: 20,
      zIndex: 1000,
    })
  }

  return (
    <View className="pages-index-index">
      <Button onClick={NotifyShow}>Notify</Button>
      <Notify ref={NotifyInstance} />
      <NavBar
        fixed
        border
        title="标题"
        leftText="返回"
        rightText="按钮"
        leftArrow
      />
      <Progress percentage={50} strokeWidth={4} />
      <Grid>
        <GridItem icon="photo-o" text="文字" />
        <GridItem icon="photo-o" text="文字" />
        <GridItem icon="photo-o" text="文字" />
        <GridItem icon="photo-o" text="文字" />
      </Grid>
      <DropdownMenu>
        <DropdownItem value={value1} options={option1} />
        <DropdownItem value={value2} options={option2} />
      </DropdownMenu>
      <View>
        <Icon name="chat" size={40} dot info={null} />
        <Icon name="chat" size={40} info="9" />
        <Icon name="chat" size={40} info="99+" />
      </View>
      <View>
        <Skeleton title avatar row={3} />
      </View>
      <View>
        <CountDown time={30 * 60 * 60 * 1000} />
        <CountDown
          millisecond
          time={30 * 60 * 60 * 1000}
          format="HH:mm:ss:SSS"
        />
      </View>
      <View>
        <Tag
          round
          type="primary"
          closeable
          onClose={(e) => {
            console.log(e)
          }}
        >
          标签
        </Tag>
        <Tag round type="success">
          标签
        </Tag>
        <Tag round type="danger">
          标签
        </Tag>
        <Tag round type="warning">
          标签
        </Tag>
      </View>
      <View>
        <Search
          onSearch={(v) => {
            console.log(v)
          }}
          value={serachValue}
          placeholder="请输入搜索关键词"
        />
      </View>
      <View style={{ background: '#fff' }}>
        <Rate
          icon="like"
          allowHalf
          voidColor="#eee"
          voidIcon="like-o"
          value={rate}
          onChange={setRate}
        />
      </View>
      <Tabs active={0} swipeable swipe-threshold={5}>
        <Tab info={null} title="标签 1">
          内容 1
        </Tab>
        <Tab info={null} title="标签 2">
          内容 2
        </Tab>
        <Tab info={null} title="标签 3">
          内容 3
        </Tab>
        <Tab info={null} title="标签 4">
          内容 4
        </Tab>
        <Tab info={null} title="标签 1">
          内容 1
        </Tab>
        <Tab info={null} title="标签 2">
          内容 2
        </Tab>
        <Tab info={null} title="标签 3" disabled>
          内容 3
        </Tab>
        <Tab info={null} title="标签 4">
          内容 4
        </Tab>
      </Tabs>

      {/* <Tabs active={0}>
        <Tab info={null} title="标签 11">
          内容 11
        </Tab>
        <Tab info={null} title="标签 22">
          内容 22
        </Tab>
        <Tab info={null} title="标签 33">
          内容 33
        </Tab>
        <Tab info={null} title="标签 44">
          内容 44
        </Tab>
      </Tabs> */}
      <View
        id="container"
        style={{ marginTop: '200px', height: '200px', background: 'red' }}
      >
        <Sticky
          container={() => Taro.createSelectorQuery().select('#container')}
        >
          <Button plain type="primary" loading>
            kkk
          </Button>
        </Sticky>
      </View>
      <Image
        width={300}
        height={300}
        lazyLoad={true}
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <Image
        width={300}
        height={300}
        fit="contain"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <Row>
        <Col span="8">span: 8</Col>
        <Col span="8">span: 8</Col>
        <Col span="8">span: 8</Col>
      </Row>

      <Loading type="circular" size={80}>
        加载中...
      </Loading>
      <Tabbar active={1}>
        <TabbarItem info={null} name={null} icon="home-o">
          标签
        </TabbarItem>
        <TabbarItem info={null} name={null} icon="search" dot>
          标签
        </TabbarItem>
        <TabbarItem name={null} icon="friends-o" info="5">
          标签
        </TabbarItem>
        <TabbarItem name={null} icon="setting-o" info="20">
          标签
        </TabbarItem>
      </Tabbar>
    </View>
  )
}
