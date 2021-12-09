# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

### 引入

在 Taro 文件中引入组件

```js
import { Image } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

基础用法与原生 [image](<(https://developers.weixin.qq.com/miniprogram/dev/component/image.html)>) 标签一致，可以设置`src`、`width`、`height`等原生属性。

```jsx
<View>
  <Image
    width="100"
    height="100"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
  />
</View>
 
```

### 填充模式

通过`fit`属性可以设置图片填充模式，可选值见下方表格。

```jsx
<View>
  <Image
    width="10rem"
    height="10rem"
    fit="contain"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
  />
</View>
 
```

### 圆形图片

通过`round`属性可以设置图片变圆，注意当图片宽高不相等且`fit`为`contain`或`scaleDown`时，将无法填充一个完整的圆形。

```jsx
<View>
  <Image
    round={ true }
    width="10rem"
    height="10rem"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
  />
</View>
 
```

### 图片懒加载

图片懒加载，在即将进入一定范围（上下三屏）时才开始加载。

```jsx
<View>
  <Image
    width="100"
    height="100"
    lazyLoad={ true }
    src="https://img.yzcdn.cn/vant/cat.jpeg"
  />
</View>
 
```

### 加载中提示

`Image`组件提供了默认的加载中提示，支持通过`loading`插槽自定义内容。

```jsx
<View>
  <Image
    renderLoading={ (
          <Loading
            type="spinner"
            size="20"
            vertical={ true }
          />
        ) }
  />
</View>
 
```

### 加载失败提示

`Image`组件提供了默认的加载失败提示，支持通过`renderError`来自定义内容。

```jsx
<View>
  <Image
    renderError={ (
          <Text>
            加载失败
          </Text>
        ) }
  />
</View>
 
```
### ImageProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/image.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| src | - | _&nbsp;&nbsp;string<br/>_ | - | `true` |
| round | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| width | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| height | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| radius | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| lazyLoad | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| showMenuByLongpress | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| fit | - | _&nbsp;&nbsp;ImageFit<br/>_ | - | `false` |
| showError | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| showLoading | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| renderLoading | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderError | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

