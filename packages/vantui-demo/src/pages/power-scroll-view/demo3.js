/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import {
  Tag,
  ScrollContainer,
  Search,
  Button,
  PowerScrollView,
  Image,
  Cell,
  Loading,
} from '@antmjs/vantui'
import * as COMMON from './common.js'
export default function Demo() {
  const { mockRequest, ScrollContainer } = COMMON
  const [state, changeState] = react.useState({
    basicsList: [],
    basicsFinished: false,
    searchValue: '',
  })
  const setState = (newState) => {
    changeState({
      ...state,
      ...newState,
    })
  }

  // 基础用法
  const basicsDoRefresh = async (event = 0) => {
    const append = await mockRequest(state.basicsList.length, true, '基础用法')
    setState({
      basicsList: append.map((item, index) => (
        <View
          key={`${state.basicsList.length + index}append`}
          style={{ height: '20px', lineHeight: '20px' }}
        >
          {item}
          <Tag type="success">{`index:${
            state.basicsList.length + index + 1
          }`}</Tag>
        </View>
      )),
      basicsFinished: append.length === 0,
    })
  }
  const basicsLoadMore = async (event = 0, isRefresh = false) => {
    let append = await mockRequest(
      state.basicsList.length,
      isRefresh,
      '基础用法',
    )
    append = append.map((item, index) => (
      <View
        key={`${state.basicsList.length + index}append`}
        style={{ height: '20px', lineHeight: '20px' }}
      >
        {item}
        <Tag type="success">{`index:${
          state.basicsList.length + index + 1
        }`}</Tag>
      </View>
    ))
    setState({
      basicsList: [...state.basicsList, ...append],
      basicsFinished: append.length === 0,
    })
  }

  react.useEffect(() => {
    basicsLoadMore()
  }, [])

  const doSearch = async () => {
    setState({
      basicsList: [],
      basicsFinished: false,
    })
    await basicsLoadMore(undefined, true)
  }

  return (
    <ScrollContainer
      className={`pull-search`}
      header={
        <View className="header">
          <View className="left">
            <Search
              defaultValue={state.searchValue}
              onChange={(e) => setState({ searchValue: e.detail })}
            />
          </View>
          <View className="right">
            <Button size="small" type="primary" onClick={doSearch}>
              搜索
            </Button>
          </View>
        </View>
      }
      footer={<View className="footer">自适应scroll-footer</View>}
    >
      {
        <>
          {state.searchFinished || state.basicsList.length > 0 ? (
            <PowerScrollView
              finishedText="--- 我是有底线的 ---"
              onScrollToUpper={basicsDoRefresh}
              onScrollToLower={basicsLoadMore}
              lowerThreshold={300}
              headHeight="80"
              minTriggerTopDistance="150"
              finished={state.basicsFinished}
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
              {state.basicsList.map((e, i) => (
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
    </ScrollContainer>
  )
}
