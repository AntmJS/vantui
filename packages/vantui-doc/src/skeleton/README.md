# Skeleton 骨架屏

### 介绍

用于在内容加载过程中展示一组占位图形。

### 引入

在 Taro 文件中引入组件

```js
import { Skeleton } from "@antmjs/vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

通过`title`属性显示标题占位图，通过`row`属性配置占位段落行数。

```jsx
<View>
  <Skeleton
    title={ true }
    row="3"
  />
</View>
 
```

### 显示头像

通过`avatar`属性显示头像占位图。

```jsx
<View>
  <Skeleton
    title={ true }
    avatar={ true }
    row="3"
  />
</View>
 
```

### 展示子组件

将`loading`属性设置成`false`表示内容加载完成，此时会隐藏占位图，并显示`Skeleton`的子组件。

```jsx
<View>
  <Skeleton
    title={ true }
    avatar={ true }
    row="3"
    loading={ this.state.loading }
  >
    <View>
      实际内容
    </View>
  </Skeleton>
</View>
 
```

```js
this.state = {
  loading: true
};

function onReady() {
  this.setState({
    loading: false
  });
} 
```
### SkeletonProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/skeleton.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| row | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| title | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| avatar | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| loading | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| animate | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| avatarSize | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| avatarShape | - | _&nbsp;&nbsp;"square"&nbsp;&brvbar;&nbsp;"round"<br/>_ | - | `false` |
| titleWidth | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| rowWidth | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;string[]<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

