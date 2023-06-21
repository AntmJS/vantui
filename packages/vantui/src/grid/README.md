# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

### 引入

在 Taro 文件中引入组件

```js
import { Grid, GridItem } from '@antmjs/vantui'
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基本用法

通过`icon`属性设置格子内的图标，`text`属性设置文字内容。

```jsx
function Demo() {
  return (
    <Grid>
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
    </Grid>
  )
}
```

### 自定义列数

默认一行展示四个格子，可以通过`columnNum`自定义列数。

```jsx
function Demo() {
  return (
    <Grid columnNum="3">
      <GridItem icon="photo-o" text="文字" />
    </Grid>
  )
}
```

### 自定义内容

通过插槽可以自定义格子展示的内容。

```jsx
function Demo() {
  return (
    <Grid columnNum="3" border={false}>
      {[1, 2, 3].map((item, index) => (
        <GridItem key={index} forItem="index">
          <Image
            style="width: 100%; height: 90px;"
            src={`https://img.yzcdn.cn/vant/apple-${index + 1}.jpg`}
          />
        </GridItem>
      ))}
    </Grid>
  )
}
```

### 正方形格子

设置`square`属性后，格子的高度会和宽度保持一致。

```jsx
function Demo() {
  return (
    <Grid square iconSize="48">
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
    </Grid>
  )
}
```

### 格子间距

通过`gutter`属性设置格子之间的距离。

```jsx
function Demo() {
  return (
    <Grid gutter={10}>
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
    </Grid>
  )
}
```

### 内容横排

将`direction`属性设置为`horizontal`，可以让宫格的内容呈横向排列。

```jsx
function Demo() {
  return (
    <Grid direction="horizontal" columnNum="2">
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
    </Grid>
  )
}
```

### 页面跳转

可以通过`url`属性进行页面跳转，通过`linkType`属性控制跳转类型。

```jsx
function Demo() {
  return (
    <Grid clickable columnNum="2">
      <GridItem
        icon="homeO"
        linkType="navigateTo"
        url="/pages/dashboard/index"
        text="Navigate 跳转"
      />
      <GridItem
        icon="search"
        linkType="reLaunch"
        url="/pages/dashboard/index"
        text="ReLaunch 跳转"
      />
    </Grid>
  )
}
```

### 提示信息

设置`dot`属性后，会在图标右上角展示一个小红点。设置`badge`属性后，会在图标右上角展示相应的徽标。

```jsx
function Demo() {
  return (
    <Grid columnNum="2">
      <GridItem icon="home-o" text="文字" dot />
      <GridItem icon="search" text="文字" badge="99+" />
    </Grid>
  )
}
```

### GridProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/grid.d.ts)

| 参数      | 说明             | 类型                                                | 默认值 | 必填    |
| --------- | ---------------- | --------------------------------------------------- | ------ | ------- |
| square    | 是否为正方形格子 | _&nbsp;&nbsp;boolean<br/>_                          | -      | `false` |
| gutter    | 格子间隔         | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ | -      | `false` |
| clickable | 是否开启点击反馈 | _&nbsp;&nbsp;boolean<br/>_                          | -      | `false` |
| columnNum | 列数             | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ | -      | `false` |
| center    | 是否居中排列     | _&nbsp;&nbsp;boolean<br/>_                          | -      | `false` |
| border    | 是否显示边框     | _&nbsp;&nbsp;boolean<br/>_                          | -      | `false` |
| direction | 内容对齐方式     | _&nbsp;&nbsp;"horizontal"<br/>_                     | -      | `false` |
| iconSize  | 图标大小         | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | -      | `false` |
| reverse   | 内容顺序反转     | _&nbsp;&nbsp;boolean<br/>_                          | -      | `false` |
| children  | 自定义内容       | _&nbsp;&nbsp;React.ReactNode<br/>_                  | -      | `false` |

### GridItemProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/grid.d.ts)

| 参数       | 说明                                          | 类型                                                                                                                                                                                        | 默认值 | 必填    |
| ---------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| icon       | 图标名称或图片链接                            | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                   | ''     | `false` |
| iconColor  | 图标颜色                                      | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                   | ''     | `false` |
| iconPrefix | 图标类名前缀，同 Icon 组件的 classPrefix 属性 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                   | ''     | `false` |
| dot        | 是否显示图标右上角小红点                      | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                  | ''     | `false` |
| info       | 图标右上角提示信息                            | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;undefined<br/>_              | ''     | `false` |
| badge      | 图标右上角徽标的内容                          | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;undefined<br/>_              | ''     | `false` |
| text       | 文字描述                                      | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                | ''     | `false` |
| url        | 点击后跳转的链接地址                          | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                   | ''     | `false` |
| linkType   | 跳转类型                                      | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"navigateTo"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"reLaunch"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"redirectTo"<br/>_ | ''     | `false` |
| children   | 自定义内容                                    | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                          | ''     | `false` |
