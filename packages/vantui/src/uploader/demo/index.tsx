/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Uploader 文件上传" className="pages-uploader-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="上传状态" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="限制上传数量" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="自定义上传样式" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="上传前校验" padding>
          <Demo5 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
