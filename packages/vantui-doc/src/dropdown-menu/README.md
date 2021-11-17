# DropdownMenu 下拉菜单

### 介绍

向下弹出的菜单列表。

### 引入

在 Taro 文件中引入组件

```js
import { DropdownMenu } from "vantui";
import { DropdownItem } from "vantui"; 
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
| activeColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| overlay | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| zIndex | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| duration | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| direction | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| closeOnClickOverlay | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| closeOnClickOutside | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| popupStyle | - | _&nbsp;&nbsp;React.CSSProperties<br/>_ | - | `false` |
| wrapperStyle | - | _&nbsp;&nbsp;React.CSSProperties<br/>_ | - | `false` |
| onOpen | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onOpened | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClose | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClosed | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| options | - | _&nbsp;&nbsp;Array<DropdownMenuOption><br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;React.ReactNode<br/>_ | - | `false` |
| value | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| disabled | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |

