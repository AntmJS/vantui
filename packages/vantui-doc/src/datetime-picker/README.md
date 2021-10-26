# DatetimePicker 时间选择

### 介绍

用于选择时间，支持日期、时分等时间维度，通常与 [弹出层](#/popup) 组件配合使用。

### 引入

在 Taro 文件中引入组件

```js
import { DatetimePicker } from "vantui"; 
```

## 代码演示

### 选择完整时间

`value` 为时间戳。

```jsx
<View>
  <DatetimePicker
    type="datetime"
    value={ `${ this.currentDate }` }
    minDate={ `${ this.minDate }` }
    maxDate={ `${ this.maxDate }` }
    onInput={ this.onInput }
  />
</View>
 
```

```js
this.state = {
  minHour: 10,
  maxHour: 20,
  minDate: new Date().getTime(),
  maxDate: new Date(2019, 10, 1).getTime(),
  currentDate: new Date().getTime()
};

function onInput(event) {
  this.setData({
    currentDate: event.detail
  });
} 
```

### 选择日期（年月日）

`value` 为时间戳，通过传入 `formatter` 函数对选项文字进行处理。

```jsx
<View>
  <DatetimePicker
    type="date"
    value={ `${ this.currentDate }` }
    onInput={ this.onInput }
    minDate={ `${ this.minDate }` }
    formatter={ `${ this.formatter }` }
  />
</View>
 
```

```js
this.state = {
  currentDate: new Date().getTime(),
  minDate: new Date().getTime(),

  formatter(type, value) {
    if (type === 'year') {
      return `${value}年`;
    }

    if (type === 'month') {
      return `${value}月`;
    }

    return value;
  }

};

function onInput(event) {
  this.setData({
    currentDate: event.detail
  });
} 
```

### 选择日期（年月）

`value` 为时间戳。

```jsx
<View>
  <DatetimePicker
    type="yearMonth"
    value={ `${ this.currentDate }` }
    minDate={ `${ this.minDate }` }
    onInput={ this.onInput }
  />
</View>
 
```

```js
this.state = {
  currentDate: new Date().getTime(),
  minDate: new Date().getTime()
};

function onInput(event) {
  this.setData({
    currentDate: event.detail
  });
} 
```

### 选择时间

`value` 为字符串。

```jsx
<View>
  <DatetimePicker
    type="time"
    value={ `${ this.currentDate }` }
    minHour={ `${ this.minHour }` }
    maxHour={ `${ this.maxHour }` }
    onInput={ this.onInput }
  />
</View>
 
```

```js
this.state = {
  currentDate: '12:00',
  minHour: 10,
  maxHour: 20
};

function onInput(event) {
  this.setData({
    currentDate: event.detail
  });
} 
```

### 选项过滤器

通过传入 `filter` 函数，可以对选项数组进行过滤，实现自定义时间间隔。

```jsx
<View>
  <DatetimePicker
    type="time"
    value={ `${ this.currentDate }` }
    filter={ `${ this.filter }` }
  />
</View>
 
```

```js
this.state = {
  currentDate: '12:00',

  filter(type, options) {
    if (type === 'minute') {
      return options.filter(option => option % 5 === 0);
    }

    return options;
  }

}; 
```
### TS信息
```ts 
import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
import { PickerProps } from './picker'

type DatetimePickerEventsByValue = {
  detail: {
    value?: string | number
  }
}

export type DatetimePickerEventsByInstance = {
  detail: {
    datetimePicker: {
      columns: (string | number)[]
      setColumns: (columns: (string | number)[]) => (string | number)[]
      innerValue: Date
      updateColumnValue: (value: string) => Promise<string>
    }
  }
}

type DefinedExculdeNoMatch<TObject, T> = {
  [K in keyof TObject]: K extends T ? unknown : TObject[K]
}

export interface DatetimePickerProps
  extends DefinedExculdeNoMatch<
      PickerProps,
      'onInput' | 'onConfirm' | 'onChange'
    >,
    StandardProps {
  value?: string | number
  filter?: (type: string, values: (string | number)[]) => (number | string)[]
  type?: string
  showToolbar?: boolean
  formatter?: (type: string, value: string | number) => number | string
  minDate?: number | string
  maxDate?: number | string
  minHour?: number | string
  maxHour?: number | string
  minMinute?: number | string
  maxMinute?: number | string
  onInput?: (e: DatetimePickerEventsByValue) => void
  onChange?: (e: DatetimePickerEventsByInstance) => void
  onConfirm?: (e: DatetimePickerEventsByValue) => void
  onCancel?: () => void
}

declare const DatetimePicker: ComponentClass<DatetimePickerProps>

export { DatetimePicker }
```