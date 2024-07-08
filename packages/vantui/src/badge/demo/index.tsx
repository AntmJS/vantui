/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import './index.less'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Badge 徽标" className="pages-card-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="带边框" padding>
          <Demo2 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
