# Field 输入框

### 介绍

用户可以在文本框内输入或编辑文字。
`Taro ^3.6.0`h5 下 focus 导致报错，待官方修复。

### 引入

在 Taro 文件中引入组件

```js
import { Field } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

```jsx
function Demo() {
  const [value, setValue] = react.useState()

  return (
    <CellGroup>
      <Field
        value={value}
        placeholder="请输入用户名"
        border={false}
        onChange={(e) => setValue(e.detail)}
      />
    </CellGroup>
  )
}
```

### 自定义类型

根据`type`属性定义不同类型的输入框。

```jsx
function Demo() {
  return (
    <CellGroup>
      <Toast id="Field-demo2" />
      <Field
        required
        clearable
        label="用户名"
        icon="questionO"
        placeholder="请输入用户名"
      />
      <Field
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        border
      />
    </CellGroup>
  )
}
```

### 禁用输入框

```jsx
function Demo() {
  return (
    <CellGroup>
      <Field
        value="输入框已禁用"
        label="用户名"
        leftIcon="contact"
        disabled
        border={false}
      />
    </CellGroup>
  )
}
```

### 错误提示

通过`error`或者`errorMessage`属性增加对应的错误提示。

```jsx
function Demo() {
  const [state, setState] = react.useState({
    username: '',
    phone: '',
  })
  return (
    <CellGroup>
      <Field
        value={state.username}
        label="用户名"
        placeholder="请输入用户名"
        error
      />
      <Field
        value={state.phone}
        label="手机号"
        placeholder="请输入手机号"
        errorMessage="手机号格式错误"
        border={false}
      />
    </CellGroup>
  )
}
```

### 内容对齐方式

可以通过`inputAlign`属性设置内容的对齐方式。

```jsx
function Demo() {
  return (
    <CellGroup>
      <Field label="用户名" placeholder="请输入用户名" inputAlign="right" />
    </CellGroup>
  )
}
```

### 高度自适应

对于 textarea，可以通过`autosize`属性设置高度自适应。

```jsx
function Demo() {
  return (
    <CellGroup>
      <Field
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        autosize={{ minHeight: '30px' }}
        border={false}
      />
    </CellGroup>
  )
}
```

### 插入按钮

```jsx
function Demo() {
  return (
    <CellGroup>
      <Field
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        border
        renderButton={
          <Button size="small" type="primary">
            发送验证码
          </Button>
        }
      />
    </CellGroup>
  )
}
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

### FieldProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/field.d.ts)

| 参数                   | 说明                                                                                  | 类型                                                                                                                                                                                                                                                                                                                                        | 默认值 | 必填    |
| ---------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| value                  | 当前输入的值                                                                          | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                         | -      | `false` |
| placeholder            | 输入框为空的时候的占位符号                                                            | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| placeholderStyle       | placeholder 样式                                                                      | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| placeholderClass       | placeholder 的样式名                                                                  | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| disabled               | 是否禁用                                                                              | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| maxlength              | 最大输入值                                                                            | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| cursorSpacing          | 输入框聚焦时底部与键盘的距离                                                          | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                   | 50     | `false` |
| autoFocus              | 是否默认聚焦，拉起键盘                                                                | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| focus                  | 是否默认聚焦                                                                          | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| cursor                 | 光标的位置                                                                            | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                   | -1     | `false` |
| selectionStart         | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用                             | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                   | -1     | `false` |
| selectionEnd           | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用                           | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                   | -1     | `false` |
| adjustPosition         | 键盘弹起时，是否自动上推页面                                                          | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | true   | `false` |
| holdKeyboard           | focus 时，点击页面的时候不收起键盘                                                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| type                   | 展示的组件类型                                                                        | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"number"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"text"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"idcard"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"digit"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"textarea"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"password"<br/>_ | text   | `false` |
| password               | 是否是密码类型                                                                        | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | -      | `false` |
| confirmType            | 设置键盘右下角按钮的文字，仅在 type='text' 时生效                                     | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"send"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"search"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"next"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"go"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"done"<br/>_                                                               | done   | `false` |
| confirmHold            | 点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效                     | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| fixed                  | 如果 type 为 textarea 且在一个 position fixed 的区域，需要显示指定属性 fixed 为 true  | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| showConfirmBar         | 是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效                              | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | true   | `false` |
| disableDefaultPadding  | 是否去掉 iOS 下的默认内边距，只对 textarea 有效                                       | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | true   | `false` |
| size                   | 单元格大小，可选值为 large                                                            | _&nbsp;&nbsp;"large"<br/>_                                                                                                                                                                                                                                                                                                                  | -      | `false` |
| icon                   | 左侧图标                                                                              | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| label                  | 输入框左侧占位元素                                                                    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                | -      | `false` |
| error                  | 是否将输入内容标红                                                                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | -      | `false` |
| center                 | 是否使内容垂直居中                                                                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | -      | `false` |
| isLink                 | 是否有箭头                                                                            | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | -      | `false` |
| leftIcon               | 左侧图标                                                                              | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| rightIcon              | 右侧图标                                                                              | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| autosize               | 是否自适应内容高度，只对 textarea 有效，可传入对象, 单位为 px                         | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Record<string,&nbsp;any><br/>_                                                                                                                                                                                               | -      | `false` |
| required               | 是否显示表单必填星号                                                                  | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | -      | `false` |
| iconClass              | 左图标样式名                                                                          | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| clickable              | 是否开启点击反馈                                                                      | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| inputAlign             | 输入框内容对齐方式，可选值为 center right                                             | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| style                  | -                                                                                     | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| errorMessage           | 错误信息                                                                              | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| arrowDirection         | 箭头方向                                                                              | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"left"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"up"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"down"<br/>_                                                                                                                                                                   | -      | `false` |
| showWordLimit          | 是否显示字数统计，需要设置 maxlength 属性                                             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| errorMessageAlign      | 底部错误提示文案对齐方式，可选值为 center right                                       | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| alwaysEmbed            | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)       | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| readonly               | 是否仅可读                                                                            | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| clearable              | 是否仅可清楚                                                                          | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| clearTrigger           | 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | focus  | `false` |
| border                 | 边框                                                                                  | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| titleWidth             | 标题宽度                                                                              | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | 6.2em  | `false` |
| clearIcon              | 清除按钮图标                                                                          | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `false` |
| renderLeftIcon         | 自定义渲染图标                                                                        | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                | -      | `false` |
| renderTitle            | 自定义渲染标题                                                                        | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                | -      | `false` |
| renderInput            | 自定义渲染输入组件                                                                    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                | -      | `false` |
| renderRightIcon        | 自定义渲染右侧图标                                                                    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                | -      | `false` |
| renderIcon             | 自定义渲染右侧图标                                                                    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                | -      | `false` |
| renderButton           | 自定义渲染按钮                                                                        | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                | -      | `false` |
| onInput                | 输入触发方法                                                                          | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                    | -      | `false` |
| onChange               | 输入触发方法                                                                          | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                    | -      | `false` |
| onConfirm              | 点击确认触发方法                                                                      | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                    | -      | `false` |
| onClickIcon            | 点击尾部图标触发方法                                                                  | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                     | -      | `false` |
| onFocus                | 聚焦组件触发方法                                                                      | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                    | -      | `false` |
| onBlur                 | 组件失去焦点触发方法                                                                  | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                    | -      | `false` |
| onClear                | 点击清除触发方法                                                                      | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                     | -      | `false` |
| onClickInput           | 点击输入区域触发方法                                                                  | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                     | -      | `false` |
| onLineChange           | 输入框行数变化时调用，只对 textarea 有效                                              | _&nbsp;&nbsp;CommonEventFunction<TextareaProps.onLineChangeEventDetail><br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| onKeyboardHeightChange | 键盘高度发生变化的时候触发此事件                                                      | _&nbsp;&nbsp;CommonEventFunction<TextareaProps.onKeyboardHeightChangeEventDetail><br/>_                                                                                                                                                                                                                                                     | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                 | 默认值            |
| ------------------------------------ | ----------------- |
| --field-label-color                  | ` @gray-7;`       |
| --field-input-text-color             | ` @text-color;`   |
| --field-input-error-text-color       | ` @red;`          |
| --field-input-disabled-text-color    | ` @gray-5;`       |
| --field-placeholder-text-color       | ` @gray-5;`       |
| --field-icon-size                    | ` 32px;`          |
| --field-clear-icon-size              | ` 32px;`          |
| --field-clear-icon-color             | ` @gray-5;`       |
| --field-icon-container-color         | ` @gray-6;`       |
| --field-error-message-color          | ` @red;`          |
| --field-error-message-text-font-size | ` @font-size-sm;` |
| --field-text-area-min-height         | ` 36px;`          |
| --field-word-limit-color             | ` @gray-7;`       |
| --field-word-limit-font-size         | ` @font-size-sm;` |
| --field-word-limit-line-height       | ` 32px;`          |
| --field-word-num-full-color          | ` @red;`          |
| --field-disabled-text-color          | ` @gray-5;`       |
| --field-text-area-min-height         | ` 148px;`         |
| --field-font-size                    | ` @font-size-md;` |
