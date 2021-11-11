# Card 商品卡片

### 介绍

商品卡片，用于展示商品的图片、价格等信息。

### 引入

在 Taro 文件中引入组件

```js
import { Card } from "vantui"; 
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
| tag | - | _&nbsp;&nbsp;string<br/>_ | - | `否` |
| num | - | _&nbsp;&nbsp;string<br/>_ | - | `否` |
| desc | - | _&nbsp;&nbsp;string<br/>_ | - | `否` |
| thumb | - | _&nbsp;&nbsp;string<br/>_ | - | `否` |
| title | - | _&nbsp;&nbsp;string<br/>_ | - | `否` |
| price | - | _&nbsp;&nbsp;string<br/>_ | - | `是` |
| centered | - | _&nbsp;&nbsp;boolean<br/>_ | - | `否` |
| lazyLoad | - | _&nbsp;&nbsp;boolean<br/>_ | - | `否` |
| thumbLink | - | _&nbsp;&nbsp;string<br/>_ | - | `否` |
| originPrice | - | _&nbsp;&nbsp;string<br/>_ | - | `否` |
| thumbMode | - | _&nbsp;&nbsp;keyof&nbsp;ImageProps.mode<br/>_ | - | `否` |
| currency | - | _&nbsp;&nbsp;string<br/>_ | - | `否` |
| renderFooter | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `否` |
| renderBottom | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `否` |
| renderNum | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `否` |
| renderOriginPrice | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `否` |
| renderPrice | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `否` |
| renderPriceTop | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `否` |
| renderTags | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `否` |
| renderDesc | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `否` |
| renderTitle | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `否` |
| renderTag | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `否` |
| renderThumb | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `否` |

