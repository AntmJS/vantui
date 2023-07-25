# Checkbox 复选框

### 介绍

在一组备选项中进行多选。

### 引入

在 Taro 文件中引入组件

```js
import { Checkbox, CheckboxGroup } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

通过`value`绑定复选框的勾选状态。

::: $demo1 :::

### 禁用状态

- 通过设置`disabled`属性可以禁用复选框。
- 通过设置`labelDisabled`属性可以禁用复选框文本点击。

::: $demo2 :::

### 自定义形状、颜色、大小

- 将`shape`属性设置为`square`，复选框的形状会变成方形。
- 通过`checkedColor`属性可以自定义选中状态下的图标颜色。
- 通过`iconSize`属性可以自定义图标的大小。

::: $demo3 :::

### 自定义图标

通过 icon 插槽自定义图标。

::: $demo4 :::

### 复选框组

需要与`vanCheckboxGroup`一起使用，选中值是一个数组，通过`value`绑定在`vanCheckboxGroup`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值。

::: $demo5 :::

### 水平排列、限制最大可选数

::: $demo6 :::

### 搭配单元格组件使用

此时你需要再引入`Cell`和`CellGroup`组件，并通过 checkbox 的 toggle 方法手动触发切换。

::: $demo7 :::

```css
.valueClass {
  flex: none !important;
}
```

### CheckboxProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/checkbox.d.ts)

| 参数          | 说明 | 类型                                                                                                        | 默认值 | 必填    |
| ------------- | ---- | ----------------------------------------------------------------------------------------------------------- | ------ | ------- |
| name          | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                | -      | `false` |
| value         | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                  | -      | `false` |
| disabled      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                  | -      | `false` |
| checkedColor  | -    | _&nbsp;&nbsp;string<br/>_                                                                                   | -      | `false` |
| labelPosition | -    | _&nbsp;&nbsp;string<br/>_                                                                                   | -      | `false` |
| labelDisabled | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                  | -      | `false` |
| shape         | -    | _&nbsp;&nbsp;"round"&nbsp;&brvbar;&nbsp;"square"<br/>_                                                      | -      | `false` |
| iconSize      | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                         | -      | `false` |
| children      | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                | -      | `false` |
| renderIcon    | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                | -      | `false` |
| onChange      | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ | -      | `false` |

### CheckboxGroupProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/checkbox.d.ts)

| 参数      | 说明 | 类型                                                                                                                                 | 默认值 | 必填    |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------- |
| max       | -    | _&nbsp;&nbsp;number<br/>_                                                                                                            | -      | `false` |
| value     | -    | _&nbsp;&nbsp;Array<any><br/>_                                                                                                        | -      | `false` |
| disabled  | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | -      | `false` |
| direction | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"horizontal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"vertical"<br/>_ | -      | `false` |
| children  | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                         | -      | `false` |
| onChange  | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                          | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                 | 默认值                   |
| ------------------------------------ | ------------------------ |
| --checkbox-size                      | ` 40px;`                 |
| --checkbox-border-color              | ` @gray-5;`              |
| --checkbox-transition-duration       | ` 0.2s;`                 |
| --checkbox-label-margin              | ` 20px;`                 |
| --checkbox-label-color               | ` @text-color;`          |
| --checkbox-checked-icon-color        | ` var(--primary-color);` |
| --checkbox-disabled-icon-color       | ` @gray-5;`              |
| --checkbox-disabled-label-color      | ` @gray-5;`              |
| --checkbox-disabled-background-color | ` @border-color;`        |
