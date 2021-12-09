# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与 [弹出层](#/popup) 组件配合使用。

### 引入

在 Taro 文件中引入组件

```js
import { Picker } from "@antmjs/vantui"; 
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
### PickerProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| valueKey | 选项为对象的时候，文字对应的 key | _&nbsp;&nbsp;string<br/>_ | text | `false` |
| toolbarPosition | 顶部栏位置，可选值为bottom | _&nbsp;&nbsp;string<br/>_ | top | `false` |
| defaultIndex | 单列选择器的默认选中项索引,多列选择器请参考下方的 Columns 配置 | _&nbsp;&nbsp;number<br/>_ | 0 | `false` |
| columns | 每一项数据，可为字符或者对象，对象默认展示值是valueKey设置的key | _&nbsp;&nbsp;any[]<br/>_ | [] | `false` |
| title | 顶部栏标题 | _&nbsp;&nbsp;string<br/>_ | '' | `false` |
| cancelButtonText | 取消按钮文字 | _&nbsp;&nbsp;string<br/>_ | 取消 | `false` |
| confirmButtonText | 确认按钮文字 | _&nbsp;&nbsp;string<br/>_ | 确认 | `false` |
| loading | 加载状态 | _&nbsp;&nbsp;boolean<br/>_ | false | `false` |
| itemHeight | 选项高度,对应单位PX | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | 48 | `false` |
| visibleItemCount | 可见的选项个数 | _&nbsp;&nbsp;number<br/>_ | 6 | `false` |
| onChange | 变化触发方法 | _&nbsp;&nbsp;(e:&nbsp;PickerChangeEvents)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onCancel | 取消触发方法 | _&nbsp;&nbsp;(e:&nbsp;PickerEvents)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onConfirm | 确认触发方法 | _&nbsp;&nbsp;(e:&nbsp;PickerEvents)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| showToolbar | 是否显示顶部栏 | _&nbsp;&nbsp;boolean<br/>_ | false | `false` |

### 事件 onConfirm 和 onCancel [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)   
继承了Taro的ITouchEvent类型
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| detail | 返回选项对应的值和选项对应的下标 | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;number&nbsp;&brvbar;&nbsp;number[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number&nbsp;&brvbar;&nbsp;number[]<br/>&nbsp;&nbsp;}<br/>_ |

### 触发事件 onChange [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)   
继承了Taro的ITouchEvent类型
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| detail | 返回选项对应的值、picker实例和多列返回当前第多少列、单列返回选项对应值 | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;number&nbsp;&brvbar;&nbsp;number[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;picker:&nbsp;IPickerInstance<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number<br/>&nbsp;&nbsp;}<br/>_ |

### 组件实例 [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/picker.d.ts)   
通过ref获取到的方法如下
| 方法 | 说明 | 类型 |
| --- | --- | --- |
| setColumnValues | 设置每一列的值 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number,<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:&nbsp;string[]<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<any><br/>_ |
| getColumnValues | 获取每一列的值 | _&nbsp;&nbsp;(index:&nbsp;number[])&nbsp;=>&nbsp;(number&nbsp;&brvbar;&nbsp;string)[]<br/>_ |
| setColumnValue | 设置某一列的值 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number,<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ |
| getColumnValue | 获取某一列的值 | _&nbsp;&nbsp;(index:&nbsp;number)&nbsp;=>&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ |
| columns | 每列的数据 | _&nbsp;&nbsp;any[]<br/>_ |
| getIndexes | 获取每一列展示的下标 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;number[]<br/>_ |
| setIndexes | 获取每一列展示的下标 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
| getValues | 每一列展示的下标 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ |
| confirm | 触发确认的方法 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |

