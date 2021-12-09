# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 引入

在 Taro 文件中引入组件

```js
import { Divider } from "@antmjs/vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)。

## 代码演示

### 基础用法

```jsx
<View>
  <Divider />
</View>
 
```

### 使用 hairline

```jsx
<View>
  <Divider hairline={ true } />
</View>
 
```

### 虚线

```jsx
<View>
  <Divider dashed={ true } />
</View>
 
```

### 文本位置

```jsx
<View>
  <Divider contentPosition="center">
    文本
  </Divider>
  <Divider contentPosition="left">
    文本
  </Divider>
  <Divider contentPosition="right">
    文本
  </Divider>
</View>
 
```

### 自定义属性

```jsx
<View>
  <Divider
    contentPosition="center"
    textColor="#1989fa"
  >
    文本颜色
  </Divider>
  <Divider
    contentPosition="center"
    borderColor="#1989fa"
  >
    border 颜色
  </Divider>
  <Divider
    contentPosition="center"
    fontSize="18"
  >
    字体大小
  </Divider>
</View>
 
```

### 自定义样式

```jsx
<View>
  <Divider
    contentPosition="center"
    style="color: #1989fa; borderColor: #1989fa; fontSize: 18px;"
  >
    文本
  </Divider>
</View>
 
```
### DividerProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/divider.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| dashed | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| hairline | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| contentPosition | - | _&nbsp;&nbsp;"left"&nbsp;&brvbar;&nbsp;"center"&nbsp;&brvbar;&nbsp;"right"<br/>_ | - | `false` |
| fontSize | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| borderColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| textColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

