# PowerScrollView 下拉刷新

### 介绍

**PowerScrollView 继承于 ScrollView 补充了ScrollView在Taro中没有实现的功能, 以及新增的一些能力，因此描述ScrollView同样也适用于PowerScrollView**

可滚动视图区域。使用竖向滚动时，需要给ScrollView一个固定高度，通过 css 设置 height。组件属性的长度单位默认为 px
Tips: H5 中 ScrollView 组件是通过一个高度（或宽度）固定的容器内部滚动来实现的，因此务必正确的设置容器的高度。例如: 如果 ScrollView 的高度将 body 撑开，就会同时存在两个滚动条（body 下的滚动条，以及 ScrollView 的滚动条）


> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.jsx)

### 引入



```js

import { PowerScrollView } from '@antmjs/vantui';

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
        {name}
        <Tag type="success">{`index:${startIndex + i}`}</Tag>
      </View>,
    )
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

- `props.total` 存在`onScrollToUpper/onScrollToUpper` 的入参是传入组件的`{page,pageSize}`, 不存在入参是传入组件的`current`

```jsx

 <PowerScrollView
  //  通过 finishedText 可以设置数据已全部加载完毕的底部提示文案。
  finishedText="没有更多了"
  className="pull-basics"
  // 通过 successText 可以设置刷新成功后的顶提示文案。
  successText="刷新成功"
  onScrollToUpper={this.basicsDoRefresh}
  onScrollToLower={this.basicsLoadMore}
  current={this.state.basicsList.length}
  finished={this.state.basicsFinished}
>
  {this.state.basicsList.map((e, i) => (
    <Cell key={i} title={e} />
  ))}
</PowerScrollView>
```


```js
state = {
  // basics
  basicsList: [],
  basicsFinished： false
}

// 基础用法
basicsDoRefresh = async (event = 0) => {
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


onLoad() {
  this.basicsLoadMore()
}
```


>PowerScrollView 会自动对 onScrollToLower/onScrollToUpper 函数加锁，避免重复的请求，但是前提是 onScrollToLower/onScrollToUpper 函数需要返回一个正确的 Promise，下面是正确和错误的用法示例：

```js
function fetch() { // 错误
  doRequest()
}

async function fetch() { // 错误
  doRequest()
}

async function fetch() { // 正确
  await doRequest()
}

function fetch() { // 正确
  return doRequest()
}
```


### 自定义提示和分页参数

- 通过`renderHead`可以自定义下拉刷新过程中的提示内容。

```jsx
<PowerScrollView
  className="pull-error"
  errorText="请求失败，点击重新加载"
  finishedText="没有更多了"
  onScrollToUpper={this.errorDoRefresh}
  onScrollToLower={this.errorLoadMore}
  headHeight="80"
  total={TOTAL}
  current={this.state.errorList.length}
  pageSize={15}
  renderHead={({status, distance}) => {
    if (status === 'pulling') {
      // 下拉提示，通过 scale 实现一个缩放效果
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
  {this.state.errorList.map((e, i) => (
    <Cell key={i} title={e} />
  ))}
</PowerScrollView>


```
### 错误提示
若列表数据加载失败，把异常抛出 即可显示错误提示，用户点击错误提示后会重新触发 onScrollToUpper 事件。

```js
state = {
  // error
  errorList: [],
}
error = false
errorDoRefresh = async (event = { page: 1, pageSize: 20 }) => {
  this.error = false
  const append = await mockRequest(
    this.state.errorList.length,
    true,
    '错误提示',
  )
  this.setState({
    errorList: append,
  })
}
errorLoadMore = async (event = { page: 1, pageSize: 20 },isRefresh = false) => {
  const append = await mockRequest(
    this.state.errorList.length,
    isRefresh,
    '错误提示',
  )
  if (this.state.errorList.length === 20 && !this.error) {
    this.error = true
    throw new Error('抛出异常')
  } else {
    this.error = false
  }
  this.setState({
    errorList: [...this.state.errorList, ...append],
  })
}

onLoad() {
  this.errorLoadMore()
}

```

### 配合搜索使用

```jsx
<View>
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
      {this.state.searchFinished || this.state.searchList.length > 0 ? (
        <PowerScrollView
          className="pull-search"
          successText="刷新成功"
          finishedText="--- 我是有底线的 ---"
          onScrollToUpper={this.searchDoRefresh}
          onScrollToLower={this.searchLoadMore}
          lowerThreshold={300}
          headHeight="80"
          finished={this.state.searchFinished}
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
</View>
```

```js
state = {
  // error
  searchList: [],
  searchFinished: false,
  searchValue: 'empty',
}
handleChange = (e) => {
  this.setState({
    searchValue: e.detail,
  })
}
  // 搜索
doSearch = async () => {
  this.setState({
    searchList: [],
    searchFinished: false,
  })  

  await this.searchLoadMore(undefined, true)
}

searchDoRefresh = async (event = 0) => {
  const append = await mockRequest(
    this.state.searchList.length,
    true,
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
    searchList: append,
  })
}
searchLoadMore = async (event = 0,isRefresh = false) => {
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
onLoad() {
  this.searchLoadMore()
}
```

## API

### 相对于ScrollView新增Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pullingText | 下拉过程提示文案 | _string_ | `下拉即可刷新...` |
| loosingText | 释放过程提示文案 | _string_ | `释放即可刷新...` |
| loadingText | 加载过程提示文案 | _string_ | `加载中...` |
| successText | 刷新成功提示文案 | _string_ | - |
| successDuration | 刷新成功提示展示时长(ms) | _number \| string_ | `500` |
| animationDuration | 动画时长 | _number \| string_ | `300` |
| headHeight | 顶部内容高度 | _number \| string_ | `50` |
| pullDistance `v3.0.8` | 触发下拉刷新的距离 | _number \| string_ | 与 `headHeight` 一致 |
| finished | 是否已加载完成，加载完成后不再触发load事件 | _boolean_ | `false` |
| loadingText | 加载过程中的提示文案 | _string_ | `加载中...` |
| finishedText | 加载完成后的提示文案 | _string_ | - |
| errorText | 加载失败后的提示文案 | _string_ | - |
| total | 列表总个数 | _number_ | - | 
| current | 当前列表个数 | _number_ | `children.length` |
| pageSize | 一页个数 | _number_ | `20` |
| emptyImage | 没有内容时，图片类型，可选值为 error network search，支持传入图片 URL | _string_ | `default` |
| emptyDescription | 没有内容时，图片下方的描述文字 |_string_ | - |

### 自定义Render

status =
  | 'normal'
  | 'loading'
  | 'loosing'
  | 'pulling'
  | 'success'

| 名称     | 说明                       | 参数|
| -------- | -------------------------- |---|
| renderLoading  | 自定义底部加载中提示       |
| renderFinished | 自定义加载完成后的提示文案 | -|
| renderError    | 自定义加载失败后的提示文案 |-|
| renderHead    | 自定义下拉刷新区域 | {status:  下拉状态, distance: 当前下拉距离} |


### ScrollView 原有属性重写或补充

| 参数 | 说明 | 类型 | 默认值 |
| ------- | -------------- | -------- | -------- |
|scrollY | 	允许纵向滚动 |_boolean_| `true` |
|refresherEnabled | 开启下拉刷新|_boolean_| `true` |
|lowerThreshold | 距底部/右边多远时（单位px），触发`onScrolltolower` 事件 | _number_ | `250` |
|onScrollToUpper | 下拉刷新时触发 | _({page: number,paseSize:number}|number) => Promise<void>_ | `()=>{}` |
|onScrollToLower | 滚动条与底部距离小于 lowerThreshold 时触发 | _({page: number,paseSize:number}|number) => Promise<void>_ | `() =>{}` |


### 类型定义

组件导出以下类型定义：

```ts
import type { PowerScrollView } from '@antmjs/vantui';
```

