# TreeSelect 分类选择

### 介绍

用于从一组相关联的数据集合中进行选择。

### 引入

在 Taro 文件中引入组件

```js
import { TreeSelect } from "vantui"; 
```

## 代码演示

### 单选模式

可以在任意位置上使用 vanTreeSelect 标签。传入对应的数据即可。此组件支持单选或多选，具体行为完全基于事件 clickItem 的实现逻辑如何为属性 activeId 赋值，当 activeId 为数组时即为多选状态。

```jsx
<View>
  <TreeSelect
    items={ `${ items }` }
    mainActiveIndex={ `${ this.mainActiveIndex }` }
    activeId={ `${ this.activeId }` }
    onClickNav={ this.onClickNav }
    onClickItem={ this.onClickItem }
  />
</View>
 
```

```js
this.state = {
  mainActiveIndex: 0,
  activeId: null
};

function onClickNav({
  detail = {}
}) {
  this.setData({
    mainActiveIndex: detail.index || 0
  });
}

function onClickItem({
  detail = {}
}) {
  const activeId = this.data.activeId === detail.id ? null : detail.id;
  this.setData({
    activeId
  });
} 
```

### 多选模式

```jsx
<View>
  <TreeSelect
    items={ `${ items }` }
    mainActiveIndex={ `${ this.mainActiveIndex }` }
    activeId={ `${ this.activeId }` }
    max={ `${ this.max }` }
    onClickNav={ this.onClickNav }
    onClickItem={ this.onClickItem }
  />
</View>
 
```

```js
this.state = {
  mainActiveIndex: 0,
  activeId: [],
  max: 2
};

function onClickNav({
  detail = {}
}) {
  this.setData({
    mainActiveIndex: detail.index || 0
  });
}

function onClickItem({
  detail = {}
}) {
  const {
    activeId
  } = this.data;
  const index = activeId.indexOf(detail.id);

  if (index > -1) {
    activeId.splice(index, 1);
  } else {
    activeId.push(detail.id);
  }

  this.setData({
    activeId
  });
} 
```

### 自定义内容

```jsx
<View>
  <TreeSelect
    items={ `${ items }` }
    height="55vw"
    mainActiveIndex={ `${ this.mainActiveIndex }` }
    activeId={ `${ this.activeId }` }
    onClickNav={ this.onClickNav }
    onClickItem={ this.onClickItem }
  >
    <Image
      src="https://img.yzcdn.cn/vant/apple-1.jpg"
    />
  </TreeSelect>
</View>
 
```
### TS信息
```ts 
import { ComponentClass, TouchEvent } from 'react'
import { StandardProps } from '@tarojs/components'
import { ReactNode } from 'packages/vantui-demo/node_modules/@types/react'
export interface TreeSelectProps extends StandardProps {
  items?: {
    text: number | string
    badge?: number | string
    dot?: boolean
    disabled?: boolean
    children?: {
      text: number | string
      id: number | string
      disabled?: boolean
    }[]
  }[]
  activeId?: string | number | number[] | string[]
  mainActiveIndex?: number
  value?: number
  height?: number | string
  max?: number
  selectedIcon?: string
  onClickItem?: (
    event: TouchEvent & {
      detail: {
        text: string
        id: string | number
        disabled?: boolean
      }
    },
  ) => void
  onClickNav?: (event: { detail: { index: number } }) => void
  renderContent?: ReactNode
}
declare const TreeSelect: ComponentClass<TreeSelectProps>
export { TreeSelect }
```