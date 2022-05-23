# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

在 Taro 文件中引入组件

```js
import { Cell, CellGroup } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

`Cell`可以单独使用，也可以与`CellGroup`搭配使用。`CellGroup`可以为`Cell`提供上下外边框。

```jsx
function Demo() {
  return (
    <View>
      <CellGroup>
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" label="描述信息" border={false} />
      </CellGroup>
    </View>
  )
}
```

### 卡片风格

通过 CellGroup 的 `inset` 属性，可以将单元格转换为圆角卡片风格。

```jsx
function Demo() {
  return (
    <View>
      <CellGroup inset>
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" label="描述信息" />
      </CellGroup>
    </View>
  )
}
```

### 单元格大小

通过`size`属性可以控制单元格的大小。

```jsx
function Demo() {
  return (
    <View>
      <Cell title="单元格" value="内容" size="large" />
      <Cell title="单元格" value="内容" size="large" label="描述信息" />
    </View>
  )
}
```

### 展示图标

通过`icon`属性在标题左侧展示图标。

```jsx
function Demo() {
  return (
    <View>
      <Cell title="单元格" icon="locationO" />
    </View>
  )
}
```

### 展示箭头

设置`isLink`属性后会在单元格右侧显示箭头，并且可以通过`arrowDirection`属性控制箭头方向。

```jsx
function Demo() {
  return (
    <View>
      <Cell title="单元格" isLink />
      <Cell title="单元格" isLink value="内容" />
      <Cell title="单元格" isLink value="内容" arrowDirection="down" />
    </View>
  )
}
```

### 页面跳转

可以通过`url`属性进行页面跳转，通过`linkType`属性控制跳转类型。

```jsx
function Demo() {
  return (
    <View>
      <Cell
        isLink
        title="单元格"
        linkType="navigateTo"
        url="/pages/dashboard/index"
      />
    </View>
  )
}
```

### 分组标题

通过`CellGroup`的`title`属性可以指定分组标题。

```jsx
function Demo() {
  return (
    <View>
      <CellGroup title="分组1">
        <Cell title="单元格" value="内容" />
      </CellGroup>
      <CellGroup title="分组2">
        <Cell title="单元格" value="内容" />
      </CellGroup>
    </View>
  )
}
```

### 自定义渲染内容

如以上用法不能满足你的需求，可以使用`renderTitle`和`renderRightIcon`来渲染内容

```jsx
function Demo() {
  return (
    <View>
      <Cell
        value="内容"
        icon="shop-o"
        isLink
        renderTitle={
          <View>
            <View className="title">单元格</View>
            <Tag type="danger">标签</Tag>
          </View>
        }
      />
      <Cell
        title="单元格"
        border={false}
        renderRightIcon={<Icon name="search"></Icon>}
      />
    </View>
  )
}
```

### 垂直居中

通过`center`属性可以让`Cell`的左右内容都垂直居中。

```jsx
function Demo() {
  return (
    <View>
      <Cell center={true} title="单元格" value="内容" label="描述信息" />
    </View>
  )
}
```
### CellProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/cell.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| url | 点击后跳转的链接地址 | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| linkType | 点击后跳转的链接地址 | _&nbsp;&nbsp;"navigateTo"&nbsp;&brvbar;&nbsp;"reLaunch"&nbsp;&brvbar;&nbsp;"redirectTo"<br/>_ | navigateTo | `false` |
| title | 左侧标题 | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| value | 右侧内容 | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| icon | 标题下方的描述信息 | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| size | 单元格大小，可选值为 large | _&nbsp;&nbsp;"large"<br/>_ | - | `false` |
| label | 标题下方的描述信息 | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| center | 是否使内容垂直居中 | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| isLink | 是否展示右侧箭头并开启点击反馈 | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| required | 是否显示表单必填星号 | _&nbsp;&nbsp;boolean<br/>_ | false | `false` |
| clickable | 是否开启点击反馈 | _&nbsp;&nbsp;boolean<br/>_ | false | `false` |
| titleWidth | 标题宽度，须包含单位 | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| style | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| arrowDirection | 箭头方向 | _&nbsp;&nbsp;"left"&nbsp;&brvbar;&nbsp;"up"&nbsp;&brvbar;&nbsp;"down"<br/>_ | - | `false` |
| border | 是否显示下边框 | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| titleStyle | 标题样式 | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| renderTitle | 自定义渲染标题 | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderIcon | 自定义渲染左侧icon | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderLabel | 自定义label显示内容 | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderRightIcon | 自定义icon显示内容 | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderExtra | 自定义右边内容后跟随的内容 | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

### CellGroup Props [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/cell.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| title | 标题 | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| border | 是否显示外边框 | _&nbsp;&nbsp;boolean<br/>_ | true | `false` |
| inset | 是否展示为圆角卡片风格 | _&nbsp;&nbsp;boolean<br/>_ | false | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

