# Field 输入框

### 介绍

用户可以在文本框内输入或编辑文字。

### 引入

在 Taro 文件中引入组件

```js
import { Field } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <CellGroup>
    <Field
      value={ this.state.value }
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
      value={ this.state.value }
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
      value={ this.state.username }
      required={ true }
      clearable={ true }
      label="用户名"
      icon="questionO"
      placeholder="请输入用户名"
      onClickIcon={ onClickIcon }
    />
    <Field
      value={ this.state.password }
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
      value={ this.state.username }
      label="用户名"
      placeholder="请输入用户名"
      error={ true }
    />
    <Field
      value={ this.state.phone }
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
      value={ this.state.username3 }
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
      value={ this.state.message }
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

```jsx
<View>
  <CellGroup>
    <Field
      value={ this.state.sms }
      center={ true }
      clearable={ true }
      label="短信验证码"
      placeholder="请输入短信验证码"
      border={ false }
      renderButton={ (
          <Button 
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
### FieldProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/field.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| value | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| placeholder | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| placeholderStyle | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| placeholderClass | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| disabled | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| maxlength | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| cursorSpacing | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| autoFocus | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| focus | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| cursor | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| selectionStart | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| selectionEnd | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| adjustPosition | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| holdKeyboard | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| type | - | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"number"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"text"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"idcard"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"digit"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"textarea"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"password"<br/>_ | - | `false` |
| password | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| confirmType | - | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"send"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"search"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"next"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"go"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"done"<br/>_ | - | `false` |
| confirmHold | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| autoHeight | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| fixed | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| showConfirmBar | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| disableDefaultPadding | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| size | - | _&nbsp;&nbsp;"large"<br/>_ | - | `false` |
| icon | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| label | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| error | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| center | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| isLink | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| leftIcon | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| rightIcon | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| autosize | - | _&nbsp;&nbsp;boolean&nbsp;&brvbar;&nbsp;Normal.IAnyObject<br/>_ | - | `false` |
| required | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| iconClass | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| clickable | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| inputAlign | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| style | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| errorMessage | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| arrowDirection | - | _&nbsp;&nbsp;"left"&nbsp;&brvbar;&nbsp;"up"&nbsp;&brvbar;&nbsp;"down"<br/>_ | - | `false` |
| showWordLimit | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| errorMessageAlign | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| alwaysEmbed | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| readonly | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| clearable | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| clearTrigger | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| border | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| titleWidth | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| clearIcon | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| renderLeftIcon | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderTitle | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderInput | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderRightIcon | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderIcon | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderButton | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| onInput | - | _&nbsp;&nbsp;(e:&nbsp;ITouchEvent)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onChange | - | _&nbsp;&nbsp;(e:&nbsp;ITouchEvent)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onConfirm | - | _&nbsp;&nbsp;(e:&nbsp;ITouchEvent)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClickIcon | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onFocus | - | _&nbsp;&nbsp;(e:&nbsp;ITouchEvent)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onBlur | - | _&nbsp;&nbsp;(e:&nbsp;ITouchEvent)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClear | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClickInput | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onLineChange | - | _&nbsp;&nbsp;CommonEventFunction<TextareaProps.onLineChangeEventDetail><br/>_ | - | `false` |
| onKeyboardHeightChange | - | _&nbsp;&nbsp;CommonEventFunction<TextareaProps.onKeyboardHeightChangeEventDetail><br/>_ | - | `false` |

