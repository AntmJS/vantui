# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 [弹出层](#/popup) 组件配合使用。

### 引入

在 Taro 文件中引入组件

```js
import { Picker } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

::: $demo1 :::

> `v3.5.0`, 新增`mode`和`onInput`等属性, 不影响之前版本`mode`===`normal`的平铺展示和使用

### 复杂数据

`valuekey`为展示的文本字段，`idKey`为实际的表单值

> 后续将支持`children`结构来展示下一列

::: $demo2 :::

### 展示顶部栏

::: $demo3 :::

### 多列联动

多级联动并且支持新的异步写法，设置`syncColumns`, 仅支持`mode===content`

::: $demo4 :::

### 禁用选项

选项可以为对象结构，通过设置 disabled 来禁用该选项。

::: $demo5 :::

### 表单使用

::: $demo6 :::

### PickerProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)

| 参数              | 说明                                                               | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 默认值 | 必填    |
| ----------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| mode              | normal 为普通选择模式，content 是展示选择的内容，点击展示选择项    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"normal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"content"<br/>_                                                                                                                                                                                                                                                                                                                                 | normal | `false` |
| placeholder       | 选择提示和弹窗标题                                                 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                       | 请选择 | `false` |
| placeholderColor  | 选择提示的样式                                                     | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                       | 请选择 | `false` |
| renderContent     | 自定义渲染                                                         | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;any[]&nbsp;&brvbar;&nbsp;null,<br/>&nbsp;&nbsp;&nbsp;&nbsp;setShow?:&nbsp;()&nbsp;=>&nbsp;void<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;React.ReactNode<br/>_                                                                                                                                                                                                                                                       | -      | `false` |
| showArrowDown     | 是否展示下拉尖头                                                   | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                      | false  | `false` |
| showArrowRight    | 是否展示右尖头                                                     | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                      | false  | `false` |
| allowClear        | 有值的时候，是否展示清除按钮                                       | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                      | true   | `false` |
| valueKey          | 选项为对象的时候，文字对应的 key                                   | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                       | text   | `false` |
| idKey             | 选项为对象的时候，键值对应的 key                                   | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                       | id     | `false` |
| toolbarPosition   | 顶部栏位置，可选值为 bottom                                        | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                       | top    | `false` |
| defaultIndex      | 单列选择器的默认选中项索引,多列选择器请参考下方的 Columns 配置     | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                       | 0      | `false` |
| value             | 单列选择器的默认选中项索引,多列选择器请参考下方的 Columns 配置     | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Date<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>_                  | 0      | `false` |
| columns           | 每一项数据，可为字符或者对象，对象默认展示值是 valueKey 设置的 key | _&nbsp;&nbsp;any[]<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                        | []     | `false` |
| syncColumns       | 实时异步获取 columns, 返回改变的数据和值                           | _&nbsp;&nbsp;(params:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;values:&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;undefined<br/>&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;&nbsp;&nbsp;changeIndex?:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;columns:&nbsp;any[]<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;Promise<any[]><br/>_ | []     | `false` |
| title             | 顶部栏标题                                                         | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                    | ''     | `false` |
| cancelButtonText  | 取消按钮文字                                                       | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                    | 取消   | `false` |
| confirmButtonText | 确认按钮文字                                                       | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                    | 确认   | `false` |
| loading           | 加载状态                                                           | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                      | false  | `false` |
| itemHeight        | 选项高度,对应单位 PX                                               | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                                             | 48     | `false` |
| visibleItemCount  | 可见的选项个数                                                     | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                       | 6      | `false` |
| onInput           | 变化触发方法                                                       | _&nbsp;&nbsp;(e:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_            | -      | `false` |
| onChange          | 变化触发方法                                                       | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;PickerChangeEvents<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                                                                 | -      | `false` |
| onCancel          | 取消触发方法                                                       | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;PickerEvents<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                                                                       | -      | `false` |
| onConfirm         | 确认触发方法                                                       | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;PickerEvents<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                                                                       | -      | `false` |
| showToolbar       | 是否显示顶部栏                                                     | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                      | false  | `false` |

### 事件 onConfirm 和 onCancel [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)

继承了 Taro 的 ITouchEvent 类型
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| detail | 返回选项对应的值和选项对应的下标 | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;values:&nbsp;number[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number[]<br/>&nbsp;&nbsp;}<br/>_ |

### 触发事件 onChange [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)

继承了 Taro 的 ITouchEvent 类型
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| detail | 返回选项对应的值、picker 实例和多列返回当前第多少列、单列返回选项对应值 | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;picker:&nbsp;IPickerInstance<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number<br/>&nbsp;&nbsp;}<br/>_ |

### 组件实例 [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)

通过 ref 获取到的方法如下
| 方法 | 说明 | 类型 |
| --- | --- | --- |
| setColumnValues | 设置每一列的数据，异步获取到最新的 values | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number,<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:&nbsp;string[]<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<any><br/>_ |
| getColumnValues | 获取每一列的值 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number[]<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any[]<br/>_ |
| setColumnValue | 设置某一列的值 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number,<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;any<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ |
| getColumnValue | 获取某一列的值 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ |
| columns | 每列的数据 | _&nbsp;&nbsp;any[]<br/>_ |
| getIndexes | 获取每一列展示的下标 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;number[]<br/>_ |
| setIndexes | 设置每一列展示的下标 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;indexes:&nbsp;number[]<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| getValues | 每一列展示的值 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;any<br/>_ |
| confirm | 触发确认的方法 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                | 默认值                       |
| ----------------------------------- | ---------------------------- |
| --picker-background-color           | ` @white;`                   |
| --picker-toolbar-height             | ` 88px;`                     |
| --picker-title-font-size            | ` @font-size-lg;`            |
| --picker-action-padding             | ` 0 @padding-md;`            |
| --picker-action-font-size           | ` @font-size-md;`            |
| --picker-confirm-action-color       | ` @text-link-color;`         |
| --picker-cancel-action-color        | ` @gray-6;`                  |
| --picker-option-font-size           | ` @font-size-lg;`            |
| --picker-option-text-color          | ` @black;`                   |
| --picker-loading-icon-color         | ` var(--primary-color);`     |
| --picker-loading-mask-color         | ` rgba(255, 255, 255, 0.9);` |
| --picker-option-disabled-opacity    | ` 0.3;`                      |
| --picker-option-selected-text-color | ` @text-color;`              |
