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
### PickerColumn [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)   

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| values | - | _&nbsp;&nbsp;string[]<br/>_ |
| defaultIndex | - | _&nbsp;&nbsp;number<br/>_ |
| className | - | _&nbsp;&nbsp;string<br/>_ |
| children | - | _&nbsp;&nbsp;PickerColumn<br/>_ |

### PickerChangeEvents [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)   

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| detail | - | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;number&nbsp;&brvbar;&nbsp;number[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;picker:&nbsp;IPickerInstance<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number<br/>&nbsp;&nbsp;}<br/>_ |

### IPickerInstance [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)   

| 方法 | 说明 | 类型 |
| --- | --- | --- |
| setColumnValues | - | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number,<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:&nbsp;PickerOptions,<br/>&nbsp;&nbsp;&nbsp;&nbsp;needReset:&nbsp;boolean<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<any><br/>_ |
| getColumnValues | - | _&nbsp;&nbsp;(index:&nbsp;number)&nbsp;=>&nbsp;(number&nbsp;&brvbar;&nbsp;string)[]<br/>_ |
| setColumnValue | - | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number,<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ |
| getColumnValue | - | _&nbsp;&nbsp;(index:&nbsp;number)&nbsp;=>&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ |
| columns | - | _&nbsp;&nbsp;PickerColumn[]<br/>_ |
| getIndexes | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;number[]<br/>_ |
| setIndexes | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
| getValues | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ |
| confirm | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |

### PickerProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| valueKey | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| toolbarPosition | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| defaultIndex | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| columns | - | _&nbsp;&nbsp;any[]<br/>_ | - | `false` |
| title | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| cancelButtonText | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| confirmButtonText | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| loading | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| itemHeight | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| itemWidth | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| visibleItemCount | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| onChange | - | _&nbsp;&nbsp;(e:&nbsp;PickerChangeEvents)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onCancel | - | _&nbsp;&nbsp;(e:&nbsp;PickerEvents)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onConfirm | - | _&nbsp;&nbsp;(e:&nbsp;PickerEvents)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| showToolbar | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |

