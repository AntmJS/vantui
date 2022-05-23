/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage title="Card 商品卡片" className="pages-card-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="高级用法" padding>
          <Demo2 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
