# DropdownMenu 下拉菜单

### 介绍

向下弹出的菜单列表。

### 引入

在 Taro 文件中引入组件

```js
import { DropdownMenu } from "@antmjs/vantui";
import { DropdownItem } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <DropdownMenu>
    <DropdownItem
      value={ this.state.value1 }
      options={ this.state.option1 }
    />
    <DropdownItem
      value={ this.state.value2 }
      options={ this.state.option2 }
    />
  </DropdownMenu>
</View>
 
```

```js
this.state = {
  option1: [{
    text: '全部商品',
    value: 0
  }, {
    text: '新款商品',
    value: 1
  }, {
    text: '活动商品',
    value: 2
  }],
  option2: [{
    text: '默认排序',
    value: 'a'
  }, {
    text: '好评排序',
    value: 'b'
  }, {
    text: '销量排序',
    value: 'c'
  }],
  value1: 0,
  value2: 'a'
}; 
```

### 自定义菜单内容

```jsx
<View>
  <DropdownMenu>
    <DropdownItem
      value={ this.state.value1 }
      options={ this.state.option1 }
    />
    <DropdownItem
      id="item"
      title={ this.state.itemTitle }
    >
      <Cell 
        title={ this.state.switchTitle1 }
        renderRightIcon={(
          <Switch
            size="24px"
            style="height: 26px"
            checked={ this.state.switch1 }
            activeColor="#ee0a24"
            onChange={ this.onSwitch1Change }
          />
        )}
      >
      </Cell>
      <Cell 
        title={ this.state.switchTitle2 }
        renderRightIcon={(
          <Switch
            size="24px"
            style="height: 26px"
            checked={ this.state.switch2 }
            activeColor="#ee0a24"
            onChange={ this.onSwitch2Change }
          />
        )}
      >
      </Cell>
      <View style="padding: 5px 16px;">
        <Button
          type="danger"
          block={ true }
          round={ true }
          onClick={ this.onConfirm }
        >
          确认
        </Button>
      </View>
    </DropdownItem>
  </DropdownMenu>
</View>
 
```

```js
this.state = {
  switchTitle1: '包邮',
  switchTitle2: '团购',
  itemTitle: '筛选',
  option1: [{
    text: '全部商品',
    value: 0
  }, {
    text: '新款商品',
    value: 1
  }, {
    text: '活动商品',
    value: 2
  }],
  value1: 0
};

function onConfirm() {
  this.selectComponent('#item').toggle();
}

function onSwitch1Change({
  detail
}) {
  this.setState({
    switch1: detail
  });
}

function onSwitch2Change({
  detail
}) {
  this.setState({
    switch2: detail
  });
} 
```

### 自定义选中状态颜色

```jsx
<View>
  <DropdownMenu activeColor="#1989fa">
    <DropdownItem
      value={ this.state.value1 }
      options={ this.state.option1 }
    />
    <DropdownItem
      value={ this.state.value2 }
      options={ this.state.option2 }
    />
  </DropdownMenu>
</View>
 
```

### 向上展开

```jsx
<View>
  <DropdownMenu direction="up">
    <DropdownItem
      value={ this.state.value1 }
      options={ this.state.option1 }
    />
    <DropdownItem
      value={ this.state.value2 }
      options={ this.state.option2 }
    />
  </DropdownMenu>
</View>
 
```

### 禁用菜单

```jsx
<View>
  <DropdownMenu>
    <DropdownItem
      value={ this.state.value1 }
      disabled={ true }
      options={ this.state.option1 }
    />
    <DropdownItem
      value={ this.state.value2 }
      disabled={ true }
      options={ this.state.option2 }
    />
  </DropdownMenu>
</View>
 
```
### DropdownMenuProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dropdown-menu.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| activeColor | 选中选项后颜色 | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| overlay | 是否展示蒙层 | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| zIndex | 弹出层zIndex | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| duration | 弹出层执行时间 | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| direction | 弹出层执行方向 | _&nbsp;&nbsp;"down"&nbsp;&brvbar;&nbsp;"up"<br/>_ | - | `false` |
| closeOnClickOverlay | 点击蒙层是否关闭弹出层 | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| closeOnClickOutside | 是否在点击外部 menu 后关闭菜单 | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| children | 子元素,须为DropdownMenuItem | _&nbsp;&nbsp;React.ReactNode<br/>_ | - | `true` |

### DropdownItemProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dropdown-menu.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| value | 对应菜单选项的值 | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| title | 未选择时候的按钮标题 | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| disabled | 是否禁用 | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| titleClass | 标题元素的class | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| options | 所有选项 | _&nbsp;&nbsp;Array<DropdownMenuOption><br/>_ | - | `true` |
| popupStyle | 弹出层的样式 | _&nbsp;&nbsp;React.CSSProperties<br/>_ | - | `false` |
| onOpen | 展开下拉项触发 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onOpened | 展开下拉项完成时触发 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClose | 关闭下拉项触发 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClosed | 展开下拉项完成触发 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onChange | 点击选项触发 | _&nbsp;&nbsp;(value?:&nbsp;number&nbsp;&brvbar;&nbsp;string)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| children | 传入的子元素 | _&nbsp;&nbsp;React.ReactNode&nbsp;&brvbar;&nbsp;React.ReactNode[]<br/>_ | - | `false` |

### 菜单下拉选项DropdownMenuOption [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dropdown-menu.d.ts)   

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| text | 展示的label | _&nbsp;&nbsp;string<br/>_ |
| value | 对应的数值 | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ |
| icon | 前缀图标 | _&nbsp;&nbsp;string<br/>_ |

### 组件实例 [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dropdown-menu.d.ts)   
通过ref获取到的方法如下
| 方法 | 说明 | 类型 |
| --- | --- | --- |
| toggle | 控制展开/收起菜单栏，传入参数show是否展开，options.immediate是否不需要动画 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;show?:&nbsp;boolean,<br/>&nbsp;&nbsp;&nbsp;&nbsp;options?:&nbsp;{&nbsp;immediate:&nbsp;boolean&nbsp;}<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |

