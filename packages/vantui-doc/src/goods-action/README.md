# GoodsAction 商品导航

### 介绍

用于为商品相关操作提供便捷交互。

### 引入

在 Taro 文件中引入组件

```js
import { GoodsAction } from "@antmjs/vantui";
import { GoodsActionIcon } from "@antmjs/vantui";
import { GoodsActionButton } from "@antmjs/vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)。

## 代码演示

### 基础用法

```jsx
<View>
  <GoodsAction>
    <GoodsActionIcon
      icon="chatO"
      text="客服"
      onClick={ onClickIcon }
    />
    <GoodsActionIcon
      icon="cartO"
      text="购物车"
      onClick={ onClickIcon }
    />
    <GoodsActionButton
      text="加入购物车"
      type="warning"
      onClick={ this.onClickButton }
    />
    <GoodsActionButton
      text="立即购买"
      onClick={ this.onClickButton }
    />
  </GoodsAction>
</View>
 
```

```js
function onClickButton() {
  Toast('点击按钮');
} 
```

### 提示信息

设置`dot`属性后，会在图标右上角展示一个小红点。设置`info`属性后，会在图标右上角展示相应的徽标。

```jsx
<View>
  <GoodsAction>
    <GoodsActionIcon
      icon="chatO"
      text="客服"
      dot={ true }
    />
    <GoodsActionIcon
      icon="cartO"
      text="购物车"
      info="5"
    />
    <GoodsActionIcon
      icon="shopO"
      text="店铺"
    />
    <GoodsActionButton
      text="加入购物车"
      type="warning"
    />
    <GoodsActionButton text="立即购买" />
  </GoodsAction>
</View>
 
```

### 自定义按钮颜色

通过`color`属性可以自定义按钮的颜色，支持传入`linearGradient`渐变色。

```jsx
<View>
  <GoodsAction>
    <GoodsActionIcon
      icon="chatO"
      text="客服"
    />
    <GoodsActionIcon
      icon="cartO"
      text="购物车"
      info="5"
    />
    <GoodsActionIcon
      icon="shopO"
      text="店铺"
    />
    <GoodsActionButton
      color="#be99ff"
      text="加入购物车"
      type="warning"
    />
    <GoodsActionButton
      color="#7232dd"
      text="立即购买"
    />
  </GoodsAction>
</View>
 
```

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```jsx
<View>
  <GoodsAction>
    <GoodsActionIcon
      icon="chatO"
      text="客服"
    />
    <GoodsActionIcon
      icon="cartO"
      text="购物车"
      info="5"
    />
    <GoodsActionIcon
      icon="shopO"
      text="店铺"
    />
    <GoodsActionButton
      color="#7232dd"
      text="加入购物"
      type="warning"
    />
    <GoodsActionButton
      plain={ true }
      color="#7232dd"
      text="立即购买"
    />
  </GoodsAction>
</View>
 
```
### GoodsActionProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/goods-action.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| safeAreaInsetBottom | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `true` |

