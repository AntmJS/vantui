# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 [弹出层](#/popup) 组件配合使用。

### 引入

在 Taro 文件中引入组件

```js
import { Picker } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Picker
    columns={ this.columns }
    onChange={ this.onChange }
  />
</View>
 
```

```js
import { toast } from 'vantui';
this.state = {
  columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
};

function onChange(event) {
  const {
    picker,
    value,
    index
  } = event.detail;
  toast(`当前值：${value}, 当前索引：${index}`);
} 
```

### 默认选中项

单列选择器可以直接通过`defaultIndex`属性设置初始选中项的索引值。

```jsx
<View>
  <Picker
    columns={ this.state.columns }
    defaultIndex={ 2 }
    onChange={ this.onChange }
  />
</View>
 
```

### 展示顶部栏

```jsx
<View>
  <Picker
    showToolbar={ true }
    title="标题"
    columns={ this.state.columns }
    onCancel={ this.onCancel }
    onConfirm={ this.onConfirm }
  />
</View>
 
```

```js
import { toast } from 'vantui';
this.state = {
  columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
};

function onConfirm(event) {
  const {
    picker,
    value,
    index
  } = event.detail;
  toast(`当前值：${value}, 当前索引：${index}`);
}

function onCancel() {
  toast('取消');
} 
```

### 多列联动

```jsx
<View>
  <Picker
    columns={ this.state.columns }
    onChange={ this.onChange }
  />
</View>
 
```

```js
const citys = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州']
};
this.state = {
  columns: [{
    values: Object.keys(citys),
    className: 'column1'
  }, {
    values: citys['浙江'],
    className: 'column2',
    defaultIndex: 2
  }]
};

function onChange(event) {
  const {
    picker,
    value,
    index
  } = event.detail;
  picker.setColumnValues(1, citys[value[0]]);
} 
```

### 禁用选项

选项可以为对象结构，通过设置 disabled 来禁用该选项。

```jsx
<View>
  <Picker columns={ this.state.columns } />
</View>
 
```

```js
this.state = {
  columns: [{
    text: '杭州',
    disabled: true
  }, {
    text: '宁波'
  }, {
    text: '温州'
  }]
}; 
```

### 加载状态

当 Picker 数据是通过异步获取时，可以通过 `loading` 属性显示加载提示。

```jsx
<View>
  <Picker
    columns={ this.state.columns }
    loading={ true }
  />
</View>
 
```
### TS信息
```ts 
import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export type PickerColumn = {
  values: string[]
  defaultIndex?: number
  className?: string
  children?: PickerColumn
}

interface PickerEvents {
  detail: {
    value: number | number[]
    index: number | number[]
  }
}

type PickerOptions = (string | PickerColumn)[]

export type PickerChangeEvents = {
  detail: {
    value: number | number[]
    picker: IPickerInstance
    index: number
  }
}

export type IPickerInstance = {
  setColumnValues: (
    index: number,
    options: PickerOptions,
    needReset: boolean,
  ) => Promise<any>
  getColumnValues: (index: number) => (number | string)[]
  setColumnValue: (index: number, value: number | string) => any
  getColumnValue: (index: number) => number | string
  columns: PickerColumn[]
  getIndexes: () => number[]
  setIndexes: () => void
  getValues: () => number | string
  confirm: () => void
}
export interface PickerProps extends StandardProps {
  valueKey?: string
  toolbarPosition?: string
  defaultIndex?: number
  columns?: any[]
  title?: string
  cancelButtonText?: string
  confirmButtonText?: string
  loading?: boolean
  itemHeight?: string | number
  itemWidth?: string | number
  visibleItemCount?: number
  onChange?: (e: PickerChangeEvents) => void
  onCancel?: (e: PickerEvents) => void
  onConfirm?: (e: PickerEvents) => void
  showToolbar?: boolean
}

declare const Picker: ComponentClass<PickerProps>

export { Picker }
```