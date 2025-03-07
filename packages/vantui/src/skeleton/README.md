# Skeleton 骨架屏

### 介绍

用于在内容加载过程中展示一组占位图形。

### 引入

在 Taro 文件中引入组件

```js
import { Skeleton } from '@antmjs/vantui'
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

通过`title`属性显示标题占位图，通过`row`属性配置占位段落行数。

```jsx
function Demo() {
  return <Skeleton title={true} row="3" />
}
```

### 显示头像

通过`avatar`属性显示头像占位图。

```jsx
function Demo() {
  return <Skeleton title={true} avatar={true} row="3" />
}
```

### 展示子组件

将`loading`属性设置成`false`表示内容加载完成，此时会隐藏占位图，并显示`Skeleton`的子组件。

```jsx
function Demo() {
  const [loading, setLoading] = react.useState(true)
  react.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Skeleton title avatar row="3" loading={loading}>
      <View>实际内容</View>
    </Skeleton>
  )
}
```

### SkeletonProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/skeleton.d.ts)

| 参数        | 说明                                        | 类型                                                   | 默认值 | 必填    |
| ----------- | ------------------------------------------- | ------------------------------------------------------ | ------ | ------- |
| row         | 段落占位图行数                              | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_    | 0      | `false` |
| title       | 是否显示标题占位图                          | _&nbsp;&nbsp;boolean<br/>_                             | -      | `false` |
| avatar      | 是否显示头像占位图                          | _&nbsp;&nbsp;boolean<br/>_                             | false  | `false` |
| loading     | 是否显示占位图，传 false 时会展示子组件内容 | _&nbsp;&nbsp;boolean<br/>_                             | true   | `false` |
| animate     | 是否开启动画                                | _&nbsp;&nbsp;boolean<br/>_                             | true   | `false` |
| avatarSize  | 头像占位图大小                              | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_    | 32px   | `false` |
| avatarShape | 头像占位图形状，可选值为 square             | _&nbsp;&nbsp;"square"&nbsp;&brvbar;&nbsp;"round"<br/>_ | round  | `false` |
| titleWidth  | 标题占位图宽度                              | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_    | 40%    | `false` |
| rowWidth    | 段落占位图宽度，可传数组来设置每一行的宽度  | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;string[]<br/>_  | 100%   | `false` |
| children    | -                                           | _&nbsp;&nbsp;ReactNode<br/>_                           | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                               | 默认值                                                             |
| ---------------------------------- | ------------------------------------------------------------------ |
| --skeleton-padding                 | ` 0 @padding-md;`                                                  |
| --skeleton-row-height              | ` 32px;`                                                           |
| --skeleton-row-background-color    | ` @gray-2;`                                                        |
| --skeleton-row-margin-top          | ` @padding-sm;`                                                    |
| --skeleton-avatar-background-color | ` @gray-2;`                                                        |
| --skeleton-animation-duration      | ` 1.2s;`                                                           |
| --{property}                       | ` e(replace(@imp, '(-?)@([^() ]+)', '$1@{$2}', 'ig'));`            |
| --{property}                       | ` e(replace(@imp, '(-?)@([^() ]+)', 'var(--$2, $1@{$2})', 'ig'));` |
