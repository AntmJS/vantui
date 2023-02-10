# PowerScrollView 下拉刷新

### 介绍

**PowerScrollView 继承于 ScrollView 补充了 ScrollView 在 Taro 中没有实现的功能, 以及新增的一些能力，因此描述 ScrollView 同样也适用于 PowerScrollView**

可滚动视图区域。使用竖向滚动时，需要给 ScrollView 一个固定高度，通过 css 设置 height。组件属性的长度单位默认为 px
Tips: H5 中 ScrollView 组件是通过一个高度（或宽度）固定的容器内部滚动来实现的，因此务必正确的设置容器的高度。例如: 如果 ScrollView 的高度将 body 撑开，就会同时存在两个滚动条（body 下的滚动条，以及 ScrollView 的滚动条）

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)

### 引入

```js
import { PowerScrollView } from '@antmjs/vantui'
```

模拟请求数据

```js common
const mockRequest = async (_startIndex, isRefresh, name) => {
  const sleep = (t) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, t)
    })
  const TOTAL = 100
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
    list.push(`${name}:`)
  }
  return list
}
```

## 代码演示

### 基础用法

- 开启下拉刷新`(refresherEnabled默认开启)`时, 下拉会触发 `onScrollToUpper({page,pageSize})` 事件，在事件的回调函数中可以进行异步操作

- 开允许纵向滚动`(scrollY默认开启)`时, 当组件滚动到底部时,上拉会触发 `onScrollToUpper({page,pageSize})` 事件，在事件的回调函数中可以进行异步操作并更新数据, 若数据已全部加载完毕，则会自动渲染`renderFinished||finishedText`。

- 默认的`current`是通过`children.length`来计算的,也可以传入`current={list.length}`

- 默认`pageSize`是`20`通常是需要铺满可滚动窗口的高度,也可以传入`pageSize={15}`

- `props.total` 存在`onScrollToUpper/onScrollToLower` 的入参是传入组件的`{page,pageSize}`, 不存在入参是传入组件的`current`

```jsx
function Demo() {
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
```

> PowerScrollView 会自动对 onScrollToLower/onScrollToUpper 函数加锁，避免重复的请求，但是前提是 onScrollToLower/onScrollToUpper 函数需要返回一个正确的 Promise，下面是正确和错误的用法示例：

```js
function fetch() {
  // 错误
  doRequest()
}

async function fetch() {
  // 错误
  doRequest()
}

async function fetch() {
  // 正确
  await doRequest()
}

function fetch() {
  // 正确
  return doRequest()
}
```

### 自定义参数

- 通过`renderHead`可以自定义下拉刷新过程中的提示内容。
- 若列表数据加载失败，把异常抛出 即可显示错误提示，用户点击错误提示后会重新触发 onScrollToUpper 事件。

```jsx
function Demo() {
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
```

### 自适应高度

给`ScrollContainer`容器设置高度，内部渲染 `header/footer`之后，`PowerScrollView`会自动撑满空缺部分作为自己高度。

```scss
.scroll-container {
  display: flex;
  flex-direction: column;
  .scroll-container-content {
    flex: 1;
    overflow: scroll;
    & > scroll-view,
    // h5
    & > taro-scroll-view-core {
      height: 100%;
    }
  }
}
```

```jsx common
const ScrollContainer = (props) => {
  const { header, footer, children, className, ...rest } = props
  return (
    <View className={`scroll-container ${className || ''}`} {...rest}>
      {header && <View className="scroll-container-header">{header}</View>}
      <View className="scroll-container-content">{children}</View>
      {footer && <View className="scroll-container-footer">{footer}</View>}
    </View>
  )
}
```

### 配合搜索使用

```jsx
function Demo() {
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
                        : {}
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
```

```js
state = {
  // error
  searchList: [],
  searchFinished: false,
  searchValue: 'empty',
}
handleChange = (e) => {
  setState({
    searchValue: e.detail,
  })
}
  // 搜索
doSearch = async () => {
  setState({
    searchList: [],
    searchFinished: false,
  })

  await searchLoadMore(undefined, true)
}

searchDoRefresh = async (event = 0) => {
  const append = await mockRequest(
    state.searchList.length,
    true,
    '配合搜索使用',
  )
  if (state.searchValue === 'empty') {
    setState({
      searchList: [],
      searchFinished: true,
    })
    return
  }
  setState({
    searchList: append,
  })
}
searchLoadMore = async (event = 0,isRefresh = false) => {
  const append = await mockRequest(
    state.searchList.length,
    isRefresh,
    '配合搜索使用',
  )

  if (state.searchValue === 'empty') {
    setState({
      searchList: [],
      searchFinished: true,
    })
    return
  }
  setState({
    searchList: [...state.searchList, ...append],
    searchFinished: append.length === 0,
  })
}
onLoad() {
  searchLoadMore()
}
```

## API

### 相对于 ScrollView 新增 Props

| 参数                  | 说明                                                                  | 类型               | 默认值               |
| --------------------- | --------------------------------------------------------------------- | ------------------ | -------------------- |
| pullingText           | 下拉过程提示文案                                                      | _string_           | `下拉即可刷新...`    |
| loosingText           | 释放过程提示文案                                                      | _string_           | `释放即可刷新...`    |
| loadingText           | 加载过程提示文案                                                      | _string_           | `加载中...`          |
| successText           | 刷新成功提示文案                                                      | _string_           | -                    |
| successDuration       | 刷新成功提示展示时长(ms)                                              | _number \| string_ | `500`                |
| animationDuration     | 动画时长                                                              | _number \| string_ | `300`                |
| headHeight            | 顶部内容高度                                                          | _number \| string_ | `50`                 |
| minTriggerTopDistance | 最小触发下拉距离顶部距离                                              | _number \| string_ | `150`                |
| pullDistance          | 触发下拉刷新的距离                                                    | _number \| string_ | 与 `headHeight` 一致 |
| finished              | 是否已加载完成，加载完成后不再触发 load 事件                          | _boolean_          | `false`              |
| finishedText          | 加载完成后的提示文案                                                  | _string_           | -                    |
| errorText             | 加载失败后的提示文案                                                  | _string_           | -                    |
| total                 | 列表总个数                                                            | _number_           | -                    |
| current               | 当前列表个数                                                          | _number_           | `children.length`    |
| pageSize              | 一页个数                                                              | _number_           | `20`                 |
| emptyImage            | 没有内容时，图片类型，可选值为 error network search，支持传入图片 URL | _string_           | `default`            |
| emptyDescription      | 没有内容时，图片下方的描述文字                                        | _string_           | -                    |

### 自定义 Render

status = 'normal'
| 'loading'
| 'loosing'
| 'pulling'
| 'success'

| 名称           | 说明                       | 参数                                       |
| -------------- | -------------------------- | ------------------------------------------ |
| renderLoading  | 自定义底部加载中提示       |
| renderFinished | 自定义加载完成后的提示文案 | -                                          |
| renderError    | 自定义加载失败后的提示文案 | -                                          |
| renderHead     | 自定义下拉刷新区域         | {status: 下拉状态, distance: 当前下拉距离} |

### ScrollView 原有属性重写或补充

| 参数             | 说明                                                     | 类型                                                          | 默认值    |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------------- | --------- |
| scrollY          | 允许纵向滚动                                             | _boolean_                                                     | `true`    |
| refresherEnabled | 开启下拉刷新                                             | _boolean_                                                     | `true`    |
| lowerThreshold   | 距底部/右边多远时（单位 px），触发`onScrolltolower` 事件 | _number_                                                      | `250`     |
| onScrollToUpper  | 下拉刷新时触发                                           | _({page: number,paseSize:number}\|number) => Promise\<void\>_ | `()=>{}`  |
| onScrollToLower  | 滚动条与底部距离小于 lowerThreshold 时触发               | _({page: number,paseSize:number}\|number) => Promise\<void\>_ | `() =>{}` |
