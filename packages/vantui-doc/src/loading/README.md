# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

### 引入

在 Taro 文件中引入组件

```js
import { Loading } from "@antmjs/vantui"; 
```

## 代码演示

### 加载类型

```jsx
<View>
  <Loading />
  <Loading type="spinner" />
</View>
 
```

### 自定义颜色

```jsx
<View>
  <Loading color="#1989fa" />
  <Loading
    type="spinner"
    color="#1989fa"
  />
</View>
 
```

### 加载文案

```jsx
<View>
  <Loading size="24px">
    加载中...
  </Loading>
</View>
 
```

### 垂直排列

```jsx
<View>
  <Loading
    size="24px"
    vertical={ true }
  >
    加载中...
  </Loading>
</View>
 
```
### LoadingProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/loading.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| color | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| vertical | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| type | - | _&nbsp;&nbsp;"spinner"&nbsp;&brvbar;&nbsp;"circular"<br/>_ | - | `false` |
| size | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| textSize | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;React.ReactNode<br/>_ | - | `false` |

