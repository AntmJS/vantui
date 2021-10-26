# Steps 步骤条

### 介绍

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

### 引入

在 Taro 文件中引入组件

```js
import { Steps } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Steps
    steps={ `${ this.steps }` }
    active={ `${ active }` }
  />
</View>
 
```

```js
this.state = {
  steps: [{
    text: '步骤一',
    desc: '描述信息'
  }, {
    text: '步骤二',
    desc: '描述信息'
  }, {
    text: '步骤三',
    desc: '描述信息'
  }, {
    text: '步骤四',
    desc: '描述信息'
  }]
}; 
```

### 自定义样式

可以通过 `activeIcon` 和 `activeColor` 属性设置激活状态下的图标和颜色。

```jsx
<View>
  <Steps
    steps={ `${ this.steps }` }
    active={ `${ active }` }
    activeIcon="success"
    activeColor="#38f"
  />
</View>
 
```

### 自定义图标

可以通过 `inactiveIcon` 和 `activeIcon` 属性分别设置每一项的图标。

```jsx
<View>
  <Steps
    steps={ `${ this.steps }` }
    active={ `${ active }` }
  />
</View>
 
```

```js
this.state = {
  steps: [{
    text: '步骤一',
    desc: '描述信息',
    inactiveIcon: 'locationO',
    activeIcon: 'success'
  }, {
    text: '步骤二',
    desc: '描述信息',
    inactiveIcon: 'likeO',
    activeIcon: 'plus'
  }, {
    text: '步骤三',
    desc: '描述信息',
    inactiveIcon: 'starO',
    activeIcon: 'cross'
  }, {
    text: '步骤四',
    desc: '描述信息',
    inactiveIcon: 'phoneO',
    activeIcon: 'fail'
  }]
}; 
```

### 竖向步骤条

可以通过设置`direction`属性来改变步骤条的显示方式。

```jsx
<View>
  <Steps
    steps={ `${ this.steps }` }
    active={ `${ active }` }
    direction="vertical"
    activeColor="#ee0a24"
  />
</View>
 
```
### TS信息
```ts 
import { ComponentClass } from 'react'
import { StandardProps, ITouchEvent } from '@tarojs/components'

export interface StepsProps extends StandardProps {
  icon?: string
  steps?: {
    index?: number
    desc: string
    text: string
    activeIcon?: string
    inactiveIcon?: string
  }[]
  active?: number
  direction?: 'horizontal' | 'vertical'
  activeColor?: string
  inactiveColor?: string
  activeIcon?: string
  inactiveIcon?: string
  onClickStep?: (event: ITouchEvent & { detail: number }) => void
}

declare const Steps: ComponentClass<StepsProps>

export { Steps }
```