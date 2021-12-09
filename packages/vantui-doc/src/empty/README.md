# Empty 空状态

### 介绍

空状态时的占位提示。

### 引入

在 Taro 文件中引入组件

```js
import { Empty } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Empty description="描述文字" />
</View>
 
```

### 图片类型

Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。

```jsx
<View>
  {/*  通用错误  */}
  <Empty
    image="error"
    description="描述文字"
  /> 
  {/*  网络错误  */}
  <Empty
    image="network"
    description="描述文字"
  /> 
  {/*  搜索提示  */}
  <Empty
    image="search"
    description="描述文字"
  />
</View>
 
```

### 自定义图片

需要自定义图片时，可以在 image 属性中传入任意图片 URL。

```jsx
<View>
  <Empty
    class="customImage"
    image="https://img.yzcdn.cn/vant/customEmptyImage.png"
    description="描述文字"
  />
</View>
 
```

### 底部内容

通过默认插槽可以在 Empty 组件的下方插入内容。

```jsx
<View>
  <Empty description="描述文字">
    <Button
      round={ true }
      type="danger"
      class="bottomButton"
    >
      按钮
    </Button>
  </Empty>
</View>
 
```
### EmptyProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/empty.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| description | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| image | - | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"error"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"search"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"default"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"network"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderImage | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderDescription | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

