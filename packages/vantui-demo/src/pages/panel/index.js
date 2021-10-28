import { Component } from 'react'
import { View } from '@tarojs/components'
import { Panel, Button } from '@antmjs/vantui'
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
      <DemoPage title="Panel 面板">
        <>
          <DemoBlock title="基础用法">
            <Panel title="标题" desc="描述信息" status="状态">
              <View className="content">内容</View>
            </Panel>
          </DemoBlock>
          <DemoBlock title="高级用法">
            <Panel
              title="标题"
              desc="描述信息"
              status="状态"
              renderFooter={
                <>
                  <View className="footer">
                    <Button size="small" className="demo-margin-right">
                      按钮
                    </Button>
                    <Button size="small" type="danger">
                      按钮
                    </Button>
                  </View>
                </>
              }
            >
              <View className="content">内容</View>
            </Panel>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
