# SubmitBar 提交订单栏

### 介绍

用于展示订单金额与提交订单。

### 引入

在 Taro 文件中引入组件

```js
import { SubmitBar } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

```jsx
function Demo() {
  return (
    <SubmitBar
      price={3050}
      buttonText="提交订单"
      onSubmit={() => console.info('提交')}
    />
  )
}
```

### 禁用状态

禁用状态下不会触发`submit`事件。

```jsx
function Demo() {
  return (
    <SubmitBar
      disabled={true}
      price={3050}
      buttonText="提交订单"
      tip="您的收货地址不支持同城送, 我们已为您推荐快递"
      tipIcon="infoO"
      onSubmit={() => console.info('提交')}
    />
  )
}
```

### 加载状态

加载状态下不会触发`submit`事件。

```jsx
function Demo() {
  return (
    <SubmitBar
      loading={true}
      price={3050}
      buttonText="提交订单"
      onSubmit={() => console.info('提交')}
    />
  )
}
```

### 高级用法

通过插槽插入自定义内容。

```jsx
function Demo() {
  return (
    <SubmitBar
      price={3050}
      buttonText="提交订单"
      tip={true}
      renderTip={
        <View>
          您的收货地址不支持同城送,
          <Text>修改地址</Text>
        </View>
      }
    >
      <Tag type="primary">标签</Tag>
    </SubmitBar>
  )
}
```

### SubmitBarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/submit-bar.d.ts)

| 参数                | 说明 | 类型                                                                                                                                                                                                                                                                                     | 默认值 | 必填    |
| ------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| tip                 | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| tipIcon             | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| price               | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| label               | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                             | -      | `false` |
| loading             | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| disabled            | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| buttonText          | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                             | -      | `false` |
| currency            | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| buttonType          | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"default"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"primary"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"info"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"warning"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"danger"<br/>_ | -      | `false` |
| decimalLength       | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| suffixLabel         | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| safeAreaInsetBottom | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| children            | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                             | -      | `false` |
| renderTop           | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                             | -      | `false` |
| renderTip           | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                             | -      | `false` |
| onSubmit            | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                             | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                 | 默认值                         |
| ------------------------------------ | ------------------------------ |
| --submit-bar-height                  | ` 100px;`                      |
| --submit-bar-background-color        | ` @white;`                     |
| --submit-bar-button-width            | ` 220px;`                      |
| --submit-bar-price-color             | ` @red;`                       |
| --submit-bar-price-font-size         | ` @font-size-sm;`              |
| --submit-bar-currency-font-size      | ` @font-size-sm;`              |
| --submit-bar-text-color              | ` @text-color;`                |
| --submit-bar-text-font-size          | ` 28px;`                       |
| --submit-bar-tip-padding             | ` 20px;`                       |
| --submit-bar-tip-font-size           | ` 24px;`                       |
| --submit-bar-tip-line-height         | ` 1.5;`                        |
| --submit-bar-tip-color               | ` #f56723;`                    |
| --submit-bar-tip-background-color    | ` #fff7cc;`                    |
| --submit-bar-tip-icon-size           | ` 24px;`                       |
| --submit-bar-button-height           | ` 80px;`                       |
| --submit-bar-padding                 | ` 0 @padding-md;`              |
| --submit-bar-price-integer-font-size | ` 40px;`                       |
| --submit-bar-price-font-family       | ` @price-integer-font-family;` |
