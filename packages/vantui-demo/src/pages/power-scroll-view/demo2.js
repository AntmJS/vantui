/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Tag, PowerScrollView, Image, Cell } from '@antmjs/vantui'
import * as COMMON from './common.js'
export default function Demo() {
  const { mockRequest } = COMMON
  const [state, changeState] = react.useState({
    basicsList: [],
    basicsFinished: false,
  })
  const setState = (newState) => {
    changeState({
      ...state,
      ...newState,
    })
  }

  // 基础用法
  const basicsDoRefresh = async (event = 0) => {
    const append = await mockRequest(state.basicsList.length, true, '错误提示')
    setState({
      basicsList: append.map((item, index) => (
        <View
          key={`${index + state.basicsList.length}append`}
          style={{ height: '20px', lineHeight: '20px' }}
        >
          {item}
          <Tag type="success">{`index:${
            index + state.basicsList.length + 1
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
      '错误提示',
    )
    append = append.map((item, index) => (
      <View
        key={`${index + state.basicsList.length}append`}
        style={{ height: '20px', lineHeight: '20px' }}
      >
        {item}
        <Tag type="success">{`index:${
          index + state.basicsList.length + 1
        }`}</Tag>
      </View>
    ))
    if ([...state.basicsList, ...append].length > 20) {
      throw new Error('抛出异常')
    } else {
      setState({
        basicsList: [...state.basicsList, ...append],
        basicsFinished: append.length === 0,
      })
    }
  }

  react.useEffect(() => {
    basicsLoadMore()
  }, [])

  return (
    <PowerScrollView
      headHeight="80"
      style={{ height: 'calc(100vh - 120px)' }}
      finishedText="没有更多了"
      successText="刷新成功"
      onScrollToUpper={basicsDoRefresh}
      onScrollToLower={basicsLoadMore}
      current={state.basicsList.length}
      finished={state.basicsFinished}
      errorText="请求失败，点击重新加载"
      pageSize={15}
      lowerThreshold={300}
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
          // 释放提示
          return (
            <Image
              className="doge"
              src="https://img01.yzcdn.cn/vant/doge.png"
            />
          )
        }
        if (status === 'loading') {
          // 加载提示
          return (
            <Image
              className="doge"
              src="https://img01.yzcdn.cn/vant/doge-fire.jpg"
            />
          )
        }
        return null
      }}
    >
      {state.basicsList.map((e, i) => (
        <Cell key={i} title={e} />
      ))}
    </PowerScrollView>
  )
}
