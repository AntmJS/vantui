# DatetimePicker 时间选择

### 介绍

用于选择时间，支持日期、时分等时间维度，通常与 [弹出层](#/popup) 组件配合使用。

### 引入

在 Taro 文件中引入组件

```js
import { DatetimePicker } from '@antmjs/vantui'
```

## 代码演示

### 选择完整时间

`value` 为 Date 对象。

::: $demo1 :::

### 选择日期（年月日）

`value` 为 Date 对象，通过传入 `formatter` 函数对选项文字进行处理。

::: $demo2 :::

### 选择日期（年月）

`value` 为 Date 对象。

::: $demo3 :::

### 选择时间

`value` 为字符串。

::: $demo4 :::

### 选项过滤器

通过传入 `filter` 函数，可以对选项数组进行过滤，实现自定义时间间隔。

::: $demo5 :::

### DatetimePickerProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts)

| 参数        | 说明                                   | 类型                                                                                                                                                                                                                                                                                                                                         | 默认值   | 必填    |
| ----------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| value       | 选项的值                               | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Date<br/>_                                                                                                                                                                    | null     | `false` |
| filter      | 对选项数组进行过滤，实现自定义时间间隔 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;values:&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;)[]<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;(number&nbsp;&brvbar;&nbsp;string)[]<br/>_ | -        | `false` |
| type        | 时间类型，不建议动态修改               | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"datetime"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"date"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"year-month"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"time"<br/>_                                                                                                       | datetime | `false` |
| showToolbar | 是否显示顶部栏                         | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | true     | `false` |
| formatter   | 选项格式化函数                         | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                 | -        | `false` |
| minDate     | 可选的最小时间，精确到分钟             | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                          | 十年前   | `false` |
| maxDate     | 可选的最大时间，精确到分钟             | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                          | 十年后   | `false` |
| minHour     | 可选的最小小时，针对 type=time         | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                          | 0        | `false` |
| maxHour     | 可选的最大小时，针对 type=time         | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                          | 23       | `false` |
| minMinute   | 可选的最小分钟，针对 type=time         | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                          | 0        | `false` |
| maxMinute   | 可选的最大分钟，针对 type=time         | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                          | 59       | `false` |
| onInput     | 当值变化时触发的事件                   | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;DatetimePickerEventsByValue<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                     | -        | `false` |
| onChange    | 当值变化时触发的事件                   | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;DatetimePickerEventsByInstance<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                  | -        | `false` |
| onConfirm   | 点击完成按钮时触发的事件               | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;DatetimePickerEventsByValue<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                     | -        | `false` |
| onCancel    | 点击取消按钮时触发的事件               | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                      | -        | `false` |

### onInput、onConfirm 的回掉参数 [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts)

继承了@taro/components 的 ITouchEvent
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| detail | 选项的值 | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;value?:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;}<br/>_ |

### onChange 的回掉参数 [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts)

| 方法   | 说明                                                                                               | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------ | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| detail | 包含每项的值 columns、当前时间 innerValue、手动设置列数据 setColumns、更新某列值 updateColumnValue | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;datetimePicker:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;columns:&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setColumns:&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;columns:&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;innerValue:&nbsp;Date<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updateColumnValue:&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<string><br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/>_ |

### 组件实例 [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts)

| 方法              | 说明 | 类型                                                                                                                                                                                                                                                           |
| ----------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| columns           | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;)[]<br/>_                                                                                                                     |
| setColumns        | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;columns:&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;)[]<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| innerValue        | -    | _&nbsp;&nbsp;Date<br/>_                                                                                                                                                                                                                                        |
| updateColumnValue | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<string><br/>_                                                                                                                                             |
| pickerInstance    | -    | _&nbsp;&nbsp;IPickerInstance<br/>_                                                                                                                                                                                                                             |
