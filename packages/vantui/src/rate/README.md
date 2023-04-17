# Rate 评分

### 介绍

用于对事物进行评级操作。

### 引入

在 Taro 文件中引入组件

```js
import { Rate } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

```jsx
function Demo() {
  const [value, setValue] = react.useState(3)
  return <Rate value={value} onChange={(e) => setValue(e.detail)} />
}
```

### 自定义图标

```jsx
function Demo() {
  const [value, setValue] = react.useState(4)

  return (
    <Rate
      value={value}
      icon="like"
      voidIcon="likeO"
      onChange={(e) => setValue(e.detail)}
    />
  )
}
```

### 自定义样式

```jsx
function Demo() {
  const [value, setValue] = react.useState(4)

  return (
    <Rate
      value={value}
      size={25}
      color="#ffd21e"
      voidIcon="star"
      voidColor="#eee"
      onChange={(e) => setValue(e.detail)}
    />
  )
}
```

### 半星

```jsx
function Demo() {
  const [value, setValue] = react.useState(4)

  return (
    <Rate
      value={value}
      allowHalf
      voidIcon="star"
      voidColor="#eee"
      onChange={(e) => setValue(e.detail)}
    />
  )
}
```

### 自定义数量

```jsx
function Demo() {
  const [value, setValue] = react.useState(3)

  return <Rate value={value} count={6} onChange={(e) => setValue(e.detail)} />
}
```

### 禁用状态

```jsx
function Demo() {
  const [value, setValue] = react.useState(3)

  return <Rate disabled value={value} onChange={(e) => setValue(e.detail)} />
}
```

### 只读状态

```jsx
function Demo() {
  const [value, setValue] = react.useState(3)

  return <Rate readonly value={value} />
}
```

### RateProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/rate.d.ts)

| 参数            | 说明                     | 类型                                                                                                    | 默认值 | 必填    |
| --------------- | ------------------------ | ------------------------------------------------------------------------------------------------------- | ------ | ------- |
| value           | -                        | _&nbsp;&nbsp;number<br/>_                                                                               | -      | `false` |
| defaultValue    | 默认值                   | _&nbsp;&nbsp;number<br/>_                                                                               | -      | `false` |
| readonly        | 是否只可读               | _&nbsp;&nbsp;boolean<br/>_                                                                              | -      | `false` |
| disabled        | 是否禁用                 | _&nbsp;&nbsp;boolean<br/>_                                                                              | -      | `false` |
| allowHalf       | 是否允许选择一般         | _&nbsp;&nbsp;boolean<br/>_                                                                              | -      | `false` |
| size            | -                        | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                     | -      | `false` |
| iconClassPrefix | 自定义图标的 classPrefix | _&nbsp;&nbsp;string<br/>_                                                                               | -      | `false` |
| icon            | 选中图标                 | _&nbsp;&nbsp;string<br/>_                                                                               | -      | `false` |
| voidIcon        | 未选中图标               | _&nbsp;&nbsp;string<br/>_                                                                               | -      | `false` |
| color           | 选中颜色                 | _&nbsp;&nbsp;string<br/>_                                                                               | -      | `false` |
| voidColor       | 未选颜色                 | _&nbsp;&nbsp;string<br/>_                                                                               | -      | `false` |
| disabledColor   | 禁用颜色                 | _&nbsp;&nbsp;string<br/>_                                                                               | -      | `false` |
| count           | 总体数量                 | _&nbsp;&nbsp;number<br/>_                                                                               | -      | `false` |
| gutter          | 图标间距，默认单位为 px  | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                     | -      | `false` |
| touchable       | -                        | _&nbsp;&nbsp;boolean<br/>_                                                                              | -      | `false` |
| onChange        | -                        | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                       | 默认值            |
| -------------------------- | ----------------- |
| --rate-horizontal-padding  | ` 4px;`           |
| --rate-icon-size           | ` 40px;`          |
| --rate-icon-void-color     | ` @gray-5;`       |
| --rate-icon-full-color     | ` @red;`          |
| --rate-icon-disabled-color | ` @gray-5;`       |
| --rate-icon-gutter         | ` @padding-base;` |
