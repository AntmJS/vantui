# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中`position: sticky`属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

### 引入

在 Taro 文件中引入组件

```js
import { Sticky } from '@antmjs/vantui'
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

将内容包裹在`Sticky`组件内即可。

```jsx
function Demo() {
  return (
    <Sticky>
      <Button type="primary" style="margin-left: 15px">
        基础用法
      </Button>
    </Sticky>
  )
}
```

### 吸顶距离

通过`offsetTop`属性可以设置组件在吸顶时与顶部的距离。

```jsx
function Demo() {
  return (
    <Sticky offsetTop={50}>
      <Button type="primary" style="margin-left: 120px">
        吸顶距离
      </Button>
    </Sticky>
  )
}
```

### 指定容器

通过`container`属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。

```jsx
import { createSelectorQuery } from '@tarojs/taro'
function Demo() {
  return (
    <View id="stick-in-view" style="height: 150px;background:#fff;">
      <Sticky container={() => createSelectorQuery().select(`#stick-in-view`)}>
        <Button type="primary" style="margin-left: 250px">
          吸顶距离
        </Button>
      </Sticky>
    </View>
  )
}
```

### StickyProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/sticky.d.ts)

| 参数      | 说明 | 类型                                                                                                                                                                                                                                                                         | 默认值 | 必填    |
| --------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| zIndex    | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                    | -      | `false` |
| offsetTop | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                    | -      | `false` |
| disabled  | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                   | -      | `false` |
| container | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                                                                                       | -      | `false` |
| scrollTop | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                    | -      | `false` |
| children  | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                 | -      | `false` |
| onScroll  | -    | _&nbsp;&nbsp;(data:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scrollTop?:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isFixed?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;any<br/>_ | -      | `false` |
