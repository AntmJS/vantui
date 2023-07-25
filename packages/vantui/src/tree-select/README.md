# TreeSelect 分类选择

### 介绍

用于从一组相关联的数据集合中进行选择。

### 引入

在 Taro 文件中引入组件

```js
import { TreeSelect } from '@antmjs/vantui'
```

## 代码演示

### 单选模式

可以在任意位置上使用 vanTreeSelect 标签。传入对应的数据即可。此组件支持单选或多选，具体行为完全基于事件 clickItem 的实现逻辑如何为属性 activeId 赋值，当 activeId 为数组时即为多选状态。

```jsx
function Demo() {
  const { items } = COMMON
  const [state, changeState] = react.useState({
    mainActiveIndex: 0,
    activeId: null,
  })

  const setState = (newState) => {
    changeState({
      ...state,
      ...newState,
    })
  }

  const onClickNav = ({ detail = {} }) => {
    setState({
      mainActiveIndex: detail.index || 0,
    })
  }

  const onClickItem = ({ detail = {} }) => {
    const activeId = state.activeId === detail.id ? null : detail.id
    setState({
      activeId,
    })
  }

  return (
    <TreeSelect
      items={items}
      mainActiveIndex={state.mainActiveIndex}
      activeId={state.activeId}
      onClickNav={onClickNav}
      onClickItem={onClickItem}
    />
  )
}
```

传入数据结构

```js common
const items = [
  {
    text: '浙江',
    children: [
      {
        text: '杭州',
        id: 1,
      },
      {
        text: '温州',
        id: 2,
      },
      {
        text: '宁波',
        id: 3,
        disabled: true,
      },
      {
        text: '义乌',
        id: 4,
      },
    ],
  },
  {
    text: '江苏',
    children: [
      {
        text: '南京',
        id: 5,
      },
      {
        text: '无锡',
        id: 6,
      },
      {
        text: '徐州',
        id: 7,
      },
      {
        text: '苏州',
        id: 8,
      },
    ],
  },
  {
    text: '福建',
    children: [
      {
        text: '泉州',
        id: 9,
      },
      {
        text: '厦门',
        id: 10,
      },
    ],
  },
]
```

### 多选模式

```jsx
function Demo() {
  const { items } = COMMON
  const [state, changeState] = react.useState({
    mainActiveIndex: 0,
    activeIds: [],
  })

  const setState = (newState) => {
    changeState({
      ...state,
      ...newState,
    })
  }

  const onClickNav = ({ detail = {} }) => {
    setState({
      mainActiveIndex: detail.index || 0,
    })
  }

  const onClickItem = ({ detail = {} }) => {
    const { activeIds } = state
    if (activeIds.includes(detail.id)) {
      activeIds.splice(activeIds.indexOf(detail.id), 1)
    } else {
      activeIds.push(detail.id)
    }
    console.info(activeIds)
    setState({
      activeIds: [...activeIds],
    })
  }

  return (
    <TreeSelect
      items={items}
      mainActiveIndex={state.mainActiveIndex}
      activeId={state.activeIds}
      onClickNav={onClickNav}
      onClickItem={onClickItem}
      max={2}
    />
  )
}
```

### 自定义内容

```jsx
function Demo() {
  return (
    <TreeSelect
      items={[{ text: '自定义' }]}
      height="55vw"
      mainActiveIndex={0}
      renderContent={<Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />}
    />
  )
}
```

### TreeSelectProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tree-select.d.ts)

| 参数            | 说明 | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 默认值 | 必填    |
| --------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| items           | -    | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;text:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;badge?:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;dot?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;disabled?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;children?:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;}[]<br/>&nbsp;&nbsp;}[]<br/>_ | -      | `false` |
| activeId        | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string[]<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -      | `false` |
| mainActiveIndex | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| value           | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| height          | -    | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | -      | `false` |
| max             | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| selectedIcon    | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| onClickItem     | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;TouchEvent&nbsp;&&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                      | -      | `false` |
| onClickNav      | -    | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -      | `false` |
| renderContent   | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                   | 默认值                                              |
| -------------------------------------- | --------------------------------------------------- |
| --tree-select-font-size                | ` @font-size-md;`                                   |
| --tree-select-nav-background-color     | ` @background-color;`                               |
| --tree-select-content-background-color | ` @white;`                                          |
| --tree-select-nav-item-padding         | ` @padding-sm @padding-xs @padding-sm @padding-sm;` |
| --tree-select-item-height              | ` 88px;`                                            |
| --tree-select-item-active-color        | ` var(--primary-color);`                            |
| --tree-select-item-disabled-color      | ` @gray-5;`                                         |
