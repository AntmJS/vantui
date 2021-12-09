# Card 商品卡片

### 介绍

商品卡片，用于展示商品的图片、价格等信息。

### 引入

在 Taro 文件中引入组件

```js
import { Card } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb={ imageURL }
  />
</View>
 
```

### 高级用法

可以通过插槽添加定制内容。

```jsx
<View>
  <Card
    num="2"
    tag="标签"
    price="10.00"
    desc="描述信息"
    title="商品标题"
    thumb={  imageURL  }
    renderFooter={(
      <View>
        <Button size="mini">
          按钮
        </Button>
        <Button size="mini">
          按钮
        </Button>
      </View>
    )}
  />
</View>
 
```
### CardProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/card.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| tag | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| num | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| desc | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| thumb | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| title | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| price | - | _&nbsp;&nbsp;string<br/>_ | - | `true` |
| centered | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| lazyLoad | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| thumbLink | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| originPrice | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| thumbMode | - | _&nbsp;&nbsp;keyof&nbsp;ImageProps.mode<br/>_ | - | `false` |
| currency | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| renderFooter | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderBottom | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderNum | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderOriginPrice | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderPrice | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderPriceTop | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderTags | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderDesc | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderTitle | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderTag | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderThumb | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

