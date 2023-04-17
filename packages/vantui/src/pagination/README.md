# Pagination 分页

### 介绍

当数据量较多时，采用分页的形式分隔长列表。

### 安装

```javascript
import { Pagination } from '@antmjs/vantui'
```

### 基础用法

通过 modelValue 来绑定当前页码时，组件为受控状态，分页显示取决于传入的 modelValue，一般搭配 onChange 使用。
不需要受控时，可通过 defaultCurrentPage 指定当前页码

```jsx
function Demo() {
  const [currentPage1, setCurrentPage1] = react.useState(1)
  const pageChange1 = (v) => {
    const c = v
    setCurrentPage1(c)
  }
  return (
    <Pagination
      modelValue={currentPage1}
      totalItems="25"
      itemsPerPage="5"
      onChange={pageChange1}
    />
  )
}
```

### 简单模式

将 mode 设置为 "simple" 来切换到简单模式，此时分页器不会展示具体的页码按钮。

```jsx
function Demo() {
  const [currentPage2, setCurrentPage2] = react.useState(1)
  const pageChange2 = (v) => {
    const c = v
    setCurrentPage2(c)
  }

  return (
    <Pagination
      modelValue={currentPage2}
      pageCount={12}
      mode="simple"
      onChange={pageChange2}
    />
  )
}
```

### 显示省略号

设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。

```jsx
function Demo() {
  const [currentPage3, setCurrentPage3] = react.useState(1)
  const pageChange3 = (v) => {
    const c = v
    setCurrentPage3(c)
  }

  return (
    <Pagination
      modelValue={currentPage3}
      totalItems="125"
      showPageSize="3"
      forceEllipses
      onChange={pageChange3}
    />
  )
}
```

### 自定义按钮

通过 pageNodeRender 传入自定义方法

```jsx
function Demo() {
  const [currentPage4, setCurrentPage4] = react.useState(1)
  const pageChange4 = (v) => {
    const c = v
    setCurrentPage4(c)
  }

  const pageNodeRender = (page) => {
    return <>{page.number == 3 ? 'hot' : page.text}</>
  }

  return (
    <Pagination
      modelValue={currentPage4}
      totalItems="500"
      showPageSize="5"
      onChange={pageChange4}
      pageNodeRender={pageNodeRender}
      prevText={<Icon name="arrow-left" />}
      nextText={<Icon name="arrow" />}
    />
  )
}
```

### PaginationProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/pagination.d.ts)

| 参数           | 说明                                                                  | 类型                                                                                                                                                                                                                            | 默认值                 | 必填    |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------- |
| defaultValue   | 默认页码                                                              | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                       | 1                      | `false` |
| modelValue     | 当前页码                                                              | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                       | 1                      | `true`  |
| mode           | -                                                                     | _&nbsp;&nbsp;"multi"&nbsp;&brvbar;&nbsp;"simple"<br/>_                                                                                                                                                                          | multi                  | `false` |
| prevText       | 自定义上一页按钮内容                                                  | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                    | 上一页                 | `false` |
| nextText       | 自定义下一页按钮内容                                                  | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                    | 下一页                 | `false` |
| pageCount      | 总页数                                                                | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                             | 传入或者根据数据量计算 | `true`  |
| totalItems     | 总记录数                                                              | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                             | 0                      | `false` |
| itemsPerPage   | 每页数量                                                              | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                             | 10                     | `false` |
| showPageSize   | 显示页码个数                                                          | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                             | 5                      | `false` |
| forceEllipses  | 是否展示省略号                                                        | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                      | false                  | `false` |
| pageNodeRender | 自定义渲染页码结构, 入参数为 number 页数、text 文本、 active 选中状态 | _&nbsp;&nbsp;(page:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;number:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;text:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;active:&nbsp;boolean<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;React.ReactNode<br/>_ | -                      | `false` |
| onChange       | 页码改变的时候触发                                                    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;currPage:&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                      | -                      | `true`  |
| updatecurrent  | -                                                                     | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;currPage:&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                      | -                      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                  | 默认值                        |
| ------------------------------------- | ----------------------------- |
| --pagination-color                    | ` @black;`                    |
| --pagination-font-size                | ` @font-size-md;`             |
| --pagination-item-border-color        | ` #e4e7eb;`                   |
| --pagination-active-background-color  | ` @primary-color;`            |
| --pagination-disable-color            | ` rgba(116, 116, 116, 0.31);` |
| --pagination-disable-background-color | ` #f7f8fa;`                   |
| --pagination-item-border-width        | ` 1px;`                       |
| --pagination-item-border-radius       | ` 2px;`                       |
| --pagination-prev-next-padding        | ` 0 11px;`                    |
