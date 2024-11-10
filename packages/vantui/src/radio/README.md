# Radio 单选框

### 介绍

在一组备选项中进行单选。

### 引入

在 Taro 文件中引入组件

```js
import { Radio, RadioGroup } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

通过`value`绑定值当前选中项的 name 。

```jsx
function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e.detail)}>
      <Radio name="1">单选框 1</Radio>
      <Radio name="2">单选框 2</Radio>
    </RadioGroup>
  )
}
```

### 水平排列

将`direction`属性设置为`horizontal`后，单选框组会变成水平排列。

```jsx
function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup
      direction="horizontal"
      value={value}
      onChange={(e) => setValue(e.detail)}
    >
      <Radio name="1">单选框 1</Radio>
      <Radio name="2">单选框 2</Radio>
    </RadioGroup>
  )
}
```

### 禁用状态

通过`disabled`属性禁止选项切换，在`Radio`上设置`diabled`可以禁用单个选项。

```jsx
function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup disabled value={value} onChange={(e) => setValue(e.detail)}>
      <Radio name="1">单选框 1</Radio>
      <Radio name="2">单选框 2</Radio>
    </RadioGroup>
  )
}
```

### 自定义形状

将`shape`属性设置为`square`，单选框的形状会变成方形。

```jsx
function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e.detail)}>
      <Radio name="1" shape="square">
        单选框 1
      </Radio>
      <Radio name="2" shape="square">
        单选框 2
      </Radio>
    </RadioGroup>
  )
}
```

### 自定义颜色

通过`checkedColor`属性设置选中状态的图标颜色。

```jsx
function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e.detail)}>
      <Radio name="1" checkedColor="#07c160" shape="square">
        单选框 1
      </Radio>
      <Radio name="2" checkedColor="#07c160" shape="square">
        单选框 2
      </Radio>
    </RadioGroup>
  )
}
```

### 自定义大小

通过`iconSize`属性可以自定义图标的大小。

```jsx
function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e.detail)}>
      <Radio name="1" iconSize="24px" shape="square">
        单选框 1
      </Radio>
      <Radio name="2" iconSize="24px" shape="square">
        单选框 2
      </Radio>
    </RadioGroup>
  )
}
```

### 自定义图标

```jsx
function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e.detail)}>
      <Radio
        name="1"
        renderIcon={
          <Image
            style={{ width: '32px', height: '32px' }}
            src={
              value === '2'
                ? 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png'
                : 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
            }
          />
        }
        shape="square"
      >
        单选框 1
      </Radio>
      <Radio
        name="2"
        renderIcon={
          <Image
            style={{ width: '32px', height: '32px' }}
            src={
              value === '1'
                ? 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png'
                : 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
            }
          />
        }
        shape="square"
      >
        单选框 2
      </Radio>
    </RadioGroup>
  )
}
```

### 禁用文本点击

通过设置`labelDisabled`属性可以禁用单选框文本点击。

```jsx
function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup
      direction="horizontal"
      value={value}
      onChange={(e) => setValue(e.detail)}
    >
      <Radio name="1" labelDisabled>
        单选框 1
      </Radio>
      <Radio name="2" labelDisabled>
        单选框 2
      </Radio>
    </RadioGroup>
  )
}
```

### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

```jsx
function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup value={value}>
      <CellGroup>
        <Cell
          title="单选框 1"
          clickable
          onClick={() => setValue('1')}
          renderRightIcon={<Radio name="1"></Radio>}
        ></Cell>
        <Cell
          title="单选框 2"
          clickable
          onClick={() => setValue('2')}
          renderRightIcon={<Radio name="2"></Radio>}
        ></Cell>
      </CellGroup>
    </RadioGroup>
  )
}
```

### RadioProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/radio.d.ts)

| 参数          | 说明                     | 类型                                                                                                        | 默认值  | 必填    |
| ------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | ------- | ------- |
| name          | 标识符                   | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                         | -       | `false` |
| value         | -                        | _&nbsp;&nbsp;any<br/>_                                                                                      | -       | `false` |
| disabled      | 是否为禁用状态           | _&nbsp;&nbsp;boolean<br/>_                                                                                  | false   | `false` |
| checkedColor  | 选中状态颜色             | _&nbsp;&nbsp;string<br/>_                                                                                   | #07c160 | `false` |
| labelPosition | 文本位置，可选值为 left  | _&nbsp;&nbsp;string<br/>_                                                                                   | right   | `false` |
| labelDisabled | 是否禁用文本内容点击     | _&nbsp;&nbsp;boolean<br/>_                                                                                  | false   | `false` |
| shape         | 形状，可选值为 square    | _&nbsp;&nbsp;"round"&nbsp;&brvbar;&nbsp;"square"<br/>_                                                      | round   | `false` |
| iconSize      | 图标大小，默认单位为 px  | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                         | 20px    | `false` |
| children      | -                        | _&nbsp;&nbsp;ReactNode<br/>_                                                                                | -       | `false` |
| renderIcon    | 自定义图标               | _&nbsp;&nbsp;ReactNode<br/>_                                                                                | -       | `false` |
| onChange      | 当绑定值变化时触发的事件 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ | -       | `false` |

### RadioGroupProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/radio.d.ts)

| 参数      | 说明                     | 类型                                                                                                                                 | 默认值   | 必填    |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------- |
| value     | 当前选中项的标识符       | _&nbsp;&nbsp;any<br/>_                                                                                                               | -        | `false` |
| direction | 单选框排列方向           | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"vertical"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"horizontal"<br/>_ | vertical | `false` |
| disabled  | 是否禁用所有单选框       | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | false    | `false` |
| children  | -                        | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                         | -        | `false` |
| onChange  | 当绑定值变化时触发的事件 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                          | -        | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                              | 默认值                   |
| --------------------------------- | ------------------------ |
| --radio-size                      | ` 40px;`                 |
| --radio-border-color              | ` @gray-5;`              |
| --radio-transition-duration       | ` 0.2s;`                 |
| --radio-label-margin              | ` 20px;`                 |
| --radio-label-color               | ` @text-color;`          |
| --radio-checked-icon-color        | ` var(--primary-color);` |
| --radio-disabled-icon-color       | ` @gray-5;`              |
| --radio-disabled-label-color      | ` @gray-5;`              |
| --radio-disabled-background-color | ` @border-color;`        |
