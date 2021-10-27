# DropdownMenu 下拉菜单

### 介绍

向下弹出的菜单列表。

### 引入

在 Taro 文件中引入组件

```js
import { DropdownMenu } from "vantui";
import { DropdownItem } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <DropdownMenu>
    <DropdownItem
      value={ `${ this.value1 }` }
      options={ `${ this.option1 }` }
    />
    <DropdownItem
      value={ `${ this.value2 }` }
      options={ `${ this.option2 }` }
    />
  </DropdownMenu>
</View>
 
```

```js
this.state = {
  option1: [{
    text: '全部商品',
    value: 0
  }, {
    text: '新款商品',
    value: 1
  }, {
    text: '活动商品',
    value: 2
  }],
  option2: [{
    text: '默认排序',
    value: 'a'
  }, {
    text: '好评排序',
    value: 'b'
  }, {
    text: '销量排序',
    value: 'c'
  }],
  value1: 0,
  value2: 'a'
}; 
```

### 自定义菜单内容

```jsx
<View>
  <DropdownMenu>
    <DropdownItem
      value={ `${ this.value1 }` }
      options={ `${ this.option1 }` }
    />
    <DropdownItem
      id="item"
      title={ `${ this.itemTitle }` }
    >
      <Cell 
        title={ `${ this.switchTitle1 }` }
        renderRightIcon={(
          <Switch
            size="24px"
            style="height: 26px"
            checked={ `${ switch1 }` }
            activeColor="#ee0a24"
            onChange={ this.onSwitch1Change }
          />
        )}
      >
      </Cell>
      <Cell 
        title={ `${ this.switchTitle2 }` }
        renderRightIcon={(
          <Switch
            size="24px"
            style="height: 26px"
            checked={ `${ switch2 }` }
            activeColor="#ee0a24"
            onChange={ this.onSwitch2Change }
          />
        )}
      >
      </Cell>
      <View style="padding: 5px 16px;">
        <Button
          type="danger"
          block={ true }
          round={ true }
          onClick={ this.onConfirm }
        >
          确认
        </Button>
      </View>
    </DropdownItem>
  </DropdownMenu>
</View>
 
```

```js
this.state = {
  switchTitle1: '包邮',
  switchTitle2: '团购',
  itemTitle: '筛选',
  option1: [{
    text: '全部商品',
    value: 0
  }, {
    text: '新款商品',
    value: 1
  }, {
    text: '活动商品',
    value: 2
  }],
  value1: 0
};

function onConfirm() {
  this.selectComponent('#item').toggle();
}

function onSwitch1Change({
  detail
}) {
  this.setData({
    switch1: detail
  });
}

function onSwitch2Change({
  detail
}) {
  this.setData({
    switch2: detail
  });
} 
```

### 自定义选中状态颜色

```jsx
<View>
  <DropdownMenu activeColor="#1989fa">
    <DropdownItem
      value={ `${ this.value1 }` }
      options={ `${ this.option1 }` }
    />
    <DropdownItem
      value={ `${ this.value2 }` }
      options={ `${ this.option2 }` }
    />
  </DropdownMenu>
</View>
 
```

### 向上展开

```jsx
<View>
  <DropdownMenu direction="up">
    <DropdownItem
      value={ `${ this.value1 }` }
      options={ `${ this.option1 }` }
    />
    <DropdownItem
      value={ `${ this.value2 }` }
      options={ `${ this.option2 }` }
    />
  </DropdownMenu>
</View>
 
```

### 禁用菜单

```jsx
<View>
  <DropdownMenu>
    <DropdownItem
      value={ `${ this.value1 }` }
      disabled={ true }
      options={ `${ this.option1 }` }
    />
    <DropdownItem
      value={ `${ this.value2 }` }
      disabled={ true }
      options={ `${ this.option2 }` }
    />
  </DropdownMenu>
</View>
 
```
### TS信息
```ts 
import React, { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

type DropdownMenuOption = {
  text?: string
  value: number | string
  icon?: string
}

export interface DropdownMenuProps extends StandardProps {
  activeColor?: string
  overlay?: boolean
  zIndex?: number
  duration?: number
  direction?: string
  closeOnClickOverlay?: boolean
  closeOnClickOutside?: boolean
  popupStyle?: React.CSSProperties
  wrapperStyle?: React.CSSProperties
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  options?: Array<DropdownMenuOption>
  children?: React.ReactNode
  value?: string
  disabled?: boolean
}

declare const DropdownMenu: ComponentClass<DropdownMenuProps>

export { DropdownMenu }
```