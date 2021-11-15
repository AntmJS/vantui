import { Component } from 'react'

import { Rate, Toast } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    value1: 3,
    value2: 3,
    value3: 3,
    value4: 2.5,
    value5: 4,
    value6: 3,
    value8: 2,
  }

  onChange = (event) => {
    Toast.show('当前值：' + event.detail)
    this.setState({
      value8: event.detail,
    })
  }

  render() {
    const { value1, value2, value3, value4, value5, value6, value8 } =
      this.state
    return (
      <DemoPage title="Rate 评分">
        <>
          <DemoBlock title="基础用法">
            <Rate className="rate-position" defaultValue={value1}></Rate>
          </DemoBlock>
          <DemoBlock title="自定义图标">
            <Rate
              className="rate-position"
              icon="like"
              voidIcon="like-o"
              defaultValue={value2}
            ></Rate>
          </DemoBlock>
          <DemoBlock title="自定义样式">
            <Rate
              className="rate-position"
              defaultValue={value3}
              size={25}
              color="#ffd21e"
              voidIcon="star"
              voidColor="#eee"
            ></Rate>
          </DemoBlock>
          <DemoBlock title="半星">
            <Rate
              className="rate-position"
              defaultValue={value4}
              allowHalf
              voidIcon="star"
              voidColor="#eee"
            ></Rate>
          </DemoBlock>
          <DemoBlock title="自定义数量">
            <Rate
              className="rate-position"
              defaultValue={value5}
              count={6}
            ></Rate>
          </DemoBlock>
          <DemoBlock title="禁用状态">
            <Rate
              className="rate-position"
              defaultValue={value6}
              disabled
            ></Rate>
          </DemoBlock>
          <DemoBlock title="只读状态">
            <Rate
              className="rate-position"
              defaultValue={value6}
              readonly
            ></Rate>
          </DemoBlock>
          <DemoBlock title="监听 change 事件">
            <Rate
              className="rate-position"
              value={value8}
              onChange={this.onChange}
            ></Rate>
          </DemoBlock>
          <Toast id="van-toast"></Toast>
        </>
      </DemoPage>
    )
  }
}
