# DropdownMenu 下拉菜单

### 介绍

向下弹出的菜单列表。

### 引入

在 Taro 文件中引入组件

```js
import { DropdownMenu } from '@antmjs/vantui'
import { DropdownItem } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

```jsx
function Demo() {
  const [state, setState] = react.useState({
    option1: [
      {
        text: '全部商品',
        value: 0,
      },
      {
        text: '新款商品',
        value: 1,
      },
      {
        text: '活动商品',
        value: 2,
      },
    ],
    option2: [
      {
        text: '默认排序',
        value: 'a',
      },
      {
        text: '好评排序',
        value: 'b',
      },
      {
        text: '销量排序',
        value: 'c',
      },
    ],
    value1: 0,
    value2: 'a',
  })
  return (
    <View>
      <DropdownMenu>
        <DropdownItem value={state.value1} options={state.option1} />
        <DropdownItem value={state.value2} options={state.option2} />
      </DropdownMenu>
    </View>
  )
}
```

### 自定义菜单内容

```jsx
function Demo() {
  const it = react.useRef(null)
  const [state, setState] = react.useState({
    option1: [
      {
        text: '全部商品',
        value: 0,
      },
      {
        text: '新款商品',
        value: 1,
      },
    ],
    value1: 0,
    switch: false,
    result: '',
  })

  const changeState = react.useCallback(
    function (type, value) {
      setState({
        ...state,
        [type]: value,
      })
    },
    [state],
  )

  const onConfirm = react.useCallback(
    function () {
      it.current.toggle()
      changeState('result', state.switch ? '打开状态' : '关闭状态')
    },
    [it, changeState],
  )

  return (
    <DropdownMenu>
      <DropdownItem value={state.value1} options={state.option1} />
      <DropdownItem ref={it} title={state.result}>
        <Cell
          title="选择开关"
          renderRightIcon={
            <Switch
              size="24px"
              style="height: 26px"
              checked={state.switch}
              activeColor="#ee0a24"
              onChange={() => changeState('switch', !state.switch)}
            />
          }
        ></Cell>
        <View style="padding: 5px 16px;">
          <Button type="danger" block round onClick={onConfirm}>
            确认
          </Button>
        </View>
      </DropdownItem>
    </DropdownMenu>
  )
}
```

### 自定义选中状态颜色

```jsx
function Demo() {
  const [state, setState] = react.useState({
    option1: [
      {
        text: '全部商品',
        value: 0,
      },
      {
        text: '新款商品',
        value: 1,
      },
    ],
    option2: [
      {
        text: '默认排序',
        value: 'a',
      },
      {
        text: '好评排序',
        value: 'b',
      },
    ],
    value1: 0,
    value2: 'a',
  })
  return (
    <DropdownMenu activeColor="#1989fa">
      <DropdownItem value={state.value1} options={state.option1} />
      <DropdownItem value={state.value2} options={state.option2} />
    </DropdownMenu>
  )
}
```

### 向上展开

```jsx
function Demo() {
  const [state, setState] = react.useState({
    option1: [
      {
        text: '全部商品',
        value: 0,
      },
      {
        text: '新款商品',
        value: 1,
      },
    ],
    option2: [
      {
        text: '默认排序',
        value: 'a',
      },
      {
        text: '好评排序',
        value: 'b',
      },
    ],
    value1: 0,
    value2: 'a',
  })
  return (
    <DropdownMenu direction="up">
      <DropdownItem value={state.value1} options={state.option1} />
      <DropdownItem value={state.value2} options={state.option2} />
    </DropdownMenu>
  )
}
```

### DropdownMenuProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dropdown-menu.d.ts)

| 参数                | 说明                           | 类型                                              | 默认值 | 必填    |
| ------------------- | ------------------------------ | ------------------------------------------------- | ------ | ------- |
| activeColor         | 选中选项后颜色                 | _&nbsp;&nbsp;string<br/>_                         | -      | `false` |
| overlay             | 是否展示蒙层                   | _&nbsp;&nbsp;boolean<br/>_                        | -      | `false` |
| zIndex              | 弹出层 zIndex                  | _&nbsp;&nbsp;number<br/>_                         | -      | `false` |
| duration            | 弹出层执行时间                 | _&nbsp;&nbsp;number<br/>_                         | -      | `false` |
| direction           | 弹出层执行方向                 | _&nbsp;&nbsp;"down"&nbsp;&brvbar;&nbsp;"up"<br/>_ | -      | `false` |
| closeOnClickOverlay | 点击蒙层是否关闭弹出层         | _&nbsp;&nbsp;boolean<br/>_                        | -      | `false` |
| closeOnClickOutside | 是否在点击外部 menu 后关闭菜单 | _&nbsp;&nbsp;boolean<br/>_                        | -      | `false` |
| children            | 子元素,须为 DropdownMenuItem   | _&nbsp;&nbsp;React.ReactNode<br/>_                | -      | `true`  |

### DropdownItemProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dropdown-menu.d.ts)

| 参数       | 说明                 | 类型                                                                                                                                                                                                                   | 默认值 | 必填    |
| ---------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| value      | 对应菜单选项的值     | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                    | -      | `false` |
| title      | 未选择时候的按钮标题 | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                           | -      | `false` |
| disabled   | 是否禁用             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                             | -      | `false` |
| titleClass | 标题元素的 class     | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                              | -      | `false` |
| options    | 所有选项             | _&nbsp;&nbsp;Array<DropdownMenuOption><br/>_                                                                                                                                                                           | -      | `false` |
| popupStyle | 弹出层的样式         | _&nbsp;&nbsp;React.CSSProperties<br/>_                                                                                                                                                                                 | -      | `false` |
| onOpen     | 展开下拉项触发       | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                | -      | `false` |
| onOpened   | 展开下拉项完成时触发 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                | -      | `false` |
| onClose    | 关闭下拉项触发       | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                | -      | `false` |
| onClosed   | 展开下拉项完成触发   | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                | -      | `false` |
| onChange   | 点击选项触发         | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;value?:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| children   | 传入的子元素         | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;React.ReactNode<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;React.ReactNode[]<br/>_                                                                         | -      | `false` |

### 菜单下拉选项 DropdownMenuOption [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dropdown-menu.d.ts)

| 参数  | 说明         | 类型                                                |
| ----- | ------------ | --------------------------------------------------- |
| text  | 展示的 label | _&nbsp;&nbsp;ReactNode<br/>_                        |
| value | 对应的数值   | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ |
| icon  | 前缀图标     | _&nbsp;&nbsp;string<br/>_                           |

### 组件实例 [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dropdown-menu.d.ts)

通过 ref 获取到的方法如下
| 方法 | 说明 | 类型 |
| --- | --- | --- |
| toggle | 控制展开/收起菜单栏，传入参数 show 是否展开，options.immediate 是否不需要动画 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;show?:&nbsp;boolean,<br/>&nbsp;&nbsp;&nbsp;&nbsp;options?:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;immediate:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                      | 默认值                           |
| ----------------------------------------- | -------------------------------- |
| --dropdown-menu-height                    | ` 100px;`                        |
| --dropdown-menu-background-color          | ` @white;`                       |
| --dropdown-menu-title-font-size           | ` 30px;`                         |
| --dropdown-menu-title-text-color          | ` @text-color;`                  |
| --dropdown-menu-title-active-text-color   | ` var(--primary-color);`         |
| --dropdown-menu-title-disabled-text-color | ` @gray-6;`                      |
| --dropdown-menu-title-padding             | ` 0 @padding-xs;`                |
| --dropdown-menu-title-line-height         | ` 36px;`                         |
| --dropdown-menu-option-active-color       | ` var(--primary-color);`         |
| --dropdown-menu-box-shadow                | ` 0 4px 24px fade(@gray-7, 12);` |
