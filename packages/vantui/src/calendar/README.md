# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间。

### 引入

在 Taro 文件中引入组件

```js
import { Calendar } from '@antmjs/vantui'
```

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发`confirm`事件。
`longspan`开启年月快速切换，年份跨度建议不要超过 5 年，5 年以上建议使用`DatetimePicker`封装

::: $demo1 :::

### 选择多个日期

设置`type`为`multiple`后可以选择多个日期，此时`confirm`事件返回的 date 为数组结构，数组包含若干个选中的日期。

::: $demo2 :::

### 选择日期区间

设置`type`为`range`后可以选择日期区间，此时`confirm`事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

::: $demo3 :::

> Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 allowSameDay 属性来允许选择同一天。

### 快捷选择

将`showConfirm`设置为`false`可以隐藏确认按钮，这种情况下选择完成后会立即触发`confirm`事件。

::: $demo4 :::

### 自定义颜色

通过`color`属性可以自定义日历的颜色，对选中日期和底部按钮生效。

::: $demo5 :::

### 自定义日期范围

通过`minDate`和`maxDate`定义日历的范围，需要注意的是`minDate`和`maxDate`的区间不宜过大，否则会造成严重的性能问题。

::: $demo6 :::

### 自定义按钮文字

通过`confirmText`设置按钮文字，通过`confirmDisabledText`设置按钮禁用时的文字。

::: $demo7 :::

### 自定义日期文案

通过传入`formatter`函数来对日历上每一格的内容进行格式化

::: $demo7 :::

### 自定义弹出位置

通过`position`属性自定义弹出层的弹出位置，可选值为`top`、`left`、`right`。

::: $demo9 :::

### 日期区间最大范围

选择日期区间时，可以通过`maxRange`属性来指定最多可选天数，选择的范围超过最多可选天数时，会弹出相应的提示文案。

::: $demo10 :::

### 自定义周起始日

通过 `firstDayOfWeek` 属性设置一周从哪天开始。
::: $demo11 :::

### 平铺展示

将`poppable`设置为`false`，日历会直接展示在页面内，而不是以弹层的形式出现。

::: $demo12 :::

```css
.calendar {
  --calendarHeight: 500px;
}
```

### CalendarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/calendar.d.ts)

| 参数                | 说明                                               | 类型                                                                                                                                                                                                                                                                                                                                         | 默认值                 | 必填    |
| ------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------- |
| title               | 日历标题                                           | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                 | -                      | `false` |
| color               | 主题色，对底部按钮和选中日期生效                   | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                    | #ee0a24                | `false` |
| show                | 是否显示日历弹窗                                   | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | false                  | `false` |
| formatter           | 日期格式化函数                                     | _&nbsp;&nbsp;(day:&nbsp;Day)&nbsp;=>&nbsp;Day<br/>_                                                                                                                                                                                                                                                                                          | -                      | `false` |
| confirmText         | 确认按钮的文字                                     | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                 | -                      | `false` |
| rangePrompt         | 范围选择超过最多可选天数时的提示文案               | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                    | 选择天数不能超过 xx 天 | `false` |
| showRangePrompt     | 范围选择超过最多可选天数时，是否展示提示文案       | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                 | true                   | `false` |
| defaultDate         | 默认选中的日期，type 为 multiple 或 range 时为数组 | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;number[]<br/>_                                                                                                                                                                                                                                                                                        | 今天                   | `false` |
| allowSameDay        | 是否允许日期范围的起止时间为同一天                 | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | false                  | `false` |
| confirmDisabledText | 确认按钮处于禁用状态时的文字                       | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                 | 确定                   | `false` |
| type                | 类型                                               | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"single"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"multiple"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"range"<br/>_                                                                                                                                                           | -                      | `false` |
| minDate             | 可选择的最小日期                                   | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;Date<br/>_                                                                                                                                                                                                                                                                                            | 当前日期               | `false` |
| maxDate             | 可选择的最大日期                                   | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;Date<br/>_                                                                                                                                                                                                                                                                                            | 当前日期六个月后       | `false` |
| position            | 弹窗弹出的位置                                     | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"left"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"right"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"bottom"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"top"<br/>_                                                                                                               | bottom                 | `false` |
| rowHeight           | 日期行高                                           | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                          | 64                     | `false` |
| round               | 弹窗是否圆角                                       | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | true                   | `false` |
| poppable            | 是否以弹层的形式展示日历                           | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | true                   | `false` |
| showMark            | 是否显示月份背景水印                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | true                   | `false` |
| showTitle           | 是否展示日历标题                                   | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | true                   | `false` |
| showConfirm         | 是否展示确认按钮                                   | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | true                   | `false` |
| showSubtitle        | 是否展示日历副标题（年月）                         | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | true                   | `false` |
| safeAreaInsetBottom | 是否开启底部安全区适配                             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | true                   | `false` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭                             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | true                   | `false` |
| maxRange            | 日期区间最多可选天数，默认无限制                   | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                    | -                      | `false` |
| firstDayOfWeek      | 设置周起始日                                       | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;0<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;1<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;2<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;3<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;4<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;5<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;6<br/>_ | 0                      | `false` |
| zIndex              | 弹出层 zIndex                                      | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                    | -                      | `false` |
| onOpen              | -                                                  | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                      | -                      | `false` |
| onClose             | -                                                  | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                      | -                      | `false` |
| onOpened            | -                                                  | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                      | -                      | `false` |
| onClosed            | -                                                  | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                      | -                      | `false` |
| onConfirm           | -                                                  | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;CalendarEvents<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                  | -                      | `false` |
| overRange           | -                                                  | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                      | -                      | `false` |
| onUnselect          | -                                                  | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;CalendarEventsSingle<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                            | -                      | `false` |
| onSelect            | -                                                  | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;CalendarEvents<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                  | -                      | `false` |
| onClickSubtitle     | -                                                  | _&nbsp;&nbsp;(a?:&nbsp;any)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                          | -                      | `false` |
| renderTitle         | 自定义标题                                         | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                                                                                                                                           | -                      | `false` |
| renderFooter        | 自定义底部区域内容                                 | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                                                                                                                                           | -                      | `false` |
| longspan            | 是否支持年月大跨度的快速切换                       | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                   | `true`                 | `false` |

### formatter 回调参数 Day [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/calendar.d.ts)

| 参数       | 说明 | 类型                                                   |
| ---------- | ---- | ------------------------------------------------------ |
| date       | -    | _&nbsp;&nbsp;Date<br/>_                                |
| type       | -    | _&nbsp;&nbsp;string<br/>_                              |
| text       | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_    |
| bottomInfo | -    | _&nbsp;&nbsp;string<br/>_                              |
| className  | -    | _&nbsp;&nbsp;string<br/>_                              |
| topInfo    | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;ReactNode<br/>_ |

### ICalendarInstance [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/calendar.d.ts)

使用 ref 获取到的组件实例
| 方法 | 说明 | 类型 |
| --- | --- | --- |
| reset | - | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;date?:&nbsp;Date&nbsp;&brvbar;&nbsp;Date[]<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| getSelectedDate | - | _&nbsp;&nbsp;()&nbsp;=><br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Date<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Date[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;null<br/>_ |

### CalendarEvents [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/calendar.d.ts)

onConfirm 和 onSelect 的回调函数参数
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| detail | - | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;Date&nbsp;&brvbar;&nbsp;Date[]<br/>&nbsp;&nbsp;}<br/>_ |

### CalendarEvents [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/calendar.d.ts)

onUnselect 的回调函数参数
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| detail | - | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;Date<br/>&nbsp;&nbsp;}<br/>_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                       | 默认值                                   |
| ------------------------------------------ | ---------------------------------------- |
| --calendar-height                          | ` 100%;`                                 |
| --calendar-background-color                | ` @white;`                               |
| --calendar-popup-height                    | ` 80%;`                                  |
| --calendar-header-box-shadow               | ` 0 4px 20px rgba(125, 126, 128, 0.16);` |
| --calendar-header-title-height             | ` 88px;`                                 |
| --calendar-header-title-font-size          | ` @font-size-lg;`                        |
| --calendar-header-subtitle-font-size       | ` @font-size-md;`                        |
| --calendar-weekdays-height                 | ` 60px;`                                 |
| --calendar-weekdays-font-size              | ` @font-size-sm;`                        |
| --calendar-month-title-font-size           | ` @font-size-md;`                        |
| --calendar-month-mark-color                | ` fade(@gray-2, 80%);`                   |
| --calendar-month-mark-font-size            | ` 320px;`                                |
| --calendar-day-height                      | ` 128px;`                                |
| --calendar-day-font-size                   | ` @font-size-lg;`                        |
| --calendar-range-edge-color                | ` @white;`                               |
| --calendar-range-edge-background-color     | ` var(--primary-color);`                 |
| --calendar-range-middle-color              | ` var(--primary-color);`                 |
| --calendar-range-middle-background-opacity | ` 0.1;`                                  |
| --calendar-selected-day-size               | ` 108px;`                                |
| --calendar-selected-day-color              | ` @white;`                               |
| --calendar-info-font-size                  | ` @font-size-xs;`                        |
| --calendar-info-line-height                | ` 28px;`                                 |
| --calendar-selected-day-background-color   | ` var(--primary-color);`                 |
| --calendar-day-disabled-color              | ` @gray-5;`                              |
| --calendar-confirm-button-height           | ` 72px;`                                 |
| --calendar-confirm-button-margin           | ` 14px 0;`                               |
| --calendar-confirm-button-line-height      | ` 68px;`                                 |
