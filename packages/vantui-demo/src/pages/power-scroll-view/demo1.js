/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Tag, PowerScrollView, Cell } from '@antmjs/vantui'
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

  return (
    <PowerScrollView
      style={{ height: 'calc(100vh - 120px)' }}
      finishedText="没有更多了"
      successText="刷新成功"
      onScrollToUpper={basicsDoRefresh}
      onScrollToLower={basicsLoadMore}
      current={state.basicsList.length}
      finished={state.basicsFinished}
    >
      {state.basicsList.map((e, i) => (
        <Cell key={i} title={e} />
      ))}
    </PowerScrollView>
  )
}
