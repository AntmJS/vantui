/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import Demo1 from './demo1'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage title="Table 表格" className="pages-table-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
