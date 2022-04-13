import { Component } from 'react'
import { View } from '@tarojs/components'
import { Table } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import './index.scss'

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

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    dataSource: [],
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
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
  }

  sortAction = (col) => {
    const { sortOrder, dataIndex } = col
    const { dataSource } = this.state
    if (sortOrder !== 'descend') {
      dataSource.sort(function (a, b) {
        return a[dataIndex] - b[dataIndex]
      })
    } else {
      dataSource.sort(function (a, b) {
        return b[dataIndex] - a[dataIndex]
      })
    }

    this.setState({
      dataSource: [...dataSource],
    })
  }

  render() {
    return (
      <DemoPage title="Table 表格">
        <View className="container">
          <DemoBlock title="基础用法" padding>
            <Table
              columns={columns}
              dataSource={this.state.dataSource}
              sortChange={this.sortAction}
              loading={this.state.loading}
            />
          </DemoBlock>
        </View>
      </DemoPage>
    )
  }
}
