# ActionSheet 动作面板

### 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。

### 引入

在 Taro 文件中引入组件

```js
import { ActionSheet } from "vantui"; 
```

## 代码演示

### 基础用法

需要传入一个`actions`的数组，数组的每一项是一个对象，对象属性见文档下方表格。

```jsx
<View>
  <ActionSheet
    show={ `${ this.show }` }
    actions={ `${ this.actions }` }
    onClose={ this.onClose }
    onSelect={ this.onSelect }
  />
</View>
 
```

```js
this.state = {
  show: false,
  actions: [{
    name: '选项'
  }, {
    name: '选项'
  }, {
    name: '选项',
    subname: '描述信息',
    openType: 'share'
  }]
};

function onClose() {
  this.setState({
    show: false
  });
}

function onSelect(event) {
  console.log(event.detail);
} 
```

### 选项状态

选项可以设置为加载状态或禁用状态。

```jsx
<View>
  <ActionSheet
    show={ `${ this.show }` }
    actions={ `${ this.actions }` }
    cancelText="取消"
  />
</View>
 
```

```js
this.state = {
  show: false,
  actions: [{
    name: '着色选项',
    color: '#ee0a24'
  }, {
    loading: true
  }, {
    name: '禁用选项',
    disabled: true
  }]
}; 
```

### 展示取消按钮

设置`cancelText`属性后，会在底部展示取消按钮，点击后关闭当前菜单。

```jsx
<View>
  <ActionSheet
    show={ `${ this.show }` }
    actions={ `${ this.actions }` }
    cancelText="取消"
  />
</View>
 
```

### 展示描述信息

设置`description`属性后，会在选项上方显示描述信息。

```jsx
<View>
  <ActionSheet
    show={ `${ this.show }` }
    actions={ `${ this.actions }` }
    description="这是一段描述信息"
  />
</View>
 
```

### 展示标题栏

通过设置`title`属性展示标题栏，同时可以使用插槽自定义菜单内容。

```jsx
<View>
  <ActionSheet
    show={ `${ this.show }` }
    title="标题"
  >
    <View>
      内容
    </View>
  </ActionSheet>
</View>
 
```

### 微信开放能力

需要传入一个`actions`的数组，数组的每一项是一个对象，对象属性见文档下方表格。

```jsx
<View>
  <ActionSheet
    show={ `${ this.show }` }
    actions={ `${ this.actions }` }
    onClose={ this.onClose }
    onGetuserinfo={ this.onGetUserInfo }
  />
</View>
 
```

```js
this.state = {
  show: false,
  actions: [{
    name: '获取用户信息',
    color: '#07c160',
    openType: 'getUserInfo'
  }]
};

function onClose() {
  this.setState({
    show: false
  });
}

function onGetUserInfo(e) {
  console.log(e.detail);
} 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps, ButtonProps, ITouchEvent } from '@tarojs/components'
import { PopupProps } from './popup'
export interface ActionSheetItem extends Omit<ButtonProps, 'children'> {
  name?: string
  subname?: string
  color?: string
  loading?: boolean
  disabled?: boolean
}
export interface ActionSheetProps extends StandardProps, PopupProps {
  actions: ActionSheetItem[]
  title?: string
  show?: boolean
  cancelText?: string
  description?: string
  overlay?: boolean
  closeOnClickOverlay?: boolean
  closeOnClickAction?: boolean
  safeAreaInsetBottom?: boolean
  round?: boolean
  zIndex?: number
  children?: ReactNode
  onSelect?: (event: ITouchEvent & { detail: ActionSheetItem }) => void
  onCancel?: () => void
  onClose?: () => void
  onClickOverlay?: () => void
}
declare const ActionSheet: ComponentClass<ActionSheetProps>
export { ActionSheet }
```