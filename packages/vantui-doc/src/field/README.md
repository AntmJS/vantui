# Field 输入框

### 介绍

用户可以在文本框内输入或编辑文字。

### 引入

在 Taro 文件中引入组件

```js
import { Field } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <CellGroup>
    <Field
      value={ this.value }
      placeholder="请输入用户名"
      border={ false }
      onChange={ this.onChange }
    />
  </CellGroup>
</View>
 
```

```js
this.state = {
  value: ''
};

function onChange(event) {
  // event.detail 为当前输入的值
  console.log(event.detail);
} 
```

### 双向绑定

最低基础库版本在 2.9.3 以上时，可以使用[简易双向绑定](https://developers.weixin.qq.com/miniprogram/dev/framework/view/twoWayBindings.html)。

```jsx
<View>
  <CellGroup>
    <Field
      model={ true }
      value={ this.value }
      placeholder="请输入用户名"
      border={ false }
    />
  </CellGroup>
</View>
 
```

```js
this.state = {
  value: ''
}; 
```

### 自定义类型

根据`type`属性定义不同类型的输入框。

```jsx
<View>
  <CellGroup>
    <Field
      value={ username }
      required={ true }
      clearable={ true }
      label="用户名"
      icon="questionO"
      placeholder="请输入用户名"
      onClickIcon={ onClickIcon }
    />
    <Field
      value={ password }
      type="password"
      label="密码"
      placeholder="请输入密码"
      required={ true }
      border={ false }
    />
  </CellGroup>
</View>
 
```

### 禁用输入框

```jsx
<View>
  <CellGroup>
    <Field
      value="输入框已禁用"
      label="用户名"
      leftIcon="contact"
      disabled={ true }
      border={ false }
    />
  </CellGroup>
</View>
 
```

### 错误提示

通过`error`或者`errorMessage`属性增加对应的错误提示。

```jsx
<View>
  <CellGroup>
    <Field
      value={ username }
      label="用户名"
      placeholder="请输入用户名"
      error={ true }
    />
    <Field
      value={ phone }
      label="手机号"
      placeholder="请输入手机号"
      errorMessage="手机号格式错误"
      border={ false }
    />
  </CellGroup>
</View>
 
```

### 内容对齐方式

可以通过`inputAlign`属性设置内容的对齐方式。

```jsx
<View>
  <CellGroup>
    <Field
      value={ username3 }
      label="用户名"
      placeholder="请输入用户名"
      inputAlign="right"
    />
  </CellGroup>
</View>
 
```

### 高度自适应

对于 textarea，可以通过`autosize`属性设置高度自适应。

```jsx
<View>
  <CellGroup>
    <Field
      value={ message }
      label="留言"
      type="textarea"
      placeholder="请输入留言"
      autosize={ true }
      border={ false }
    />
  </CellGroup>
</View>
 
```

### 插入按钮

通过 button slot 可以在输入框尾部插入按钮。

```jsx
<View>
  <CellGroup>
    <Field
      value={ sms }
      center={ true }
      clearable={ true }
      label="短信验证码"
      placeholder="请输入短信验证码"
      border={ false }
      useButtonSlot={ true }
      renderButton={ (
          <Button 
            slot="button" 
            size="small" 
            type="primary"
          >
            发送验证码
          </Button>

        ) }
    />
  </CellGroup>
</View>
 
```

## 常见问题

### 真机上为什么会出现聚焦时 placeholder 加粗、闪烁的现象？

由于微信小程序的 input 组件和 textarea 组件是原生组件，聚焦时会将原生的输入框覆盖在对应位置上，导致了这个现象的产生。

相关的讨论可以查看[微信开放社区](https://developers.weixin.qq.com/community/search?query=placeholder%20%E9%97%AA%E7%83%81%20%E5%8A%A0%E7%B2%97)。

### 真机上 placeholder 为什么会盖过 popup 等其它组件？

由于微信小程序的 input 组件和 textarea 组件是原生组件，遵循原生组件的限制，详情可以查看[原生组件说明](https://developers.weixin.qq.com/miniprogram/dev/component/nativeComponent.html)。

### textarea 的 placeholder 在真机上为什么会偏移？

微信小程序的 textarea 组件在 Android 和 iOS 中默认样式不同，在 iOS 中会有默认的 `padding`，且无法置 0。

同时 `placeholderStyle` 对 `verticalAlign`、`lineHeight` 等大量 css 属性都不生效。

这一系列的问题导致了 placeholder 在真机上可能会出现偏移。

微信已经在 `2.10.0` 基础库版本后支持移除默认的 `padding`，但低版本仍有问题。详情可以查看 [微信开放社区](https://developers.weixin.qq.com/community/develop/issue/96)。

### 手写输入法为什么会丢失部分字符 / 手写输入法为什么不会触发 input 事件？

这是微信小程序的 input 组件本身的问题，如果需要兼容手写输入法的场景，可以在 `blur` 事件中取到输入的值。

相关的讨论可以查看[微信开放社区](https://developers.weixin.qq.com/community/search?query=input%20%E6%89%8B%E5%86%99%E8%BE%93%E5%85%A5&page=1&block=1&random=1567079239098)。
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import {
  StandardProps,
  ITouchEvent,
  CommonEventFunction,
} from '@tarojs/components'
import { TextareaProps } from '@tarojs/components/types/Textarea'

export interface FieldProps extends StandardProps {
  value?: string | number
  placeholder?: string
  placeholderStyle?: string
  placeholderClass?: string
  disabled?: boolean
  maxlength?: number
  cursorSpacing?: number
  autoFocus?: boolean
  focus?: boolean
  cursor?: number
  selectionStart?: number
  selectionEnd?: number
  adjustPosition?: boolean
  holdKeyboard?: boolean
  type?: 'number' | 'text' | 'idcard' | 'digit' | 'textarea'
  password?: boolean
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done'
  confirmHold?: boolean
  autoHeight?: boolean
  fixed?: boolean
  showConfirmBar?: boolean
  disableDefaultPadding?: boolean
  size?: 'large'
  icon?: string
  label?: string
  error?: boolean
  center?: boolean
  isLink?: boolean
  leftIcon?: string
  rightIcon?: string
  autosize?: boolean | Normal.IAnyObject
  required?: boolean
  iconClass?: string
  clickable?: boolean
  inputAlign?: string
  customStyle?: string
  errorMessage?: string
  arrowDirection?: 'left' | 'up' | 'down'
  showWordLimit?: boolean
  errorMessageAlign?: string
  readonly?: boolean
  clearable?: boolean
  clearTrigger?: string
  border?: boolean
  titleWidth?: string
  clearIcon?: string
  renderLeftIcon?: ReactNode
  renderTitle?: ReactNode
  renderInput?: ReactNode
  renderRightIcon?: ReactNode
  renderIcon?: ReactNode
  renderButton?: ReactNode
  onInput?: (e: ITouchEvent) => void
  onChange?: (e: ITouchEvent) => void
  onConfirm?: (e: ITouchEvent) => void
  onClickIcon?: () => void
  onFocus?: (e: ITouchEvent) => void
  onBlur?: (e: ITouchEvent) => void
  onClear?: () => void
  onClickInput?: () => void
  onLineChange?: CommonEventFunction<TextareaProps.onLineChangeEventDetail>
  onKeyboardHeightChange?: CommonEventFunction<TextareaProps.onKeyboardHeightChangeEventDetail>
}

declare const Field: ComponentClass<FieldProps>

export { Field }
```