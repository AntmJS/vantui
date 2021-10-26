# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间。

### 引入

在 Taro 文件中引入组件

```js
import { Calendar } from "vantui"; 
```

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发`confirm`事件。

```jsx
<View>
  <Cell
    title="选择单个日期"
    value={ `${ this.date }` }
    onClick={ this.onDisplay }
  />
  <Calendar
    show={ `${ this.show }` }
    onClose={ this.onClose }
    onConfirm={ this.onConfirm }
  />
</View>
 
```

```js
this.state = {
  date: '',
  show: false
};

function onDisplay() {
  this.setData({
    show: true
  });
}

function onClose() {
  this.setData({
    show: false
  });
}

function formatDate(date) {
  date = new Date(date);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function onConfirm(event) {
  this.setData({
    show: false,
    date: this.formatDate(event.detail)
  });
} 
```

### 选择多个日期

设置`type`为`multiple`后可以选择多个日期，此时`confirm`事件返回的 date 为数组结构，数组包含若干个选中的日期。

```jsx
<View>
  <Cell
    title="选择多个日期"
    value={ `${ this.text }` }
    onClick={ this.onDisplay }
  />
  <Calendar
    show={ `${ this.show }` }
    type="multiple"
    onClose={ this.onClose }
    onConfirm={ this.onConfirm }
  />
</View>
 
```

```js
this.state = {
  text: '',
  show: false
};

function onDisplay() {
  this.setData({
    show: true
  });
}

function onClose() {
  this.setData({
    show: false
  });
}

function onConfirm(event) {
  this.setData({
    show: false,
    date: `选择了 ${event.detail.length} 个日期`
  });
} 
```

### 选择日期区间

设置`type`为`range`后可以选择日期区间，此时`confirm`事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

```jsx
<View>
  <Cell
    title="选择日期区间"
    value={ `${ this.date }` }
    onClick={ this.onDisplay }
  />
  <Calendar
    show={ `${ this.show }` }
    type="range"
    onClose={ this.onClose }
    onConfirm={ this.onConfirm }
  />
</View>
 
```

```js
this.state = {
  date: '',
  show: false
};

function onDisplay() {
  this.setData({
    show: true
  });
}

function onClose() {
  this.setData({
    show: false
  });
}

function formatDate(date) {
  date = new Date(date);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function onConfirm(event) {
  const [start, end] = event.detail;
  this.setData({
    show: false,
    date: `${this.formatDate(start)} - ${this.formatDate(end)}`
  });
} 
```

> Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 allowSameDay 属性来允许选择同一天。

### 快捷选择

将`showConfirm`设置为`false`可以隐藏确认按钮，这种情况下选择完成后会立即触发`confirm`事件。

```jsx
<View>
  <Calendar
    show={ `${ this.show }` }
    showConfirm={ `${ false }` }
  />
</View>
 
```

### 自定义颜色

通过`color`属性可以自定义日历的颜色，对选中日期和底部按钮生效。

```jsx
<View>
  <Calendar
    show={ `${ this.show }` }
    color="#07c160"
  />
</View>
 
```

### 自定义日期范围

通过`minDate`和`maxDate`定义日历的范围，需要注意的是`minDate`和`maxDate`的区间不宜过大，否则会造成严重的性能问题。

```jsx
<View>
  <Calendar
    show={ `${ this.show }` }
    minDate={ `${ this.minDate }` }
    maxDate={ `${ this.maxDate }` }
  />
</View>
 
```

```js
this.state = {
  show: false,
  minDate: new Date(2010, 0, 1).getTime(),
  maxDate: new Date(2010, 0, 31).getTime()
}; 
```

### 自定义按钮文字

通过`confirmText`设置按钮文字，通过`confirmDisabledText`设置按钮禁用时的文字。

```jsx
<View>
  <Calendar
    show={ `${ this.show }` }
    type="range"
    confirmText="完成"
    confirmDisabledText="请选择结束时间"
  />
</View>
 
```

### 自定义日期文案

通过传入`formatter`函数来对日历上每一格的内容进行格式化

```jsx
<View>
  <Calendar
    show={ `${ this.show }` }
    type="range"
    formatter={ `${ this.formatter }` }
  />
</View>
 
```

```js
this.state = {
  formatter(day) {
    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();

    if (month === 5) {
      if (date === 1) {
        day.topInfo = '劳动节';
      } else if (date === 4) {
        day.topInfo = '五四青年节';
      } else if (date === 11) {
        day.text = '今天';
      }
    }

    if (day.type === 'start') {
      day.bottomInfo = '入住';
    } else if (day.type === 'end') {
      day.bottomInfo = '离店';
    }

    return day;
  }

}; 
```

### 自定义弹出位置

通过`position`属性自定义弹出层的弹出位置，可选值为`top`、`left`、`right`。

```jsx
<View>
  <Calendar
    show={ `${ this.show }` }
    round="false"
    position="right"
  />
</View>
 
```

### 日期区间最大范围

选择日期区间时，可以通过`maxRange`属性来指定最多可选天数，选择的范围超过最多可选天数时，会弹出相应的提示文案。

```jsx
<View>
  <Calendar
    type="range"
    maxRange={ `${ 3 }` }
  />
</View>
 
```

### 自定义周起始日

通过 `firstDayOfWeek` 属性设置一周从哪天开始。

```jsx
<View>
  <Calendar firstDayOfWeek={ `${ 1 }` } />
</View>
 
```

### 平铺展示

将`poppable`设置为`false`，日历会直接展示在页面内，而不是以弹层的形式出现。

```jsx
<View>
  <Calendar
    title="日历"
    poppable={ `${ false }` }
    showConfirm={ `${ false }` }
    class="calendar"
  />
</View>
 
```

```css
.calendar {
  --calendarHeight: 500px;
}
```
### TS信息
```ts 
import React, { ComponentClass } from 'react'
import { StandardProps, ITouchEvent } from '@tarojs/components'

type CalendarSelectType = 'selected' | 'start' | 'middle' | 'end' | 'disabled'

type CalendarType = 'single' | 'multiple' | 'range'
interface CalendarEvents extends ITouchEvent {
  detail: {
    value: Date | Date[]
  }
}

interface CalendarEventsSingle extends ITouchEvent {
  detail: {
    value: Date
  }
}

type Day = {
  date: CalendarSelectType
  type?: string
  text?: string | number
  bottomInfo?: string
  className?: string
  topInfo?: string
}

export type ICalendarInstance = {
  reset: (date?: Date | Date[]) => void
  // scrollToDate: (date: Date) => void
}
export interface CalendarProps extends StandardProps {
  title?: string
  color?: string
  show?: boolean
  formatter?: (day: Day) => Day
  confirmText?: string
  rangePrompt?: string
  showRangePrompt?: boolean
  defaultDate?: string | string[]
  allowSameDay?: boolean
  confirmDisabledText?: string
  type?: CalendarType
  minDate?: number
  maxDate?: number
  position?: 'left' | 'right' | 'bottom' | 'top'
  rowHeight?: number | string
  round?: boolean
  poppable?: boolean
  showMark?: boolean
  showTitle?: boolean
  showConfirm?: boolean
  showSubtitle?: boolean
  safeAreaInsetBottom?: boolean
  closeOnClickOverlay?: boolean
  maxRange?: number
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  onOpen?: () => void
  onClose?: () => void
  onOpened?: () => void
  onClosed?: () => void
  onConfirm?: (e: CalendarEvents) => void
  overRange?: () => void
  onUnselect?: (e: CalendarEventsSingle) => void
  onSelect?: (e: CalendarEvents) => void
  onClickSubtitle?: (a?: any) => void
  renderTitle?: React.ReactNode
  renderFooter?: React.ReactNode
}

declare const Calendar: ComponentClass<CalendarProps>

export { Calendar }
```