# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

### 引入

在 Taro 文件中引入组件

```js
import { Grid } from "@antmjs/vantui";
import { GridItem } from "@antmjs/vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基本用法

通过`icon`属性设置格子内的图标，`text`属性设置文字内容。

```jsx
<View>
  <Grid>
    <GridItem
      icon="photoO"
      text="文字"
    />
    <GridItem
      icon="photoO"
      text="文字"
    />
    <GridItem
      icon="photoO"
      text="文字"
    />
    <GridItem
      icon="photoO"
      text="文字"
    />
  </Grid>
</View>
 
```

### 自定义列数

默认一行展示四个格子，可以通过`columnNum`自定义列数。

```jsx
<View>
  <Grid columnNum="3">
    <GridItem
      icon="photoO"
      text="文字"
    /> )) }
  </Grid>
</View>
 
```

### 自定义内容

通过插槽可以自定义格子展示的内容。

```jsx
<View>
  <Grid
    columnNum="3"
    border={ false }
  >
    { (new Array(3)).map((item, index) => (
        <GridItem forItem="index">
          <Image
            style="width: 100%; height: 90px;"
            src={ `https://img.yzcdn.cn/vant/apple-${ index + 1 }.jpg` }
          />
        </GridItem>
      
      )) }
  </Grid>
</View>
 
```

### 正方形格子

设置`square`属性后，格子的高度会和宽度保持一致。

```jsx
<View>
  <Grid square={ true }>
    <GridItem
      icon="photoO"
      text="文字"
    /> )) }
  </Grid>
</View>
 
```

### 格子间距

通过`gutter`属性设置格子之间的距离。

```jsx
<View>
  <Grid gutter={  10 }>
    <GridItem
      icon="photoO"
      text="文字"
    /> )) }
  </Grid>
</View>
 
```

### 内容横排

将`direction`属性设置为`horizontal`，可以让宫格的内容呈横向排列。

```jsx
<View>
  <Grid
    direction="horizontal"
    columnNum="2"
  >
    <GridItem
      icon="photoO"
      text="文字"
    />
    <GridItem
      icon="photoO"
      text="文字"
    />
    <GridItem
      icon="photoO"
      text="文字"
    />
  </Grid>
</View>
 
```

### 页面跳转

可以通过`url`属性进行页面跳转，通过`linkType`属性控制跳转类型。

```jsx
<View>
  <Grid
    clickable={ true }
    columnNum="2"
  >
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
</View>
 
```

### 提示信息

设置`dot`属性后，会在图标右上角展示一个小红点。设置`badge`属性后，会在图标右上角展示相应的徽标。

```jsx
<View>
  <Grid columnNum="2">
    <GridItem
      icon="homeO"
      text="文字"
      dot={ true }
    />
    <GridItem
      icon="search"
      text="文字"
      badge="99+"
    />
  </Grid>
</View>
 
```
### GridProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/grid.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| square | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| gutter | - | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ | - | `false` |
| clickable | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| columnNum | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| center | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| border | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| direction | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| iconSize | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| reverse | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;React.ReactNode<br/>_ | - | `false` |

