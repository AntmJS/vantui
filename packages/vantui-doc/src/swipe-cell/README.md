# SwipeCell 滑动单元格

### 介绍

可以左右滑动来展示操作按钮的单元格组件。

### 引入

在 Taro 文件中引入组件

```js
import { SwipeCell } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <SwipeCell
    rightWidth={ 65 }
    leftWidth={ 65 }
    renderLeft={(
      <View>
        选择
      </View>
    )}
    renderRight={(
      <View>
        删除
      </View>
    )}
  >
    <CellGroup>
      <Cell
        title="单元格"
        value="内容"
      />
    </CellGroup>
  </SwipeCell>
</View>
 
```

### 异步关闭

当开启`asyncClose`时， 通过绑定`close`事件，可以自定义两侧滑动内容点击时的关闭行为。

```jsx
<View>
  <SwipeCell
    id="swipeCell"
    rightWidth={ 65 }
    leftWidth={ 65 }
    asyncClose={ true }
    onClose={ this.onClose }
    renderLeft={(
      <View>
        选择
      </View>
    )}
    renderRight={(
      <View>
        删除
      </View>
    )}
  >
    <CellGroup>
      <Cell
        title="单元格"
        value="内容"
      />
    </CellGroup>
  </SwipeCell>
</View>
 
```

```js
 
```

### 主动打开

```jsx
<View>
  <SwipeCell
    id="swipeCell2"
    rightWidth={ 65 }
    leftWidth={ 65 }
    name="示例"
    onOpen={ this.onOpen }
    renderLeft={(
      <View class="vanSwipeCell__left">
        选择
      </View>
    )}
    renderRight={(
      <View class="vanSwipeCell__right">
        删除
      </View>
    )}
  >
    <CellGroup>
      <Cell
        title="单元格"
        value="内容"
      />
    </CellGroup>
  </SwipeCell>
</View>
 
```

```js
 
```
### TS信息
```ts 
import { ComponentClass } from 'react'
import { StandardProps, ITouchEvent } from '@tarojs/components'

type SwipeCellClick = {
  detail: {
    position: 'left' | 'right' | 'cell' | 'outside'
  }
}

type SwipeCellOpen = {
  detail: {
    position: 'left' | 'right'
    name: string
  }
}

type SwipeCellClose = {
  detail: {
    position: 'left' | 'right'
    name: string
  }
}

export interface SwipeCellProps extends StandardProps {
  disabled?: boolean
  leftWidth?: number
  rightWidth?: number
  asyncClose?: boolean
  name?: string | number
  catchMove?: boolean
  wrapperStyle?: React.CSSProperties
  onOpen?: (e: ITouchEvent & SwipeCellOpen) => void
  onClick?: (e: ITouchEvent & SwipeCellClick) => void
  onClose?: (e: ITouchEvent & SwipeCellClose) => void
  renderLeft?: React.ReactNode
  renderRight?: React.ReactNode
  children?: React.ReactNode
}

export type ISwiperCellInstance = {
  open: (position: 'left' | 'right') => void
  close: () => void
}

declare const SwipeCell: ComponentClass<SwipeCellProps>

export { SwipeCell }
```