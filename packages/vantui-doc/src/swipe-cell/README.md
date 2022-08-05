# SwipeCell 滑动单元格

### 介绍

可以左右滑动来展示操作按钮的单元格组件。

### 引入

在 Taro 文件中引入组件

```js
import { SwipeCell } from '@antmjs/vantui'
```

## 代码演示

### 基础用法 (不流畅待修复)

```jsx
function Demo() {
  return (
    <SwipeCell
      rightWidth={65}
      leftWidth={65}
      renderLeft={<Button>选择</Button>}
      renderRight={<Button>删除</Button>}
    >
      <CellGroup>
        <Cell title="单元格" value="内容" />
      </CellGroup>
    </SwipeCell>
  )
}
```

### 异步关闭

当开启`asyncClose`时， 通过绑定`close`事件，可以自定义两侧滑动内容点击时的关闭行为。

```jsx
function Demo() {
  const it = react.useRef()
  const closeAction = () => {
    setTimeout(() => {
      it.current.close()
    }, 2000)
  }

  return (
    <SwipeCell
      ref={it}
      rightWidth={65}
      leftWidth={65}
      asyncClose
      onClose={closeAction}
      renderLeft={<Button>选择</Button>}
      renderRight={<Button>删除</Button>}
    >
      <CellGroup>
        <Cell title="单元格" value="内容" />
      </CellGroup>
    </SwipeCell>
  )
}
```

### 主动打开

```jsx
function Demo() {
  const it = react.useRef()

  react.useEffect(() => {
    it.current.open()
  }, [])

  return (
    <SwipeCell
      ref={it}
      rightWidth={65}
      leftWidth={65}
      asyncClose
      renderLeft={<Button>选择</Button>}
      renderRight={<Button>删除</Button>}
    >
      <CellGroup>
        <Cell title="单元格" value="内容" />
      </CellGroup>
    </SwipeCell>
  )
}
```

### SwipeCellProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/swipe-cell.d.ts)

| 参数         | 说明 | 类型                                                                                                                                                                   | 默认值 | 必填    |
| ------------ | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| disabled     | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                             | -      | `false` |
| leftWidth    | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                              | -      | `false` |
| rightWidth   | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                              | -      | `false` |
| asyncClose   | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                             | -      | `false` |
| name         | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                    | -      | `false` |
| catchMove    | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                             | -      | `false` |
| wrapperStyle | -    | _&nbsp;&nbsp;React.CSSProperties<br/>_                                                                                                                                 | -      | `false` |
| onOpen       | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent&nbsp;&<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SwipeCellOpen<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_  | -      | `false` |
| onClick      | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent&nbsp;&<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SwipeCellClick<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onClose      | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent&nbsp;&<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SwipeCellClose<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| renderLeft   | -    | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                     | -      | `false` |
| renderRight  | -    | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                     | -      | `false` |
| children     | -    | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                     | -      | `false` |

### ISwiperCellInstance [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/swipe-cell.d.ts)

| 方法  | 说明 | 类型                                                                                                                                                                                                                      |
| ----- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| open  | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;position:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"left"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"right"<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| close | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                   |
