# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间。

### 引入

在 Taro 文件中引入组件

```js
import { Calendar } from "@antmjs/vantui"; 
```

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发`confirm`事件。

```jsx
<View>
  <Cell
    title="选择单个日期"
    value={  this.state.date  }
    onClick={ this.onDisplay }
  />
  <Calendar
    show={  this.state.show  }
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
  this.setState({
    show: true
  });
}

function onClose() {
  this.setState({
    show: false
  });
}

function formatDate(date) {
  date = new Date(date);
  return date.getMonth() + 1}/${date.getDate();
}

function onConfirm(event) {
  this.setState({
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
    value={  this.state.text  }
    onClick={ this.onDisplay }
  />
  <Calendar
    show={  this.state.show  }
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
  this.setState({
    show: true
  });
}

function onClose() {
  this.setState({
    show: false
  });
}

function onConfirm(event) {
  this.setState({
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
    value={  this.state.date  }
    onClick={ this.onDisplay }
  />
  <Calendar
    show={  this.state.show  }
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
  this.setState({
    show: true
  });
}

function onClose() {
  this.setState({
    show: false
  });
}

function formatDate(date) {
  date = new Date(date);
  return date.getMonth() + 1}/${date.getDate();
}

function onConfirm(event) {
  const [start, end] = event.detail;
  this.setState({
    show: false,
    date: this.formatDate(start)} - ${this.formatDate(end)
  });
} 
```

> Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 allowSameDay 属性来允许选择同一天。

### 快捷选择

将`showConfirm`设置为`false`可以隐藏确认按钮，这种情况下选择完成后会立即触发`confirm`事件。

```jsx
<View>
  <Calendar
    show={  this.state.show  }
    showConfirm={  false  }
  />
</View>
 
```

### 自定义颜色

通过`color`属性可以自定义日历的颜色，对选中日期和底部按钮生效。

```jsx
<View>
  <Calendar
    show={  this.state.show  }
    color="#07c160"
  />
</View>
 
```

### 自定义日期范围

通过`minDate`和`maxDate`定义日历的范围，需要注意的是`minDate`和`maxDate`的区间不宜过大，否则会造成严重的性能问题。

```jsx
<View>
  <Calendar
    show={  this.state.show  }
    minDate={  this.state.minDate  }
    maxDate={  this.state.maxDate  }
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
    show={  this.state.show  }
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
    show={  this.state.show  }
    type="range"
    formatter={  this.state.formatter  }
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
    show={  this.state.show  }
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
    maxRange={  3  }
  />
</View>
 
```

### 自定义周起始日

通过 `firstDayOfWeek` 属性设置一周从哪天开始。

```jsx
<View>
  <Calendar firstDayOfWeek={  1  } />
</View>
 
```

### 平铺展示

将`poppable`设置为`false`，日历会直接展示在页面内，而不是以弹层的形式出现。

```jsx
<View>
  <Calendar
    title="日历"
    poppable={  false  }
    showConfirm={  false  }
    class="calendar"
  />
</View>
 
```

```css
.calendar {
  --calendarHeight: 500px;
}
```
### ICalendarInstance [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/calendar.d.ts)   

| 方法 | 说明 | 类型 |
| --- | --- | --- |
| reset | - | _&nbsp;&nbsp;(date?:&nbsp;Date&nbsp;&brvbar;&nbsp;Date[])&nbsp;=>&nbsp;void<br/>&nbsp;&nbsp;//<br/>_ |
| scrollToDate | - | _&nbsp;&nbsp;(date:&nbsp;Date)&nbsp;=>&nbsp;void<br/>_ |

### CalendarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/calendar.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| title | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| color | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| show | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| formatter | - | _&nbsp;&nbsp;(day:&nbsp;Day)&nbsp;=>&nbsp;Day<br/>_ | - | `false` |
| confirmText | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| rangePrompt | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| showRangePrompt | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| defaultDate | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;string[]<br/>_ | - | `false` |
| allowSameDay | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| confirmDisabledText | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| type | - | _&nbsp;&nbsp;CalendarType<br/>_ | - | `false` |
| minDate | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| maxDate | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| position | - | _&nbsp;&nbsp;"left"&nbsp;&brvbar;&nbsp;"right"&nbsp;&brvbar;&nbsp;"bottom"&nbsp;&brvbar;&nbsp;"top"<br/>_ | - | `false` |
| rowHeight | - | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ | - | `false` |
| round | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| poppable | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| showMark | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| showTitle | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| showConfirm | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| showSubtitle | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| safeAreaInsetBottom | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| closeOnClickOverlay | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| maxRange | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| firstDayOfWeek | - | _&nbsp;&nbsp;0&nbsp;&brvbar;&nbsp;1&nbsp;&brvbar;&nbsp;2&nbsp;&brvbar;&nbsp;3&nbsp;&brvbar;&nbsp;4&nbsp;&brvbar;&nbsp;5&nbsp;&brvbar;&nbsp;6<br/>_ | - | `false` |
| onOpen | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClose | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onOpened | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClosed | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onConfirm | - | _&nbsp;&nbsp;(e:&nbsp;CalendarEvents)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| overRange | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onUnselect | - | _&nbsp;&nbsp;(e:&nbsp;CalendarEventsSingle)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onSelect | - | _&nbsp;&nbsp;(e:&nbsp;CalendarEvents)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClickSubtitle | - | _&nbsp;&nbsp;(a?:&nbsp;any)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| renderTitle | - | _&nbsp;&nbsp;React.ReactNode<br/>_ | - | `false` |
| renderFooter | - | _&nbsp;&nbsp;React.ReactNode<br/>_ | - | `false` |

