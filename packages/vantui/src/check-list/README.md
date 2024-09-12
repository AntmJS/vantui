# CheckList 勾选列表

### 介绍

数据勾选列表，支持各种场景下的数据勾选

### 引入

在 Taro 文件中引入组件

```js
import { CheckList } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

::: $demo1 :::

### 异步搜索

`searchData`传入后就无需传入`data`

::: $demo2 :::

### 自定义渲染

`renderShow`根据选择的数据渲染，回调参数二为打开弹窗的方法

::: $demo3 :::

### 自定义样式和展示

::: $demo4 :::

### CheckListProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/check-list.d.ts)

| 参数              | 说明                                                 | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 默认值           | 必填    |
| ----------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | ------- |
| placeholder       | 选择提示和弹窗标题                                   | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                          | 请选择           | `false` |
| placeholderColor  | 选择提示的颜色                                       | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                          | -                | `false` |
| searchPlaceholder | 搜索过滤的提示                                       | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                          | 请输入搜索关键词 | `false` |
| data              | 数据列表                                             | _&nbsp;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;Record<string,&nbsp;any><br/>&nbsp;&nbsp;><br/>_                                                                                                                                                                                                                                                                                                                                                                   | []               | `false` |
| value             | 选择的当前值                                         | _&nbsp;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;><br/>_                                                                                                                                                                                                                                                                                                                                                           | []               | `false` |
| checkAll          | 是否有全选功能                                       | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                         | false            | `false` |
| onChange          | 回调方法, 参数一和其他表单统一，参数二选中的具体数据 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&nbsp;&nbsp;d:&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Record<string,&nbsp;any><br/>&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -                | `false` |
| limit             | 选择的数量，和 checkAll 互斥                         | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                          | infinity         | `false` |
| labelName         | 数据对象 label 的 key                                | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                          | name             | `false` |
| fieldName         | 数据对象值的 key                                     | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                          | id               | `false` |
| bodyHeight        | 勾选容器的高度                                       | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                          | 40vh             | `false` |
| renderShow        | 自定义渲染                                           | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Record<string,&nbsp;any><br/>&nbsp;&nbsp;&nbsp;&nbsp;>,<br/>&nbsp;&nbsp;&nbsp;&nbsp;setShow:&nbsp;()&nbsp;=>&nbsp;void<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;React.ReactNode<br/>_                                                                                                                                                                                   | -                | `false` |
| showArrowDown     | 是否展示下拉尖头                                     | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                         | false            | `false` |
| searchShow        | 是否展示搜索框                                       | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                         | true             | `false` |
| searchLoading     | 列表数据加载的 loading                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                         | false            | `false` |
| allowClear        | 是否可以清除                                         | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                         | true             | `false` |
| searchData        | 加载列表的方法, 此时不需要手动传入`data`             | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;keyWord:&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<<br/>&nbsp;&nbsp;&nbsp;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Record<string,&nbsp;any><br/>&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;><br/>_                                                                                                                                                                                                  | -                | `false` |
