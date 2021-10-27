# Search 搜索

### 介绍

用于搜索场景的输入框组件。

### 引入

在 Taro 文件中引入组件

```js
import { Search } from "vantui"; 
```

## 代码演示

### 基础用法

`vanSearch` 中，value 用于控制搜索框中的文字。background 可以自定义搜索框外部背景色。

```jsx
<View>
  <Search
    value={ `${ this.value }` }
    placeholder="请输入搜索关键词"
  />
</View>
 
```

### 事件监听

`vanSearch` 提供了 search 和 cancel 事件。search 事件在用户点击键盘上的搜索按钮触发。cancel 事件在用户点击搜索框右侧取消按钮时触发。

```jsx
<View>
  <Search
    value={ `${ this.value }` }
    placeholder="请输入搜索关键词"
    showAction={ true }
    onSearch={ this.onSearch }
    onCancel={ onCancel }
  />
</View>
 
```

### 搜索框内容对齐

通过 `inputAlign` 属性可以设置搜索框内容的对齐方式。

```jsx
<View>
  <Search
    value={ `${ this.value }` }
    inputAlign="center"
    placeholder="请输入搜索关键词"
  />
</View>
 
```

### 禁用搜索框

通过 `disabled` 属性可以将组件设置为禁用状态。

```jsx
<View>
  <Search
    disabled={ true }
    value={ `${ this.value }` }
    placeholder="请输入搜索关键词"
  />
</View>
 
```

### 自定义背景色

通过`background`属性可以设置搜索框外部的背景色，通过`shape`属性设置搜索框的形状，可选值为`round`。

```jsx
<View>
  <Search
    value={ `${ this.value }` }
    shape="round"
    background="#4fc08d"
    placeholder="请输入搜索关键词"
  />
</View>
 
```

### 自定义按钮

```jsx
<View>
  <Search
    value={ `${ this.value }` }
    label="地址"
    placeholder="请输入搜索关键词"
    onChange={ this.onChange }
    onSearch={ this.onSearch }
    renderAction={ (
          <View
            onTap={ this.onClick }
          >
            搜索
          </View>

        ) }
  />
</View>
 
```

```js
this.state = {
  value: ''
};

function onChange(e) {
  this.setData({
    value: e.detail
  });
}

function onSearch() {
  Toast('搜索' + this.data.value);
}

function onClick() {
  Toast('搜索' + this.data.value);
} 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps, ITouchEvent } from '@tarojs/components'

export interface SearchProps extends StandardProps {
  value?: string | number
  defaultValue?: string | number
  label?: string
  focus?: boolean
  error?: boolean
  disabled?: boolean
  readonly?: boolean
  inputAlign?: string
  showAction?: boolean
  leftIcon?: string
  rightIcon?: string
  placeholder?: string
  placeholderStyle?: string
  actionText?: string
  background?: string
  maxlength?: number
  shape?: string
  clearable?: boolean
  clearTrigger?: string
  clearIcon?: string
  renderLabel?: ReactNode
  renderLeftIcon?: ReactNode
  renderRightIcon?: ReactNode
  renderAction?: ReactNode
  onChange?: (e: ITouchEvent) => void
  onSearch?: (e: ITouchEvent) => void
  onFocus?: (e: ITouchEvent) => void
  onBlur?: (e: ITouchEvent) => void
  onClear?: () => void
  onCancel?: () => void
  onClickInput?: () => void
}

declare const Search: ComponentClass<SearchProps>

export { Search }
```