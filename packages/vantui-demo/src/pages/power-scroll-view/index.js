import { Component } from 'react'
import { View, Text } from '@tarojs/components'
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

const TOTAL = 70

const mockRequest = async (_startIndex, isRefresh, name) => {
  let startIndex = _startIndex
  if (isRefresh) {
    startIndex = 0
  }
  if (startIndex >= TOTAL) {
    return []
  }
  console.log(`${name}:请求~`, 'isRefresh:', isRefresh)
  await sleep(1200)
  let list = []
  for (let i = 0; i < 20; i++) {
    list.push(
      <View>
        <Text style={{ marginRight: '20px' }}> {name}</Text>
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
    // search
    searchList: [],
    searchFinished: false,
    searchValue: 'empty',
  }

  // 基础用法
  basicsDoRefresh = async (event) => {
    console.log(event)
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
  basicsLoadMore = async (event = 0, isRefresh = false) => {
    console.log(event)
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
  errorDoRefresh = async (event = 0) => {
    console.log(event)
    this.error = false
    const append = await mockRequest(
      this.state.errorList.length,
      true,
      '错误提示',
    )
    this.setState({
      errorList: append,
      basicsFinished: append.length === 0,
    })
  }
  errorLoadMore = async (
    event = { page: 1, pageSize: 20 },
    isRefresh = false,
  ) => {
    console.log(event)
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
    })
  }

  // 搜索
  handleChange = (e) => {
    this.setState({
      searchValue: e.detail,
    })
  }
  doSearch = async () => {
    this.setState({
      searchList: [],
      searchFinished: false,
    })
    await this.searchLoadMore(undefined, true)
  }

  searchDoRefresh = async (event = 0) => {
    console.log(event)
    const append = await mockRequest(
      this.state.searchList.length,
      true,
      '配合搜索使用',
    )
    if (this.state.searchValue === 'empty') {
      this.setState({
        searchFinished: true,
      })
      return
    }

    this.setState({
      searchList: append,
      searchFinished: append.length === 0,
    })
  }
  searchLoadMore = async (event = 0, isRefresh = false) => {
    console.log(event)
    const append = await mockRequest(
      this.state.searchList.length,
      isRefresh,
      '配合搜索使用',
    )
    if (this.state.searchValue === 'empty') {
      this.setState({
        searchList: [],
        searchFinished: true,
      })
      return
    }

    this.setState({
      searchList: [...this.state.searchList, ...append],
      searchFinished: append.length === 0,
    })
  }

  componentDidMount() {
    this.searchLoadMore()
    this.errorLoadMore()
    this.basicsLoadMore()
  }

  // 搜索

  render() {
    return (
      <DemoPage title="PowerScrollView 滚动列表">
        <Tabs animated>
          <Tab title="基础用法" key="basics">
            <PowerScrollView
              finishedText="没有更多了"
              className={`${this.isMin ? 'min-' : ''}pull-basics`}
              successText="刷新成功"
              successDuration={1500}
              onScrollToUpper={this.basicsDoRefresh}
              onScrollToLower={this.basicsLoadMore}
              current={this.state.basicsList.length}
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
              lowerThreshold={300}
              headHeight="80"
              total={TOTAL}
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
                <Search
                  defaultValue={this.state.searchValue}
                  onChange={this.handleChange}
                />
              </View>
              <View className="right">
                <Button size="small" type="primary" onClick={this.doSearch}>
                  搜索
                </Button>
              </View>
            </View>
            {
              <>
                {this.state.searchFinished ||
                this.state.searchList.length > 0 ? (
                  <PowerScrollView
                    className={`${this.isMin ? 'min-' : ''}pull-search`}
                    successText="刷新成功"
                    finishedText="--- 我是有底线的 ---"
                    onScrollToUpper={this.searchDoRefresh}
                    onScrollToLower={this.searchLoadMore}
                    lowerThreshold={300}
                    headHeight="80"
                    finished={this.state.searchFinished}
                    renderHead={({ distance, status }) => {
                      return (
                        <Image
                          className="doge"
                          src="https://img-blog.csdnimg.cn/20210515142150468.gif"
                          style={
                            status === 'pulling'
                              ? { transform: `scale(${distance / 80})` }
                              : ''
                          }
                        />
                      )
                    }}
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
