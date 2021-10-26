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
    thumb={ imageURL }
  >
    <View slot="footer">
      <Button size="mini">
        按钮
      </Button>
      <Button size="mini">
        按钮
      </Button>
    </View>
  </Card>
</View>
 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
import { ImageProps } from '@tarojs/components/types/Image.d'

export interface CardProps extends StandardProps {
  tag?: string
  num?: string
  desc?: string
  thumb?: string
  title?: string
  price: string
  centered?: boolean
  lazyLoad?: boolean
  thumbLink?: string
  originPrice?: string
  thumbMode?: keyof ImageProps.mode
  currency?: string
  renderFooter?: ReactNode
  renderBottom?: ReactNode
  renderNum?: ReactNode
  renderOriginPrice?: ReactNode
  renderPrice?: ReactNode
  renderPriceTop?: ReactNode
  renderTags?: ReactNode
  renderDesc?: ReactNode
  renderTitle?: ReactNode
  renderTag?: ReactNode
  renderThumb?: ReactNode
}

declare const Card: ComponentClass<CardProps>

export { Card }
```