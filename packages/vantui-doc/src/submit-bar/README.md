# SubmitBar 提交订单栏

### 介绍

用于展示订单金额与提交订单。

### 引入

在 Taro 文件中引入组件

```js
import { SubmitBar } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <SubmitBar
    price={ 3050 }
    buttonText="提交订单"
    onSubmit={ onSubmit }
  />
</View>
 
```

### 禁用状态

禁用状态下不会触发`submit`事件。

```jsx
<View>
  <SubmitBar
    disabled={ true }
    price={ 3050 }
    buttonText="提交订单"
    tip="您的收货地址不支持同城送, 我们已为您推荐快递"
    tipIcon="infoO"
    onSubmit={ onSubmit }
  />
</View>
 
```

### 加载状态

加载状态下不会触发`submit`事件。

```jsx
<View>
  <SubmitBar
    loading={ true }
    price={ 3050 }
    buttonText="提交订单"
    onSubmit={ onSubmit }
  />
</View>
 
```

### 高级用法

通过插槽插入自定义内容。

```jsx
<View>
  <SubmitBar
    price={ 3050 }
    buttonText="提交订单"
    onSubmit={ onClickButton }
    tip={ true }
  >
    <Tag type="primary">
      标签
    </Tag>
    <View slot="tip">
      您的收货地址不支持同城送,
      <Text>
        修改地址
      </Text>
    </View>
  </SubmitBar>
</View>
 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps, ITouchEvent } from '@tarojs/components'

export interface SubmitBarProps extends StandardProps {
  tip?: string
  tipIcon?: string
  price?: number
  label?: string
  loading?: boolean
  disabled?: boolean
  buttonText?: string
  currency?: string
  buttonType?: 'default' | 'primary' | 'info' | 'warning' | 'danger'
  decimalLength?: number
  suffixLabel?: string
  safeAreaInsetBottom?: boolean
  children?: ReactNode
  renderTop?: ReactNode
  renderTip?: ReactNode
  onSubmit?: (event: ITouchEvent) => void
}

declare const SubmitBar: ComponentClass<SubmitBarProps>

export { SubmitBar }
```