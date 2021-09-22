import { View } from '@tarojs/components'
import { useEffect, useState, useCallback, useRef } from 'react'
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
  // CountDown,
  // Tabbar,
  // TabbarItem,
  Notify,
  Grid,
  GridItem,
  DropdownMenu,
  DropdownItem,
  // CountDown,
  Picker,
  CellGroup,
  Cell,
  // ICountDownRef,
  Field,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
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
const columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']

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

  const onChange = useCallback(function (a) {
    console.info(a, 'picker onChange')
  }, [])

  const onConfirm = useCallback(function (a) {
    console.info(a, 'picker onConfirm')
  }, [])

  // const x = useRef<ICountDownRef | undefined>()

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
        <Icon name="chat" size={40} dot />
        <Icon name="chat" size={40} info="9" />
        <Icon name="chat" size={40} info="99+" />
      </View>
      <View>
        <Skeleton title avatar row={3} />
      </View>
      {/* <View>
        <CountDown time={30 * 60 * 60 * 1000} ref={x} />
        <CountDown
          millisecond
          time={30 * 60 * 60 * 1000}
          format="HH:mm:ss:SSS"
        />
      </View> */}
      <View>
        <Tag
          round
          type="primary"
          closeable
          onClose={(e: any) => {
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
      <CellGroup>
        <Field
          value=""
          label="留言"
          type="textarea"
          placeholder="请输入留言"
          autosize
          border={false}
        />
        <Field
          value=""
          required
          clearable
          label="用户名"
          icon="question-o"
          placeholder="请输入用户名"
          onInput={(e) => {
            console.log('onInput', e)
          }}
          onChange={(e) => {
            console.log('onChange', e)
          }}
          onConfirm={(e) => {
            console.log('onConfirm', e)
          }}
          onFocus={(e) => {
            console.log('onFocus', e)
          }}
          onBlur={(e) => {
            console.log('onBlur', e)
          }}
        />

        <Field
          value=""
          password
          type="text"
          label="密码"
          placeholder="请输入密码"
          required
          border={false}
        />
      </CellGroup>
      <CellGroup>
        <Cell title="单元格" value="内容" isLink />
        <Cell title="单元格" value="内容" label="描述信息" border={false} />
      </CellGroup>
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
          onChange={(e) => {
            setRate(e.detail)
          }}
        />
      </View>
      <Tabs active={0} swipeable swipe-threshold={5}>
        <Tab title="标签 1">内容 1</Tab>
        <Tab title="标签 2">内容 2</Tab>
        <Tab title="标签 3">内容 3</Tab>
        <Tab title="标签 4">内容 4</Tab>
        <Tab title="标签 1">内容 1</Tab>
        <Tab title="标签 2">内容 2</Tab>
        <Tab title="标签 3" disabled>
          内容 3
        </Tab>
        <Tab title="标签 4">内容 4</Tab>
      </Tabs>

      {/* <Tabs active={0}>
        <Tab title="标签 11">
          内容 11
        </Tab>
        <Tab title="标签 22">
          内容 22
        </Tab>
        <Tab title="标签 33">
          内容 33
        </Tab>
        <Tab title="标签 44">
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
          <Button plain type="primary">
            kkk收费的
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

      <Picker
        title="标题"
        columns={columns}
        onChange={onChange}
        onConfirm={onConfirm}
      />
      <GoodsAction>
        <GoodsActionIcon icon="chat-o" text="客服" />
        <GoodsActionIcon icon="cart-o" text="购物车" info="5" />
        <GoodsActionIcon icon="shop-o" text="店铺" />
        <GoodsActionButton color="#7232dd" text="加入购物" type="warning" />
        <GoodsActionButton plain color="#7232dd" text="立即购买" />
      </GoodsAction>
      {/* <Tabbar active={1}>
        <TabbarItem icon="home-o">标签</TabbarItem>
        <TabbarItem icon="search" dot>
          标签
        </TabbarItem>
        <TabbarItem icon="friends-o" info="5">
          标签
        </TabbarItem>
        <TabbarItem icon="setting-o" info="20">
          标签
        </TabbarItem>
      </Tabbar> */}
    </View>
  )
}
