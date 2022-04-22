import { Component } from 'react'
import { Pagination, Icon } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    curPage1: 1,
    curPage2: 1,
    curPage3: 1,
    curPage4: 1,
  }

  pChange1 = (curPage1) => {
    this.setState({
      curPage1,
    })
  }

  pChange2 = (curPage2) => {
    this.setState({
      curPage2,
    })
  }

  pChange3 = (curPage3) => {
    this.setState({
      curPage3,
    })
  }

  pChange4 = (curPage4) => {
    this.setState({
      curPage4,
    })
  }

  render() {
    const { curPage1, curPage2, curPage3, curPage4 } = this.state
    return (
      <DemoPage title="Pagination 分页">
        <>
          <DemoBlock title="基础用法" padding>
            <Pagination
              modelValue={curPage1}
              totalItems="25"
              itemsPerPage="5"
              onChange={this.pChange1}
            />
          </DemoBlock>
          <DemoBlock title="简单模式" padding>
            <Pagination
              modelValue={curPage2}
              pageCount={12}
              mode="simple"
              onChange={this.pChange2}
            />
          </DemoBlock>
          <DemoBlock title="显示省略号" padding>
            <Pagination
              modelValue={curPage3}
              pageCount={12}
              totalItems="125"
              showPageSize={4}
              forceEllipses
              onChange={this.pChange3}
            />
          </DemoBlock>
          <DemoBlock title="自定义按钮" padding>
            <Pagination
              modelValue={curPage4}
              totalItems="500"
              showPageSize="5"
              onChange={this.pChange4}
              pageNodeRender={(page) => {
                return <div>{page.number == 3 ? 'hot' : page.text}</div>
              }}
              prevText={<Icon name="arrow-left" />}
              nextText={<Icon name="arrow" />}
            />
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
