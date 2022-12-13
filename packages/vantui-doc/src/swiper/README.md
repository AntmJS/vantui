# Swiper 轮播

### 介绍

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

### 安装

```js
import { Swiper, SwiperItem } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

`autoPlay` 自动轮播的时长
`initPage` 初始索引值
`paginationVisible` 是否显示分页指示器
`paginationColor` 指示器颜色自定义
`onChange` 当卡片发生变化

组件和图片项的高度也可以通过`class`写入

```jsx
function Demo() {
  const { images } = COMMON
  const [initPage1, setInitPage1] = react.useState(0)
  const onChange = (e) => {}
  return (
    <View className="demo-box">
      <Swiper
        height={200}
        paginationColor="#426543"
        autoPlay="3000"
        initPage={initPage1}
        paginationVisible
        onChange={onChange}
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#demo1${index}`}>
            <Image src={item} fit="cover" width="100%" height="200px" />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}
```

图片数据

```js common
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
]
```

### 动态加载

支持动态增加/删除图片

```jsx
function Demo() {
  const { images } = COMMON
  const [initPage1, setInitPage1] = react.useState(0)
  const [list, setList] = react.useState(images)

  react.useEffect(() => {
    setTimeout(() => {
      const arr = list.slice()
      arr.splice(1, 1)
      setList(arr)
    }, 3000)
  }, [])

  return (
    <View className="demo-box">
      <Swiper
        height={200}
        paginationColor="#426543"
        autoPlay="3000"
        initPage={initPage1}
        paginationVisible
      >
        {list.map((item, index) => {
          return (
            <SwiperItem key={`swiper#demo2${index}`}>
              <Image src={item} fit="cover" width="100%" height="200px" />
            </SwiperItem>
          )
        })}
      </Swiper>
    </View>
  )
}
```

### 自定义宽度

`width` 自定义轮播宽度

```jsx
function Demo() {
  const { images } = COMMON
  return (
    <View className="demo-box">
      <Swiper
        paginationColor="#426543"
        autoPlay="3000"
        initPage={0}
        paginationVisible
        width={300}
        height={200}
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#demo3${index}`}>
            <Image src={item} fit="cover" width="100%" height="200px" />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}
```

### 自定义分页指示器

`pageContent` 表示自定义指示器

```jsx
function Demo() {
  const { images } = COMMON
  const [current, setCurrent] = react.useState(0)

  const style = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 46,
    height: 22,
    background: 'rgba(0,0,0,.33)',
    borderRadius: 22,
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  }

  return (
    <View className="demo-box">
      <Swiper
        height={200}
        paginationVisible
        paginationColor="#426543"
        autoPlay="3000"
        initPage={current}
        onChange={(e) => setCurrent(e + 1)}
        pageContent={<div style={style}> {current}/4 </div>}
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#demo4${index}`}>
            <Image src={item} fit="cover" width="100%" height="200px" />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}
```

### 垂直方向

`direction` 自定义轮播方向

```jsx
function Demo() {
  const { images } = COMMON

  return (
    <View className="demo-box">
      <Swiper
        height={200}
        paginationVisible
        autoPlay={3000}
        direction="vertical"
        initPage={0}
        paginationColor="#426543"
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#demo5${index}`}>
            <Image src={item} fit="cover" width="100%" height="200px" />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}
```

### 水平居中展示

`isCenter` 代表可居中，同时必须传 `width`

```jsx
function Demo() {
  const { images } = COMMON

  return (
    <View className="demo-box">
      <Swiper
        autoPlay={3000}
        height={150}
        paginationVisible
        width={280}
        isCenter
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#demo5${index}`}>
            <Image src={item} fit="cover" width="100%" height="200px" />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}
```

### SwiperProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/swiper.d.ts)

| 参数              | 说明                                       | 类型                                                                                                                                 | 默认值   | 必填    |
| ----------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------- |
| width             | 轮播卡片的宽度                             | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                  | 窗口宽度 | `false` |
| height            | 轮播卡片的高度                             | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                  | -        | `true`  |
| duration          | 动画时长（单位是 ms）                      | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                  | 500      | `false` |
| initPage          | 初始化索引值                               | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                  | -        | `true`  |
| autoPlay          | 自动轮播时长，0 表示不会自动轮播           | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                  | -        | `true`  |
| direction         | 轮播方向,可选值 horizontal,vertical        | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"horizontal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"vertical"<br/>_ | -        | `false` |
| paginationColor   | 分页指示器选中的颜色                       | _&nbsp;&nbsp;string<br/>_                                                                                                            | #fff     | `false` |
| paginationVisible | 分页指示器是否展示                         | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | true     | `false` |
| loop              | 是否循环轮播                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | true     | `false` |
| touchable         | 是否可以手动滑动                           | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | true     | `false` |
| isPreventDefault  | 滑动过程中是否禁用默认事件                 | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | -        | `false` |
| isStopPropagation | 滑动过程中是否禁止冒泡                     | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | -        | `false` |
| isCenter          | 是否居中展示，必须传对应的 width 和 height | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | false    | `false` |
| className         | -                                          | _&nbsp;&nbsp;string<br/>_                                                                                                            | -        | `false` |
| style             | -                                          | _&nbsp;&nbsp;React.CSSProperties<br/>_                                                                                               | -        | `false` |
| pageContent       | 自定义指示器                               | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                   | -        | `false` |
| onChange          | 卡片切换后的回调                           | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;currPage:&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                           | -        | `false` |

### SwiperInstance [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/swiper.d.ts)

| 方法 | 说明         | 类型                                                                                                    |
| ---- | ------------ | ------------------------------------------------------------------------------------------------------- |
| to   | 切换到指定页 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| next | 切换到下一页 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                 |
| prev | 切换到上一页 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                 |

### SwiperItemProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/swiper.d.ts)

| 参数      | 说明 | 类型                               | 默认值 | 必填    |
| --------- | ---- | ---------------------------------- | ------ | ------- |
| direction | -    | _&nbsp;&nbsp;string<br/>_          | -      | `false` |
| size      | -    | _&nbsp;&nbsp;0<br/>_               | -      | `false` |
| className | -    | _&nbsp;&nbsp;string<br/>_          | -      | `false` |
| children  | -    | _&nbsp;&nbsp;React.ReactNode<br/>_ | -      | `true`  |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                      | 默认值   |
| ----------------------------------------- | -------- |
| --swiper-pagination-item-background-color | ` #ddd;` |
