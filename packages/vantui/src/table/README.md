# Table 表格

### 介绍

简版的表格组件，支持自定义样式、自定义排序、服务端排序、固定列等功能

### 引入

在 Taro 文件中引入组件

```js
import { Table } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

```jsx
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    fixed: 'left',
    render: (val) => <View style={{ color: '#2196F3' }}>{val}</View>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    align: 'center',
    sort: true,
  },
  {
    title: '账户',
    dataIndex: 'account',
    sort: true,
  },
  {
    title: '住址',
    dataIndex: 'address',
  },
  {
    title: '爱好',
    dataIndex: 'hobby',
  },
]
function Demo() {
  const [state, changeState] = react.useState({
    dataSource: [],
    loading: false,
  })

  const setState = (stateNew) => {
    changeState({
      ...state,
      ...stateNew,
    })
  }

  react.useEffect(() => {
    setState({ loading: true })
    setTimeout(() => {
      setState({
        loading: false,
        dataSource: [
          {
            key: '1',
            name: '胡彦斌',
            age: 37,
            account: 20000,
            address: '西湖区湖底公园1号',
            hobby: '唱歌跳舞唱歌跳舞',
          },
          {
            key: '2',
            name: '吴亦凡',
            age: 32,
            account: 50000,
            address: '朝阳区派出所',
            hobby: '嗨嗨啊嗨嗨嗨啊嗨',
          },
          {
            key: '36',
            name: '王宝强',
            age: 31,
            account: 40000,
            address: '嘟嘟嘟嘟一号',
            width: 200,
            hobby: '休息♨️休息♨️休息♨️休息♨️休息♨️',
          },
        ],
      })
    }, 2000)
  }, [])

  const sortAction = (col) => {
    const { sortOrder, dataIndex } = col
    const { dataSource } = state
    if (sortOrder !== 'descend') {
      dataSource.sort(function (a, b) {
        return a[dataIndex] - b[dataIndex]
      })
    } else {
      dataSource.sort(function (a, b) {
        return b[dataIndex] - a[dataIndex]
      })
    }

    setState({
      dataSource,
    })
  }
  return (
    <Table
      columns={columns}
      dataSource={state.dataSource}
      sortChange={sortAction}
      loading={state.loading}
      scroll={{ x: 500 }}
    />
  )
}
```

### ITableProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/table.d.ts)

| 参数            | 说明                                       | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 默认值     | 必填    |
| --------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| columns         | 表格列配置描述                             | _&nbsp;&nbsp;IColumns[]<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                          | -          | `true`  |
| dataSource      | 数据源                                     | _&nbsp;&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;>[]<br/>_                                                                                                                                                                                                                                                                                                                                                                     | -          | `true`  |
| rowKey          | 表格行 key 的取值                          | _&nbsp;&nbsp;string&nbsp;//&nbsp;表格行&nbsp;key&nbsp;的取值<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                     | -          | `true`  |
| className       | 最外层包裹节点 css 类名                    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -          | `false` |
| style           | 最外层包裹节点内联样式                     | _&nbsp;&nbsp;React.CSSProperties<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -          | `false` |
| colStyle        | 单元格统一样式                             | _&nbsp;&nbsp;React.CSSProperties<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -          | `false` |
| colClassName    | 单元格统一类名                             | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -          | `false` |
| rowStyle        | 行统一样式                                 | _&nbsp;&nbsp;React.CSSProperties<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -          | `false` |
| rowClassName    | 表格行 css 类名                            | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -          | `false` |
| titleStyle      | 统一设置表头样式                           | _&nbsp;&nbsp;React.CSSProperties<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -          | `false` |
| titleClassName  | 统一设置表头单元格 css 类名                | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -          | `false` |
| loading         | 是否加载中                                 | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                             | false      | `false` |
| sortChange      | 排序变化                                   | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;columns:&nbsp;IColumns<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                                                                                            | () => void | `false` |
| placeholder     | 数据为空的时候的占位字符                   | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                     | '--'       | `false` |
| scroll          | 表格是否可滚动，也可以指定滚动区域的宽、高 | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;x?:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;y?:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;boolean<br/>&nbsp;&nbsp;}<br/>_ | -          | `false` |
| scrollViewProps | 传递给 ScrollView 的属性值                 | _&nbsp;&nbsp;ScrollViewProps<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          | `false` |

### IColumns [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/table.d.ts)

表格列配置描述
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| title | 标题 | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;JSX.Element<br/>_ |
| dataIndex | 列数据在数据项中对应的路径 | _&nbsp;&nbsp;string<br/>_ |
| key | React 组件 key，可忽略 | _&nbsp;&nbsp;string<br/>_ |
| align | 设置该列文本对齐方式 | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"left"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"right"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"center"<br/>_ |
| style | 该列单元格内联样式 | _&nbsp;&nbsp;React.CSSProperties<br/>_ |
| titleStyle | 该列表头内联样式 | _&nbsp;&nbsp;React.CSSProperties<br/>_ |
| className | 该列单元格 css 类名 | _&nbsp;&nbsp;string<br/>_ |
| titleClassName | 设置该列表头单元格 css 类名 | _&nbsp;&nbsp;string<br/>_ |
| render | 自定义渲染函数 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;text?:&nbsp;any,<br/>&nbsp;&nbsp;&nbsp;&nbsp;record?:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;>,<br/>&nbsp;&nbsp;&nbsp;&nbsp;index?:&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=><br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;JSX.Element<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>_ |
| width | 列宽，单位 px | _&nbsp;&nbsp;number<br/>_ |
| sort | 表头是否显示排序按钮 | _&nbsp;&nbsp;boolean<br/>_ |
| sortOrder | 排序的受控属性 | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"ascend"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"descend"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;undefined<br/>_ |
| fixed | 固定列 | _&nbsp;&nbsp;"left"&nbsp;&brvbar;&nbsp;"right"<br/>_ |
| expandable | 该列是否启用点击展开收起功能，默认 true | _&nbsp;&nbsp;boolean<br/>_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                  | 默认值     |
| --------------------- | ---------- |
| --table-primary-color | ` @black;` |
