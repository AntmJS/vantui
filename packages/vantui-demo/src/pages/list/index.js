import { Component } from 'react'
import { View } from '@tarojs/components'
import {
  Tabs,
  Tab,
  List,
  Cell,
  Loading,
  Search,
  Button,
  Tag,
} from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

// import DemoBlock from '../../components/demo-block/index'
import './index.scss'
const sleep = (t) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, t)
  })

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {
    list: [],
    finished: false,
    // search
    list2: [],
    finished2: false,
  }

  mockRequest = async (type, name) => {
    let startIndex = 0
    if (type === 1) {
      startIndex = this.state.list.length
    } else if (type === 2) {
      startIndex = this.state.list2.length
    }
    if (startIndex >= 50) {
      return []
    }

    await sleep(2000)
    let list = []
    for (let i = 0; i < 20; i++) {
      list.push(
        <View>
          {name}
          <Tag type="success">{`index:${startIndex + i}`}</Tag>
        </View>,
      )
    }
    return list
  }

  doRefresh = async () => {
    const append = await this.mockRequest(3, '基础用法')
    this.setState({
      list: append,
      finished: append.length === 0,
    })
  }
  loadMore = async () => {
    // debugger
    const append = await this.mockRequest(1, '基础用法')
    this.setState({
      list: [...this.state.list, ...append],
      finished: append.length === 0,
    })
  }
  doSearch = async () => {
    this.setState({
      list2: [],
      finished2: false,
    })
    await this.loadMore2(3)
  }

  loadMore2 = async (type = 2) => {
    const append = await this.mockRequest(type, '配合搜索使用')
    this.setState({
      list2: [...this.state.list2, ...append],
      finished2: append.length === 0,
    })
  }

  onLoad() {
    this.loadMore2()
  }

  // 搜索

  render() {
    const { finished, finished2, list, list2 } = this.state
    return (
      <DemoPage title="List 列表">
        <Tabs active="search">
          <Tab title="基础用法" key="basics">
            <List
              className="pull-basics"
              onRefresh={this.doRefresh}
              onLoad={this.loadMore}
              finishedText="没有更多了"
              finished={finished}
              successText="刷新成功"
              immediateCheck
            >
              {list.map((e, i) => (
                <Cell key={i} title={e} />
              ))}
            </List>
          </Tab>
          <Tab title="配合搜索使用" key="search">
            <View className="header">
              <View className="left">
                <Search />
              </View>
              <View className="right">
                <Button size="small" type="primary" onClick={this.doSearch}>
                  搜索
                </Button>
              </View>
            </View>
            {
              <>
                {list2.length > 0 ? (
                  <List
                    className="pull-search"
                    onRefresh={this.doSearch}
                    onLoad={this.loadMore2}
                    finishedText="没有更多了"
                    finished={finished2}
                    successText="刷新成功"
                    offset={300}
                  >
                    {list2.map((e, i) => (
                      <Cell key={i} title={e} />
                    ))}
                  </List>
                ) : (
                  <View className="placeholder">
                    <View className="loadingWrapper">
                      <Loading />
                    </View>
                    正在拼命加载数据
                  </View>
                )}
              </>
            }
          </Tab>
        </Tabs>
      </DemoPage>
    )
  }
}
