/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Table, ITableProps } from '@antmjs/vantui'

const columns: ITableProps['columns'] = [
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
export default function Demo() {
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
      rowKey="title"
    />
  )
}
