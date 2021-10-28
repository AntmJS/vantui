# Radio 单选框

### 介绍

在一组备选项中进行单选。

### 引入

在 Taro 文件中引入组件

```js
import { Radio } from "vantui";
import { RadioGroup } from "vantui"; 
```

## 代码演示

### 基础用法

通过`value`绑定值当前选中项的 name 。

```jsx
<View>
  <RadioGroup
    value={ `${ this.radio }` }
    onChange={ this.onChange }
  >
    <Radio name="1">
      单选框 1
    </Radio>
    <Radio name="2">
      单选框 2
    </Radio>
  </RadioGroup>
</View>
 
```

```js
this.state = {
  radio: '1'
};

function onChange(event) {
  this.setState({
    radio: event.detail
  });
} 
```

### 水平排列

将`direction`属性设置为`horizontal`后，单选框组会变成水平排列。

```jsx
<View>
  <RadioGroup
    value={ `${ this.radio }` }
    onChange={ this.onChange }
    direction="horizontal"
  >
    <Radio name="1">
      单选框 1
    </Radio>
    <Radio name="2">
      单选框 2
    </Radio>
  </RadioGroup>
</View>
 
```

### 禁用状态

通过`disabled`属性禁止选项切换，在`Radio`上设置`diabled`可以禁用单个选项。

```jsx
<View>
  <RadioGroup
    value={ `${ this.radio }` }
    disabled={ true }
    onChange={ this.onChange }
  >
    <Radio name="1">
      单选框 1
    </Radio>
    <Radio name="2">
      单选框 2
    </Radio>
  </RadioGroup>
</View>
 
```

### 自定义形状

将`shape`属性设置为`square`，单选框的形状会变成方形。

```jsx
<View>
  <RadioGroup
    value={ `${ this.radio }` }
    onChange={ this.onChange }
  >
    <Radio
      name="1"
      shape="square"
    >
      单选框 1
    </Radio>
    <Radio
      name="2"
      shape="square"
    >
      单选框 2
    </Radio>
  </RadioGroup>
</View>
 
```

### 自定义颜色

通过`checkedColor`属性设置选中状态的图标颜色。

```jsx
<View>
  <RadioGroup
    value={ `${ this.radio }` }
    onChange={ this.onChange }
  >
    <Radio
      name="1"
      checkedColor="#07c160"
    >
      单选框 1
    </Radio>
    <Radio
      name="2"
      checkedColor="#07c160"
    >
      单选框 2
    </Radio>
  </RadioGroup>
</View>
 
```

### 自定义大小

通过`iconSize`属性可以自定义图标的大小。

```jsx
<View>
  <RadioGroup
    value={ `${ this.radio }` }
    onChange={ this.onChange }
  >
    <Radio
      name="1"
      iconSize="24px"
    >
      单选框 1
    </Radio>
    <Radio
      name="2"
      iconSize="24px"
    >
      单选框 2
    </Radio>
  </RadioGroup>
</View>
 
```

### 自定义图标

```jsx
<View>
  <RadioGroup
    value={ `${ this.radio }` }
    onChange={ this.onChange }
  >
    <Radio
      value={ `${ this.radio }` }
      name="1"
      renderIcon={ (
          <Image
            src={ `${ radio === '1' ? icon.active : icon.normal }` }
          />

        ) }
    >
      自定义图标
    </Radio>
    <Radio
      value={ `${ this.radio }` }
      name="2"
      renderIcon={ (
          <Image
            src={ `${ radio === '2' ? icon.active : icon.normal }` }
          />

        ) }
    >
      自定义图标
    </Radio>
  </RadioGroup>
</View>
 
```

```js
this.state = {
  radio: true,
  icon: {
    normal: '//img.yzcdn.cn/iconNormal.png',
    active: '//img.yzcdn.cn/iconActive.png'
  }
};

function onChange(event) {
  this.setState({
    radio: event.detail
  });
} 
```

### 禁用文本点击

通过设置`labelDisabled`属性可以禁用单选框文本点击。

```jsx
<View>
  <RadioGroup
    value={ `${ this.radio }` }
    onChange={ this.onChange }
  >
    <Radio
      name="1"
      labelDisabled={ true }
    >
      单选框 1
    </Radio>
    <Radio
      name="2"
      labelDisabled={ true }
    >
      单选框 2
    </Radio>
  </RadioGroup>
</View>
 
```

### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

```jsx
<View>
  <RadioGroup
    value={ `${ this.radio }` }
    onChange={ this.onChange }
  >
    <CellGroup>
      <Cell
        title="单选框 1"
        clickable={ true }
        dataName="1"
        onClick={ this.onClick }
        renderRight={(
          <Radio
            name="1"
          />
        )}
      >
      </Cell>
      <Cell
        title="单选框 2"
        clickable={ true }
        dataName="2"
        onClick={ this.onClick }
        renderRight={(
          <Radio
            name="2"
          />
        )}
      >
      </Cell>
    </CellGroup>
  </RadioGroup>
</View>
 
```

```js
this.state = {
  radio: '1'
};

function onChange(event) {
  this.setState({
    radio: event.detail
  });
}

function onClick(event) {
  const {
    name
  } = event.currentTarget.dataset;
  this.setState({
    radio: name
  });
} 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface RadioProps extends StandardProps {
  name?: string
  value?: any
  disabled?: boolean
  checkedColor?: string
  labelPosition?: string
  labelDisabled?: boolean
  shape?: 'round' | 'square'
  iconSize?: number | string
  children?: ReactNode
  renderIcon?: ReactNode
  onChange?: (event: ITouchEvent) => any
}

declare const Radio: ComponentClass<RadioProps>

export { Radio }
```