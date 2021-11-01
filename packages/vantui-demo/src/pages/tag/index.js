import { Component } from 'react'

import { Tag } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    show: {
      success: true,
      primary: true,
    },
  }

  onClose = (event) => {
    this.setState({
      show: {
        ...this.state.show,
        [event.target.id]: false,
      },
    })
  }

  render() {
    const { show } = this.state
    return (
      <DemoPage title="Tag 标记">
        <>
          <DemoBlock title="基础用法" padding>
            <Tag className="demo-margin-right" type="primary">
              标签
            </Tag>
            <Tag className="demo-margin-right" type="success">
              标签
            </Tag>
            <Tag className="demo-margin-right" type="danger">
              标签
            </Tag>
            <Tag className="demo-margin-right" type="warning">
              标签
            </Tag>
          </DemoBlock>
          <DemoBlock title="圆角样式" padding>
            <Tag className="demo-margin-right" round type="primary">
              标签
            </Tag>
            <Tag className="demo-margin-right" round type="success">
              标签
            </Tag>
            <Tag className="demo-margin-right" round type="danger">
              标签
            </Tag>
            <Tag className="demo-margin-right" round type="warning">
              标签
            </Tag>
          </DemoBlock>
          <DemoBlock title="标记样式" padding>
            <Tag className="demo-margin-right" mark type="primary">
              标签
            </Tag>
            <Tag className="demo-margin-right" mark type="success">
              标签
            </Tag>
            <Tag className="demo-margin-right" mark type="danger">
              标签
            </Tag>
            <Tag className="demo-margin-right" mark type="warning">
              标签
            </Tag>
          </DemoBlock>
          <DemoBlock title="空心样式" padding>
            <Tag className="demo-margin-right" plain type="primary">
              标签
            </Tag>
            <Tag className="demo-margin-right" plain type="success">
              标签
            </Tag>
            <Tag className="demo-margin-right" plain type="danger">
              标签
            </Tag>
            <Tag className="demo-margin-right" plain type="warning">
              标签
            </Tag>
          </DemoBlock>
          <DemoBlock title="自定义颜色" padding>
            <Tag className="demo-margin-right" color="#f2826a">
              标签
            </Tag>
            <Tag className="demo-margin-right" color="#7232dd">
              标签
            </Tag>
            <Tag className="demo-margin-right" color="#7232dd" plain>
              标签
            </Tag>
            <Tag
              className="demo-margin-right"
              color="#ffe1e1"
              textColor="#ad0000"
            >
              标签
            </Tag>
          </DemoBlock>
          <DemoBlock title="标签大小" padding>
            <Tag className="demo-margin-right" type="danger">
              标签
            </Tag>
            <Tag className="demo-margin-right" type="danger" size="medium">
              标签
            </Tag>
            <Tag className="demo-margin-right" type="danger" size="large">
              标签
            </Tag>
          </DemoBlock>
          <DemoBlock title="可关闭标签" padding>
            {show.primary && (
              <Tag
                className="demo-margin-right"
                type="primary"
                size="medium"
                closeable
                id="primary"
                onClose={this.onClose}
              >
                标签
              </Tag>
            )}
            {show.success && (
              <Tag
                className="demo-margin-right"
                type="success"
                size="medium"
                closeable
                id="success"
                onClose={this.onClose}
              >
                标签
              </Tag>
            )}
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
