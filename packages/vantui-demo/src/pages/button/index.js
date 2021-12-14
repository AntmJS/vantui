import { Component } from 'react'
import { View } from '@tarojs/components'
import { Button } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage title="Button 按钮">
        <>
          <DemoBlock title="按钮类型" padding>
            <View className="row">
              <Button className="demo-margin-right">默认按钮</Button>
              <Button type="primary" className="demo-margin-right">
                主要按钮
              </Button>
              <Button type="info" className="demo-margin-right">
                信息按钮
              </Button>
            </View>
            <Button type="danger" className="demo-margin-right">
              危险按钮
            </Button>
            <Button type="warning">警告按钮</Button>
          </DemoBlock>
          <DemoBlock title="朴素按钮" padding>
            <Button type="primary" plain className="demo-margin-right">
              朴素按钮
            </Button>
            <Button type="info" plain>
              朴素按钮
            </Button>
          </DemoBlock>
          <DemoBlock title="细边框" padding>
            <Button type="primary" plain hairline className="demo-margin-right">
              细边框按钮
            </Button>
            <Button type="info" plain hairline>
              细边框按钮
            </Button>
          </DemoBlock>
          <DemoBlock title="禁用状态" padding>
            <Button type="primary" disabled className="demo-margin-right">
              禁用状态
            </Button>
            <Button type="info" disabled>
              禁用状态
            </Button>
          </DemoBlock>
          <DemoBlock title="加载状态" padding>
            <Button
              loading
              type="primary"
              className="demo-margin-right"
            ></Button>
            <Button
              loading
              type="primary"
              loadingType="spinner"
              className="demo-margin-right"
            ></Button>
            <Button loading type="info" loadingText="加载中..."></Button>
          </DemoBlock>
          <DemoBlock title="按钮形状" padding>
            <Button type="primary" square className="demo-margin-right">
              方形按钮
            </Button>
            <Button type="info" round>
              圆形按钮
            </Button>
          </DemoBlock>
          <DemoBlock title="图标按钮" padding>
            <Button
              type="primary"
              icon="star-o"
              className="demo-margin-right"
            ></Button>
            <Button type="primary" icon="star-o" className="demo-margin-right">
              按钮
            </Button>
            <Button
              plain
              type="primary"
              icon="https://antm-js.gitee.io/resource/antmjs-vantui.jpg"
            >
              按钮
            </Button>
          </DemoBlock>
          <DemoBlock title="按钮尺寸" padding>
            <Button
              type="primary"
              size="large"
              block
              className="demo-margin-bottom"
            >
              大号按钮
            </Button>
            <Button type="primary" className="demo-margin-right">
              普通按钮
            </Button>
            <Button type="primary" size="small" className="demo-margin-right">
              小型按钮
            </Button>
            <Button type="primary" size="mini">
              迷你按钮
            </Button>
          </DemoBlock>
          <DemoBlock title="块级元素" padding>
            <Button type="primary" className="demo-margin-bottom">
              普通按钮
            </Button>
            <Button type="primary" block>
              块级元素
            </Button>
          </DemoBlock>
          <DemoBlock title="自定义颜色" padding>
            <Button color="#7232dd" className="demo-margin-right">
              单色按钮
            </Button>
            <Button color="#7232dd" className="demo-margin-right" plain>
              单色按钮
            </Button>
            <Button color="linear-gradient(to right, #4bb0ff, #6149f6)">
              渐变色按钮
            </Button>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
