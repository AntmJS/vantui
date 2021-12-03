import { Component } from 'react'
import { View } from '@tarojs/components'
import {
  Tabs,
  Tab,
  PowerScrollView,
  Cell,
  Loading,
  Search,
  Button,
  Tag,
  Image,
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

const mockRequest = async (_startIndex, isRefresh, name) => {
  let startIndex = _startIndex
  if (isRefresh) {
    startIndex = 0
  }
  if (startIndex >= 50) {
    return []
  }
  console.log(`${name}:请求~`, 'isRefresh:', isRefresh)
  await sleep(1200)
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

export default class Index extends Component {
  constructor() {
    super()
  }
  error = false
  isMin = process.env.TARO_ENV !== 'h5'
  state = {
    // basics
    basicsList: [],
    basicsFinished: false,
    // error
    errorList: [],
    errorFinished: false,
    // search
    searchList: [],
    searchFinished: false,
  }

  // 基础用法
  basicsDoRefresh = async () => {
    const append = await mockRequest(
      this.state.basicsList.length,
      true,
      '基础用法',
    )
    this.setState({
      basicsList: append,
      basicsFinished: append.length === 0,
    })
  }
  basicsLoadMore = async (isRefresh = false) => {
    // debugger
    const append = await mockRequest(
      this.state.basicsList.length,
      isRefresh,
      '基础用法',
    )
    this.setState({
      basicsList: [...this.state.basicsList, ...append],
      basicsFinished: append.length === 0,
    })
  }

  // 错误提示
  errorDoRefresh = async () => {
    this.error = false
    const append = await mockRequest(
      this.state.errorList.length,
      true,
      '错误提示',
    )
    this.setState({
      errorList: append,
      errorFinished: append.length === 0,
    })
  }
  errorLoadMore = async (isRefresh = false) => {
    const append = await mockRequest(
      this.state.errorList.length,
      isRefresh,
      '错误提示',
    )
    if (this.state.errorList.length === 20 && !this.error) {
      this.error = true
      console.log('请求出错')
      throw new Error('抛出异常')
    } else {
      this.error = false
    }
    this.setState({
      errorList: [...this.state.errorList, ...append],
      errorFinished: append.length === 0,
    })
  }

  // 搜索
  doSearch = async () => {
    this.setState({
      searchList: [],
      searchFinished: false,
    })
    await this.searchLoadMore(true)
  }

  searchDoRefresh = async () => {
    const append = await mockRequest(
      this.state.searchList.length,
      true,
      '配合搜索使用',
    )
    this.setState({
      searchList: append,
      searchFinished: append.length === 0,
    })
  }
  searchLoadMore = async (isRefresh = false) => {
    const append = await mockRequest(
      this.state.searchList.length,
      isRefresh,
      '配合搜索使用',
    )
    this.setState({
      searchList: [...this.state.searchList, ...append],
      searchFinished: append.length === 0,
    })
  }

  onLoad() {
    this.searchLoadMore()
    this.errorLoadMore()
    // this.basicsLoadMore()
  }

  // 搜索

  render() {
    return (
      <DemoPage title="PowerScrollView 滚动列表">
        <Tabs animated>
          <Tab title="基础用法" key="basics">
            <PowerScrollView
              immediateCheck
              finishedText="没有更多了"
              className={`${this.isMin ? 'min-' : ''}pull-basics`}
              successText="刷新成功"
              successDuration={1500}
              onScrollToUpper={this.basicsDoRefresh}
              onScrollToLower={this.basicsLoadMore}
              finished={this.state.basicsFinished}
            >
              {this.state.basicsList.map((e, i) => (
                <Cell key={i} title={e} />
              ))}
            </PowerScrollView>
          </Tab>
          <Tab title="错误提示" key="error">
            <PowerScrollView
              className={`${this.isMin ? 'min-' : ''}pull-error`}
              errorText="请求失败，点击重新加载"
              finishedText="没有更多了"
              onScrollToUpper={this.errorDoRefresh}
              onScrollToLower={this.errorLoadMore}
              finished={this.state.errorFinished}
              lowerThreshold={300}
              headHeight="80"
              renderHead={({ status, distance }) => {
                if (status === 'pulling') {
                  return (
                    <Image
                      className="doge"
                      src="https://img01.yzcdn.cn/vant/doge.png"
                      style={{ transform: `scale(${distance / 80})` }}
                    />
                  )
                }
                if (status === 'loosing') {
                  return (
                    <Image
                      className="doge"
                      src="https://img01.yzcdn.cn/vant/doge.png"
                    />
                  )
                }
                if (status === 'loading') {
                  return (
                    <Image
                      className="doge"
                      src="https://img01.yzcdn.cn/vant/doge-fire.jpg"
                    />
                  )
                }
              }}
            >
              {this.state.errorList.map((e, i) => (
                <Cell key={i} title={e} />
              ))}
            </PowerScrollView>
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
                {this.state.searchList.length > 0 ? (
                  <PowerScrollView
                    className={`${this.isMin ? 'min-' : ''}pull-search`}
                    successText="刷新成功"
                    finishedText="--- 我是有底线的 ---"
                    onScrollToUpper={this.searchDoRefresh}
                    onScrollToLower={this.searchLoadMore}
                    finished={this.state.searchFinished}
                    lowerThreshold={300}
                  >
                    {this.state.searchList.map((e, i) => (
                      <Cell key={i} title={e} />
                    ))}
                  </PowerScrollView>
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
